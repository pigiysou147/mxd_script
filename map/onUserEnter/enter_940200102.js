/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第一个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
player.setVansheeMode(true); //隐身
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(500);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E1/2");
//player.soundEffect("Sound/SoundEff.img/ArcaneRiver/waterfall");
//npc.setDelay(400);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/arrow0");
//npc.setDelay(100);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/arrow1");
//npc.setDelay(100);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/arrow2");
npc.setCameraMove(false, 50, 200, 34);
//npc.setDelay(2000);
npc.sayNextENoEsc("#face1#很好！", 3003270);
//npc.setDelay(100);
npc.sayNextENoEsc("#face0#全部命中，露西德。我对你有很高的期待，你要加油哦！", 3003278);
//npc.setDelay(100);
npc.sayNextENoEsc("#face0#嘿嘿…双弩精灵…", 3003270);
//npc.setDelay(1000);
player.setLayerBlind(true, 255, 2000);
player.changeMap(940200103, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);