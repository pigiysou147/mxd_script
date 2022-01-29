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
if (player.isQuestStarted(38003) && data.indexOf("30020062") == -1) {
        if (player.canGainItem(1004037, 1)) {
                npc.sayNext("呃嗬，呃嗬！怎么会有这么可怕的事情……连小小的微物都有尾巴，会两条腿走路，会说话的动物怎么能长得如此凄惨呢？呃嗬，呃嗬。");
                npc.sayNextS("凄，凄惨……虽然我没有尾巴，但是我也一样活得很好啊……", false);
                npc.sayNext("是的，只有这种乐观的态度，才能让你继续生活下去。绝对不能沮丧，不能悲观。先用这根绳子把你那像流浪者一样披散的头发扎起来。不要理会别人看你的眼光，绝对不能失去活下去的勇气。");
                player.gainItem(1004037, 1);
                player.updateQuestRecordEx(38003, "NpcSpeech", "30020062/" + data);
        } else {
                npc.sayNext("我有东西要送给你，你先清理下背包装备栏的空间吧！");
        }
} else if (player.isQuestStarted(38009) && data.indexOf("30020062") == -1) {
        player.updateQuestRecordEx(38009, "NpcSpeech", "30020062/" + data);

} else if (player.isQuestStarted(38024) && data.indexOf("30020064") == -1) {
        player.updateQuestRecordEx(38024, "NpcSpeech", "30020064/" + data);
}