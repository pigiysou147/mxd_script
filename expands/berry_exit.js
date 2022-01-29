/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */

if (npc.askYesNo("主题副本：您是否要从凯梅尔兹共和国地区退场？", 9010000)) {
        let [map, spawnPoint] = npc.resetRememberedMap("UNITY_PORTAL");
        if (map == 999999999) { //warped to FM without having previous position saved
                map = 100000000;
                spawnPoint = 0;
        }
        player.changeMap(map, spawnPoint);
}
