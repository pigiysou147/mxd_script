/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第一个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.playAmbientSound("SoundEff.img/ArcaneRiver/night", 500, 100);
player.setLayerBlind(true, 255, 0);
//npc.setCameraZoom(1700, 980, 500, 0, -500);
npc.setCameraMove(false, 999999, 0, -500);
player.spawnTempNpc(3003270, -261, 244);
player.setNpcForceFlip(3003270, 1);
player.setVansheeMode(true); //隐身
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(1000);
npc.setCameraMove(false, 200, false, 0, 400);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/arrow0");
//npc.setDelay(700);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/arrow1");
//npc.setDelay(700);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/arrow2");
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E1/0");
npc.sayNextENoEsc("#face1#哈！", 3003270);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E1/1");
npc.sayNextENoEsc("#face2#呀！", 3003270);
//npc.setCameraZoom(0, 9999999, 500, -121, -5);
//npc.setDelay(100);
player.setNpcForceMove(3003270, 1, 313, 200);
//npc.setDelay(2500);
npc.sayNextENoEsc("#face2#不是吧…就因为这样所以不会赢吧…你说这样叫做练习？骗人的吧！", 3003270);
npc.sayNextENoEsc("#face3#…练习也没用啦。如果我也有过人的超能力…那样的话…", 3003270);
npc.sayNextENoEsc("#face3#呜哇…", 3003270);
player.setNpcSpecialAction(3003270, "sleep", 9999999, true);
npc.setCameraZoom(10, 1700, 500, 0, 244);
//npc.setDelay(1000);
//这里有个纹理处理。
npc.setCameraMove(false, 30, 110, 490);
//npc.setCameraZoom(0, 1700, 500, -121, -5);
//npc.setDelay(2500);
player.setLayerBlind(true, 255, 2000);
player.changeMap(940200102, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);