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



let sel = npc.askMenu("#e<Boss： 麦格纳斯>#n\r\n\r\n#b#h0# \n\#k你想进入哪里?\r\n#b#L0#暴君模拟战斗[简单]#l#k\r\n#b#L1#赫里希安最上层入口#l#k", 3001023);
npc.rememberMap("RETURN_MAP");
if (sel == 0) {
        player.changeMap(401060399, 0);
} else {
        player.changeMap(401060000, 2);
}


