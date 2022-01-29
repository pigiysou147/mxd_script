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
if (player.isQuestActive(23005) && player.hasItem(4032783, 1)) {
        npc.sayNext("你把传单粘贴到了宣传栏.");
        player.setQuestData(23006, "1");
        player.loseItem(4032783, 1);
} else {
        npc.say("这是一个宣传栏. 当然你可以把广告贴在这里,但是这里被黑色之翼控制着.");
}