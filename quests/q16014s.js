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

if (player.getJob() / 100 == 101 && player.getLevel() < 130 || player.getLevel() < 60) {// isZero
        npc.say("你好，#b勇士#k~见到你很高兴~，你现在的能力还不够使用<冒险岛联盟>！");
} else {
        if (!player.isQuestCompleted(16013)) {
                player.completeQuest(16013, 0);
                player.actionMapleUnion();
                npc.say("你好，#b勇士#k~见到你很高兴~你现在可以开始使用<冒险岛联盟>啦！");
        } else {
                let sel = npc.askMenu("今天可是个适合去屠龙的好日子！\r\n关于#b冒险岛联盟#k的工作，有什么我可以帮忙的吗？\r\n\r\n\r\n#L0##b<查看我的冒险岛联盟信息。>#l\r\n#L1##b<提升冒险岛联盟级别。>#l\r\n#L2##b<了解有关冒险岛联盟的说明。>#k#l\r\n#L3##b<每周获得联盟币排名>#k#l");
                switch (sel) {
                        case 0:
                                player.openUI(1148);
                                break;
                        case 1:
                                let nowRank = player.getNowMapleUnionRank();
                                let nextRank = player.getNextMapleUnionRank();
                                if (nowRank != null && nextRank != null) {
                                        let str = player.getMapleUnionUpdateDec();
                                        str += "\r\n\r\n现在就要对冒险岛联盟进行#e升级#n吗？";
                                        let ret = npc.askYesNo(str);
                                        if (ret == 1) {
                                                var nRank = player.getMapleUnionNextLevel();
                                                if (player.getMapleUnionLevel() >= nRank) {
                                                        if (player.doMapleUnionLevelUp()) {//还需要判断时有足够联盟币 
                                                                //var newRank = qm.getMapleUnionRank();
                                                                //qm.sendOk("恭喜你！，现在的冒险岛联盟等级提高了，#e当前级别：#n#b#e<" + newRank.toString() + ">#n#k");
                                                                npc.say("恭喜你！，现在的冒险岛联盟等级提高了#k");
                                                        } else {
                                                                npc.say("当前冒险岛联盟已经达到最高等级！");
                                                        }
                                                } else {
                                                        if (nRank != 0xFFFFFFFF) {
                                                                npc.say("升级失败，请确认是否达到了#n#b<联盟等级>#e" + nRank + "#n#k");
                                                        } else {
                                                                npc.say("当前冒险岛联盟已经达到最高等级！");
                                                        }

                                                }
                                        }
                                } else {
                                        npc.say("你好，#b勇士#k~你的<冒险岛联盟>已经不能在升级了！");
                                }
                                break;
                }
        }
}

