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
let maxPlayers = 3;
let minLevel = [160];
let maxLevel = [300];
let maxenter = [2];
let BossName = ["强化钻机"];
let PQLog = ["NLC"];
let event = ["boss_nlc"];
let onlyOne = true;
let startmap = 703020000;

if (map.getId() == startmap) {
        let text = "";
        for (let i = 0; i < BossName.length; i++) {
                text += "\r\n#b#L" + i + "#破坏" + BossName[i] + "（组队 1~3人组队才能进入 等级" + minLevel[i] + "以上）#l#k";
        }
        let sel = npc.askMenu("这个传送口有很强烈的钻探机器波，可能会是一场血战，要进入吗？" + text, 9310137);
        if (party == null || player.getId() != party.getLeader()) {
                npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", 9310137);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", 9310137);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.sayNext("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", 9310137);
        } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                npc.sayNext("好像有队员在其他地方，请把队员都召集到这里！", 9310137);
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNext("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。", 9310137);
        } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
                npc.sayNext("已经有队伍在进行了,请更换其他频道尝试。", 9310137);
        }
} else {
        let ret = npc.askYesNo("#e<Boss：钻机>#n\r\n\r\n你想要现在就离开这里吗？", 9310137);
        if (ret == 1) {
                player.changeMap(703020000);
        }
}
