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
if (map.getId() != 140090000) {


} else {
        if (!"clear".equals(player.getQuestRecordEx(21019, "helpe"))) {
                npc.sayNext("你... 终于苏醒了!");
                npc.sayNextS("...你是谁?", false);
                npc.sayNext("我一直在等你。等待着与黑魔法师战斗的英雄最终苏醒过来...!");
                npc.sayNextS("等等, 你说什么? 还有你到底是谁...?", false);
                npc.sayNextS("等等... 我是谁...? 我不记得过去发生的事情了. 糟糕... 我的头好痛!", false);
                player.updateQuestRecordEx(21019, "helpe", "clear");
                player.showReservedEffect("Effect/Direction1.img/aranTutorial/face");
                player.showReservedEffect("Effect/Direction1.img/aranTutorial/ClickLirin");
        } else {
                npc.sayNext("你还好吗?");
                npc.sayNextS("我... 真的记不起任何事情来了... 我在哪里? 还有你是谁?", false);
                npc.sayNext("放松。黑魔法师的诅咒是你没有任何记忆的原因。没有必要担心过去发生的事情。我会详细地给你解释的。");
                npc.sayNext("你在这里是一个真正的英雄。几百年前，你和你的朋友与黑魔法战斗，并从拯救了冒险岛世界。但在最后一刻，黑魔法师给了你一个诅咒，让你在冰封了很长一段时间，同时彻底地抹去了你的记忆。");
                npc.sayNext("你现在在一个叫做里恩的岛屿，它是黑魔法师选择冰封你几百年的岛屿。由于他的诅咒，这个岛上总是覆盖着冰雪，尽管天气还没有达到这个水平。你被发现在洞穴深处某个地方。");
                npc.sayNext("我的名字是利琳，是里恩上的一员。里恩的居民一直抱着你能再次苏醒,几个世纪都是这样，现在…希望终于得到了回报。你就在这里，站在我面前，活生生的呼吸传说。");
                npc.sayNext("我可能一下子就给了你太多的信息。如果你还没有回忆起一切，那没关系。你迟早会发现的。同时，#b你应该去镇上#k如果在镇上有任何问题，请随时问我。");
                player.setHireTutor(true);
                player.changeMap(140090100, 1);
        }
}