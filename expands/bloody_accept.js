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
let minLevel = [125, 0];
let maxLevel = [300, 300];
let maxenter = [1, 1];
let BossName = ["普通模式<血腥女王>", "进阶模式<血腥女王>"];
let PQLog = ["Bloody", "Bloody_CHAOS"];
let event = ["boss_bloody", "boss_bloody_chaos"];
let onlyOne = true;
let startmap = 105200000;
let useTicket = 4033611;

if (map.getId() == startmap) {
        let text = "";
        for (let i = 0; i < BossName.length; i++) {
                text += "\r\n#b#L" + i + "#使用#i" + useTicket + ":##t" + useTicket + "#，移动到#r" + BossName[i] + "#b#l#k";
        }
        let sel = npc.askMenu("#e<鲁塔比斯南侧庭院入口>#n\r\n\r\n#b#h0# \n\#k通往鲁塔比斯南侧封印的守护者#r血腥女王#k守卫的庭院的门。 #r完成记录将在晚12点初始化。#b\r\n" + text, 1064014);
        if (party == null || player.getId() != party.getLeader()) {
                npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", 1064014);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", 1064014);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.sayNext("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", 1064014);
        } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                npc.sayNext("好像有队员在其他地方，请把队员都召集到这里！", 1064014);
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNext("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。", 1064014);
        } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
                npc.sayNext("已经有队伍在进行了,请更换其他频道尝试。", 1064014);
        }
} else {
        let ret = npc.askYesNoS("#e<Boss：血腥女王>#n\r\n\r\n你想要现在就离开这里吗？");
        if (ret == 1) {
                player.changeMap(105200000);
        }
}
