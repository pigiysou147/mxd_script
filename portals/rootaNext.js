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
 * @author Jackson
 */


let eventName;
let key;

switch (map.getId()) {
        case 105200300:
                eventName = "boss_bloody";
                break;
        case 105200100:
                eventName = "boss_banban";
                break;

}

let event = portal.getEvent(eventName);
if (event != null && map.getEventMobCount() <= 0) {
        portal.playPortalSE();
        party.changeMap(map.getId() + 10, 1);
} else {
        portal.block();
}

