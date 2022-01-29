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
 * Boss: Akayrum
 * @author Jackson
 */

let EXIT_MAP = 925020001;
let FIELD_1 = 925070100;
let party;
let members;
let endTime;
let DEATH_COUNT = 3;
let BOSS_LOG = "pq_dojang";
let map ;
function init(attachment) {
        party = attachment;
        event.getMap(FIELD_1).reset();
        map=event.getMap(FIELD_1);
        event.setVariable("stage","1");
        party.changeMap(FIELD_1, 0);
        members = party.getLocalMembers();
        event.getMap(FIELD_1).showTimer(30 * 60);
        
        for (var i = 1; i <= 63; i++) {
        	event.getMap(925070000 + (i * 100)).reset();
    	}
        
        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;

        event.setVariable("members", members);
		
		
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
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
        //change map packets to a disconnected client
        removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
       var check = false;
    
    for (var i = 1; i <= 63; i++) {
        var checkID = 925070000 + (i * 100);
        if (checkID == destination.getId()) {
            check = true;
			
            break;
        }
    }

    if (!check) {
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

function mobDied(mob) {
	var stage = parseInt(event.getVariable("stage"));
	var killcount=event.getVariable("killcount");
	killcount++;
	event.setVariable("killcount",killcount);
    
	map =event.getMap(925070000 + (stage * 100));
	if(killcount==event.getVariable(stage) || map.getEventMobCount()==0){
		event.setVariable("Floor_" + stage, "1");
		event.setVariable("killcount",0);
		
		map.soundEffect("Dojang/clear");
                map.screenEffect("dojang/end/clear");
		for (let i = 0; i < members.length; i++) {
              
                        members[i].dropMessage(1,"通关成功");
                        if(members[i].getPQLog("武陵"+stage)<1){

                                members[i].addPQLog("武陵"+stage);
                                if(stage<30){
                                        members[i].gainItem(4001620,12);
                                }else if(stage>=30 && stage<45){
                                        
                                        members[i].gainItem(4001620,20);
                                }else if(stage>=45 && stage<64){
                                        
                                        members[i].gainItem(4001620,30);
                                }
                        }else{
                                members[i].dropMessage(1,"本层奖励奖励已经领取过了");
                        }
                }
		
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
        kick();
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}