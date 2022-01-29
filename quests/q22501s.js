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
npc.sayNext("我现在肚子饿了，有什么吃的吗？");
let ret = npc.askYesNoS("#b龙应该吃什么呢？我也不知道啊！去问问见多识广的爸爸吧！", false);
if (ret == 1) {
        npc.startQuest();
} else {
        npc.sayNext("你不给我吃的？你这真让我发狂！");
}