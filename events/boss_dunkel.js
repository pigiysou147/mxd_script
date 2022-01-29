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
 * Boss: Dunkel 敦凯尔
 * @author Jackson
 */

let EXIT_MAP = 450012200;

let FIELD_1 = 450012210;

let DEATH_COUNT = 8;

let BOSS_LOG = "Dunkel";
let party;
let members;
let endTime;
let start;
let end;
let totalTime=0;
function init(attachment) {
		start=new Date().getTime();
        party = attachment;
        members = party.getLocalMembers();
        let map_1 = event.getMap(FIELD_1);
        map_1.reset();

        let boss = map_1.makeMob(8645009);
        boss.changeBaseHp(260000000000000);
		boss.setForcedMobStat(265);
        map_1.spawnMob(boss, 664, 28);

        party.changeMap(FIELD_1, "st00");
        map_1.showTimer(30 * 60);

        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;

        event.setVariable("members", members);
        event.startTimer("summon_obtacle", 4000);
        event.setVariable("summonmob", 0);
        event.startTimer("summon_mob", 1000);
        event.startTimer("Summon_Escort1", 60000);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
				setEventCount(BOSS_LOG,members[i].getAccountId(),3,1);
				setEventCount(BOSS_LOG+"today",members[i].getAccountId(),1,1);
                members[i].setDeathCount(DEATH_COUNT);
        }
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8645009:
                        let map_1 = event.getMap(FIELD_1);
                        map_1.clearMobs();
                        event.setVariable("boss", true);
                        event.stopTimer("summon_obtacle");
                        event.stopTimer("summon_mob");
                        event.stopTimer("Summon_Escort1");
                        event.stopTimer("Summon_Escort2");
                        event.stopTimer("Summon_Escort3");
                        event.stopTimer("Summon_Escort4");
                        event.stopTimer("Summon_Escort5");
						end=new Date().getTime();
						totalTime=(end-start)/1000;
						var bossname="敦凯尔";
						for (let i = 0; i < members.length; i++) {
							members[i].runScript("墩凯尔掉落");
							var wq= members[i].getInventorySlot(-1,-11);
							if(wq!=null){
								members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss,itemid,itemname,limitbreak,endtime) values(?,?,?,?,?,?,?,now())",members[i].getId(),members[i].getName(),totalTime,bossname,wq.getOnlyId(),wq.getItemName(),wq.getLimitBreak());
								event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器："+wq.getItemName()+"突破："+wq.getLimitBreak()/100000000+" 亿");
							}else{
								members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss) values(?,?,?,?)",members[i].getId(),members[i].getName(),totalTime,bossname);
								event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器：空");
							
							}
						}
                        break;
                case 8645003:
						
                        event.setVariable("summonmob", event.getVariable("summonmob") - 1);
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
                case FIELD_1:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        player.showDeathCount();
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
                        event.stopTimer("summon_obtacle");
                        event.stopTimer("summon_mob");
                        event.stopTimer("Summon_Escort1");
                        event.stopTimer("Summon_Escort2");
                        event.stopTimer("Summon_Escort3");
                        event.stopTimer("Summon_Escort4");
                        event.stopTimer("Summon_Escort5");
                        kick();
                        break;
                case "summon_obtacle":
                        event.startTimer("summon_obtacle", 4000);
                        let map_1 = event.getMap(FIELD_1);
                        map_1.createObtacleAtom(0, 5, 72, 74, -560, 28);
                        break;
                case "summon_mob":
                        let mobCount = event.getVariable("summonmob");
                        if (mobCount < 10) {
                                mobCount += 1;
                                event.setVariable("summonmob", mobCount);
                                event.getMap(FIELD_1).spawnMob(8645003, -642, 28);
                        }
                        event.startTimer("summon_mob", 5000);
                        break;
                case "Summon_Escort1":
                        let escort1 = event.getMap(FIELD_1).makeMob(8645004);
                        escort1.changeBaseHp(10000000000000);
                        event.getMap(FIELD_1).spawnMob(escort1, 664, 28);
                        event.startTimer("Summon_Escort2", 60000);
                        break;
                case "Summon_Escort2":
                        let escort2 = event.getMap(FIELD_1).makeMob(8645005);
                        escort2.changeBaseHp(10000000000000);
                        event.getMap(FIELD_1).spawnMob(escort2, 664, 28);
                        event.startTimer("Summon_Escort3", 60000);
                        break;
                case "Summon_Escort3":
                        let escort3 = event.getMap(FIELD_1).makeMob(8645006);
                        escort3.changeBaseHp(10000000000000);
                        event.getMap(FIELD_1).spawnMob(escort3, 664, 28);
                        event.startTimer("Summon_Escort4", 60000);
                        break;
                case "Summon_Escort4":
                        let escort4 = event.getMap(FIELD_1).makeMob(8645007);
                        escort4.changeBaseHp(10000000000000);
                        event.getMap(FIELD_1).spawnMob(escort4, 664, 28);
                        event.startTimer("Summon_Escort5", 60000);
                        break;
                case "Summon_Escort5":
                        let escort5 = event.getMap(FIELD_1).makeMob(8645008);
                        escort5.changeBaseHp(10000000000000);
                        event.getMap(FIELD_1).spawnMob(escort5, 664, 28);
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}


function setEventCount(eventName,accid, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = members[0].customSqlUpdate(sql, type, value, accid, eventName);

}