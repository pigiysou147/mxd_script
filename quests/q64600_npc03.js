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
if (player.isQuestStarted(64600) && data.indexOf("94009233") == -1) {
        npc.sayNextE("#face0#啊啊，我听艾尔宾说了你搬家的事情。呵呵。那个桌子可是我做的。看起来是不是像值300万金币？虽然因为是练习用的作品，不能出售…… ", 9400923);
        npc.sayNextE("#face0#总之，待会儿去就行了吧？凯尼斯大叔还没来，我会转告他的。", 9400923);
        player.updateQuestRecordEx(64600, "NpcSpeech", "94009233/" + data);
}