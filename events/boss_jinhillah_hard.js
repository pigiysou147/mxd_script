/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Boss: JinHill Lv.210
 * @author Jackson
 */

let EXIT_MAP = 450011990;

let FIELD_DIR = 450010200;
let FIELD = 450010700;


let BOSS_LOG = "JinHillah_Hard";
let party;
let members;
let endTime;
let hourglass;
let start;
let end;
let totalTime=0;
function init(attachment) {
		start=new Date().getTime();
        party = attachment;
        members = party.getLocalMembers();
        let field = event.getMap(FIELD);
        field.reset();
        field.resetJinHillah();

        party.changeMap(FIELD_DIR, "st00");
        field.showTimer(30 * 60);

        event.startTimer("kick", 30 * 60 * 1000);
        event.startTimer("cutDownCandle", 145000);
        field.resetHourglass(150000, 247, 1);
        hourglass = new Date().getTime() + 150000;

        endTime = new Date().getTime() + 30 * 60 * 1000;

        event.setVariable("members", members);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
				members[i].setDeathCount(5);
        }
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8880410:
						end=new Date().getTime();
						totalTime=(end-start)/1000;
						var bossname="觉醒希腊(困难)";
						for (let i = 0; i < members.length; i++) {
							var wq= members[i].getInventorySlot(-1,-11);
							if(wq!=null){
								members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss,itemid,itemname,limitbreak,endtime) values(?,?,?,?,?,?,?,now())",members[i].getId(),members[i].getName(),totalTime,bossname,wq.getOnlyId(),wq.getItemName(),wq.getLimitBreak());
								event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器："+wq.getItemName()+"突破："+wq.getLimitBreak()/100000000+" 亿");
							}else{
								members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss) values(?,?,?,?)",members[i].getId(),members[i].getName(),totalTime,bossname);
								event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器：空");
							
							}
						}
                        let field = event.getMap(FIELD);
                        field.clearMobs();
                        event.setVariable("boss", true);
                        break;
        }
}

function removePlayer(playerId, changeMap) {
        for (let i = 0; i < members.length; i++) {
                if (members[i].getId() == playerId) {
                        //dissociate event before changing map so playerChangedMap is
                        //not called and this method is not called again by the player
                        members[i].setEvent(null);
                        if (changeMap)
                                members[i].changeMap(EXIT_MAP, "st00");
                        //collapse the members array so we don't accidentally warp
                        //this member again if the leader leaves later.
                        members.splice(i, 1);
                        break;
                }
        }
        if (members.length <= 0) {
                event.destroyEvent();
        }
}

function playerDisconnected(player) {
        //changeMap is false since all PQ maps force return the player to the exit
        //map on his next login anyway, and we don't want to deal with sending
        //change map packets to a disconnected client
        removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
        //TODO: is it true that even when a non-leader clicks Nella, the entire
        //party is booted? and that GMS forces party out when only two members
        //remain alive and online?
        switch (destination.getId()) {
                case FIELD:
                        event.getMap(FIELD).resetHourglass((hourglass - new Date().getTime()), 247, 1);
                case FIELD_DIR:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);
        }
}

function partyMemberDischarged(party, player) {
        if (party.getLeader() == player.getId()) {
                kick();
        } else {
                removePlayer(player.getId(), true);
        }
}


function kick() {
        for (let i = 0; i < members.length; i++) {
                //dissociate event before changing map so playerChangedMap is not
                //called and this method is not called again by the player
                members[i].setEvent(null);
                members[i].changeMap(EXIT_MAP);
        }
        event.destroyEvent();
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        kick();
                        break;
                case "cutDownCandle":
                        event.getMap(FIELD).cutDownCandle();
                        event.startTimer("resetHourglass", 3000);
                        break;
                case "resetHourglass":
                        let field = event.getMap(FIELD);
                        field.resetHourglass(145000, 247, 1);
                        event.startTimer("cutDownCandle", 150000);
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}