/*
 * Auroms MapleStory server emulator written in Java
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

/* global player, npc, party */

/**
 * NPC 2010007
 * Map 200000301
 *
 * Creates, expands, and destroys guilds.
 *
 * @author Jackson 
 */

if (player.getGuildId() == 0) {
        npc.sayNext("你……是因为对家族感兴趣，才会来找我的吗？");

        let selection = npc.askMenu("你想要干什么呢？快告诉我吧。\r\n\r\n#b" +
                "#L0#请告诉我家族是什么#l\r\n" +
                "#L1#怎么才能创建家族呢？#l\r\n" +
                "#L2#我想创建家族#l\r\n" +
                "#L3#我想了解有关家族系统的详细说明#l");

        switch (selection) {
                case 0:
                        npc.sayNext("家族……你可以把它理解成一个小的组织。是拥有相同理想的人为了同一个目的而聚集在一起成立的组织。 但是家族是经过家族总部的正式登记，是经过认可的组织。");
                        break;
                case 1:
                        npc.sayNext("要想创建家族，至少必须达到100级。");
                        npc.sayNext("要想创建家族，你需要总共1人。自己创建一个队伍，组队长应该来跟我说话。请注意，组队长将成为家族族长。");
                        npc.sayNext("创建家族还需要1500000金币的费用！");
                        npc.sayNext("创建家族，带1个人来~你不能没有1个人就组成一个...哦，当然，1个人不能是其他家族的成员！如果有人已经加入了其他家族，那就不行了！！");
                        break;
                case 2:
                        selection = npc.askYesNo("哦！你是来创建家族的吗……要想创建家族，需要150万金币。我相信你一定已经准备好了。好的～你想创建家族吗？");
                        if (selection == 1) {
                                if (party == null) {
                                        npc.sayNext("我不在乎你觉得自己有多强…为了创建一个家族，你需要参加一个1人的组队。如果你真的很想成立一个家族的话，请创建一个1人的组队，然后把你所有的队员带回来。");
                                } else if (player.getId() != party.getLeader()) {
                                        npc.sayNext("如果你想创建一个家族，请让队长和我交谈。");
                                } else if (player.getLevel() < 100) {
                                        npc.sayNext("嗯...我认为你没有资格创建家族，请继续修炼后再来吧！");
                                }  else {
                                        let members = party.getLocalMembers();
                                        let eligible = true;
                                        for (let i = 0; i < members.length && eligible; i++)
                                                if (members[i].getGuildId() != 0)
                                                        eligible = false;
                                        if (!eligible) {
                                                npc.sayNext("队伍中好像有人已经是另一个家族的成员了。要创建一个家族，你所有的队员都必须脱离他们的当前的家族。请确定后再回来吧。");
                                        } else if (!player.hasMesos(1500000)) {
                                                //TODO: GMS-like line
                                                npc.say("请再核对一下。你必须支付服务费来创建一个家族。");
                                        } else {
                                                npc.sayNext("输入您家族的名称，您的公会将被创建。");
                                                let retryName = player.createGuild(npc.askGuildName());
                                                while (retryName != null)
                                                        retryName = player.createGuild(retryName);
                                                if (player.getGuildId() != 0) {
                                                        player.loseMesos(1500000);
                                                }
                                        }
                                }
                        }
                        break;
                case 3:
                        npc.sayNext("你想了解更多有关家族的内容？如果是那样的话，家族负责人蕾雅会为你介绍的。");
                        break;
        }
} else {
        let selection = npc.askMenu("我能帮你什么吗？\r\n#b"
                + "#L0#我想增加家族人数#l\r\n"
                + "#L1#我想解散家族#l");

        if (player.getGuildRank() != 1) {
                npc.say("你不是公会的公会长！！这是只有公会的公会长才可以决定的工作。");
        } else {
                switch (selection) {
                        case 0:
                        {
                                let capacity = player.getGuildCapacity();
                                if (capacity >= 200) {
                                        npc.sayNext("家族人数已经达到最大容量了，不能再增加了！");
                                } else {
                                        npc.sayNext("你是想增加家族人数吗？嗯，看来你的家族成长了不少～你也知道，要想增加家族人数，必须在家族本部重新登记。当然，使用金币作为手续费。此外，家族成员最多可以增加到200个。");
                                        let fee = 500000;
                                        if (capacity >= 35)
                                                fee *= 10;
                                        else if (capacity >= 30)
                                                fee *= 9;
                                        else if (capacity >= 25)
                                                fee *= 7;
                                        else if (capacity >= 20)
                                                fee *= 5;
                                        else if (capacity >= 15)
                                                fee *= 3;
                                        //
                                        selection = npc.askYesNo("当前的家族最大人数是#b" + capacity + "人#k，增加#b5人#k所需的手续费是#b" + fee + "金币#k。怎么样？你想增加家族人数吗？");
                                        if (selection == 1) {
                                                if (player.hasMesos(fee)) {
                                                        player.increaseGuildCapacity(5);
                                                        player.loseMesos(fee);
                                                } else {
                                                        npc.say("您的金币不足，增加人数需要" + fee + "金币！");
                                                }
                                        }
                                }
                                break;
                        }
                        case 1:
                                if (player.getAllianceId() != 0) {
                                        npc.say("在你解散家族之前，你需要先退出家族联盟！");
                                } else if (npc.askYesNo("你真的要解散家族吗？哎呀……哎呀……解散之后，你的家族就会被永久删除。很多家族特权也会一起消失。你真的要解散吗？") == 1) {
                                        if (player.hasMesos(200000)) {
                                                player.disbandGuild();
                                                player.loseMesos(200000);
                                        } else {
                                                //TODO: GMS-like line
                                                npc.say("您的金币不足，需要200000金币的手续费！");
                                        }
                                }
                                break;
                }
        }
}