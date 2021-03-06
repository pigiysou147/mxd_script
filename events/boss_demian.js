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
 * Boss: Demian
 * @author Jackson
 */

let EXIT_MAP = 105300303;

let PHASE_1_DIR = 350160260;
let PHASE_1 = 350160200;

let PHASE_2_DIR = 350160220;
let PHASE_2 = 350160240;

let DEATH_COUNT = 5;

let BOSS_LOG = "Demian";
let party;
let members;
let endTime;
let start;
let end;
let totalTime=0;
function init(attachment) {
		start=new Date().getTime();
        party = attachment;

        let map_1 = event.getMap(PHASE_1);
        let map_2 = event.getMap(PHASE_2);

        map_1.showTimer(30 * 60);
        map_1.reset();
        map_2.reset();
        

        party.changeMap(PHASE_1_DIR, 0);
        members = party.getLocalMembers();

        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;

        event.setVariable("members", members);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
                members[i].modifyMoonlightValue(-100);
        }
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8880110://1阶段 戴米安
                        event.setVariable("boss1", true);
                        event.startTimer("To_Stage_2", 4000);
                        break;
                case 8880111://2阶段 戴米安
                        end=new Date().getTime();
                        totalTime=(end-start)/1000;
                        var bossname="普通戴米安";
                        for (let i = 0; i < members.length; i++) {
                                members[i].runScript("戴米安掉落");
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
        switch (destination.getId()) {
                case PHASE_1:
                case PHASE_2:
                        player.openUI(1115);
                case PHASE_1_DIR:
                case PHASE_2_DIR:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        player.showDeathCount();
                        break;
                default:
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

function warpToMap(map, portal) {
        for (let i = 0; i < members.length; i++) {
                members[i].changeMap(map, portal);
        }
}


function timerExpired(key) {
        switch (key) {
                case "kick":
                        kick();
                        break;
                case "To_Stage_2":
                        warpToMap(PHASE_2_DIR, 0);
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}