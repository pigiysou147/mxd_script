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
let maxPlayers = 6;
let minLevel = [140, 140];
let maxLevel = [300, 300];
let maxenter = [2, 2];
let BossName = ["阿卡伊勒"];
let PQLog = ["Akayrum"];
let event = ["boss_akayrum"];
let onlyOne = true;
let startmap = 272020110;

if (map.getId() == startmap) {
        let text = "";
        for (let i = 0; i < BossName.length; i++) {
                text += "\r\n#b#L" + i + "#申请进入#r<Boss：" + BossName[i] + ">#b#l#k";
        }
        let sel = npc.askMenu("#e<Boss：阿卡伊勒>#n\r\n伟大的勇士啊。做好迎战黑魔法师的邪恶军团长的准备了吗? \r\n" + text, 2144017);
        if (party == null || player.getId() != party.getLeader()) {
                npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", 2144017);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", 2144017);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.sayNext("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", 2144017);
        } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                npc.sayNext("好像有队员在其他地方，请把队员都召集到这里！", 2144017);
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNext("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。", 2144017);
        } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
                npc.sayNext("已经有队伍在进行了,请更换其他频道尝试。", 2144017);
        }
} else {
        let ret = npc.askYesNo("#e<Boss：阿卡伊勒>#n\r\n\r\n你想要现在就离开这里吗？", 2144017);
        if (ret == 1) {
                player.changeMap(272020110);
        }
}
