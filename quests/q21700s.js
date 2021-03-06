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

startScript();

function startScript() {

        npc.sayNextNoEsc("你似乎在回想什么。这个长矛果然认出了你。那么你肯定就是#b使用长矛的英雄，战神了#k。你想起什么其他的了吗？有关长矛的技能之类……");

        npc.sayNextSNoEsc("#b(说技能倒是想起来了几个。)#k", false);

        npc.sayNextNoEsc("如果数量不多，不过也已经很不容易了。现在让我们集中精力来恢复过去的技能吧。虽然你失忆了，但毕竟是以前曾经烂熟与心的东西，要恢复起来应该很快。");

        npc.sayNextSNoEsc("怎么恢复过去的技能？", false);

        npc.sayNextNoEsc("这个方法只有一个。修炼！修炼！修炼！除了修炼还是修炼，总有一天身体会回想起那些被遗忘的技能！所以我要给你介绍一个知道你修炼的老师。");

        npc.sayNextSNoEsc("老师？", false);
        npc.startQuest();
        npc.sayNextNoEsc("武器要是能使的更熟练就好了。送你一支#p1201001#。希望你在修炼的时候能够进步的很快。带着这支长矛……");
        npc.sayNextNoEsc("从村子出去后往#b左#k走，有个小修炼场。去见见那里的#b普奥#k。他偶尔会有点老年痴呆……不过他一直在等待着英雄的出现，并不断研究着各种技能。你要是能够得到他的帮助，肯定会受益非浅。");

}
