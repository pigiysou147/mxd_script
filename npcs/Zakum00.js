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

if (player.getLevel() >= 50) {
        let sel = npc.askMenu("哦......很好。看来你们已经完全具备了资格。你们打算做什么呢? \r\n#b#L0#去调查废矿洞穴。#l\r\n#b#L1#探察扎昆副本。#l\r\n#b#L2#领取要献给扎昆的祭品。#l\r\n#b#L3#移动到冰峰雪域。#l");
        switch (sel) {
                case 0:
                        npc.sayNext("任务已关闭。");
                        break;
                case 1:
                        npc.sayNext("很好!现在开始，你们将会移动到充满许多艰难险阻的地图。祝你们好运!!");
                        player.changeMap(280020000);
                        break;
                case 2:
                        let mode = npc.askMenu("你需要把祭品献给哪个扎昆呢? \r\n#b#L0#简单扎昆#l\r\n#L1#普通/进阶扎昆#l");
                        let itemId = mode == 0 ? 4001796 : 4001017;
                        if (player.hasItem(itemId, 1)) {
                                npc.sayNext("你已经拥有要献给简单扎昆的祭品#b#t" + itemId + "##k了啊......等你用完了再来告诉我吧。");
                        } else {
                                if (mode == 0) {
                                        npc.sayNext("不过, 我有很多在召唤扎昆时所需的祭品--#b#t4001796##k, 所以就给你一些吧。");
                                } else {
                                        npc.sayNext("不过, 我所拥有的可在召唤普通/进阶扎昆时使用的祭品--#b#t4001017##k并不是很多, 就这么给你的话有点......");
                                }
                                if (player.canGainItem(itemId, 1)) {
                                        player.gainItem(itemId, 1);
                                        npc.say("你把这个放入简单扎昆的祭坛中, 就可以了。");
                                } else {
                                        npc.sayNext("请清理下你的背包。");
                                }
                        }
                        break;
                case 3:
                        npc.sayNext("那么, 让我来送你去冰峰雪域吧。");
                        npc.sayNext("如过你想再次来到这里，那就请和冰峰雪域的长老对话吧。");
                        player.changeMap(211000000, 0);
                        break;
        }

} else {
        npc.sayNext("按照你目前的情况，你还不能满足进行这项任务的能力，当你变的强大的时候，再来找我吧！");
}