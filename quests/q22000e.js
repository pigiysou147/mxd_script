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
npc.sayNext("哦，起来啦，小不点？大清早的，怎么这么大的黑眼圈啊？晚上没睡好吗？什么？做了奇怪的梦？什么梦啊？嗯？梦见遇到了龙？");
npc.sayNext("哈哈哈哈～龙？不得了。居然梦到了龙！但是梦里有狗吗？哈哈哈哈～");
npc.completeQuest();
player.gainExp(20);
let string = ["UI/tutorial/evan/2/0"];
npc.sayImage(string);
