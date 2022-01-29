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

npc.sayNextNoEsc("看来那个人已经追不上我们了. 当然，我可以很容易的就打败他，但是要保护你们，可能不太容易。你们俩在这里干什么？你父母不是警告过你要避开矿区吗？", false);
npc.sayNextNoEsc("这是我的错！ #h0#只想帮忙! #h0#解救了我!", 2159007);
npc.sayNextNoEsc("救了你，嗯？嗯，你穿得有点奇怪，小女孩。哦。你是黑色之翼的囚徒吗？", false);
npc.sayNextNoEsc("#b(贝比蒂很快的解释了情况。)#k", 2159007);
npc.sayNextSNoEsc("但是你是谁？你从哪里来？你为什么要救我们？");
npc.sayNextNoEsc("我是一个骄傲的反抗者，一群秘密与黑色之翼战斗并破坏黑色之翼的人。我不能告诉你我是谁，我的代号叫做J.", false);
npc.sayNextNoEsc("现在，请回到镇上，远离矿区。至于你，贝比蒂，跟我来。如果你没有被保护，我害怕黑色之翼会来找你。没有人能像我一样保护你的安全！现在，把我的话保密。反抗者的命运取决于你的判断力。", false);
npc.sayNextSNoEsc("等等，在你走之前，告诉我一件事。我怎样才能加入反抗者？");
npc.sayNextNoEsc("啊，小年轻人，所以你想与黑色之翼战斗啊？你的心是高尚的，但只有你到达10级才能帮我的忙，。这样，到时候会有人联系你的。这是一个承诺。好了，现在我得走了，也许我们有一天会再见面的！", false);
player.completeQuest(23007, 0);
player.gainItem(2000000, 3);
player.gainItem(2000003, 3);
player.gainExp(90);
player.changeMap(310000000, 8);