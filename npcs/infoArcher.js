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



npc.sayNext("弓箭手是敏捷性和力量兼备的职业。负责在战场后方进行远距离攻击。擅长利用地形进行狩猎。");
let mapIndex = npc.askYesNo("你要体验一下弓箭手职业吗？");
if (mapIndex == 1) {
        player.changeMap(1020300, 0);
}

