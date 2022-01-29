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
npc.setCameraZoom(0, 1000, 0, -46, 124);
player.spawnTempNpc(3003273, -46, 274);
player.setNpcSpecialAction(3003273, "sleep2", 9999999, true);
//npc.setDelay(1000);
//player.setLayerBlind(false, 255, 2000);
//npc.setDelay(1000);
npc.setCameraZoom(1000, 2000, 1000, -46, 294);
player.setNpcSpecialAction(3003273, "awake2", 9999999, true);
//npc.setDelay(3000);
player.setLayerOn(500, "11", 0, 0, -1, "Map/Effect2.img/BlackOut", 4, true, -1, false, 0, 0);
player.setLayerOn(500, "0", 0, 0, -1, "Map/Effect3.img/Lacheln/episode", 4, true, -1, false, 0, 0);
player.soundEffect("Sound/SoundEff.img/heart");
//npc.setDelay(3000);
player.setLayerOff(300, "11");
player.setLayerOff(300, "0");
//npc.setDelay(1000);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E4/0");
npc.sayNextENoEsc("#face1#啊啊…啊啊…这冰凉的感觉…这才是现实…那么刚刚的那一切…", 3003250);
//npc.setDelay(500);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E4/1");
npc.sayNextENoEsc("#face1#一定是梦境，如果真的是梦境的话一切都会按照我的指示走…怎么会…", 3003250);
//npc.setDelay(500);
npc.sayNextENoEsc("#face1#……", 3003250);
//npc.setDelay(500);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E4/2");
npc.sayNextENoEsc("#face1#阿，原来是这样。", 3003250);
//npc.setDelay(500);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E4/3");
npc.sayNextENoEsc("#face1#阿，呼呼。", 3003250);
//npc.setDelay(500);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E4/4");
npc.sayNextENoEsc("#face3#哈哈，哈，哈哈哈。", 3003250);
//npc.setDelay(500);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E4/5");
npc.sayNextENoEsc("#face3#是阿，都是噩梦一场，尽情吞噬掉我也没关系。", 3003250);
//npc.setDelay(500);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E4/6");
npc.sayNextENoEsc("#face5#…不过现在还不是时候，在我伟大的黑魔法师回心转意之前…在哪之前你愿意静静的跟着我吗？", 3003250);
//npc.setDelay(500);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E4/7");
npc.sayNextENoEsc("#face5#在整个天地都变成一场美梦之前…必须要继续举行庆典。", 3003250);
//npc.setDelay(1000);
player.showSpineScreen(1, "Map/Effect3.img/BossLucid/butterfly/005", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/butterfly0");
//npc.setDelay(2000);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(6000)
player.changeMap(450003000, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);