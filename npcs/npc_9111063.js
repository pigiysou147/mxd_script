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
let minLevel = [230];
let maxLevel = [300];
let maxenter = [2];
let BossName = ["火焰狼]"];
let PQLog = ["火焰狼"];
let event = ["火焰狼"];
let onlyOne = true;
let startmap = 800000000;
if (map.getId() == startmap) {
    let text = "";
    for (let i = 0; i < BossName.length; i++) {
        text += "\r\n#b#L" + i + "#申请进入移动到#r<BOSS：" + BossName[i] + ">#b#l#k";
    }
    let sel = npc.askMenu("#e<BOSS：火焰狼>#n\r\n\r\n#b#h0# ,你好！\n\r\n\r\n\#k#e备注1：每日可挑战2次\r\n备注2：等级：230-275?#b\r\n" + text, 3003124);
    if (party == null || player.getId() != party.getLeader()) {
        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", 3003124);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", 3003124);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount()) {
        npc.say("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", 3003124);
    } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次数已经达到上限了。", 3003124);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.say("已经有队伍在进行了,请更换其他频道尝试。", 3003124);
    }
} else {
    let ret = npc.askYesNo("#e<BOSS：火焰狼>#n\r\n\r\n你想要现在就离开这里吗？", 3003124);
    if (ret == 1) {
        player.changeMap(800000000);
    }
}
