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

/**
 *
 * Admits players into Ludi party quest.
 *
 * @author Jackson
 */

let minPlayers = 1;
let maxPlayers = 6;
let minLevel = 50;
let maxLevel = 300;
let maxenter = 50;
let PQLog = "party2";

let sel = npc.askMenu("#e<组队任务：次元裂缝>#n\r\n\r\n从这里往上到处都是很危险的东西，你不能继续往上走了。你想和队员们一起齐心协力，完成任务吗？如果想挑战的话，就通过#b所属组队的队长#k来和我说话。\r\n#b#L1#我想参加组队任务。#l\r\n#L2#我想寻找组队。#l\r\n#L4#我想领取#t1022073#。#l#l\r\n#L3#我想听听说明。#l\r\n#L5#我想知道今天的剩余挑战次数。#l");
switch (sel) {
        case 1:
                if (map.getId() == 910002000) {
                        npc.sayNext("如果你要挑战一下，我就会指引你到达塔的顶端……");
                        npc.rememberMap("RETURN_MAP");
                        player.changeMap(221023300, 0);
                } else if (party == null || player.getId() != party.getLeader()) {
                        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel + "~" + maxLevel + "范围,\r\n那么请让你的组队长和我对话吧!");
                } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!");
                } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
                        npc.say("你队员的等级要在" + minLevel + "~" + maxLevel + "范围!请确认!");
                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                        npc.say("好像你有队员在其他地方，请把队员都召集到这里！");
                } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
                        npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k今日次数已经达到上限了。");
                } else if (npc.makeEvent("party2", true, party) == null) {
                        npc.say("组队训练场任务里面已经有人了，请稍等..");
                }
                break;
        case 2:
                npc.say("请向周围的朋友们请求组队。使用寻找组队(快捷键O)功能，可以在任何时间任何地点寻找组队。敬请参考。");
                break;
        case 3:
                npc.say("#e<组队任务：次元裂缝>#n\r\n#b#m220000000##k出现了次元裂缝！为了阻止入侵的怪物，我们迫切需要冒险家们自发的帮助。请和可以信赖的同伴一起，拯救#m220000000#！.必须消灭怪物，解决各种难关，战胜#r#o9300012##k。\r\n  - #e等级#n：50级以上#r(推荐等级 50～69 )#k \r\n  - #e限制时间#n：20分钟\r\n  - #e参加人数#n：3～6人\r\n  - #e获得物品#n：#i1022073:# #t1022073# #b(每帮助5次时获得)#k                         各种消耗、其他、装备物品");
                break;
        case 4:
                npc.say("你每帮助我5次，我就会给你1个#i1022073:##b#t1022073##k。你只要再帮我#b5次#k，就可以获得#b#t1022073##k了。");
                break;
        case 5:
                let pqtry = maxenter - player.getPQLog(PQLog);
                npc.say("今天剩余挑战次数是#r" + pqtry + "次#k.");
                break;
}
