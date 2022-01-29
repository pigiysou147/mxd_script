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
npc.sayNext("一大早就来开玩笑，哈哈哈。别乱说了，快去给#p1013102#喂饭吧。");
npc.sayNextS("#b嗯？那不是#p1013101#的事情吗？", false);
let ret = npc.askYesNo("你这家伙！快去喂呀！！ #p1013102#有多讨厌我，你也知道。哥哥我去的话，它一定会咬我的。猎犬喜欢你，你去给它送饭。");
if (ret == 1) {
        if (player.canGainItem(4032447, 1)) {
                player.gainItem(4032447, 1);
                npc.startQuest();
                npc.sayNext("你快到#b左边#k去给 #b#p1013102##k 喂饲料。那个家伙好象肚子饿了，从刚才开始就一直在叫。");
                npc.sayNext("给#p1013102#喂完食之后，赶快回来。");
        } else {
                npc.sayNext("先整理下你的背包其他栏吧。");
        }
} else {
        npc.sayNext("你，不愿意去吗？你想看到哥哥我被狗咬吗？快重新和我说话，接受任务！");
}
