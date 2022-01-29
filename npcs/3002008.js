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
if (player.isQuestStarted(38003) && data.indexOf("30020084") == -1) {
        if (player.canGainItem(1082572, 1)) {
                npc.sayNext("哎呀，我的妈！比听说的还要可怜。唉，我看着就觉得难过。脸倒是挺漂亮，但怎么少了这么多东西呢？你母亲是不是在怀你的时候吃错了药？那样的话，生出你这样的畸形儿的概率就会大大增加。");
                npc.sayNextS("……也许吧。(不管了。反正再怎么解释，也没人听。)", false);
                npc.sayNext("哎呀，哎呀，真可怜。所以说怀了孩子之后，就必须注意饮食。哎呀，太可怜了。我没什么可以给你的，你把这个拳套拿走吧。必须穿得端正一点，看上去才会好一点。今后如果有什么困难，就随时来找我！");
                player.gainItem(1082572, 1);
                player.updateQuestRecordEx(38003, "NpcSpeech", "30020084/" + data);
        } else {
                npc.sayNext("我有东西要送给你，你先清理下背包装备栏的空间吧！");
        }
} else if (player.isQuestStarted(38009) && data.indexOf("30020084") == -1) {
        player.updateQuestRecordEx(38009, "NpcSpeech", "30020084/" + data);

} else if (player.isQuestStarted(38024) && data.indexOf("30020083") == -1) {
        player.updateQuestRecordEx(38024, "NpcSpeech", "30020083/" + data);
}