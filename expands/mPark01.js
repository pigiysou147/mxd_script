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

let maps = Array(952050000, 953030000);
let minLevel = Array(200, 200);
let maxLevel = Array(250, 250);
let minPlayers = 1;
let maxPlayers = 6;
let maxenter = 20;
let selStr = "你想进入哪个地方？\r\n#b(200级以上220级以下的玩家可以使用)\r\n#b";
for (let  i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "##m" + maps[i] + "# (" + minLevel[i] + " - " + maxLevel[i] + ")#l\r\n";
}

let sel = npc.askMenu(selStr, 9071004);
if (party == null || player.getId() != party.getLeader()) {
        npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", 9071004);
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", 9071004);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.sayNext("你队员的等级要在#r" + minLevel[sel] + "~" + maxLevel[sel] + "#k范围!请确认!", 9071004);
} else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
        npc.sayNext("好像有队员在其他地方，请把队员都召集到这里！", 9071004);
} else if (!party.isAllMembersAllowedPQ("mPark", maxenter)) {
        npc.sayNext("你队员#r#e" + party.getNotAllowedMember("mPark", maxenter) + "#n#k次数已经达到上限了。", 9071004);
} else if (npc.makeEvent("mPark", false, [party, maps[sel], minLevel[sel]]) == null) {
        npc.sayNext("发生错误，请联系管理员处理", 9071004);
}
