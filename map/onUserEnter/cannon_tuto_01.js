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



player.setInGameDirectionMode(true, false, true, false);
//player.setStandAloneMode(true);
player.setInGameCurNodeEventEnd(true);
player.showBlindEffect(true);
////npc.setDelay(100);

player.spawnTempNpc(1096000, 2209, -107, 1);
player.setNpcSpecialAction(1096000, "summon", 0, false);
//player.setForcedInput(2);
////npc.setDelay(100);

npc.sayNextNoEsc("你为什么要离开这里，到冒险岛去？从这里去冒险岛的人并不多……而且看你的打扮，好像不是单纯去旅行的。", 1096000);
player.showReservedEffect("Effect/Direction4.img/cannonshooter/face03");
npc.sayNextSNoEsc("想到冒险岛去继续修炼。听说在那里修炼之后，再到金银岛去，就能成为帅气的冒险家。");
npc.sayNextNoEsc("哦，你知道得很清楚嘛。为了成为冒险家，第一步最好在冒险岛开始。那里有很多其他地方来的新手，可以和他们交朋友，同时那里也没什么危险的怪物。但是在这之后才是冒险的真正开始。在金银岛和神秘岛之类的大路上，到处都是你难以想象的强大怪物。当然，那里也更好玩。", 1096000);
npc.sayNextSNoEsc("强大的怪物！那是成为帅气冒险家的必要因素。只要勤于修行，就可以让自己变得更强，因此我一定要努力修炼。在出发之前，我做了很多功课。我是有准备的冒险家，哈哈哈！");
npc.sayNextNoEsc("哦，还挺有自信的。是的，决心是最最重要的。但是以后不知道会发生什么事！但是不管发生什么事，只要牢记#b不怕入蝙蝠怪洞穴,只要不慌神#k这句俗话，就可以战胜一切困难。", 1096000);
npc.sayNextNoEsc("等等……？你有没有听到什么声音？我感觉到了奇怪的气息……这里应该是没有怪物的和平海域啊……小心！", 1096000);
//player.setForcedInput(2);
player.showBalloonMsg("在这种和平的地方，到底发生了什么事？", 100, 3, null);
player.setInGameCurNodeEventEnd(true);
////npc.setDelay(2000);

player.spawnTempNpc(1096011, 2000, -20, 0);
player.setNpcSpecialAction(1096011, "summon", 0, false);
player.showNpcEffectPlay(1096011, "Effect/Summon.img/15", 0, 0, 0, true, 0, false, 0);
player.soundEffect("cannonshooter/summond");
////npc.setDelay(2000);

player.destroyTempNpc(1096011);
player.destroyTempNpc(1096000);

player.spawnTempNpc(1096008, 2000, -20, 0);
player.setNpcSpecialAction(1096008, "summon", 0, false);
player.spawnTempNpc(1096002, 2110, -82, 1);
player.setNpcSpecialAction(1096002, "summon", 0, false);
player.showNpcEffectPlay(1096008, "Effect/Direction4.img/effect/cannonshooter/balog/0", 2000, 0, -200, true, 0, false, 0);
////npc.setDelay(500);

player.setNpcSpecialAction(1096008, "attack2", 0, false);
////npc.setDelay(1000);

player.showNpcEffectPlay(1096002, "Effect/Direction4.img/effect/cannonshooter/npc/0", 2000, 0, -160, true, 0, false, 0);
player.setNpcSpecialAction(1096008, "attack1", 0, false);
////npc.setDelay(1000);

player.soundEffect("Party1/Failed");
player.showPlayerEffectPlay("Effect/Direction4.img/effect/cannonshooter/User/0", 2000, 0, -100, true, 0, false, 0);

//player.setForcedInput(2);
////npc.setDelay(150);

//player.setForcedInput(0);
////npc.setDelay(1000);

player.showReservedEffect("Effect/Direction4.img/cannonshooter/face02");
player.setNpcSpecialAction(1096008, "attack2", 0, false);
player.showNpcEffectPlay(1096002, "Effect/Direction4.img/effect/cannonshooter/npc/1", 2000, 0, -160, true, 0, false, 0);
////npc.setDelay(500);

player.showReservedEffect("Effect/Direction4.img/cannonshooter/face02");
player.showPlayerEffectPlay("Effect/Direction4.img/effect/cannonshooter/User/1", 2000, 0, -100, true, 0, false, 0);
////npc.setDelay(1000);

player.showReservedEffect("Effect/Direction4.img/cannonshooter/face05");
//player.setForcedInput(0);
////npc.setDelay(100);

player.showReservedEffect("Effect/Direction4.img/cannonshooter/face05");
player.setNpcSpecialAction(1096008, "attack2", 0, false);
player.soundEffect("Attack1cannonshooter/Attack1");
////npc.setDelay(100);

player.showReservedEffect("Effect/Direction4.img/cannonshooter/face05");
////npc.setDelay(1000);

player.setNpcSpecialAction(1096008, "attack1", 0, false);
player.showNpcEffectPlay(1096008, "Effect/Direction4.img/effect/cannonshooter/balog/0", 2000, 0, -200, true, 0, false, 0);
player.showNpcEffectPlay(1096008, "Mob/8150000.img/attack2/info/effect", 0, 0, 0, true, 0, false, 0);
player.soundEffect("Attack1cannonshooter/Attack1");
////npc.setDelay(1000);

player.showPlayerEffectPlay("Mob/8150000.img/attack2/info/hit", 0, 0, 0, false, 0, false, 0);
player.showPlayerEffectPlay("Effect/Direction4.img/effect/cannonshooter/User/2", 2000, 0, -100, true, 0, false, 0);
//player.setForcedInput(6);
player.showReservedEffect("Effect/Direction4.img/cannonshooter/face02");
////npc.setDelay(500);

//player.setForcedInput(0);
player.showReservedEffect("Effect/Direction4.img/cannonshooter/face02");
////npc.setDelay(500);

player.setNpcSpecialAction(1096008, "attack2", 0, false);
player.showNpcEffectPlay(1096008, "Mob/8150000.img/attack1/info/effect", 0, 0, 0, true, 0, false, 0);
player.showReservedEffect("Effect/Direction4.img/cannonshooter/face02");
////npc.setDelay(500);

player.showPlayerEffectPlay("Mob/8130100.img/attack1/info/hit", 0, 0, 0, true, 0, false, 0);
player.soundEffect("Attack1cannonshooter/Attack1");
player.showBalloonMsg("怎么会这样？？！", 100, 3, null);
//player.setForcedInput(6);
player.showReservedEffect("Effect/Direction4.img/cannonshooter/face01");
////npc.setDelay(500);

player.showNpcEffectPlay(1096008, "Mob/8130100.img/attack1/info/effect", 0, 0, 0, false, 0, false, 0);
//player.setForcedInput(2);
////npc.setDelay(200);

//player.setForcedInput(1);
////npc.setDelay(200);

//player.setForcedInput(2);
////npc.setDelay(200);

//player.setForcedInput(1);
////npc.setDelay(200);

//player.setForcedInput(2);
////npc.setDelay(200);

//player.setForcedInput(1);
////npc.setDelay(200);

//player.setForcedInput(2);
////npc.setDelay(150);

//player.setForcedInput(0);
////npc.setDelay(500);

player.setNpcSpecialAction(1096008, "attack", 0, false);
player.soundEffect("cannonshooter/Attack2");

player.showNpcEffectPlay(1096008, "Effect/Direction4.img/effect/cannonshooter/balog/1", 2000, 0, -200, true, 0, false, 0);
////npc.setDelay(300);

//player.setForcedInput(2);
player.showPlayerEffectPlay("Effect/Direction4.img/effect/cannonshooter/User/3", 2000, 0, -100, true, 0, false, 0);
player.showReservedEffect("Effect/Direction4.img/cannonshooter/face02");
////npc.setDelay(2000);

player.setNpcSpecialAction(1096008, "stand", 0, false);
player.destroyTempNpc(1096008);
player.destroyTempNpc(1096002);


player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.changeMap(912060100, 0);

