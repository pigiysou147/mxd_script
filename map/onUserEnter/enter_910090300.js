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
player.setVansheeMode(true);
player.changeBGM("Bgm51.img/Pathfinder");
//npc.setDelay(4000);

player.setLayerOn(100, "00", 0, -8, 1, "Effect/Direction22.img/effect/PF_lab/0", 4, true, -1, false, 0, 0);
player.soundEffect("Sound/SoundEff.img/pathfinder/door");
//npc.setDelay(5500);

player.setLayerBlind(true, 255, 240, 240, 240, 1300, 2);
//npc.setDelay(1600);

player.setLayerOff(500, "00");
//npc.setDelay(1000);

player.setLayerBlind(true, 255, 240, 240, 240, 0, 2);
//npc.setDelay(1200);

//player.setLayerBlind(false, 0, 1000);
//npc.setDelay(1400);

player.setLayerOn(500, "01", 0, -80, -12, "Effect/Direction22.img/effect/PF_lab/1", 4, true, -1, false, 0, 0);
player.soundEffect("Sound/SoundEff.img/blackHeaven/secretmission3");
//npc.setDelay(2000);

player.setLayerOn(500, "02", 0, -80, 1, "Effect/Direction22.img/effect/PF_lab/2",4, true, -1, false, 0, 0);
player.setLayerOff(500, "01");
//npc.setDelay(1000);

npc.sayNextENoEsc("#face3#没想到荒山中竟然有这种路。", 1013358);
npc.sayNextENoEsc("#face1#到底通往什么地方呢？真是越来越让人好奇了。", 1013358);

player.setLayerOn(500, "03", 0, -80, 1, "Effect/Direction22.img/effect/PF_lab/3",4, true, -1, false, 0, 0);
player.setLayerOff(500, "02");
//npc.setDelay(1000);


npc.sayNextENoEsc("#face0#看来已经很久没人来了。\r\n至少有几百年，甚至更久远。", 1013358);
npc.sayNextENoEsc("#face0#是什么人隐藏起来的秘密通道吗？\r\n或者只是过了很长时间而被人遗忘的场所？", 1013358);

//npc.setDelay(1000);
npc.sayNextENoEsc("#face1#哦……看到尽头了。", 1013358);

player.setLayerOff(500, "03");
player.setLayerOn(500, "04", 0, -80, 1, "Effect/Direction22.img/effect/PF_lab/4",4, true, -1, false, 0, 0);
npc.sayNextENoEsc("#face0#这个地方过去好像是什么人的研究室。", 1013358);
npc.sayNextENoEsc("#face0#研究的古代文献和遗物，年代好像都非常久远。", 1013358);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face6#确实都是古代的东西。", 1013358);
npc.sayNextENoEsc("#face1#呵呵……竟然还有人对古代遗物感兴趣。\r\n跟我估计很谈得来。", 1013358);
npc.sayNextENoEsc("#face3#但是那幅插图……", 1013358);
player.setLayerOff(500, "04");
player.setLayerOn(500, "05", 0, -80, -12, "Effect/Direction22.img/effect/PF_lab/5", 4, true, -1, false, 0, 0);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#画的好像是古代的遗迹。", 1013358);
//npc.setDelay(500);

npc.sayNextENoEsc("#face2#很久以前的研究室，以及比它更久远的遗物和资料……\r\n给人一种危险的感觉。", 1013358);
//npc.setDelay(1000);

npc.sayNextENoEsc("#face1#呵呵……真想快点确认一下。", 1013358);

npc.sayNextENoEsc("#face1#那里还会有什么有趣的遗物在等待着我呢？", 1013358);
//npc.setDelay(500);

//npc.setDelay(npc.setCameraZoom(2500, 2000, 2500, 0, 0));
player.setLayerMove(2000, "05", 85, 50);
//npc.setDelay(2500);

player.setOverlapDetail(0, 1000, 3000, true);
npc.setCameraZoom(0, 1000, 2500, 2147483647, 2147483647);

npc.setCameraMove(true, 0, false, 0, 0);
//npc.setDelay(300);
player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, false, 0, 0);


//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, true, false, false);

player.changeMap(910090301, 0);
