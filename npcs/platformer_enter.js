/*
 * AuroMS MapleStory server emulator written in Java
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

/* global npc, player 

*/
// 进行次数重置检测  QuestId:18838
// 获得的星星总数  QuestId:18869  starSum
let count = player.getQuestRecordEx(18838, "count");
if (count == null) {
        count = 99;
        player.updateQuestRecordEx(18838, "count", count);
        player.updateQuestRecordEx(18838, "stageT", "0");
        player.updateQuestRecordEx(18838, "stage", "0");
        player.updateQuestRecordEx(18869, "starSum", "0");
        player.updateQuestRecordEx(18870, "timeSum", "0");
}
let idx = player.getIntQuestRecordEx(500651, "1");
player.openUIWithOption(1112, idx);
