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

npc.sayNext("看，南哈特。他继承了光之骑士的血，证明了自己的资格。");
npc.sayNext("是的，女皇陛下说的总是对的。虽然还有很多不足之处，但这个少年好像确实继承了光之骑士的血。", 1106003);
npc.sayNextS("我父亲是光之骑士？我会成为光之骑士？我只是个平凡的少年。连名字都没有……");
let ret = npc.askAccept("选择权在你。但是你生来就带有光明之血，最好不要和自己的命运对抗。为了你，同时也是为了冒险岛世界。\r\n你愿意跟我走吗？");//                
if (ret == 1) {
        npc.sayNext("你好像需要个名字。就用“从光明中诞生的人”的意思，起名叫#b#e“米哈尔”#k#n如何？好像很适合你。现在和我一起到圣地去吧。没有比那里更适合让你成为光之骑士的了。");
        while (player.getLevel() < 10) {
                player.gainExp(1000);
        }
        npc.startQuest();
        npc.completeQuest();
        player.resetStats(4, 4, 4, 4);
        player.setJob(5100);
        player.gainSp(5);
        player.gainEquipInventorySlots(4);
        player.gainUseInventorySlots(4);
        player.gainSetupInventorySlots(4);
        player.gainEtcInventorySlots(4);
        player.gainCashInventorySlots(4);
        player.changeMap(913070071);
} else {
        npc.sayNext("你为什么要拒绝自己的命运呢……");
}
