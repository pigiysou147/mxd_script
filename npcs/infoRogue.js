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



npc.sayNext("飞侠是具备运气及一定程度的敏捷性和力量的职业。擅长在战场中突袭对手，或隐身等特殊技能。飞侠的机动力和回避率非常高。通过多样的技能，玩家能体验到操控飞侠的乐趣。");
let mapIndex = npc.askYesNo("你要体验一下飞侠职业吗？");
if (mapIndex == 1) {
        player.changeMap(1020400, 0);
}

