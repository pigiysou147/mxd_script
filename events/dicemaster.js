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

function init(attachment) {
        [player, mapId] = attachment;

        map = event.makeMap(mapId);
        player.changeMap(map);
        map.showTimer(15 * 60);
        event.startTimer("kick", 15 * 60 * 1000);
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

function mobDied(mob) {

}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        player.changeMap(867121900, 0);
                        break;
        }
}

function deinit() {
        player.setEvent(null);
        event.destroyMap(map);
}