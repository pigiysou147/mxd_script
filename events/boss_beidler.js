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
 * Boss: Beidler
 * @author Jackson
 */

let EXIT_MAP = 863000100;
let FIELD_1 = 863010100;
let FIELD_2 = 863010500;
let FIELD_3 = 863010420;
let FIELD_4 = 863010410;
let FIELD_5 = 863010400;
let FIELD_6 = 863010320;
let FIELD_7 = 863010310;
let FIELD_8 = 863010300;
let FIELD_9 = 863010230;

let FIELD_10 = 863010220;
let FIELD_11 = 863010210;
let FIELD_12 = 863010200;

let FIELD_LARM = 863010430;
let FIELD_RARM = 863010330;
let FIELD_HIP = 863010240;
let FIELD_HEAD = 863010600;
let BONUS_MAP = 863010700;
let BOSS_LOG = "Beidler";

let party;
let members;
let endTime;
let limitEnd;
let DEATH_COUNT = 3;

function init(attachment) {
        let timeMin = 30;
        party = attachment;
        event.getMap(FIELD_1).reset();
        event.getMap(FIELD_2).reset();
        event.getMap(FIELD_3).reset();
        event.getMap(FIELD_4).reset();
        event.getMap(FIELD_5).reset();
        event.getMap(FIELD_6).reset();
        event.getMap(FIELD_7).reset();
        event.getMap(FIELD_8).reset();
        event.getMap(FIELD_9).reset();
        event.getMap(FIELD_10).reset();
        event.getMap(FIELD_11).reset();
        event.getMap(FIELD_12).reset();

        event.getMap(BONUS_MAP).reset();

        let map_LRam = event.getMap(FIELD_LARM);
        map_LRam.reset();
        map_LRam.spawnMob(9390611, 85, 68);
        event.setVariable("LArm_Kill", "0");

        let map_RRam = event.getMap(FIELD_RARM);
        map_RRam.reset();
        map_RRam.spawnMob(9390610, 5, 68);
        event.setVariable("RArm_Kill", "0");

        let map_Hip = event.getMap(FIELD_HIP);
        map_Hip.reset();
        map_Hip.spawnMob(9390612, -4, 87);
        event.setVariable("Hip_Kill", "0");

        let map_Head = event.getMap(FIELD_HEAD);
        map_Head.reset();
        let mapInfo = {};
        event.setVariable("MAP_INFO", mapInfo);


        party.changeMap(FIELD_1, 0);
        members = party.getLocalMembers();
        let map = event.getMap(FIELD_1);
        map.showTimer(timeMin * 60);



        event.startTimer("kick", timeMin * 60 * 1000);
        endTime = new Date().getTime() + timeMin * 60 * 1000;

        event.setVariable("members", members);

        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
                members[i].loseItem(4033981, 1);
        }
}

function mobDied(mob) {
        let mapInfo = event.getVariable("MAP_INFO");
        let nMap = event.getMap(mob.getMapId());
        var core;
        switch (mob.getDataId()) {
                case 9390600:
                        nMap.showPortalEffect("phase2-1", 1);
                        nMap.showPortalEffect("phase2-2", 1);
                        event.setVariable("Head_1", true);
                        //Spawn Head 2
                        core = event.getVariable("Core");
                        let headPhase2 = nMap.makeMob(9390601);
                        if (!"1".equals(core)) {
                                headPhase2.changeBaseHp("4".equals(core) ? 8500000000 : "3".equals(core) ? 4500000000 : 700000000);
                                headPhase2.setForcedMobStat("4".equals(core) ? 220 : "3".equals(core) ? 195 : 175);
                        }
                        nMap.spawnMob(headPhase2, 5, 61);
                        break;
                case 9390601:
                        nMap.showPortalEffect("phase3", 1);
                        event.setVariable("Head_2", true);
                        //Spawn Head 3
                        core = event.getVariable("Core");
                        let headPhase3 = nMap.makeMob(9390602);
                        if (!"1".equals(core)) {
                                headPhase3.changeBaseHp("4".equals(core) ? 35000000000 : "3".equals(core) ? 2500000000 : 400000000);
                                headPhase3.setForcedMobStat("4".equals(core) ? 220 : "3".equals(core) ? 195 : 175);
                        }
                        nMap.spawnMob(headPhase3, 5, 61);
                        //Remaining 
                        limitEnd = new Date().getTime() + 100 * 1000;
                        event.startTimer("limit_end", 100 * 1000);
                        nMap.showGiantBossCountDown(100000, 100000);
                        break;
                case 9390602:
                        event.setVariable("Head_3", true);
                        event.stopTimer("limit_end");
                        mapInfo[mob.getMapId()] = "2";
                        nMap.screenEffect("monsterPark/clear");
                        core = event.getVariable("Core");
                        event.getMap(BONUS_MAP).setReactorState("rank" + core, 1, 0);
                        event.startTimer("clear", 3 * 1000);
                        break;
                case 9390610:
                        nMap.showPortalEffect("phase3", 1);
                        nMap.showPortalEffect("clear", 1);
                        nMap.screenEffect("monsterPark/clear");
                        event.setVariable("RArm_Kill", "1");
                        event.setVariable("Kill" + mob.getMapId(), true);
                        mapInfo[mob.getMapId()] = "2";
                        party.showGiantBossMap(mapInfo);
                        break;
                case 9390611:
                        nMap.showPortalEffect("phase3", 1);
                        nMap.showPortalEffect("clear", 1);
                        nMap.screenEffect("monsterPark/clear");
                        event.setVariable("LArm_Kill", "1");
                        event.setVariable("Kill" + mob.getMapId(), true);
                        mapInfo[mob.getMapId()] = "2";
                        party.showGiantBossMap(mapInfo);
                        break;
                case 9390612:
                        nMap.showPortalEffect("clear1", 2);
                        nMap.showPortalEffect("clear2", 1);
                        nMap.screenEffect("monsterPark/clear");
                        event.setVariable("Hip_Kill", "1");
                        event.setVariable("Kill" + mob.getMapId(), true);
                        mapInfo[mob.getMapId()] = "2";
                        party.showGiantBossMap(mapInfo);
                        break;
                default:
                        let mobsize = nMap.getEventMobCount();
                        if (mobsize <= 0) {
                                event.setVariable("Kill" + mob.getMapId(), true);
                                mapInfo[mob.getMapId()] = "2";
                                party.showGiantBossMap(mapInfo);

                                event.getMap(mob.getMapId()).screenEffect("monsterPark/clear");
                                if (mob.getMapId() == 863010410 || mob.getMapId() == 863010310) {
                                        event.getMap(mob.getMapId()).showPortalEffect("open", 1);
                                        event.getMap(mob.getMapId()).showPortalEffect("clear", 1);
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
        //TODO: is it true that even when a non-leader clicks Nella, the entire
        //party is booted? and that GMS forces party out when only two members
        //remain alive and online?
        switch (destination.getId()) {
                case FIELD_HEAD:
                        if (event.getVariable("Head") == null) {
                                event.setVariable("Head", true);
                                let headPhase1 = destination.makeMob(9390600);
                                let core = 3;
                                if ("1".equals(event.getVariable("LArm_Kill"))) {
                                        core--;
                                }
                                if ("1".equals(event.getVariable("RArm_Kill"))) {
                                        core--;
                                }
                                if ("1".equals(event.getVariable("Hip_Kill"))) {
                                        core--;
                                }
                                if (core > 0) {
                                        headPhase1.changeBaseHp(core == 3 ? 265000000000 : core == 2 ? 50000000000 : 10000000000);
                                }
                                event.setVariable("Core", String(parseInt(core + 1)));
                                destination.spawnMob(headPhase1, 5, 61);
                        }
                        if (event.getVariable("Head_2") != null) {
                                player.showGiantBossCountDown(100000, limitEnd - new Date().getTime());
                        }
                case FIELD_1 :
                case FIELD_2:
                case FIELD_3:
                case FIELD_4:
                case FIELD_5 :
                case FIELD_6:
                case FIELD_7:
                case FIELD_8 :
                case FIELD_9 :
                case FIELD_10 :
                case FIELD_11:
                case FIELD_12 :
                case FIELD_LARM :
                case FIELD_RARM :
                case FIELD_HIP :
                case FIELD_HEAD:
                case BONUS_MAP:
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
                        kick();
                        break;
                case "limit_end":
                        if (event.getVariable("Head_3") == null) {
                                removePlayer(party.getLeader(), true);
                        }
                        break;
                case "clear":
                        event.stopTimer("kick");
                        event.startTimer("kick", 5 * 60 * 1000);
                        endTime = new Date().getTime() + 5 * 60 * 1000;
                        for (let i = 0; i < members.length; i++) {
                                members[i].changeMap(BONUS_MAP);
                        }
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}
