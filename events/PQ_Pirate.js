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
 * Logic for starting and exiting Kerning City party quest (AKA party1) using
 * timers and party member triggers.
 *
 * @author Jackson
 */

let EXIT_MAP = 925100700;

let party;
let members;
let endTime;

function init(attachment) {
        party = attachment;
        event.getMap(925100000).reset();
        let field = event.getMap(925100100);
        field.reset();
        field.spawnMob(9300114, 32, -435);

        party.changeMap(925100000);
        members = party.getLocalMembers();
		
        event.getMap(925100400).reset();
        
        event.getMap(925100500).reset();
        
        
        event.getMap(925100000).showTimer(30 * 60);
        event.getMap(925100000).showAchieveRate(0);
		
		
		let field1 = event.getMap(925100500);
        field1.reset();
        field1.spawnMob(9300114, 32, -435);
		
		
        event.startTimer("kick", 1200000);
        endTime = new Date().getTime() + 1200000;

        event.setVariable("members", members);
		event.setVariable("stage1", "0");
	    event.setVariable("stage2", "0");
	    event.setVariable("stage2a", "0");
	    event.setVariable("stage3a", "0");
	    event.setVariable("stage4", "0");
	    event.setVariable("stage5", "0");
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog("海盗船组队任务");
        }
}

function removePlayer(playerId, changeMap) {
        if (party.getLeader() == playerId) {
                //boot the entire party (changeMap parameter only applies to member
                //whose player ID matches playerId parameter, so those who are not the
                //leader are always booted)
                for (let i = 0; i < members.length; i++) {
                        //dissociate event before changing map so playerChangedMap is not
                        //called and this method is not called again by the player
                        members[i].setEvent(null);
                        if (changeMap || members[i].getId() != playerId)
                                members[i].changeMap(EXIT_MAP, "st00");
                }
                event.destroyEvent();
        } else {
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
                case 925100000:
                case 925100100:
                case 925100200:
                case 925100300:
                case 925100400:
                case 925100500:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);

        }
}
function mobDied(mob) {
        switch (mob.getDataId()) {
                case 9300106:
                case 9300119:
						
                        event.setVariable("stage5", "1");
                        
                        break;
        }
}
function partyMemberDischarged(party, player) {
        removePlayer(player.getId(), true);
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        removePlayer(party.getLeader(), true);
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++)
                members[i].setEvent(null);

}