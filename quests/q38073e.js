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

npc.askMenu("你想好关键词了吗？那就说出你想搜索的词语吧。\r\n\r\n#b#L0#黑魔法师#l");
npc.sayNext("黑魔法师.....黑魔法师的检索结果包括黑魔法师的封印、黑魔法师的军团长、黑魔法师的登场....等，大概有3849个标题。");
npc.askMenu("你一定是太笼统了，所以需要更具体的关键词，说出你想搜索的词语吧。\r\n\r\n#b#L0#黑魔法师的复活#l");
npc.sayNext("黑魔法师的复活.....哦，刚好搜出一本书，让我看看.....嗯.....这真是，麻烦了。");
npc.askMenu("看来从市面上无法买到有着相似内容的书籍.....我不得不违背约定了。要怎么办，实在太抱歉了？还有其他想好的关键词吗？\r\n\r\n#b#L0#时间封印#l");
npc.sayNext("时间封印....有一本名为“禁锢着黑魔法师的时间封印”的书，好吧，让我看看....嗯，原来如此。嗯，那时候原来是那样。那么这个....");
npc.askMenu("好吧，和这些内容最相近的书叫做#r黑魔法师的五个英雄#k，你去书店买来就可以了。这两本书基本什么区别。那么你还有别的词语想要搜索的吗？\r\n\r\n#b#L0#......（附耳低语。）#l");
npc.sayNext("嗯？你是说...？啊啊，莫非是你的名字？搜索自己的名字的事可不常见。也是，作为人类当然想知道自己走过的轨迹了。那么稍等，我这就为你搜索。");
npc.sayNextS("等等，算了，没这个必要了");
npc.sayNext("嗯，怎么突然？？莫非你也有什么不想为人所知的秘密？也是，有谁会没有秘密呢？那我就当你没有搜索的词了。");
npc.sayNextS("（既然是记录了世间万事，说不定也有关于我的记录。可是事到如今那又有什么用呢？反正摆在我面前的路只能是往前走。）");
npc.sayNextS("（我也不会回头看，也许那只会让我更痛苦）");
if (player.getJob() == 2511) {
        player.setJob(2512);
        player.gainSp(5);
}
npc.completeQuest();

