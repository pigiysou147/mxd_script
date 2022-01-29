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

/* global npc, player */


let selection = npc.askYesNo("你想要从这里出去吗? 出去后需要重新再坐船，请确定?");
if (selection == 1) {
        let toMap;
        switch (map.getId()) {
                case 200000112:
                case 200000122:
                case 200000132:
                case 200000152:
                        toMap = 200000100;
                        break;
                case 104020111:
                        toMap = 104020110;
                        break;
                case 220000111:
                        toMap = 220000100;
                        break;
                case 240000111:
                        toMap = 240000100;
                        break;
                case 260000110:
                        toMap = 260000100;
                        break;
        }
        player.changeMap(toMap);
} else if (selection == 0) {
        npc.sayNext("那么请稍等下，船马上要出发了！");
}