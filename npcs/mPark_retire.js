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

let ret = npc.askYesNo("怎么？这就想出去了？还有很多有趣的事情呢？");
if (ret == 1) {
        npc.sayNext("真没耐心。如果你非要走的话，我也不会拦你。再见。");
        player.changeMap(951000000);
} else {
        npc.sayNext("呵呵，好吧，你继续玩吧。");
}