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

let mapId;
let player, map;
let mFoothold = [];

function init(attachment) {
        player = attachment;
        let stage = parseInt(player.getQuestEntryData(34502));
        mapId = 993001000 + stage * 10;
        map = event.makeMap(mapId);
        player.changeMap(map);
        player.setEvent(event);
}

function playerDisconnected(player) {
        event.destroyEvent();
}

function playerChangedMap(player, destination) {
        if (destination.getId() != mapId) {
                event.destroyEvent();
        }
}

function timerExpired(key) {
        switch (key) {
                case "summon_obtacle":
                        event.startTimer("summon_obtacle", 3000);
                        map.createObtacleAtom(0, 10, 54, 54, -1000, 50);
                        break;
        }
}

function deinit() {
        player.setEvent(null);
        event.destroyMap(map);
}

