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

let ret = npc.askYesNo("你不觉得奇怪吗？最近的鸡怎么和以前不一样了？以前它们会下很多 鸡蛋 ，但现在越来越少了。是不是因为狐狸增多了呢？那样的话，必须赶紧想办法才行。你说对不对？");
if (ret == 1) {
        npc.startQuest();
        npc.sayNext("好吧，让我们去消灭狐狸吧。你先去 #b后院#k 消灭#r10只 阴险的狐狸#k 。我会负责剩下的事情的。好了，你快到 后院 去吧～");
        let string = ["UI/tutorial/evan/10/0"];
        npc.sayImage(string);
} else {
        npc.sayNext("嗯？什么？害怕 阴险的狐狸 ？没想到我弟弟这么胆小。");
}
