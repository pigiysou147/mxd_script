/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player */

/**
 * Platform Usher: Station Info (NPC 2012006)
 * Orbis: Orbis Ticketing Booth (Map 200000100)
 *
 * Teleports player from Orbis Tickering Booth to the proper platforms for the
 * rides to each destination.
 *
 */

let selection = npc.askMenu("在天空之城码头，有很多升降场。根据目的地的不同，必须找到对应的升降场才行。你想到哪个升降场去，乘坐去哪里的船呢？\r\n"
        + "#b#L0#乘坐开往金银岛的船的升降场#l\r\n"
        + "#b#L1#乘坐开往玩具城的船的升降场#l#k\r\n"
        + "#b#L2#乘坐开往神木村的船的升降场#l\r\n"
        + "#b#L3#乘坐开往武陵的船的升降场#l\r\n"
        + "#b#L4#乘坐开往阿里安特的船的升降场#l#k\r\n"
        + "#b#L5#乘坐开往圣地的船的升降场#l#k\r\n"
        + "#b#L6#乘坐开往埃德尔斯坦的船的升降场#l");

let str = "如果走错了地方，你可以通过传送口回到我这里来，所以请你放心。";
let map;
switch (selection) {
        case 0:
                map = 200000111;
                str += "你想移动到#b乘坐开往金银岛的船的升降场#k去吗？";
                break;
        case 1:
                map = 200000121;
                str += "你想移动到#b乘坐开往玩具城的船的升降场#k去吗？";
                break;
        case 2:
                map = 200000131;
                str += "你想移动到#b乘坐开往神木村的船的升降场#k去吗？";
                break;
        case 3:
                map = 200000141;
                str += "你想移动到#b乘坐开往武陵的船的升降场#k去吗？";
                break;
        case 4:
                map = 200000151;
                str += "你想移动到#b乘坐开往阿里安特的船的升降场#k去吗？";
                break;
        case 5:
                map = 200000161;
                str += "你想移动到#b乘坐开往圣地的船的升降场#k去吗？";
                break;
        case 6:
                map = 200000170;
                str += "你想移动到#b乘坐开往埃德尔斯坦的船的升降场#k去吗？";
                break;
                break;
}

selection = npc.askYesNo(str);
if (selection == 1) {
        player.changeMap(map, "west00");
} else if (selection == 0) {
        str = "请重新确认你要去的目的地，然后通过我移动到升降场。";
        if (map == 200000111 || map == 200000121 || map == 200000131 || map == 200000141 || map == 200000151) {
                str += "船的航班是固定的，必须看好时间！";
        }
        npc.sayNext(str);
}