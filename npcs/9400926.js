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
if (player.isQuestStarted(64600)) {
        data = player.getQuestRecordEx(64600, "NpcSpeech");
}
if (data == null) {
        data = "";
}
if (player.isQuestStarted(64600) && data.indexOf("94009261") == -1) {
        npc.sayNextE("#face0#搬家聚会？那是什么？", 9400926);
        npc.sayNextE("#b就是搬家后，邀请邻居们来参观家里，再一起吃好吃的。特鲁迪只要来玩就可以了。", true);
        npc.sayNextE("#face1#啊，特鲁迪十分情愿，说要去搬家聚会！", 9400926);
        player.updateQuestRecordEx(64600, "NpcSpeech", "94009261/" + data);
}