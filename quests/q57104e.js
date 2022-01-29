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

npc.sayNextE("#face0#这里就是被称作枫叶山丘的据点。已经有不少人先一步到达这里了。如果有什么问题，可以直接去问他们。", 9130024);
npc.completeQuest();
player.startQuest(11620, 0, "0");
player.gainItem(2001503, 100);
player.gainItem(2001500, 100);
player.gainItem(1142490, 1);
player.gainItem(1352800, 1);
player.gainItem(1082434, 1);
player.gainItem(1072668, 1);
player.gainItem(1052463, 1);
player.gainItem(1003554, 1);
player.gainItem(1542000, 1);
npc.sayNextE("#face0#那我就先离开了。我正在四处寻找，看有没有还没能到达“这边”的人。而且在据点里，也有我不想遇到的人在。好了，我们有缘再会吧。", 9130024);
npc.sayNextE("#face1#啊，你现在并没有能够立刻使用的武器啊。那就请收下我用过的这套装备吧。虽说并不是什么好东西，但总算是聊胜于无嘛。", 9130024);
