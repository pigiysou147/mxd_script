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


npc.sayNextENoEsc("呜……啊！这……这里是什么地方？ 姬儿，姬儿人呢！？我的斩霞之刀又跑到哪里去了？", true);
npc.sayNextENoEsc("呜……不好。不仅斩霞之刀消失不见了，就连我身上的铠甲也被彻底破坏了。", true);
npc.sayNextENoEsc("先来冷静地整理一下现状吧。我记得在那个时候，我为了救出姬儿而进入了本能寺，并与信长进行了对峙……醒来后的姬儿呼唤了一声我的名字，瞬间就有一道强烈的光柱出现，我也随之昏了过去。", true);
let ret = npc.askAcceptENoEsc("周围的景色看起来非常陌生……很明显，这里并不是本能寺。这究竟是怎么一回事啊？话说回来，在刚才醒来的时候，我似乎听到了有人说话的声音。先让我四周查探一下再说吧。", true);
if (ret == 1) {
        npc.startQuest();
        npc.completeQuest();
        npc.sayNextENoEsc("#face0#我自己没有出什么问题吧？虽说是昏厥了一段时间……脑子里还是有些呆呆的。身上也多少受了一点伤。但值得庆幸的是，并不是什么重伤。", 9130024);
} else {
        npc.sayNextENoEsc("不不，还是应该仔细分析一下目前的情况，然后再正式展开行动。", true);
}