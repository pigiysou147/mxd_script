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

/* global npc, player */

/**
 *
 * @author Jackson
 */

startScript();

function startScript() {
        npc.sayNextENoEsc("#face0##b（和遗物接触后，古代之力进入了我的身体。\r\n……但同时也多了诅咒这个大问题。）#k", 1013358);
        npc.sayNextENoEsc("#face6##b（好吧，事情都已经发生了，还能怎么办呢。\r\n后悔也没办法解决问题。还是应该保持一颗平常心。）#k", 1013358);
        let ret = npc.askAcceptENoEsc("#face0##b在开始调查之前，先来检查一下状态吧。\r\n集中精神，感觉身体内部发生的变化。）#k", 1013358);
        if (ret == 1) {
                npc.startQuest();
                npc.completeQuest();
                player.gainEquipInventorySlots(4);
                player.gainUseInventorySlots(4);
                player.gainSetupInventorySlots(4);
                player.gainEtcInventorySlots(4);
                player.gainCashInventorySlots(4);
                player.setJob(301);
                player.resetStats(4, 4, 4, 4);
                player.gainSp(5);
                player.gainItem(1143161, 1);
                player.equip(-11, 1592000);
                player.equip(-10, 1353700);
                player.openUI(1);
                npc.sayNextENoEsc("#face0##b（受到诅咒之后，就能使用远古弓了。\r\n以后就用这个吧。）#k", 1013358);

                player.openUIWithOption(3, 3010001);
                npc.sayNextENoEsc("#face0##b（触碰遗物之后，获得了一些新技能。\r\n按基本键(K)，试着分配SP吧。常用的技能可以添加到快捷栏中。）#k", 1013358);
                player.openUI(2);
                npc.sayNextENoEsc("#face0##b（接下来……用基本快捷键(S) / 选择型(C)分配AP吧。\r\n这段时间等级提升了，应该会有一些AP。）#k", 1013358);
                npc.sayNextENoEsc("#face3#好像已经准备好了。那就去周围……", 1013358);
                player.soundEffect("Sound/SoundEff.img/pathfinder/mascapo");
                npc.sayNextENoEsc("#face0#……我！", 1013353);
                npc.sayNextENoEsc("#face0#……救我！", 1013358);
                npc.sayNextENoEsc("#face0#咕哎哎", 1013353);
                npc.sayNextENoEsc("#face0#!?", 1013358);
                npc.sayNextENoEsc("#face3#那边传来了奇怪的声音。\r\n准备好之后，去确认一下发生了什么事吧。", 1013358);
        } else {
                npc.sayNextENoEsc("#face0#等等……手滑了吗？", 1013358);
        }



}
