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
 * Roger's Apple (NPC 2000 Quest 1021) Start
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Gives advice to new players on how to use items.
 *
 * @author Jackson
 */

startScript();

function startScript() {
        npc.sayNext("你好，#b#h0##k。欢迎你加入皇家骑士团。我的名字是#p1101002#。是女皇的谋士。以后会常常见面的，应该会要记住名字的。呼呼…");
        npc.sayNext("但是，这里是怎么回事呢？#h0#？现在你好像应该正在认真的修炼呢。");
        npc.sayNextS("啊，我…那个…鸟忽然地出现，我就跟着来看看…");
        npc.sayNext("哈哈哈哈。#h0#，比看起來的样子还要有幽默感啊。是无法忘怀刚刚见到我的帅气模样才跟着来的吗？", 1101007);

        npc.sayNext("闹哄哄的呢。和女皇的会面就到此为止，回去吧.", 1101006);
        npc.sayNext("#h0#，可以见到你真的太高兴了。那么，下次再见了。希望你能成为勇敢又贤明的其实…，", 1404008);
        npc.sayNext("虽说你是骑士团的成员，但也还不是骑士。连修炼骑士都还不是，就更别说正式的骑士了。但是你觉得就这么回去的话，也没关系吗？只要再更集中精神练习就可以了。");
        npc.startQuest();
}
