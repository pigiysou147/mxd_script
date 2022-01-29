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

let data = player.getQuestRecordEx(23007, "vel01");
if ("1".equals(data)) {
        npc.sayNextNoEsc("哇。发生什么事了？玻璃破了…那个玻璃被震动震破了吗？");
        npc.sayNextSNoEsc("现在，没有什么能阻止你，对吧？让我们离开这里！", false);
        npc.sayNextSNoEsc("快点！我们走吧！", false);
        player.updateQuestRecordEx(23007, "vel01", "2");
        player.changeMap(931000020, 1);
}
