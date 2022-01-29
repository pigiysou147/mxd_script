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


let event = npc.getEvent();
if (event != null) {
        npc.sayNext("哦……我刚发现了什么？这是唯一的出口了！让我像一个#r黑色之翼#k一样战斗吧！");
        let entId = event.getVariable("npc");
        map.destroyTempNpc(entId);
        map.spawnMob(9001031, -157, -23);
}


