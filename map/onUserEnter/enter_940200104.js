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
player.spawnTempNpc(3003270, 108, 244);
player.setNpcForceFlip(3003270, -1);
player.setNpcSpecialAction(3003270, "sleep", 9999999, false);
player.setVansheeMode(true); //隐身
npc.setCameraMove(false, 9999, 108, 490);
npc.setCameraZoom(10, 1700, 500, 108, 244);
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(1000);
//这里有个纹理处理。
player.setNpcSpecialAction(3003270, "sleep", 0, true);
//player.setNpcSpecialAction(3003270, "stand", 9999999, false);
//npc.setDelay(200);
npc.sayNextENoEsc("#face0#又是那个梦，现实般的一场梦…可以按照我想的…", 3003270);
npc.sayNextENoEsc("#face2#按照想的…嗯。等等，如果说刚刚是场梦的话也太真实了吧！那个温度、触感…什么啊，我到底做了什么？", 3003270);
//npc.setDelay(200);
player.setNpcForceMove(3003270, -1, 80, 200);
npc.setCameraMove(false, 100, 0, 490);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#梦境全部按照我的想法…我支配了梦！", 3003270);
npc.sayNextENoEsc("#face0#支配梦的能力…这是我专属的能力！", 3003270);
npc.setCameraZoom(5000, 500, 5000, 0, -800);
npc.setCameraMove(false, 500, 0, -800);
//npc.setDelay(2500);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(1000);
player.changeMap(940200105, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);