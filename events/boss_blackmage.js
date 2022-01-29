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
 * Boss: BlackMage
 * 
 * @author Jackson
 */

let EXIT_MAP = 450012500;

let PHASE_1_DIR = 450013000;
let PHASE_1 = 450013100;

let PHASE_2_DIR = 450013200;
let PHASE_2 = 450013300;

let PHASE_3_DIR = 450013400;
let PHASE_3 = 450013500;

let PHASE_4_DIR = 450013600;
let PHASE_4 = 450013700;

let PHASE_Final = 450013750;

let DEATH_COUNT = 25;

let BOSS_LOG = "BlackMage";
let party;
let members;
let endTime;
let hard=0;
let start;
let end;
let totalTime=0;
function init(attachment) {
		start=new Date().getTime();
        [party,hard] = attachment;

        let map_1 = event.getMap(PHASE_1);
        let map_2 = event.getMap(PHASE_2);

        let map_3 = event.getMap(PHASE_3);
        let map_4 = event.getMap(PHASE_4);
        let map_final = event.getMap(PHASE_Final);
        map_1.showTimer(60 * 60);
        map_1.reset();
        map_2.reset();
        map_3.reset();
        map_4.reset();
        map_final.reset();

        party.changeMap(PHASE_1_DIR, 0);
        members = party.getLocalMembers();

        event.startTimer("kick", 60 * 60 * 1000);
        endTime = new Date().getTime() + 60 * 60 * 1000;

        event.setVariable("hard", hard);
        event.setVariable("members", members);
		if(hard==1){
			BOSS_LOG="BlackMage_hard";
		}else if(hard==2){
			BOSS_LOG="BlackMage_test";
		}else if(hard==3){
			BOSS_LOG="BlackMage_hard_test";
		}
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                setEventCount(BOSS_LOG,members[i].getAccountId(),3,1);
                setEventCount(BOSS_LOG+"today",members[i].getAccountId(),1,1);
                members[i].setDeathCount(DEATH_COUNT);
                members[i].modifyMoonlightValue(-100);
        }
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8880505://1阶段 创造&破坏骑士
                        event.getMap(PHASE_1).endFieldEvent();
                        event.setVariable("boss1", true);
                        event.startTimer("To_Stage_2", 4000);
                        break;
                case 8880502:
                        event.getMap(PHASE_2).endFieldEvent();
                        event.setVariable("boss2", true);
                        event.startTimer("To_Stage_3", 4000);
                        break;
                case 8880503:
                        event.getMap(PHASE_3).endFieldEvent();
                        event.setVariable("boss3", true);
						
                        event.startTimer("To_Stage_4", 4000);
                        break;
                case 8880504:
                        event.getMap(PHASE_4).endFieldEvent();
                        end=new Date().getTime();
                        totalTime=(end-start)/1000;
                        var bossname="黑魔法师";
                        for (let i = 0; i < members.length; i++) {
                                        if(hard==0){
                                        members[i].runScript("黑魔法师掉落");
                                }else if(hard==1){
                                        bossname="深渊黑魔法师";
                                        members[i].runScript("深渊黑魔法师掉落");
                                }else if(hard==2){
                                        bossname="黑魔法师";
                                }else if(hard==3){
                                        bossname="深渊黑魔法师";
                                }
                                var wq= members[i].getInventorySlot(-1,-11);
                                if(wq!=null){
                                        members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss,itemid,itemname,limitbreak,endtime) values(?,?,?,?,?,?,?,now())",members[i].getId(),members[i].getName(),totalTime,bossname,wq.getOnlyId(),wq.getItemName(),wq.getLimitBreak());
                                        event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器："+wq.getItemName()+"突破："+wq.getLimitBreak()/100000000+" 亿");
                                }else{
                                        members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss) values(?,?,?,?)",members[i].getId(),members[i].getName(),totalTime,bossname);
                                        event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器：空");
                                
                                }
                                
                        }
                        event.setVariable("boss4", true);
                        event.startTimer("To_Stage_Final", 4000);
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
                case PHASE_3:
                case PHASE_4:
                case PHASE_1_DIR:
                case PHASE_2_DIR:
                case PHASE_3_DIR:
                case PHASE_4_DIR:
                case PHASE_Final:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        player.showDeathCount();
                        break;
                default:
                        player.setActionBar(-1);
                        player.cancelSkillEffect(80002623);
                        removePlayer(player.getId(), false);
        }
}

//处理队员离开问题
function partyMemberDischarged(party, player) {
        if (party.getMembersCount()<2) {
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
                case "To_Stage_3":
                        warpToMap(PHASE_3_DIR, 0);
                        break;
                case "To_Stage_4":
                        warpToMap(PHASE_4_DIR, 0);
                        break;
                case "To_Stage_Final":
                        warpToMap(PHASE_Final, 0);
                        break;
        }
}

function deinit() {
        event.getMap(PHASE_1).endBMEvent();
        event.getMap(PHASE_2).endBMEvent();
        event.getMap(PHASE_3).endBMEvent();
        event.getMap(PHASE_4).endBMEvent();
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}

function setEventCount(eventName,accid, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = members[0].customSqlUpdate(sql, type, value, accid, eventName);

}