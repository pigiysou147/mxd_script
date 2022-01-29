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
 *
 * @author Jackson
 */

let EXIT_MAP = 865000001;
let player;
let map;
let endTime;

function init(attachment) {
        [player, mapId] = attachment;
        let port = player.getIntQuestRecordEx(17012, "port");
        let sailCount = player.getIntQuestRecordEx(17018, String(port));
        let baseCoin = player.getIntQuestRecordEx(17012, "base_coin");
        let income = player.getIntQuestRecordEx(17012, "base_income");
        map = event.makeMap(mapId);
        map.initSailEvent(player.getLevel(), port, sailCount, baseCoin, income);
        event.setVariable("count", 0);
        event.setVariable("port", port);
        if (!player.isQuestCompleted(17005) || !player.isQuestCompleted(17006) || !player.isQuestCompleted(17007)) {
                event.startTimer("tuto_sc", 10 * 1000);
        } else {
                map.startFieldEvent();
        }
        event.startTimer("kick", 60 * 60 * 1000);
        player.setDeathCount(1);
        endTime = new Date().getTime() + 60 * 60 * 1000;
        player.showTimer((endTime - new Date().getTime()) / 1000);

        player.changeMap(map);
        player.setEvent(event);
}

function playerDisconnected(player) {
        event.destroyEvent();
}

function playerChangedMap(player, destination) {
        if (map.getId() == destination.getId()) {
                player.showTimer((endTime - new Date().getTime()) / 1000);
        } else {
                player.setEvent(null);
                event.destroyEvent();
        }
}

function mobDied(mob) {
        switch (map.getId()) {
                case 865000100:
                case 865000200:
                case 865000300:
                case 865000400: {
                        if (!player.isQuestCompleted(17007) && mob.getDataId() == 9390823) {
                                player.updateQuestRecordEx(17007, "done");
                                event.startTimer("tuto_sc", 2 * 1000);
                        }
                        map.updateSailEventKill();
                        break;
                }
        }
}

function kick() {
        player.updateSailBoatInfo();
        player.setEvent(null);
        player.changeMap(EXIT_MAP);
        event.destroyEvent();
}

function timerExpired(key) {
        switch (key) {
                case "tuto_sc":
                        player.runScript("sail_tuto");
                        break;
                case "tuto_done":
                        if ("1".equals(player.getQuestRecordEx(17009, "step")) && !player.isQuestCompleted(17005)) {
                                player.startQuest(17005, 0);//Quest Name:[凯梅尔兹交易所]首次航行
                                player.updateQuestRecordEx(17932, "Near=1"); // Quest Name:Unknown
                                player.updateQuestRecordEx(17008, "T", "0");
                                player.updateQuestRecordEx(17008, "L", "1");
                                player.updateQuestRecordEx(17008, "E", "0");
                        }
                        if ("2".equals(player.getQuestRecordEx(17009, "step")) && !player.isQuestCompleted(17006)) {
                                player.startQuest(17006, 0);//Quest Name:[凯梅尔兹交易所]第二次航行
                                player.updateQuestRecordEx(17932, "Near=2"); // Quest Name:Unknown
                                player.updateQuestRecordEx(17011, "E", "0");
                                player.updateQuestRecordEx(17011, "M", "0");
                                player.updateQuestRecordEx(17011, "S", "1");
                        }
                        if ("3".equals(player.getQuestRecordEx(17009, "step")) && !player.isQuestCompleted(17007)) {
                                player.startQuest(17007, 0);//Quest Name:[凯梅尔兹交易所]第三次航行
                                player.updateQuestRecordEx(17011, "E", "0");
                                player.updateQuestRecordEx(17011, "M", "0");
                                player.updateQuestRecordEx(17011, "S", "1");
                        }
                        kick();
                        break;
                case "kick":
                        kick();
                        break;
                default:
                        break;
        }
}

function deinit() {
        player.setActionBar(-1);
        player.setEvent(null);
        player.setDeathCount(-1);
        map.endFieldEvent();
        event.destroyMap(map);

}