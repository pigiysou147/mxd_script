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


npc.sayNextENoEsc("#face0#我先来和你说明一下进行本能寺攻略战时候的状况。相信你应该已经知道，当时，联合军冲进本能寺的时候，里面已经是一片混乱。不知道织田军是在和什么人进行交战。", 9130022);
npc.sayNextENoEsc("#face0#在神那你为了阻止仪式先走一步后，我们才知道，原来与织田军战斗的竟是明智光秀的大军。他背叛了信长。或许他是想甩开信长，让自己成为日本的霸主吧？我们并不清楚他到底是怎么想的……", 9130022);
npc.sayNextENoEsc("#face0#在那之后，战斗愈演愈烈。不过幸好明智军已经谋反，我们的战况变得还算顺利。但是突然之间，本能寺本堂发出一道光柱，引发了这一次的异常情况。", 9130022);
npc.sayNextENoEsc("#face0#在被光芒包裹的瞬间，仪式被中断了，等我们醒来之时，已经来到了这个陌生的地方……我们是从日本移动到“这边”来的。大家分别被移动到了不同的时间和地点。", 9130022);
let ret = npc.askAcceptENoEsc("#face0#哦哦，这不是神那吗？神那你也顺利到达“这边”了啊。你一定还没有完全适应这边的环境吧。等你休息一下之后，我们再来接着说吧。", 9130022);
if (ret == 1) {
        npc.startQuest();
} else {
        npc.sayNextENoEsc("#face0#确实这件事让人觉得难以置信。我再重复一次吧。", 9130022);
}