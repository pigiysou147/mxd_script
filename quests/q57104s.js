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


let ret = npc.askAcceptE("#face0#我们将新的据点称作枫叶山丘。这是一个飘散着鲜红枫叶的地方。好了，去营地看看吧。我来帮忙带路。", 9130024);
if (ret == 1) {
        npc.startQuest();
} else {
        npc.sayNextE("看来还需要一点时间来整理一下现状啊。", 9130024);
}

