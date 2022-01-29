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
 * Logic for managing an instance map for Pirate's 2nd job advancement quest -
 * How to become a Brawler (Quest 2191) and How to Become a Gunslinger (Quest
 * 2192) - and logic for handling the time limit.
 *
 * @author Jackson
 */

let player, map;

function init(attachment) {
        let destination;
        [player, destination] = attachment;

        //create a new instance of the map so we don't have to deal with multiple
        //players in the channel trying to complete the same challenge.
        map = event.makeMap(destination);
        player.changeMap(map);

        map.showTimer(10 * 60);
        event.startTimer("kick", 10 * 60 * 1000);

        player.setEvent(event);
}

function playerDisconnected(player) {
        event.destroyEvent();
}

function playerChangedMap(player, destination) {
        event.destroyEvent();
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        player.changeMap(120000101); //let playerChangedMap handle destroy
                        break;
        }
}

function deinit() {
        player.setEvent(null);

        event.destroyMap(map);
}