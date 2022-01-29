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
if (player.isQuestStarted(38003) && data.indexOf("30020093") == -1) {
        if (player.canGainItem(1050306, 1)) {
                npc.sayNext("哎呀，你就是……真的和听到的一样……怎么……我也有孩子，现在终于可以理解父母的心了。生你的父母，一定也非常心痛。所以不要埋怨他们。");
                npc.sayNextS("我真的没关系。我以前住的地方都和我一样......", false);
                npc.sayNext("这是村长让我做的衣服。必须穿着像样的衣服，在外面才不会被人嘲笑。当然，我们村里应该不会有那种人。啊，谢谢你送来的蒸糕。");
                player.gainItem(1050306, 1);
                player.updateQuestRecordEx(38003, "NpcSpeech", "30020093/" + data);
        } else {
                npc.sayNext("我有东西要送给你，你先清理下背包装备栏的空间吧！");
        }
} else if (player.isQuestStarted(38009) && data.indexOf("30020093") == -1) {
        player.updateQuestRecordEx(38009, "NpcSpeech", "30020093/" + data);

} else if (player.isQuestStarted(38024) && data.indexOf("30020092") == -1) {
        player.updateQuestRecordEx(38024, "NpcSpeech", "30020092/" + data);
}