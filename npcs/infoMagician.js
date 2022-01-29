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



npc.sayNext("魔法师拥有华丽效果的属性魔法，并且还拥有可在组队狩猎时发挥重要作用的各种辅助魔法。此外，第2次转职后，习得的属性魔法可以给相反属性的敌人造成致命伤害。");
let mapIndex = npc.askYesNo("你要体验一下魔法师职业吗？");
if (mapIndex == 1) {
        player.changeMap(1020200, 0);
}

