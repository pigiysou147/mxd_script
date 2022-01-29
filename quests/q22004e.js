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
npc.sayNext("哦，#t4032498#搜集到了吗？真了不起。我应该给你什么作为奖赏呢……对了，我有那个东西。 \r\n\r\n#fUI/UIWindow.img/Quest/reward# \r\n#i3010097# #t3010097#1个 \r\n#i2022621# #t2022621# 15个\r\n#i2022622# #t2022622# 15个");
if (player.getFreeSlots(1) >= 1 && player.getFreeSlots(2) >= 2 && player.canGainItem(3010097, 1)) {
        if (player.hasItem(4032498, 3)) {
                npc.completeQuest();
                player.loseItem(4032498, 3);
                player.gainItem(3010097, 1);
                player.gainItem(2022621, 15);
                player.gainItem(2022622, 15);
                player.gainExp(210);
                npc.say("好了，我用修理篱笆剩下的木板做了一把椅子。虽然不太好看，但却很结实。就给你用吧。");
                let string = ["UI/tutorial/evan/7/0"];
                npc.sayImage(string);
        }
} else {
        npc.say("先整理下背包栏吧！");
}



