/*
 * AuroMS MapleStory server emulator written in Java
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

/* global npc, player */

let selection;

if (map.getId() == 951000000) {
        let [returnMap, spawnPoint] = npc.getRememberedMap("UNITY_PORTAL");
        selection = npc.askYesNo("你好。怪物公园客车竭诚为大家提供最好的服务。你想回到原来的村里去吗？");
        if (selection == 1) {
                npc.sayNext("那么坐好了，我们马上出发！");
                player.changeMap(returnMap, spawnPoint);
                npc.resetRememberedMap("UNITY_PORTAL");
        } else if (selection == 1) {
                npc.sayNext("那么等你考虑好了再来吧！");
        }
} else {
        selection = npc.askYesNo("亲爱的顾客，你想到充满了欢乐的休彼德蔓的怪物公园去吗？");
        if (selection == 1) {
                npc.sayNext("那么坐好了，我们马上出发！");
                npc.rememberMap("UNITY_PORTAL");
                player.changeMap(951000000);
        } else {
                npc.sayNext("那么等你考虑好了再来吧！");
        }

}