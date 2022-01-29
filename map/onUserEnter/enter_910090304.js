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

player.changeBGM("Bgm51.img/ThePartemRuins");
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.removeAdditionalEffect();
player.setVansheeMode(true);
npc.sayNextENoEsc("#face4#呃……呃呃……", 1013358);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face4#差不多……到了……", 1013358);
//npc.setDelay(500);
player.showTextEffect("#fn???? ExtraBold##fs18#片刻后，大本营", 1000, 6);
//npc.setDelay(4500);

player.soundEffect("Sound/SoundEff.img/pathfinder/down");
//npc.setDelay(1000);

player.setLayerOn(500, "00", 0, -80, -1, "Effect/Direction22.img/effect/PF_baseC/0", 4, true, -1, false, 0, 0);

npc.sayNextENoEsc("#face4#呼……呼……", 1013358);
//npc.setDelay(1000);


npc.sayNextENoEsc("#face5##b（感觉身体在燃烧，好痛苦。\r\n到底……我到底发生了什么事 ……那种不祥的气息到底是什么。）#k", 1013358);

npc.sayNextENoEsc("#face5##b（因为触碰了遗物？……难道是古代遗物的诅咒？）#k", 1013358);
player.setLayerOff(500, "00");
player.setLayerOn(500, "01", 0, -80, -1, "Effect/Direction22.img/effect/PF_baseC/1", 4, true, -1, false, 0, 0);

npc.sayNextENoEsc("#face5##b（老师的忠告是对的。\r\n是的，好奇心往往会伴随着危险……）#k", 1013358);

player.setLayerOn(500, "02", 0, -80, -1, "Effect/Direction22.img/effect/PF_baseC/2", 4, true, -1, false, 0, 0);

//npc.setDelay(2000);

player.setLayerOff(500, "02");
player.setLayerOn(500, "03", 0, -80, -1, "Effect/Direction22.img/effect/PF_baseC/3", 4, true, -1, false, 0, 0);
//npc.setDelay(3000);

npc.sayNextENoEsc("祝贺你，#b#ho##k。现在你终于要离开我的怀抱，踏上自己的冒险之路了。", 3003658);

npc.sayNextENoEsc("相信你一定可以谱写出属于自己的传说。", 3003658);
npc.sayNextENoEsc("因为你是我见过好奇心最强、最勇敢的冒险家。", 3003658);
npc.sayNextENoEsc("但是……", 3003658);
//npc.setDelay(1000);
npc.sayNextENoEsc("这一点同时也让我有点担心。", 3003658);
npc.sayNextENoEsc("好奇心可以成为照亮新道路的火把，\r\n但偶尔也会成为招致灾难的火种。", 3003658);

npc.sayNextENoEsc("冒险家，请你记住。\r\n好奇心的背后隐藏着危险。", 3003658);
npc.sayNextENoEsc("必须保持警惕，时刻提醒自己……", 3003658);
player.setLayerOff(500, "03");
//npc.setDelay(1500);
player.setLayerOn(1500, "04", 0, -80, -1, "Effect/Direction22.img/effect/PF_baseC/2", 4, true, -1, false, 0, 0);
//npc.setDelay(2000);

player.setLayerOff(300, "01");
//npc.setDelay(500);
player.setLayerOff(3000, "04");
//npc.setDelay(1500);


npc.sayNextENoEsc("#face5#但是……我……", 1013358);
//npc.setDelay(1500);
player.setOverlapDetail(0, 1000, 3000, true);
npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);

npc.setCameraMove(true, 0, false, 0, 0);
//npc.setDelay(300);
player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, false, 0, 0);

//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, true, false, false);
player.changeMap(910090305, 0);

