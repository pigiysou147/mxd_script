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
npc.sayNext("醒了吗，小不点？");
npc.sayNextS("#b嗯……妈妈也醒了吗？#k", false);
npc.sayNext("嗯……但是你怎么好象没睡着呢？昨天晚上打了一夜的雷。所以才没睡好吗？");
npc.sayNextS("#b不，不是因为那个，是因为做了一个奇怪的梦。#k", false);
npc.sayNext("奇怪的梦，梦见什么呢？");
npc.sayNextS("#b嗯……#k", false);
npc.sayNextS("#b(说明梦见在迷雾中遇到龙的事情。)", false);
let ret = npc.askYesNo("呵呵呵呵，龙？怎么会梦到这个呢？没被吃掉，真是太好了。你做了个有趣的梦，去告诉 尤塔 吧。他一定会很高兴的。");
if (ret == 1) {
        npc.startQuest();
        npc.sayNext("#b尤塔#k 去 #b前院#k 给猎犬喂饭了。从家里出去就能见到他了。");
        let string = ["UI/tutorial/evan/1/0"];
        npc.sayImage(string);
} else {
        npc.sayNext("嗯？不想告诉 尤塔 吗？真是，兄弟之间应该好好相处嘛。");
}