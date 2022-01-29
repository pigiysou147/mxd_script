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
if (player.isQuestStarted(38032)) {
        data = player.getQuestRecordEx(38032, "NpcSpeech");
}
if (data == null) {
        data = "";
}
if (player.isQuestStarted(38032) && data.indexOf("10121114") == -1) {
        if (player.canGainItem(4034060, 1)) {
                npc.sayNext("冒险岛地图呀。。。在这边，给你!");
                player.gainItem(4034060, 1);
                player.updateQuestRecordEx(38032, "NpcSpeech", "10121114/" + data);
        } else {
                npc.sayNext("清理下你的背包吧，已经放不下地图了！");
        }
}