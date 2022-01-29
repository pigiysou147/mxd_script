/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */


npc.sayNextNoEsc("小白鼠。我说，你怎么敢逃离这个地方？", 2159008);

npc.sayNextSNoEsc("糟糕，我们被发现了！", false);
npc.sayNextNoEsc("现在，现在，孩子们。不要让事情变得的更困难，只要跟我走就行了，多么简单。。等等……你不是试验品之一！你是镇上的居民？！", 2159008);

npc.sayNextSNoEsc("那是对的。我住在埃德尔斯坦，不试验品。你不能对我这么样。", false);
npc.sayNextNoEsc("哦，这样子呀。我告诉他们要确保镇上的孩子远离矿井…唉，现在已经太晚了。我不能让你告诉任何人这个实验室的存在，所以我想你只能呆在这里，做我的实验品了。", 2159008);

npc.sayNextSNoEsc("哼。说大话，这还要看看你能否先抓住我！", false);
npc.sayNextNoEsc("你好张狂，咳，咳，咳。你的话无关紧要。是时候拔出我的大炮的了。我真希望你已经准备好了。否则，你会受苦的！！！", 2159008);

npc.sayNextNoEsc("我说你就别再多废话了? 如果让我抓住你，我会对你做一些很残酷的实验的，但是如果你乖乖跟我走的话，我会对你很好的！", 2159008);

npc.sayNextNoEsc("住手！！！", 2159010);
player.changeMap(931000021, 1);


