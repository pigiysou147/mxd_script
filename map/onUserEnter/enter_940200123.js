/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第三个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
//player.playAmbientSound("SoundEff.img/ArcaneRiver/night", 500, 100);
player.setLayerBlind(true, 255, 0);
player.spawnTempNpc(3003270, 0, 166);
player.setNpcSpecialAction(3003270, "ice", 9999999, false);
player.setVansheeMode(true); //隐身
npc.sayNextENoEsc("#face2#总觉得会发生事情…哪里怪怪的…总觉得有不好的预感…", 3003270);
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(2000);
//这里有个纹理处理。
npc.setCameraZoom(1, 2000, 10, 10, 150);
//npc.setDelay(300);
player.setLayerBlind(true, 200, 2000);
npc.setMonologue("就这样，路西德也被下了深邃的诅咒。\r\n", false);
npc.setMonologue("…仿佛无法给予任何安慰与承诺。\r\n", false);
npc.setMonologue("…犹如受困在冰块中但…唯独灵魂醒着。\r\n", false);
npc.setMonologue("操控梦的能力不过是一个残忍的刑罚罢了。\r\n", true);
//npc.setDelay(1000);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(1000);
player.changeMap(940200124, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);