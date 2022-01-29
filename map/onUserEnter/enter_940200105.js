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
player.spawnTempNpc(3003278, -205, -132);
player.setNpcForceMove(3003278, 1, 0, -132);
player.spawnTempNpc(3003291, -112, -150);
player.spawnTempNpc(3003270, -3, -133);
player.setVansheeMode(true); //隐身
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(1000);
//npc.setDelay(10);
player.changeBGM("Bgm25/SoundOfElf");
npc.sayNextENoEsc("#face0#哈哈，从没听过这么美妙的声音，仿佛会让人感到心安。", 3003278);
//npc.setDelay(100);
npc.sayNextENoEsc("#face0#我在作曲的时候祈祷着这是一场好梦。", 3003270);
//npc.setDelay(100);
//这里有个纹理处理。
player.spawnTempNpc(3003275, 140, -180);
player.setNpcSpecialAction(3003275, "smile", 9999999, false);
npc.sayNextENoEsc("#face0#这听了会让人心情很好的音乐是？仿佛疲劳感瞬间抛诸脑后，做了场美好的梦。", 3003275);
//npc.setDelay(100);
//这里有个纹理处理。
player.spawnTempNpc(3003277, -289, -132);
player.setNpcSpecialAction(3003277, "smile", 9999999, false);
player.setNpcForceFlip(3003277, 1);
player.spawnTempNpc(3003281, 85, -134);
player.setNpcSpecialAction(3003281, "smile", 9999999, false);
npc.sayNextENoEsc("#face0#哇喔，好漂亮的音乐盒。", 3003281);
//npc.setDelay(100);
//这里有个纹理处理。
player.spawnTempNpc(3003280, -205, -304);
player.setNpcSpecialAction(3003280, "smile", 9999999, false);
player.setNpcForceFlip(3003280, 1);
player.spawnTempNpc(3003282, -271, -304);
player.setNpcSpecialAction(3003282, "smile", 9999999, false);
player.setNpcForceFlip(3003282, 1);
player.spawnTempNpc(3003279, -367, -133);
player.setNpcSpecialAction(3003279, "smile", 9999999, false);
player.setNpcForceFlip(3003279, 1);
npc.sayNextENoEsc("#face0#大家听到音乐盒的声音都聚集过来了，这音乐盒说不定会成为埃欧蕾的宝物。", 3003278);
//npc.setDelay(100);
player.setGrayScale(0, true);//设置灰度
//npc.setDelay(1000);
npc.sayNextENoEsc("#face3#（不…不是这样的…一切都只为了双弩精灵的说…这样的话…）", 3003270);
//npc.setDelay(100);
npc.sayNextENoEsc("#face3#（这还不够吗？这并不是我想要的…应该要有更强烈的反应才对呀！）", 3003270);
//npc.setDelay(100);
npc.sayNextENoEsc("#face3#（…我要给你看更酷的东西！切割之后擦拭…让大家觉得一定需要…独占一切…）", 3003270);
//player.setLayerBlind(true, 255, 2000);
//npc.setDelay(1000);
player.showSpineScreen(0, "Map/Effect3.img/BossLucid/butterfly/005", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/butterfly0");
//npc.setDelay(2000);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(6000);
player.changeMap(450003000, 3);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);