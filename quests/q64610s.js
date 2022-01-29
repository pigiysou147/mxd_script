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

npc.sayNextENoEsc("#face2##h0#！听我说啊！不管怎样，既然是管家，总不能什么都不做吧？所以我思考了一下！ \r\n呵呵，你可不能现在就被感动哦~", 9400920);//需要判断
npc.sayNextENoEsc("#face1#首先是家具选购！装修家的时候最重要的就是家具和装饰品，哥哥天天都是这么念叨的。", 9400920);//需要判断
npc.sayNextENoEsc("#face0#只要你告诉我你喜欢的家具风格，我就能亲自去找来。不管是哪里的东西！ \r\n啊，当然了，BOSS家具除外！你应该不会觉得我能抓住BOSS然后找到家具吧！？ 当然了，也不是不可能……你给我一年时间吧，我变强之后会再回来的，嘿嘿", 9400920);//需要判断
player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/7", 4, true, -1, false, 0, 0);
npc.sayNextENoEsc("#face1#还有……我正在为了#h0#而练习增益。这是秘密哦，我好像还挺有天分的！", 9400920);
npc.sayNextENoEsc("#face2#照这种速度成长下去，我可能在不久之后就会成为大魔法师了哦？呵呵，别忘了，每天只能领取一次哦！", 9400920);
player.setLayerOff(600, "0");
npc.sayNextENoEsc("#face1#我会一直在这里，如果有什么想知道的或者需要帮助，那就来找我吧！", 9400920);
npc.sayNextENoEsc("#face2#对了！我差点忘记了，这是凯尼斯，米兰达，还有艾丹，以及我和艾尔宾哥哥一起准备的礼物！#h0#，欢迎你成为我们的邻居！", 9400920);
npc.completeQuest();
if (!player.gainItem(2630702, 1)) {
        player.gainParcel(2630702, 1, "背包空间不足，以邮件发送");
}
player.updateQuestRecordEx(500767, "6", "1");
player.updateQuestRecordEx(500763, "end", "1");
player.updateWorldShareRecord(500763, player.getQuestRecordEx(500763));
player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));