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


player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);

player.setLayerBlind(true, 255, 0);
player.removeAdditionalEffect();


player.setMapTagedObjectVisible("core0", 0);
player.setMapTagedObjectVisible("core1", 0);
player.setMapTaggedObjectAnimation("sand", 0);

player.spawnTempNpc(3001508, -2680, 263, 0);
player.spawnTempNpc(3001509, -2750, 263, 0);
player.spawnTempNpc(3001510, -2400, 263, 0);
player.setForcedFlip(-1);
////npc.setDelay(1000);

player.changeBGM("Bgm48.img/Doomsday_FULL");
player.setLayerOn(500, "2", 0, -10, 0, "Effect/Direction17.img/effect/ark/noise/1366/2", 4, true, -1, false, 0, 0);
player.setLayerOn(500, "2", 0, -10, 0, "Effect/Direction17.img/effect/ark/noise/1366/2", 4, true, -1, false, 0, 0);
////npc.setDelay(2500);
player.setLayerOn(1500, "d0", 0, -80, -1, "Effect/Direction17.img/effect/ark/illust/6/0", 4, true, -1, false, 0, 0);
////npc.setDelay(2000);
player.showTextEffect("#fn???? ExtraBold##fs35#为了战争的战争", 2100, 7);
////npc.setDelay(2600);
player.showTextEffect("#fn???? ExtraBold##fs35#英雄辈出", 2000, 7);
////npc.setDelay(2500);
player.showTextEffect("#fn???? ExtraBold##fs35#有太多的生命正在因为他而消失。", 4500, 7);
////npc.setDelay(5000);
player.showTextEffect("#fn???? ExtraBold##fs35#汇聚成一体的强大力量……", 3600, 7);
////npc.setDelay(4100);

player.showTextEffect("#fn???? ExtraBold##fs35#只有那个，才能终结这场混乱。", 4200, 7);
////npc.setDelay(4700);

player.showTextEffect("#fn???? ExtraBold##fs35#各位！", 2000, 7);
////npc.setDelay(2500);
player.showTextEffect("#fn???? ExtraBold##fs35#为了我们一族的使命，赌上你们的生命吧。", 5700, 7);
////npc.setDelay(6200);

player.showTextEffect("#fn???? ExtraBold##fs35#高等翼人会成为圣殿的执行者。", 5700, 7);
////npc.setDelay(4700);

player.setLayerOff(300, "d0");
player.setLayerOff(300, "2");
player.setLayerOff(300, "3");
////npc.setDelay(1500);
////npc.setDelay(2300);
player.showSpineScreen(0x100, "Effect/Direction17.img/effect/ark/fire/0/front_particle", "animation", "00");
player.showSpineScreen(0x100, "Effect/Direction17.img/effect/ark/fire/1/fire_particle_01", "animation", "01");
player.showSpineScreen(0x100, "Effect/Direction17.img/effect/ark/fire/2/fire_particle_02", "animation", "02");
////npc.setDelay(2000);
npc.setMonologue("#fs22##fn????#战乱不断的混乱时代", false);
player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/1");


player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/2");
npc.setMonologue("#fs22##fn????#\r\n纷飞的战火烧到了我的身边", false);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/3");
npc.setMonologue("#fs22##fn????#夺走了心爱的人的生命。", false);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/4");
npc.setMonologue("#fs22##fn????#\r\n当我陷入绝望之时，冥冥中听到了救赎之音", false);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/5");
npc.setMonologue("#fs22#\r\n\r\n\r\n#fn????# 「悲剧的终结」#fn??#―――――――――――――――――――――", true);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/6");
npc.setMonologue("#fs22##fn????#这双手好脏", false);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/7");
npc.setMonologue("#fs22##fn????#如果能切断那条锁链#fn??#――――――――――――――", false);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/8");
npc.setMonologue("#fs22##fn????#\r\n\r\n即使在无边无际的夜空的某个地方", false);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/9");
npc.setMonologue("#fs22##fn????#在不知名的某颗星星的战场上", false);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/10");
npc.setMonologue("#fs22##fn????#无声无息地消失", false);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/11");
npc.setMonologue("#fs22##fn????#\r\n我也会欣然接受这个结局", true);


////npc.setDelay(1000);
////npc.setDelay(2900);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Mono/A/Male/12");
player.showTextEffect("#fn???? ExtraBold##fs45#……我想了一下。", 2400, 4);

////npc.setDelay(2800);

////npc.setDelay(1000);

player.offSpineScreen("00", 0);
player.offSpineScreen("01", 0);
player.offSpineScreen("02", 0);
player.soundEffect("Sound/SoundEff.img/radionoise");
player.setLayerOn(500, "0", 0, -10, 0, "Effect/Direction17.img/effect/ark/noise/1366/0", 4, true, -1, false, 0, 0);
player.setLayerBlind(true, 255, 500);
////npc.setDelay(500);

////npc.setDelay(300);

player.setLayerOn(500, "2", 0, -10, 0, "Effect/Direction17.img/effect/ark/noise/1366/2",4, true, -1, false, 0, 0);
player.setLayerOn(500, "3", 0, -10, 0, "Effect/Direction17.img/effect/ark/noise/1366/3", 4, true, -1, false, 0, 0);
player.setLayerOff(300, "0");
////npc.setDelay(2500);

player.setLayerOn(500, "d1", 0, -80, -1, "Effect/Direction17.img/effect/ark/illust/0/0",4, true, -1, false, 0, 0);
////npc.setDelay(1000);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Back/A/Male/1");
player.showTextEffect("#fn???? ExtraBold##fs35#是因为决心还不够吗？", 3000, 7);
////npc.setDelay(3500);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Back/A/Male/2");
player.showTextEffect("#fn???? ExtraBold##fs35#不，也许这是注定的命运……", 3900, 7);
////npc.setDelay(4400);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Back/A/Male/3");
player.showTextEffect("#fn???? ExtraBold##fs35#他看穿了一切……", 2900, 7);
////npc.setDelay(2900);

player.playExclSoundWithDownBGM("Voice4.img/Ark/Back/A/Male/4");
player.showTextEffect("#fn???? ExtraBold##fs35#看来只能到此为止了……一切就这样结束了吗？", 6300, 7);
////npc.setDelay(6800);


////npc.setDelay(1000);

player.setLayerOff(300, "d1");
////npc.setDelay(1000);



player.playExclSoundWithDownBGM("Voice4.img/ArkNpc/Back/A/7");
player.showTextEffect("#fn???? ExtraBold##fs65#亚克！", 2900, 7);
////npc.setDelay(2500);


player.showSpineScreen(1, "Map/Effect2.img/HofM/ACT1_bye/whiteback2/skeleton", "animation");
////npc.setDelay(2000);

player.setLayerOn(1500, "d2", 0, -80, -1, "Effect/Direction17.img/effect/ark/illust/0/1", 4, true, -1, false, 0, 0);
////npc.setDelay(3000);


player.soundEffect("Sound/Voice4.img/Ark/Now/A/Male/3");
////npc.setDelay(2000);

player.setLayerOff(300, "d2");
player.setLayerOff(300, "2");
player.setLayerOff(300, "3");
player.soundEffect("Sound/SoundEff.img/radionoise");
player.setLayerOn(500, "0", 0, -10, 0, "Effect/Direction17.img/effect/ark/noise/1366/0", 4, true, -1, false, 0, 0);
player.setLayerBlind(true, 255, 1300);
////npc.setDelay(1600);

player.setBGMVolume(0, 2000);
////npc.setDelay(1600);


player.changeBGM("Bgm00.img/Silence");
player.setBGMVolume(-1, 1000);
player.setLayerOff(300, "0");
player.playAmbientSound("Ambience.img/blizzard_soft", 200, 60);
////npc.setDelay(1000);


npc.setCameraZoom(0, 1000, 0, 2, 0xB4);
player.setUserEmotionLocal(1, 999999);
player.setForcedAction(25, 999999);
player.showPlayerEffectPlay("Effect/Direction17.img/effect/ark/sand/back", 9999999, 0, 0, true, -120, false, 0);
player.showPlayerEffectPlay("Effect/Direction17.img/effect/ark/sand/front_0", 9999999, 0, 0, true, 1, false, 0);
player.showPlayerEffectPlay("Effect/Direction17.img/effect/ark/sand/wind", 10000, 0, 0, true, 2, false, 0);
player.setLayerBlind(true, 255, 0);


//player.setLayerBlind(false, 0, 1000);
////npc.setDelay(1400);

npc.setCameraZoom(0, 1000, 0, 2, 0xB4);

player.soundEffect("Sound/Voice4.img/Ark/Back/A/Male/9");

npc.sayNextENoEsc("#face1#我……是谁……", 3001500); //



////npc.setDelay(6000);

player.soundEffect("Sound/SoundEff.img/ark/wind");
player.showPlayerEffectPlay("Effect/Direction17.img/effect/ark/sand/wind", 0, 0, 0, true, 2, false, 0);
////npc.setDelay(500);



player.showPlayerEffectPlay("Effect/Direction17.img/effect/ark/sand/front_1", 0, 0, 0, true, 1, false, 0);
player.showPlayerEffectPlay("Effect/Direction17.img/effect/ark/sand/wind", 0, 0, 0, true, 2, false, 0);
////npc.setDelay(500);

player.showPlayerEffectPlay("Effect/Direction17.img/effect/ark/sand/front_1", 0, 0, 0, true, 1, false, 0);
player.showPlayerEffectPlay("Effect/Direction17.img/effect/ark/sand/wind", 0, 0, 0, true, 2, false, 0);
////npc.setDelay(500);


npc.setCameraZoom(3000, 1500, 3000, 250, -50);



player.setOverlapDetail(0, 300, 300, true);
////npc.setDelay(300);




player.removeOverlapDetail(300);
npc.setCameraZoom(0, 1500, 0, -2350, -50);
player.teleportToPos(3, player.getId(), new java.awt.Point(-1200, 200));
player.setMapTaggedObjectAnimation("sand", 0x200);
player.setNpcForceMove(3001508, 1, 1050, 80);
player.setNpcForceMove(3001509, 1, 1050, 80);
player.setNpcForceMove(3001510, 1, 1050, 80);






player.soundEffect("Sound/SoundEff.img/cadena/energy_running2");
npc.setCameraZoom(3000, 1000, 3000, -2300, 180);


player.soundEffect("Sound/SoundEff.img/ark/flare_ready");
////npc.setDelay(3000);

npc.setCameraZoom(17000, 1000, 17000, -1050, 180);
player.soundEffect("Sound/SoundEff.img/ark/flare_ready");




player.soundEffect("Sound/SoundEff.img/cadena/energy_running2");
npc.sayNextENoEsc("#face3#前天，昨天，今天！一直在寻找，但是！", 3001509);

npc.sayNextENoEsc("#face4#嘿，但是！", 3001509);

player.soundEffect("Sound/SoundEff.img/ark/flare_ready");
npc.sayNextENoEsc("#face3#东西南北，上下，左右！找得头都大了，但是！", 3001509);

npc.sayNextENoEsc("#face4#嘿，但是！", 3001509);


player.soundEffect("Sound/SoundEff.img/ark/flare_ready");
npc.sayNextENoEsc("#face3#没有，没有，没有！就像是命运之墙在阻挡我们？", 3001509);


npc.sayNextENoEsc("#face4#明天，后天，大后天！我要找到天涯海角！", 3001509);



player.soundEffect("Sound/SoundEff.img/cadena/energy_running2");
npc.sayNextENoEsc("#face0#咳，咳……", 3001509);



player.soundEffect("Sound/SoundEff.img/ark/flare_ready");
////npc.setDelay(500);


player.soundEffect("Sound/SoundEff.img/ark/flare_ready");
npc.sayNextENoEsc("#face0#叽，叽勒……噪音终于停止了吗……啊，终于可以集中精神听电波了，叽勒。", 3001510);

npc.setCameraZoom(1000, 1000, 1000, -1200, 180);
player.setNpcForceMove(3001509, 1, 50, 90);


npc.sayNextENoEsc("#face1#咳，咳……你，你说什么……噪音？\r\n你是看不起我巴克巴克唱的劳动歌谣吗？", 3001509);



npc.sayNextENoEsc("#face0#妨碍了劳动，就不是劳动歌谣，叽勒。", 3001510);

npc.setCameraZoom(1000, 2000, 1000, -1500, 320);

npc.sayNextENoEsc("#face1#我可以忍受别人骂我但骂我的音乐就算天塌下来我也忍不了很好来吧总有一天我们要做个了断那个时刻好像就是现在觉悟吧这里就是你的葬身之地！", 3001509);


npc.setCameraZoom(1000, 1000, 1000, -1200, 180);
player.setNpcForceMove(3001510, -1, 1, 50);



////npc.setDelay(1000);
npc.sayNextENoEsc("#face0#你这个音痴，就像爆炸之前的锅盖一样，叽勒……叽勒楞。", 3001510);

npc.sayNextENoEsc("#face1#你这个只知道电波的傻瓜！", 3001509);


npc.sayNextENoEsc("#face2#嗯，喂……孩子们……又在吵架呢……\r\n朋友之间吵架可不好哦……", 3001508);

npc.sayNextENoEsc("#face3#你们俩握握手，就当和解了吧……闭上眼睛，来，一，二……", 3001508);


////npc.setDelay(300);



player.setNpcForceFlip(3001508, 1);
////npc.setDelay(500);

player.setNpcForceFlip(3001508, -1);
////npc.setDelay(500);

player.setNpcForceFlip(3001508, 1);
////npc.setDelay(500);


player.setNpcForceFlip(3001508, -1);
////npc.setDelay(500);

player.setNpcForceFlip(3001508, 0);
npc.sayNextENoEsc("#face3#别以为我好欺负，锅盖……不要小看电波探测，叽勒！", 3001510);
npc.sayNextENoEsc("#face1#让你见识一下爆，爆破，爆炸↗", 3001509);

npc.sayNextENoEsc("#face3#呜呜，呜呜呜……呜……呜呜……", 3001508);

npc.sayNextENoEsc("#face2#都是我的错……都怪我这个队长没用，你们才会打架……\r\n到今天都没什么成果，全都是因为我……", 3001508);
npc.sayNextENoEsc("#face0#叽，叽勒……叽勒楞……", 3001510);

npc.sayNextENoEsc("#face0#……", 3001509);

npc.sayNextENoEsc("#face0#好吧，停手吧……我错了，叽勒。", 3001510);

npc.sayNextENoEsc("#face3#只，只是那家伙和我的音乐见解有点不同罢了……", 3001509);

npc.sayNextENoEsc("#face3#早上的占卜结果很不好……\r\n在这种情况下仍然出来探索，是个失误。真对不起……", 3001508);

player.setNpcForceMove(3001508, 1, 60, 120);
////npc.setDelay(1000);

player.setNpcForceMove(3001508, -1, 30, 120);
////npc.setDelay(1000);


player.setNpcForceFlip(3001508, 1);
////npc.setDelay(500);

player.setNpcForceFlip(3001508, -1);
////npc.setDelay(500);

player.setNpcForceFlip(3001508, 1);
////npc.setDelay(500);



player.setNpcForceFlip(3001508, -1);
////npc.setDelay(500);

player.setNpcForceFlip(3001508, 1);
////npc.setDelay(500);


player.showPlayerEffectPlay("Effect/Direction17.img/effect/ark/sand/wind", 999999, 0, 0, true, 2, false, 0);
player.setMapTaggedObjectAnimation("sand", 0);
////npc.setDelay(300);


player.setNpcForceMove(3001508, -1, 10, 100);
npc.sayNextENoEsc("#face2#啊，嗯！？", 3001508);

////npc.setDelay(2000);

player.setNpcForceMove(3001508, -1, 5, 100);
////npc.setDelay(1000);


npc.sayNextENoEsc("#face3#妮雅啊啊啊啊啊啊啊啊啊啊", 3001508);



npc.setCameraZoom(1000, 2000, 1000, -1350, -400);


npc.sayNextENoEsc("#face0#哇哦……", 3001509);

npc.sayNextENoEsc("#face2#这个……是个未知的生命体。", 3001510);

////npc.setDelay(3000);

player.setOverlapDetail(0, 1000, 3000, true);
npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);

npc.setCameraMove(true, 0, 0, 0);

////npc.setDelay(300);


player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, 0, 0);


player.setInGameDirectionMode(false, true, false, false);
player.destroyTempNpc(3001508);
player.destroyTempNpc(3001509);
player.destroyTempNpc(3001510);
player.setInGameCurNodeEventEnd(true);

for (let i = 0; player.getLevel() < 10; i++) {
        player.gainExp(500);
}
player.changeMap(402000600, 0);








