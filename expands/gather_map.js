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

let selMenu = new Array(
        Array("初级采集农场", 910001011, "(银色药草堆、紫色药草堆、银色矿脉、紫色矿脉)"),
        Array("中级采集农场", 910001012, "(淡蓝色药草堆、褐色药草堆、淡蓝色矿脉、褐色矿脉)"),
        Array("高级采集农场", 910001013, "(翠绿色药草堆、金光药草堆、翠绿色矿脉、金光矿脉)"),
        Array("专家采集农场", 910001014, "(海蓝色药草堆、红色药草堆、黑色药草堆、淡紫色药草堆、海蓝色矿脉、红色矿脉、黑色矿脉、淡紫色矿脉)")
        );
let flag = false;
if (player.getMakingSkillLevel(92000000) > 0 || player.getMakingSkillLevel(92010000) > 0) {
        let menu = "你想去哪里? \r\n\r\n";
        for (var i = 0; i < selMenu.length; i++) {
                menu += "#b#L" + i + "#" + selMenu[i][0] + "#k" + selMenu[i][2] + "#l\r\n";
        }
        let sel = npc.askMenu(menu, 9031000);
        player.changeMap(selMenu[sel][1]);
} else {
        npc.sayNext("只有学习采矿或药草采集的人才可以使用哦。", 9031000);
}
