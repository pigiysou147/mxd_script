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
npc.sayNext("多么有趣的。新人，你看，一切都准备好了。我们想看看你的表现。你干得不错。");
npc.sayNext("你对我们双刀有特别的才能。我推荐你参加这个特别的任务！");
npc.sayNext("我现在不能告诉你这个是什么任务. 这取决于#b雪姬#k认为你值不值得参与. 如果不值得，你将和其他人一样，只能离开.所以，努力点。");
let ret = npc.askAccept("如果你接受的话，我将送你到#b雪姬#k。");
if (ret == 1) {
    npc.startQuest();
    player.changeMap(103050101, 0);
}
