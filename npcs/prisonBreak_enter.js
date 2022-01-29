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
 * @author Jackson
 */

let minPlayers = 2;
let maxPlayers = 6;
let minLevel = 100;
let maxLevel = 300;
let maxenter = 50;
let PQLog = "prison_break";

let sel = npc.askMenu("#e<组队任务: 逃脱>#n\r\n\r\n   虽说想就这样立刻逃跑，但是……我无法拒绝他的嘱托。在这座城里，被关在空中监狱的人们正在寻找帮他们逃离监狱的人。 \r\n\r\n#b#L0#我要去帮助被关在城堡里的冒险家！#l\r\n#L1#请告诉我一些关于城堡监狱的信息。#l\r\n#L2#告诉我一些关于#t4001534#的信息。#l\r\n#L4##b我想要用#t4001534#兑换物品。#l\r\n#L3##b我想要知道今天剩余的挑战次数。#l");
switch (sel) {
        case 0:
                if (map.getId() == 910002000) {
                        npc.sayNext("你比看上去要勇敢啊。我会告诉你去空中监狱的路，跟我来吧。");
                        npc.rememberMap("RETURN_MAP");
                        player.changeMap(921160000, 0);
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
                } else if (npc.makeEvent("party_prison_break", true, party) == null) {
                        npc.say("组队训练场任务里面已经有人了，请稍等..");
                }
                break;
        case 1:
                npc.sayNext("这座城里有一个隐藏着的塔。有很多人被关在塔内的空中监狱中。我得救出他们…… \r\n - #e等级#n : 120 以上#r( 推荐等级 : 120 ~ 200 )#k \r\n - #e限定时间#n : 20分钟\r\n - #e参加人员#n : 3~6名\r\n - #e获得道具#n :\r\n#i1132094:# #t1132094#\r\n#i1132095:# #t1132095#\r\n#i1132096:# #t1132096#\r\n#i1132097:# #t1132097#\r\n#i1132098:# #t1132098#");
                npc.sayNext("如果你进入监狱的话，你必须得记住以下几点。\r\n1. 得躲开障碍物，逃出那座塔。 \r\n2. 得消灭地图里所有的警卫。\r\n3. 得逃出为了防止别人接近而设置的迷宫。\r\n4. 得消灭所有守门的警卫。\r\n5. 得通过通往空中监狱的最后障碍物。\r\n6. 得消灭警卫，找到钥匙，打开监狱门。\r\n7. 得找到教导官阿尼，让被囚禁的人们重新获得自由。");
                break;
        case 2:
                npc.say("#r#t4001534##k就在隐藏的塔中的看守身上。搜集#b15个#k交给我，我会送你一份小礼物。搜集15个钥匙，意味着你为囚禁在城里的人们提供了帮助。\r\n#i1132094:# #b#t1132094#, \r\n#i1132095:# #b#t1132095#,\r\n#i1132096:# #b#t1132096#, \r\n#i1132097:# #b#t1132097#, \r\n#i1132098:# #b#t1132098##k");
                break;
        case 3:
                let pqtry = maxenter - player.getPQLog(PQLog);
                npc.say("今天剩余挑战次数是#r" + pqtry + "次#k.");
                break;
        case 4:
                let selection = npc.askMenu("感谢你为囚禁在城里的人们提供了帮助。作为报答，请选一个吧(需要#b15个#k#r#t4001534##k)？#b\r\n#L0##i1132094:##t1132094##l#b\r\n#L1##i1132095:##t1132095##l#b\r\n#L2##i1132096:##t1132096##l\r\n#L3##i1132097:##t1132097##l#b\r\n#L4##i1132098:##t1132098##l");
                let itemId = 1132094 + selection;
                if (player.hasItem(4001534, 15)) {
                        if (player.canGainItem(itemId, 1)) {
                                player.gainItem(itemId, 1);
                                player.loseItem(4001534, 15);
                                npc.say("请收好#b#t" + itemId + "##k");
                        } else {
                                npc.say("请整理你的背包");
                        }
                } else {
                        npc.sayNext("要想获得#b#t" + itemId + "##k的话，需要#b" + 15 + "个#t4001534##k。你快去搜集吧。消灭塔中的看守，就可以弄到。");
                }
                break;
}
