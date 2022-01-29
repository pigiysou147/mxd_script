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
let ret = npc.askYesNo("呵呵，平安回来了？孩子呢？孩子也带回来了吗？");
if (ret == 1) {
        npc.sayNext("太好了……真是太好了。");
        npc.sayNextS("赶快上船！已经没时间了！", false);
        npc.sayNext("啊，没错。现在不是感伤的时候。黑魔法师的气息越来越近！似乎他们已经察觉方舟的位置，得赶紧启航，不然就来不及了！");
        npc.sayNextS("立刻出发！", false);
        npc.sayNext("战神！请你也上船吧！我们理解你渴望战斗的心情……不过，现在已经晚了！战斗就交给你的那些同伴吧，和我们一起去金银岛吧！");

        npc.sayNextS("不行！", false);
        npc.sayNextS("赫丽娜，你先出发去金银岛。一定要活着，我们一定会再见的。我要和同伴们一起同黑魔法师战斗！", false);

        npc.sayNext("太好了……真是太好了。");
        let mov = npc.askYesNo("你想跳过动画播放吗？");
        npc.completeQuest();
        player.changeMap(mov == 1 ? 140090000 : 914090010, 0);
} else {
        npc.sayNext("孩子呢？孩子救出来了的话，就赶紧让我们看看。");
}
