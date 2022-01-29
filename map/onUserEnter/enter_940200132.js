/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第四个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
player.spawnTempNpc(3003270, 0, 166);
player.setNpcSpecialAction(3003270, "ice", 9999999, false);
player.setVansheeMode(true); //隐身
npc.setCameraZoom(1, 2000, 0, 10, -50);
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
npc.setCameraMove(false, 500, 20, 330);
//npc.setDelay(1000);
//这里有个纹理处理。
npc.sayNextENoEsc("#face1#完全的破坏…新世界…我无法想象那些事情…", 3003270);
//npc.setDelay(500);
npc.sayNextENoEsc("#face1#描绘出先前从未想过的事情…我的头仿佛要炸裂开来了！", 3003270);
//npc.setDelay(500);
player.setNpcSpecialAction(3003270, "ice_break", 0, true);
//npc.setDelay(1500);
player.showSpineScreen(0, "Map/Effect3.img/BossLucid/butterfly2/buterfly", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/butterfly1");
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(4000);
player.changeMap(940200133, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);