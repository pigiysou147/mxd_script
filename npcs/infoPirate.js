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



npc.sayNext("海盗拥有出色的敏捷性和力量，能够使用百发百中的手枪，或瞬间制敌的体术。火枪手能够利用不同属性的子弹发动有效进攻，或在搭乘战船后发动更加强大的攻击。拳手可通过变身发挥强大的体术。");
let mapIndex = npc.askYesNo("你要体验一下海盗职业吗？");
if (mapIndex == 1) {
        player.changeMap(1020500, 0);
}

