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
let ret = npc.askYesNo("去农场干活的时候，#b爸爸#k忘了把便当带过去了。你能去 #b#m100030300##k 给爸爸送#b便当#k吗？");
if (ret == 1) {
        if (player.canGainItem(4032448, 1)) {
                player.gainItem(4032448, 1);
                npc.startQuest();
                npc.sayNext("呵呵，小不点果然是个好孩子～#b从家里出去后，往左边走。#k爸爸一定饿极了，你最好快点给他送过去。");
                npc.sayNext("如果不小心把便当弄丢了，就马上回来。我再给你包一份。");
                let string = ["UI/tutorial/evan/5/0"];
                npc.sayImage(string);
        } else {
                npc.sayNext("先整理下你的背包其他栏吧。");
        }
} else {
        npc.sayNext("不要觉得麻烦就不愿意去。你是个好孩子，对吧？再来和我说话吧。");
}
