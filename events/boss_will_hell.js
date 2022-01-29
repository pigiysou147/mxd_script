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
 * Boss: Will
 * @author Jackson
 */

let EXIT_MAP = 450007240;

let PHASE_1_DIR = 450008100;
let PHASE_1 = 450008150;

let PHASE_2_DIR = 450008200;
let PHASE_2 = 450008250;

let PHASE_3_DIR = 450008300;
let PHASE_3 = 450008350;

let DEATH_COUNT = 8;

let BOSS_LOG = "Will";
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
        let map_3 = event.getMap(PHASE_3);

        map_1.showTimer(30 * 60);
        map_1.reset();
        map_2.reset();
        map_3.reset();

        party.changeMap(PHASE_1_DIR, 5);
        members = party.getLocalMembers();
        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;
        event.startTimer("ReadyCheckWillHp", 30000);


        event.setVariable("members", members);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
                members[i].modifyMoonlightValue(-100);
        }
        event.startTimer("MoonLight", 30000);
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8880340:
                        event.setVariable("boss1", true);
                        event.stopTimer("ReadyCheckWillHp");
                        event.stopTimer("CheckWillHp");
                        event.stopTimer("WillSpaceCollapse");
                        event.startTimer("To_Stage_2", 4000);
                        break;
                case 8880341://2阶段 威尔
                        event.setVariable("boss2", true);
                        event.startTimer("To_Stage_3", 4000);
                        event.startTimer("NarrowWeb", 1000);
                        break;
                case 8880342://3阶段威尔
						end=new Date().getTime();
						totalTime=(end-start)/1000;
						var bossname="威尔";
						for (let i = 0; i < members.length; i++) {
							members[i].runScript("威尔掉落");
							var wq= members[i].getInventorySlot(-1,-11);
							if(wq!=null){
								members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss,itemid,itemname,limitbreak,endtime) values(?,?,?,?,?,?,?,now())",members[i].getId(),members[i].getName(),totalTime,bossname,wq.getOnlyId(),wq.getItemName(),wq.getLimitBreak());
								event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器："+wq.getItemName()+"突破："+wq.getLimitBreak()/100000000+" 亿");
							}else{
								members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss) values(?,?,?,?)",members[i].getId(),members[i].getName(),totalTime,bossname);
								event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器：空");
							
							}
						}
                        event.stopTimer("NarrowWeb");
                        event.setVariable("boss3", true);
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
                case PHASE_1_DIR:
                case PHASE_2_DIR:
                case PHASE_3_DIR:
                case PHASE_1:
                case PHASE_2:
                case PHASE_3:
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

function warpToMap(map, portal) {
        for (let i = 0; i < members.length; i++) {
                members[i].changeMap(map, portal);
        }
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        event.stopTimer("NarrowWeb");
                        event.stopTimer("ReadyCheckWillHp");
                        event.stopTimer("CheckWillHp");
                        event.stopTimer("WillSpaceCollapse");
                        kick();
                        break;
                case "To_Stage_2":
                        warpToMap(PHASE_2_DIR, 0);
                        break;
                case "To_Stage_3":
                        warpToMap(PHASE_3_DIR, 0);
                        break;
                case "ReadyCheckWillHp":
                        event.getMap(PHASE_1).prepareCheckWillHp();
                        event.startTimer("CheckWillHp", 3000);
                        event.startTimer("ReadyCheckWillHp", 50000);
                        break;
                case "CheckWillHp":
                        event.getMap(PHASE_1).checkWillHp(false);//平衡血量并释放裂屏技能
                        //Todo:召唤出 8880305 凝视之眼 
                        //Todo:控制威尔不进行攻击 
                        //Todo:控制地图落物
                        event.startTimer("WillSpaceCollapse", 10000);
                        break;
                case "WillSpaceCollapse":
                        event.getMap(PHASE_1).checkWillHp(true);
                        break;
                case "NarrowWeb":
                        event.getMap(PHASE_3).addNarrowWeb();
                        event.startTimer("NarrowWeb", 1000);
                        break;
                case "MoonLight":
                        for (let i = 0; i < members.length; i++) {
                                let pMapId = members[i].getMapId();
                                if (pMapId == PHASE_1 || pMapId == PHASE_2 || pMapId == PHASE_3) {
                                        members[i].modifyMoonlightValue(3);
                                }
                        }
                        event.startTimer("MoonLight", 1000);
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}