/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第六个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
player.setVansheeMode(true); //隐身
npc.setCameraZoom(0, 2000, 0, -410, 274);
player.spawnTempNpc(3003273, -710, 274);
player.setNpcForceFlip(3003273, 1);
//npc.setDelay(1000);
//player.setLayerBlind(false, 255, 2000);
//npc.setDelay(1000);
npc.setCameraMove(false, 50, -100, 550);//275横着
//npc.setDelay(1000);
player.setNpcForceMove(3003273, 1, 600, 150);
//npc.setDelay(7000);
npc.sayNextENoEsc("#face6#终于完成了，我梦中的都市，拉克兰！", 3003250);
npc.sayNextENoEsc("#face6#全都准备完毕，现在即将…", 3003250);
npc.sayNextENoEsc("#face1#……", 3003250);
//npc.setDelay(1000);
player.showNpcEffectPlay(3003273, "Effect/OnUserEff.img/emotion/oh", 900, 0, 0, false, 0, false, 0);
player.setNpcSpecialAction(3003273, "sleep", 0, true);
//npc.setDelay(1000);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/glass");
//npc.setDelay(500);
player.setNpcSpecialAction(3003273, "sleep2", 9999999, true);
//npc.setDelay(3000);
player.setLayerBlind(true, 255, 500);
//npc.setDelay(1000);
player.changeMap(940200151, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);