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
let minLevel = [90, 90, 50];
let maxLevel = [300, 300, 300];
let maxenter = [2, 2, 2];
let BossName = ["扎昆：普通模式", "扎昆：进阶模式", "扎昆：简单模式"];
let PQLog = ["Zakum_Normal", "Zakum_Chaos", "Zakum_Easy"];
let event = ["boss_zakum", "boss_zakum_chaos", "boss_zakum_easy"];
let onlyOne = true;

let mode = map.getId() - 211042400;
var useTicket = mode == 2 ? 4001796 : 4001017;
let sel = npc.askMenu("#e<" + BossName[mode] + ">#n\r\n\r\n#b#h0# \n\#k扎昆复活了啊。再这样下去, 一旦它引起火山爆发的话, 冰峰雪域山脉将会整个变成地狱。\r\n#r(扎昆的祭坛的入场次数为#e每天" + maxenter[mode] + "次#n, 入场记录#e每天午夜0点#n将会初始化。)\r\n#b\r\n#L0#申请进入" + BossName[mode] + "副本。(队员会同时移动。)#l", 2030013);
if (sel == 0) {
        if (party == null || player.getId() != party.getLeader()) {
                npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[mode] + "~" + maxLevel[mode] + "范围,\r\n那么请让你的组队长和我对话吧!", 2030013);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", 2030013);
        } else if (party.getMembersCount(map.getId(), minLevel[mode], maxLevel[mode]) < minPlayers) {
                npc.say("你队员的等级要在" + minLevel[mode] + "~" + maxLevel[mode] + "范围!请确认!", 2030013);
        } else if (!party.isAllMembersHasItem(useTicket, 1)) {
                npc.say("你队员#r#e" + party.getNotHasItemMember(useTicket, 1) + "#n#k没有#i" + useTicket + "##t" + useTicket + "#,请确认!", 9390120);
        } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                npc.say("好像有队员在其他地方，请把队员都召集到这里！", 2030013);
        } else if (!party.isAllMembersAllowedPQ(PQLog[mode], maxenter[mode])) {
                npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog[mode], maxenter[mode]) + "#n#k次数已经达到上限了。", 2030013);
        } else if (npc.makeEvent(event[mode], onlyOne, party) == null) {
                npc.say("已经有队伍在进行了,请更换其他频道尝试。", 2030013);
        }
}
