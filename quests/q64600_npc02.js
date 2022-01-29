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
if (player.isQuestStarted(64600) && data.indexOf("94009242") == -1) {
        npc.sayNextE("#face0#……搬家聚会？ ", 9400924);
        npc.sayNextE("#face0#你把时钟挂起来了吗？", 9400924);
        npc.sayNextE("#b当然了！", true);
        npc.sayNextE("#face1#……我知道了。我会准时到的。", 9400924);
        player.updateQuestRecordEx(64600, "NpcSpeech", "94009242/" + data);
}