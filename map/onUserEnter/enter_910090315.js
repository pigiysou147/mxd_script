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
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.removeAdditionalEffect();
npc.setCameraZoom(0, 1000, 0, -62, 1383);
player.setMapTagedObjectVisibleEx("0", 0);
//npc.setDelay(1000);
player.showTextEffect("#fn???? ExtraBold##fs18#勇士部落南部", 1000, 6);

npc.setCameraZoom(4000, 1000, 4000, -283, 1900);
//npc.setDelay(4500);
npc.sayNextENoEsc("#face3##b（为什么要把我引导到这里呢？\r\n啊，遗物之光指向了前方。再往前走一点吧。）#k", 1013358);
//npc.setDelay(500);
npc.setCameraZoom(3000, 1000, 3000, 100, 2059);
player.setForcedMove(2, 270);
//npc.setDelay(3500);
player.setOverlapDetail(0, 1000, 3000, true);
npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);



npc.setCameraMove(true, 0, false, 0, 0);
//npc.setDelay(300);
player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, false, 0, 0);
player.setMapTagedObjectVisibleEx("0", 1);
npc.setCameraZoom(0, 1000, 0, 100, 2059);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face3#跟遗迹中见到的东西一模一样。遗物是想让我找到这个吗……", 1013358);

npc.sayNextENoEsc("#face0##b（感觉到一股强大的能量传到了遗物中。\r\n最初触碰遗物时感觉到的……那种奇怪的力量。）#k", 1013358);
player.setLayerBlind(true, 255, 240, 240, 240, 1300, 2);
//npc.setDelay(1600);
//npc.setDelay(1000);
player.setLayerOn(500, "00", 0, 0, 1, "Effect/Direction22.img/effect/PF_34job/0", 4, true, -1, false, 0, 0);
//npc.setDelay(1000);

player.showTextEffect("#fn???? ExtraBold##fs35##d呼呼……终于找到了。#k", 3600, 7);
//npc.setDelay(4100);
player.showTextEffect("#fn???? ExtraBold##fs35##d重现古代之力的可能性。#k", 3900, 7);
//npc.setDelay(4400);
//npc.setDelay(500);
player.showTextEffect("#fn???? ExtraBold##fs35##d原来在这里也有。#k", 3000, 7);
//npc.setDelay(3500);

player.setLayerOff(300, "00");
player.setLayerBlind(true, 255, 240, 240, 240, 0, 2);

//npc.setDelay(1200);
//player.setLayerBlind(true, 0, 0, 0, 0, 1000, 0);//npc.setDelay(1400);
//npc.setDelay(500);

npc.sayNextENoEsc("#face0##b（感觉古代之力逐渐充满，然后进入了遗物。\r\n但是……和力量一起潜入的残像，到底是……）#k", 1013358);
npc.sayNextENoEsc("#face0##b（穿着黑袍的怪人。场所是发现遗迹插图的地方。\r\n他就是研究室的主人吗？）#k", 1013358);

//npc.setDelay(500);
npc.sayNextENoEsc("#face0#再过去看看吧。到隐秘的研究室去。", 1013358);

//npc.setDelay(500);
player.setLayerBlind(true, 255, 0, 0, 0, 500, 2);
//npc.setDelay(500);
//npc.setDelay(1000);
player.setLayerOn(500, "04", 0, -80, 1, "Effect/Direction22.img/effect/PF_lab/4", 4, true, -1, false, 0, 0);
npc.sayNextENoEsc("#face0##b（重新翻找了一下，但都是以前见过的东西。\r\n关于他在遗迹中举行了什么仪式，没有找到任何相关的线索。）#k", 1013358);
npc.sayNextENoEsc("#face6##b（可以肯定的是，他也拥有古代之力。\r\n而且很可能是来自异次元的人。）#k", 1013358);

//npc.setDelay(1000);

npc.sayNextENoEsc("#face0##b（另外，撰写<古代之力和冒险岛世界>的研究书籍的作者的名字。\r\n就是……）#k", 1013358);
player.setLayerOff(500, "04");
//npc.setDelay(1500);

player.showTextEffect("#fn???? ExtraBold##fs35#《奇拉》", 2000, 7);
//npc.setDelay(2500);
player.startQuest(35931, 0);
//npc.setDelay(1500);



player.setOverlapDetail(0, 1000, 3000, true);
npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);

npc.setCameraMove(true, 0, false, 0, 0);
//npc.setDelay(300);
player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, false, 0, 0);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, true, false, false);
player.changeMap(player.getIntQuestRecordEx(35931, "rMap"), 0);
        