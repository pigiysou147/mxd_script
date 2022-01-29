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

let ret = npc.askYesNo("你做好决定了吗? 选择了将不可以反悔了, 所以你要好好想清楚. 你现在就想成为一个#r唤灵斗师#k吗?");
if (ret == 1) {
        if (player.canGainItem(1382100, 1)) {
                npc.completeQuest();
                if (player.getJob() == 3000) {
                        player.gainEquipInventorySlots(4);
                        player.gainUseInventorySlots(4);
                        player.gainSetupInventorySlots(4);
                        player.gainEtcInventorySlots(4);
                        player.gainCashInventorySlots(4);
                        player.setJob(3200);
                        player.resetStats(4, 4, 4, 4);
                        player.gainSp(5);
                        player.gainItem(1382100, 1);
                        player.gainParcel(1142242, 1, "转职徽章");
                        npc.sayNext("我刚刚重塑了你的身体，使你成为一个完美的唤灵斗师。 如果你想变得更加强大，使用属性窗口（S键）来提升你的属性。若不清楚的话, 不妨使用#b自动分配#k也好。");
                        npc.sayNext("我还扩充了你背包的装备栏和其他栏，好好利用, 你可以收集更多的武器和防具, 让自己变得更加强大。！");
                        npc.sayNext("对了，有一点需要注意。虽然预备兵的时候没关系，但是成为唤灵斗师的瞬间开始，必须小心不要死掉……万一死了的话，之前积累的经验值可能会受到损失……");
                        npc.sayNext("我能教你的只有这些……现在你去锻炼自己，让自己变得更强吧。");
                }
        } else {
                npc.sayNext("背包空间不足，请清理！");
        }
} else {
        npc.sayNext("嗯……这是一个重要的决定，你好好考虑下.");
}



