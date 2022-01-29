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
let mapIds;
let player;
let stage;
let maps = [];

function init(attachment) {
        [player, mapIds] = attachment;
        let i = 0;
        stage = 0;
        for (let idx in mapIds) {
                let mapId = parseInt(mapIds[idx]);
                maps[i] = event.makeMap(mapId);
                i++;
        }
        event.setVariable("count", 0);
        event.setVariable("MAPS", maps);
        player.changeMap(maps[stage]);
        player.setEvent(event);
}

function playerDisconnected(player) {
        event.destroyEvent();
}

function playerChangedMap(player, destination) {
        let flag = false;
        for (let idx in mapIds) {
                if (mapIds[idx] == destination.getId()) {
                        flag = true;
                }
        }
        if (!flag) {
                player.setEvent(null);
                event.destroyEvent();
        }
}

function mobDied(mob) {
        let map = maps[stage];
        switch (map.getId()) {
                case 865090001: {
                        break;
                }
        }
}

function timerExpired(key) {
        switch (key) {
                default:
                        break;
        }
}

function deinit() {
        player.setEvent(null);
        for (let idx in maps) {
                event.destroyMap(maps[idx]);
        }
}