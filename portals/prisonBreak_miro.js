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

let event = portal.getEvent("party_prison_break");
if (event != null) {
        if (map.getEventMobCount() <= 0) {
                var cleared = Math.random() > 0.9;
                if (cleared) {
                        party.changeMap(921160400, 0);
                } else {
                        player.changeMap(921160300 + ((Math.floor(Math.random() * 6) | 0) * 10), 0);
                }
        } else {
                portal.abortWarp();
                map.blowWeather(5120053, "请消灭守护门的警卫！");
        }
} else {
        portal.block();
}
