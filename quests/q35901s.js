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

/* global npc, player */

/**
 *
 * @author Jackson
 */

startScript();

function startScript() {
        npc.sayNextENoEsc("#face6#嗯……感觉跟现在的东西没什么区别。\r\n只是普通的东西。难道白忙活了一场？", 1013358);
        npc.sayNextENoEsc("#face0#但是，啊哈……这个箱子的表面写着什么东西。\r\n让我来看看。", 1013358);
        npc.sayNextENoEsc("#face0#这好像是古代的文字。要试着解读一下吗？", 1013358);
        npc.sayNextENoEsc("#face2#虽然会花费一点时间……呵呵……不过还挺让人好奇的。", 1013358);
        npc.startQuest();
}
