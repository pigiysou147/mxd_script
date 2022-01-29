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
if (player.isQuestStarted(38024)) {
        data = player.getQuestRecordEx(38024, "NpcSpeech");
}
if (data == null) {
        data = "";
}
if (player.isQuestStarted(38024) && data.indexOf("30020014") == -1) {
        npc.sayNext("呃嗬，呃嗬！怎么会有这么可怕的事情……呃嗬，呃嗬。");
        player.updateQuestRecordEx(38024, "NpcSpeech", "30020014/" + data);
}