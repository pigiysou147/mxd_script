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

npc.sayNext("我开玩笑的。你想要的是这东西吧？其实，我从一开始就打算给你了，快拿走吧。\r\n\r\n#b#i2435736:# #t2435736:# 1个");
if (player.canGainItem(2435736, 1)) {
        npc.sayS("见到了女神，集齐了3个神秘石。旁观者好像说他会重新联络我的…等等看他的消息吧。");
        npc.completeQuest();
} else {
        npc.sayNext("背包空间不足！请清理\r\n或者你已经获得了神秘石#i2435736#");
}