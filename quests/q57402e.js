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
npc.sayNextENoEsc("#face0#没想到这里就是我们的新据点——#b#m807000000##k。负责统率部分联合军的毛利大人已经先一步到达“这边”这个世界，就是他率领着其他士兵在这里建起了据点。", 9130022);
npc.sayNextENoEsc("#b#m807000000##k……如鲜血般的红叶四处飘散……这名字还真够悲壮的。", true);
npc.sayNextENoEsc("#face0#哈哈，说来确实如此啊。好了，毛利大人应该就在阵地之内，先去见见他吧。我们也需要和他商量一下接下来的安排呢……", 9130022);
npc.sayNextENoEsc("兼续，你接下来是怎么打算的？", true);
npc.sayNextENoEsc("#face0#我打算继续出去寻找谦信大人。大部分人都是在昏迷状态下到达“这边”这个世界的。说不定谦信大人会因此而陷入什么危险。而且，我实在无法忍耐这么长时间都见不到自己的主公。好了，那我就先告辞了。", 9130022);
npc.completeQuest();
player.gainItem(2001501,100);
player.gainItem(2001503,100);

player.gainItem(1003570,1);
player.gainItem(1052479,1);
player.gainItem(1082450,1);
player.gainItem(1072684,1);
player.gainItem(1552000,1);
player.gainItem(1142506,1);