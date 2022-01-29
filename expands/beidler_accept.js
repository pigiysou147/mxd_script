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
let maxPlayers = 4;
let minLevel = 140;
let maxLevel = 300;
let maxenter = 3;
let PQLog = "Beidler";
let event = "boss_beidler";
let onlyOne = true;
var useTicket = 4033981;
let startmap = 863010000;
player.resetPQLog(PQLog);
if (map.getId() == startmap) {
        let sel = npc.askMenu("#e<通往贝勒德的路>#n\r\n\r\n#b#h0# \n\#k由于心树的愤怒而发生变异的#r贝勒德#k所在的地方。#r通关记录为普通模式时，在当天午夜初始化。#b\r\n\r\n#b#L0#通往贝勒德的路#l#k", 9390120);
        if (sel == 0) {
                if (party == null || player.getId() != party.getLeader()) {
                        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel + "~" + maxLevel + "范围,\r\n那么请让你的组队长和我对话吧!", 9390120);
                } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", 9390120);
                } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
                        npc.say("你队员的等级要在" + minLevel + "~" + maxLevel + "范围!请确认!", 9390120);
                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                        npc.say("好像有队员在其他地方，请把队员都召集到这里！", 9390120);
                } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
                        npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k次数已经达到上限了。", 9390120);
                } else if (!party.isAllMembersHasItem(useTicket, 1)) {
                        npc.say("你队员#r#e" + party.getNotHasItemMember(useTicket, 1) + "#n#k没有#i" + useTicket + "##t" + useTicket + "#,请确认!", 9390120);
                } else if (npc.makeEvent(event, onlyOne, party) == null) {
                        npc.say("已经有队伍在进行了,请更换其他频道尝试。", 9390120);
                }
        }
} else {
        let ret = npc.askYesNo("#e<Boss - 贝勒德>#n\r\n\r\n你想要现在就离开这里吗？", 9390120);
        if (ret == 1) {
                player.changeMap(startmap);
        }
}
