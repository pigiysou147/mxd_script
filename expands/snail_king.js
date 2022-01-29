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


let sel = npc.askYesNo("我现在就把你送进去，请你把在船内制造骚乱的怪物消灭掉吧！", 10305);
if (sel == 1) {
        npc.makeEvent("snail_king", false, [player, 4000033]);
} else {
        npc.sayNext("你准备好要去消灭怪物的话，再和我说话吧。", 10305);
}
