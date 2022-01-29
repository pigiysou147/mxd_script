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
let minLevel = 140;
let maxLevel = 300;
let maxenter = 1;
let BossName = "梦幻野兽演出";
let PQLog = "Animalshow";
let event = "boss_animalshow";
let onlyOne = true;
let startmap = 222130200;
if (map.getId() == startmap) {
        let ret = npc.askMenu("#e<Boss：梦幻野兽演出>#n\r\n\r\n你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……。\r\n#b\r\n#L0# <Boss：梦幻野兽演出> 进行入场申请。#l", 2192001);
        if (ret == 0) {
                if (party == null || player.getId() != party.getLeader()) {
                        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel + "~" + maxLevel + "范围,\r\n那么请让你的组队长和我对话吧!", 2192001);
                } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", 2192001);
                } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
                        npc.say("你队员的等级要在" + minLevel + "~" + maxLevel + "范围!请确认!", 2192001);
                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                        npc.say("好像有队员在其他地方，请把队员都召集到这里！", 2192001);
                } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
                        npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k次数已经达到上限了。", 2192001);
                } else if (npc.makeEvent(event, onlyOne, party) == null) {
                        npc.say("已经有队伍在进行了,请更换其他频道尝试。", 2192001);
                }
        }
} else {
        let ret = npc.askYesNo("#e<Boss：梦幻野兽演出>#n\r\n\r\n你想要现在就离开这里吗？", 2192001);
        if (ret == 1) {
                player.changeMap(startmap, 0);
        }
}
