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

/* global npc, player */

/**
 * 
 * @author Jackson 
 */
npc.sayNextSNoEsc("阿弗利埃！你没事吧？弗里德呢！？……呼，只是昏过去了……");
npc.sayNextNoEsc("双弩精灵……你还活着啊。", false);
npc.sayNextSNoEsc("当然！封印成功了，总不能一直坐在这里吧！但是……你看上去好像不太好？没事吧？其他人呢？大家去哪儿了？");

npc.sayNextNoEsc("虽然#b封印黑魔法师成功了#k，但是因为他最后使用的魔法引起的爆炸，所有的东西都分崩离析。我们能在相同的地方，好像只是偶然。", false);

npc.sayNextSNoEsc("啊，是啊。飞了好远。但还好没事……");

npc.sayNextNoEsc("是因为放松下来了吗？没有力气……不，不仅仅是没有力气……感觉很冷。", false);

npc.sayNextSNoEsc("这里原来就是经常下雪的地方吗？四周都在燃烧，却在下雪……真奇怪…");

npc.sayNextNoEsc("……你没有感觉到吗，双弩精灵？这#r可怕的诅咒#k……黑魔法师对你和弗里德，以及所有其他人的诅咒。", false);

npc.sayNextSNoEsc("诅……咒？");
npc.sayNextNoEsc("我看到可怕的寒气在包围你。在体力充沛的时候也许还好……但是战斗让我们变弱了，现在非常危险……黑魔法师好像不会那么轻易放过我们……", false);

npc.sayNextSNoEsc("其他人都会没事的，因为大家都很强壮！但是我担心弗里德……那个家伙，体力本来就很弱。");

npc.sayNextNoEsc("弗里德由我来照顾，别担心……不过，我更担心的是你，双弩精灵。你是#b精灵之王#k。对你的诅咒……#r就是对所有精灵的诅咒#k，不是吗？", false);

npc.sayNextSNoEsc("...!");
npc.sayNextNoEsc("你快到#b埃欧雷#k去。如果#b黑魔法师的诅咒真的会给全体精灵造成影响#k的话……身为国王的你必须去看一看。", false);
npc.sayNextSNoEsc("知道了！阿弗利埃……我们还能再见面吗？..");

npc.sayNextNoEsc("……希望如此。", false);
npc.sayNextSNoEsc("(虽然很担心同伴们……但是现在只能相信他们。使用回城技能，回村子去吧。)");
player.changeMap(910150001, 0);
