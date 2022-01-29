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
 * Boss: VonLeon
 * @author Jackson
 */

let EXIT_MAP = 211060801;

let FIELD_1 = 211070104;
let FIELD_2 = 211070105;
let FIELD_REVIVE = 211070112;
let BOSS_LOG = "VonLeon_Hard";
let party;
let members;
let endTime;
let DEATH_COUNT = 3;

function init(attachment) {
        party = attachment;

        event.getMap(FIELD_1).reset();
        event.getMap(FIELD_2).reset();

        party.changeMap(FIELD_1, "st00");
        members = party.getLocalMembers();

        event.getMap(FIELD_1).showTimer(30 * 60);

        event.startTimer("kick", 30 * 60 * 1000);//设置定时处理
        endTime = new Date().getTime() + 30 * 60 * 1000;

        event.setVariable("members", members);

        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);//设置玩家副本
                members[i].addPQLog(BOSS_LOG);//记录副本次数
                members[i].setDeathCount(DEATH_COUNT);//初始化可死亡次数
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
                case FIELD_2:
                case FIELD_REVIVE:
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
function mobDied(mob) {
        for (let i = 0; i < members.length; i++) {
               members[i].addPQLog("新手狮子",1,999);
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
        }
}

function deinit() {
        let entId = event.getVariable("npc");
        if (entId != null) {
                event.getMap(FIELD_1).destroyTempNpc(entId);
        }
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}