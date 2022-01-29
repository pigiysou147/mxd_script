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
 * Boss: Dusk 虚空之眼
 * @author Jackson
 */

let EXIT_MAP = 450009301;

let FIELD_1 = 450009400;

let DEATH_COUNT = 8;

let BOSS_LOG = "Dusk";
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

        party.changeMap(FIELD_1, "st00");
        map_1.showTimer(30 * 60);

        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;

        event.setVariable("members", members);
        event.startTimer("summon_obtacle", 4000);
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
                case 8644650:
                        end=new Date().getTime();
                        totalTime=(end-start)/1000;
                        var bossname="至暗魔晶";
                        for (let i = 0; i < members.length; i++) {
                                        members[i].runScript("魔晶掉落");
                                var wq= members[i].getInventorySlot(-1,-11);
                                if(wq!=null){
                                        members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss,itemid,itemname,limitbreak,endtime) values(?,?,?,?,?,?,?,now())",members[i].getId(),members[i].getName(),totalTime,bossname,wq.getOnlyId(),wq.getItemName(),wq.getLimitBreak());
                                        event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器："+wq.getItemName()+"突破："+wq.getLimitBreak()/100000000+" 亿");
                                }else{
                                        members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss) values(?,?,?,?)",members[i].getId(),members[i].getName(),totalTime,bossname);
                                        event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器：空");
                                
                                }
                        }
                        let map_1 = event.getMap(FIELD_1);
                        map_1.clearMobs();
                        event.setVariable("boss", true);
                        event.stopTimer("summon_obtacle");
                        //map_1.setMapTagedObjectSmoothVisible("die", false, 0, 0);
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
                        kick();
                        break;
                case "summon_obtacle":
                        event.startTimer("summon_obtacle", 4000);
                        let map_1 = event.getMap(FIELD_1);
                        map_1.createObtacleAtom(0, 5, 65, 65, -780, -158);
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