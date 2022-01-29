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

/* global portal, player */

/**
 *
 * @author Jackson
 */

let eventName;
let key;

switch (map.getId()) {
    case 240060000:
        key = "boss1";
        eventName = "boss_hontale";
        break;
    case 240060100:
        key = "boss2";
        eventName = "boss_hontale";
        break;
    case 240060001:
        key = "boss1";
        eventName = "boss_hontale_chaos";
        break;
    case 240060101:
        key = "boss2";
        eventName = "boss_hontale_chaos";
        break;
}

let event = portal.getEvent(eventName);
if (event != null && event.getVariable(key) != null && event.getVariable(key)) {
    portal.playPortalSE();
    party.changeMap(map.getId() + 100);
} else {
    portal.block();
}


