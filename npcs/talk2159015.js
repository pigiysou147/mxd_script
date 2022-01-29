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


if ("1".equals(player.getQuestRecordEx(23999, "exp3"))) {
        npc.sayNext("嘿嘿...");
} else {
        npc.sayNext("噢。你找到了我。哇，你真的很擅长这个游戏!");
        player.gainExp(3);
        player.updateQuestRecordEx(23999, "exp3", "1");
}
