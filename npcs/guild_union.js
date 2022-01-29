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
 * Lenario: Manager of Guild Union (NPC 2010009)
 * Orbis: Guild Head Quarters<Hall of Fame> (Map 200000301)
 *
 * Creates, expands, and destroys alliances.
 *
 * @author Jackson (content from Vana r3171)
 */

let selection = npc.askMenu("您好！我叫#b蕾那丽#k。\r\n#b"
        + "#L0#请您告诉我家族联盟是什么？#l\r\n"
        + "#L1#要成立家族联盟的话应该怎么做？#l\r\n"
        + "#L2#我想成立家族联盟。#l\r\n"
        + "#L3#我想增加家族联盟的家族数量。#l\r\n"
        + "#L4#我想解散家族联盟。#l");

switch (selection) {
        case 0:
                npc.sayNext("多个家族结合在一起成立的组织被称为家族联盟。我负责管理家族联盟的有关事务。");
                break;
        case 1:
                npc.sayNext("想要成立家族联盟的话，必须有2名家族长组成组队。其中队长会成为家族联盟的盟主。");
                npc.sayNext("2名家族长组队之后，需要500万金币。这是创建家族联盟所必需的手续费。");
                npc.sayNext("另外还有一个！如果已经加入其他家族联盟的话，就无法建立新的家族联盟！");
                break;
        case 2:
                if (party == null) {
                        npc.sayNext("如果你想创建家族联盟，那么请由2名家族长组成组队。");
                } else if (player.getId() != party.getLeader()) {
                        npc.sayNext("如果你们想创建家族联盟，那么请让组队长与我交谈！");
                } else if (party.getMembersCount() != 1) {
                        npc.sayNext("必须要有2名家族长组成组队。");
                } else if (party.getMembersCount(200000301, 0, 275) != 2) {
                        npc.sayNext("请召集所有队员到这里。");
                } else {
                        let members = party.getLocalMembers();
                        let error = "";
                        for (let i = 0; i < members.length; i++) {
                                if (members[i].getGuildId() == 0) {
                                        error = "队伍成员中好像有人没有家族哟，没有家族是不能组成一个家族联盟的!";
                                } else if (members[i].getAllianceId() != 0) {
                                        error = "队伍成员中好像有人已经有家族联盟了!";
                                } else if (members[i].getGuildRank() != 1) {
                                        error = "队伍成员中好像有人不是家族族长，必须要是家族族长才能组成一个家族联盟!";
                                }
                        }
                        if (error.length != 0) {
                                npc.sayNext(error);
                        } else {
                                selection = npc.askYesNo("好的,你对家族联盟感兴趣吗?");
                                if (selection == 1) {
                                        let allianceName = npc.askText("请输入想要创建家族联盟的名称。(英文最多12字，中文最多6字)", "", 4, 12);
                                        selection = npc.askAccept("你确定使用 #b" + allianceName + "#k 做为家族联盟的名称吗？");
                                        if (selection == 1) {
                                                player.createAlliance(allianceName);
                                        }
                                }
                        }
                }
                break;
        case 3:
                if (player.getAllianceRank() != 1) {
                        npc.sayNext("只有家族联盟盟主可以增加家族数量。");
                } else {
                        if (player.getAllianceCapacity() >= 5) {
                                npc.sayNext("你的联盟最大家族数已满,最多可以容纳5个家族.");
                        } else {
                                npc.sayNext("当前家族联盟的最大家族数：#r" + player.getAllianceCapacity() + "#k。 再增加一个需要花费#r100万#k金币。");
                                selection = npc.askYesNo("你想使用#r100万#k金币，增加家族联盟的最大家族数吗？");
                                if (selection == 1) {
                                        if (!player.hasMesos(1000000)) {
                                                npc.sayNext("你好像没有足够的金币。");
                                        } else {
                                                player.increaseAllianceCapacity();
                                                player.loseMesos(1000000);
                                                npc.say("好了，家族联盟容纳数增加#r1#k。");
                                                //npc.say("好了，现在家族联盟最多可以容纳" + player.getAllianceCapacity() + "个家族。");
                                        }
                                } else if (selection == 0) {
                                        npc.sayNext("如果你想增加家族联盟的最大家族数，那么再来找我。");
                                }
                        }
                }
                break;
        case 4:
                if (player.getAllianceRank() != 1) {
                        npc.sayNext("只有家族联盟盟主可以解散家族联盟。");
                } else {
                        selection = npc.askAccept("你确定要解散你的家族联盟？");
                        if (selection == 1) {
                                player.disbandAlliance();
                                npc.say("家族联盟已经解散了!");
                        } else if (selection == 0) {
                                npc.sayNext("如果你想解散家族联盟，那么再来找我。");
                        }
                }
                break;
}