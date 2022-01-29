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

/* global player, npc */


if (!"1".equals(player.getQuestRecordEx(35947, "5"))) {
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setStandAloneMode(true);
        player.removeAdditionalEffect();

        player.setLayerBlind(true, 255, 0, 0, 0, 0, 2);
        npc.setCameraZoom(0, 1000, 0, -555, -350);
        player.setInGameCurNodeEventEnd(true);

        npc.setMonologue("#fs30##fn????#《遗物》", false);
        npc.setMonologue("#fs20##fn????#\r\n那是蕴含着诅咒之力的遗物。", false);
        npc.setMonologue("#fs20##fn????#\r\n被古代遗物所吸引的冒险家，在探险的途中发现了那个遗物。", false);
        npc.setMonologue("#fs20##fn????#……之后便中了诅咒，徘徊在生死的边缘。", false);
        npc.setMonologue("#fs20##fn????#\r\n好不容易捡回了一条命之后，他开始为了调查遗物而东奔西走……", false);
        npc.setMonologue("#fs20##fn????#他发现自己的身体出现了两种变化。", true);
        //npc.setDelay(1000);
        player.setLayerOn(300, "00", 0, 0, 1, "Effect/Direction22.img/effect/PF_two/0", 4, true, -1, false, 0, 0);
        //npc.setDelay(1500);


        player.setLayerOn(300, "01", 0, 0, 1, "Effect/Direction22.img/effect/PF_two/1", 4, true, -1, false, 0, 0);
        player.setLayerOff(300, "00");
        //npc.setDelay(500);

        player.setLayerMove(2000, "01", 410, 170);
        //npc.setDelay(2500);

        npc.setMonologue("#fs30##fn????#《远古弓》", false);
        npc.setMonologue("#fs20##fn????#\r\n\r\n\r\n\r\n\r\n被认为是普通刀具的遗物，原来是古代的弓。", false);
        npc.setMonologue("#fs20##fn????#受遗物的影响，可以释放出古代的力量。", true);

        player.setLayerOff(500, "01");
        //npc.setDelay(1000);

        player.setLayerOn(500, "02", 410, 170, 1, "Effect/Direction22.img/effect/PF_two/2", 4, true, -1, false, 0, 0);
        //npc.setDelay(1000);


        npc.setMonologue("#fs30##fn????#《诅咒烙印》", false);
        npc.setMonologue("#fs20##fn????#\r\n\r\n\r\n\r\n\r\n印在手上的烙印虽然变小了，但并未消失。", false);
        npc.setMonologue("#fs20##fn????#感觉那个东西在不断消耗生命力。", false);
        npc.setMonologue("#fs20##fn????#\r\n“必须尽快摆脱这个诅咒才行。”", true);
        player.setLayerOff(300, "02");
        player.setBGMVolume(0, 1000);
        //npc.setDelay(1500);
        player.changeBGM("Bgm00.img/Silence");
        player.setLayerBlind(true, 255, 0, 0, 0, 0, 2);
        //npc.setDelay(1200);
        //player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
        //npc.setDelay(1400);

        npc.setCameraZoom(4000, 1000, 4000, 169, -22);
        player.showTextEffect("#fn???? ExtraBold##fs18#几天后，帕勒坦遗迹附近", 1000, 6);
        //npc.setDelay(1200);
        player.setBGMVolume(50, 300);
        //npc.setDelay(300);
        player.changeBGM("Bgm51/TheVillageOfKarupa");
        //npc.setDelay(3000);
        npc.sayNextENoEsc("#face0#……又到这里来了吗？", 1013358);
        //npc.setDelay(1000);
        npc.sayNextENoEsc("#face6##b（事件是在遗迹中发生的，里面也许能找到解开诅咒的线索。\r\n但是入口紧闭着，无法进入。）#k", 1013358);
        npc.sayNextENoEsc("#face0##b（那现在能做的事情只有两样。\r\n寻找重新进入遗迹的方法，以及对周围进行调查。）#k", 1013358);
        //npc.setDelay(1000);
        npc.sayNextENoEsc("#face0#好的。在正式开始调查之前……\r\n要先准备一下吗？", 1013358);
        //npc.setDelay(1000);
        player.setOverlapDetail(0, 1000, 3000, true);
        npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);

        player.setOverlapDetail(0, 1000, 3000, true);
        npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);

        npc.setCameraMove(true, 0, false, 0, 0);
        //npc.setDelay(300);
        player.removeOverlapDetail(1000);
        npc.setCameraMove(true, 0, false, 0, 0);

        //player.setStandAloneMode(false);
        player.setInGameDirectionMode(false, true, false, false);
        player.completeQuest(35902, 0);

        player.startQuest(11620, 0, "0");
        while (player.getLevel() < 10) {
                player.gainExp(1024);
        }
        player.addPopupSay(9010000, 6000, "#b[向导] 1转#k\r\n\r\n已经达到10级，可以进行#b[1转]#k了！\r\n\r\n完成#r[转职]#k任务，进行1转吧！", "FarmSE.img/boxResult");
        player.updateQuestRecordEx(35947, "5", "1");
}