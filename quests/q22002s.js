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
npc.sayNext("给#p1013102#喂过饭了吗？小不点你去吃早饭吧。今天的早饭是#t2022620#。我拿出来了，嘻嘻。事实上，如果你不去给#p1013102#喂食，我就不打算给你早饭吃。");
let ret = npc.askYesNo("来，给你#b三明治，吃完之后到妈妈那里去一趟。#k她好象有话要跟你说。");
if (ret == 1) {
        if (player.canGainItem(2022620, 1)) {
                player.gainItem(2022620, 1);
                npc.startQuest();
                npc.sayNextS("#b(有话要跟我说？先把#t2022620#吃了，然后到屋里去看看吧。)#k");
                let string = ["UI/tutorial/evan/3/0"];
                npc.sayImage(string);
        } else {
                npc.sayNext("先整理下你的背包消耗栏吧。");
        }
} else {
        npc.sayNext("嗯？干嘛？你不想吃早饭了吗？不吃东西可不好。如果你想吃饭的话，就再来找我。不快点说的话，就要被我吃掉了啊？");
}
