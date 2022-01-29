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
npc.sayNext("早饭吃了吗，小不点？你能帮妈妈做件事吗？\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n#i1003028# #t1003028# 1个  \r\n#i2022621# #t2022621# 5个 \r\n#i2022622# #t2022622# 5个");
if (player.getFreeSlots(1) >= 1 && player.getFreeSlots(2) >= 2) {
        npc.completeQuest();
        player.gainExp(60);
        player.gainItem(1003028, 1);
        player.gainItem(2022621, 5);
        player.gainItem(2022622, 5);
        let string = ["UI/tutorial/evan/4/0"];
        npc.sayImage(string);
} else {
        npc.say("先整理下背包栏吧！");
}



