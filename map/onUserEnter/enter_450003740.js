/*  This is mada by Yanran    
 *
 *  [拉克兰]路西德寻找的噩梦 对话
 *
 *  @Author Yanran
 */
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.spawnTempNpc(3003257, -183, 37);
player.setNpcSpecialAction(3003257, "summon", 1, false);
player.setNpcForceFlip(3003257, 1);
player.spawnTempNpc(3003272, -6, 37);
player.setNpcSpecialAction(3003272, "summon", 0, false);
player.setVansheeMode(true); //隐身
npc.setCameraMove(false, 50, -10, 87);
////npc.setDelay(2000);
npc.sayNextENoEsc("#face0#我本来就忙，那家伙还来添乱。是不是？", 3003250);
npc.sayNextENoEsc("#face3#觉悟之人……非常强大……我们远不如她…请发发慈悲…", 3003249);
////npc.setDelay(1000);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/wind");
player.showNpcEffectPlay(3003257, "Map/Effect3.img/Lacheln/pung3", 0, 0, -80, false, 0, false, 0);
////npc.setDelay(500);
player.playExclSoundWithDownBGM("Mob.img/8643000/Die"); //怪物死亡的叫声						
player.setNpcSpecialAction(3003257, "die", 0, false);
////npc.setDelay(2500);
player.destroyTempNpc(3003257);
////npc.setDelay(1000);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q2/0");
npc.sayNextENoEsc("#face0#真不愧是伟大的他所选中之人。", 3003250);
//player.setOverlapDetail(0, 200, 200, true);
////npc.setDelay(1);
//player.removeOverlapDetail(1500);
npc.setCameraZoom(0, 1700, 0, -6, 17);
////npc.setDelay(500);
player.setNpcForceMove(3003272, 1, 200, 77);
////npc.setDelay(500);
npc.setCameraMove(false, 100, 405, 40);
////npc.setDelay(5000);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q2/1");
npc.sayNextENoEsc("#face2#或者……难道你是？但是即使如此，也不会发生任何改变。", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q2/2");
npc.sayNextENoEsc("#face1#所以，请努力挣扎吧\r\n在虚幻的努力中挣扎吧。\r\n就像之前我在寒冷的冰块中那样。\r\n就像我在无尽的睡梦中那样……", 3003250);
////npc.setDelay(3000);
//player.setOverlapDetail(0, 200, 200, true);
player.destroyTempNpc(3003250);
player.changeMap(450003100, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);