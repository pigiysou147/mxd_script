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

let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [175, 175];
let maxLevel = [300, 300];
let maxenter = [1, 1];
let BossName = ["闯关",];
let PQLog = ["闯关"];
let event = ["cg"];
let onlyOne = true;
let text = "";
for (let i = 0; i < BossName.length; i++) {
		text += "\r\n#b#L" + i + "#申请进入移动到#r<BOSS：" + BossName[i] + ">#b#l#k";
}
let sel = npc.askMenu("#e<个人闯关>#n\r\n\r\n#b#h0# \n\#k为了提升自己，可以通过秘境闯关来提升自己的整体实力?#b\r\n" + text, 3001021);
if (party == null || player.getId() != party.getLeader()) {
		npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", 3001021);
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
		npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", 3001021);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
		npc.say("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", 3001021);
} else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
		npc.say("好像有队员在其他地方，请把队员都召集到这里！", 3001021);
} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
		npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。", 3001021);
} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
	npc.say("已经有队伍在进行了,请更换其他频道尝试。", 3001021);
}

