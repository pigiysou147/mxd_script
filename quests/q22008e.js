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
npc.sayNext("阴险的狐狸，消灭掉了吗？");
npc.sayNextS("#b你说要去收拾剩下的狐狸的，怎么回事？", false);
npc.sayNext("啊，那个嘛？我后来是去了，但走错了路，怕被 #o9300385# 抓去做人质，所以就回来了。");
npc.sayNextS("#b该不会是害怕狐狸而躲起来了吧？", false);
npc.sayNext("你在胡说什么啊？！我为什么会害怕狐狸？！我一点都不害怕狐狸！");
npc.sayNextS("#b……啊，有一只 #o9300385# !", false);
npc.sayNext("啊！快躲起来！");
npc.sayNextS("#b……", false);
npc.sayNext("......");
npc.sayNext("……你这家伙。别吓哥哥我！哥哥我的心脏不好，不能受惊吓！");
npc.sayNextS("#b(所以叫哥哥才不愿意去，叫我去。)", false);
npc.sayNext("哼哼，不管怎样，阴险的狐狸 消灭掉了。辛苦你了。我把一个路过的冒险家送我的东西送给你，作为给你的报酬。来，拿着。 \r\n\r\n#fUI/UIWindow.img/Quest/reward# \r\n#i1372043# 1个 #t1372043# \r\n#i2022621# 25个 #t2022621# \r\n#i2022622# 25个 #t2022622#");
npc.clearBackButton();
if (player.getFreeSlots(1) >= 1 && player.getFreeSlots(2) >= 2) {
        player.gainExp(910);
        player.gainItem(1372043, 1);
        player.gainItem(2022621, 25);
        player.gainItem(2022622, 25);
        npc.completeQuest();
        npc.sayNext("是#b魔法师的攻击武器短杖。#k 虽然你也可能没什么用，但拿在手里到处走，还是很帅的，哈哈哈。");
        npc.sayNext("狐狸的数量确实增加了，对吧？奇怪。狐狸的数量为什么会增加呢？看来必须调查一下。");

} else {
        npc.say("整理下背包吧！");
}


