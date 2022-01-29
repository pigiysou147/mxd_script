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


let text = "#e#n#b#h0# #k前方就是#b希纳斯#k的庭院了,那么你想干嘛???\r\n\r\n";//\r\n2、参加远征队必须有#b#t4032923##k才可以进行。\r\n";
text += "#L1##b前往#b希纳斯庭院#k#l\r\n";
let sel = npc.askMenu(text, 2143004);
if (sel == 1) {
        npc.rememberMap("RETURN_MAP");
        player.changeMap(271040000, 2);
}
