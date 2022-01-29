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

var data = "";
if (player.isQuestStarted(38003)) {
        data = player.getQuestRecordEx(38003, "NpcSpeech");
} else if (player.isQuestStarted(38009)) {
        data = player.getQuestRecordEx(38009, "NpcSpeech");
} else if (player.isQuestStarted(38024)) {
        data = player.getQuestRecordEx(38024, "NpcSpeech");
}
if (data == null) {
        data = "";
}
if (player.isQuestStarted(38003) && data.indexOf("30020071") == -1) {
        if (player.canGainItem(1072892, 1)) {
                npc.sayNext("哦，你就是那个传说中的“人类”啊。名字叫隐月？真的像房子一样大！你一定是长得太大，又没什么用，所以才被遗弃了吧？也是，估计要吃不少东西，才能吃得饱。");
                npc.sayNextS("我来到这里，不是因为被遗弃，而是被卷入了某个事件……", false);
                npc.sayNext("那是蒸糕吧? 正好我有点饿呢, 给我吧。啊, 我为你准备了一些物品, 你带走吧。这双大鞋是我第一次做的, 费了我好大的劲呢。要是不合脚的话, 你就再拿回来。我给你改改。");
                player.gainItem(1072892, 1);
                player.updateQuestRecordEx(38003, "NpcSpeech", "30020071/" + data);
        } else {
                npc.sayNext("我有东西要送给你，你先清理下背包装备栏的空间吧！");
        }
} else if (player.isQuestStarted(38009) && data.indexOf("30020071") == -1) {
        player.updateQuestRecordEx(38009, "NpcSpeech", "30020071/" + data);

} else if (player.isQuestStarted(38024) && data.indexOf("30020071") == -1) {
        player.updateQuestRecordEx(38024, "NpcSpeech", "30020071/" + data);
}