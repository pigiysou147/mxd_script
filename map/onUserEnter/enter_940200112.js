/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第二个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.playAmbientSound("SoundEff.img/ArcaneRiver/night", 500, 100);
player.setLayerBlind(true, 255, 0);

player.spawnTempNpc(3003270, -266, 224);
player.setNpcForceMove(3003270, 1, 0, 200);

player.spawnTempNpc(3003274, 2394, 224);
player.setNpcForceMove(3003274, 1, 0, 200);
player.spawnTempNpc(3003275, 2850, 244);
player.spawnTempNpc(3003278, 2907, 224);
player.setVansheeMode(true); //隐身
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(100);
player.setNpcForceMove(3003270, 1, 300, 200);
//npc.setDelay(2000);
npc.sayNextENoEsc("#face1#…不论我怎么想，就是无法放弃。", 3003270);
//npc.setDelay(200);
npc.sayNextENoEsc("#face1#当时就该毫不犹豫的说出来…现在情况就会不同…", 3003270);
//npc.setDelay(200);
player.setNpcForceMove(3003270, -1, 80, 200);
//npc.setDelay(1200);
npc.sayNextENoEsc("#face2#…提起勇气吧！再说一次，现在还有时间…", 3003270);
//npc.setDelay(200);
npc.setCameraMove(false, 150, 642, 492);
//npc.setDelay(1500);
player.setNpcForceMove(3003270, 1, 1550, 200);
//npc.setDelay(2000);
npc.setCameraMove(false, 1000, 2642, 492);
//npc.setDelay(3000);
npc.sayNextENoEsc("#face0#双弩精灵！", 3003274);
//这里有个纹理处理。
npc.setCameraZoom(10, 2000, 500, 2494, 250);
//npc.setDelay(500);
npc.setCameraMove(false, 50, 2894, 492);
player.setNpcForceMove(3003274, 1, 300, 150);
npc.sayNextENoEsc("#face0#双弩精灵，稍等一下，我还有话想跟你说！", 3003274);
//npc.setDelay(2500);
player.destroyTempNpc(3003270);
npc.sayNextENoEsc("#face0#如果你要前往战场，这将是你最后想说的话…还是回去村庄吧。", 3003274);
npc.sayNextENoEsc("#face0#对，我就是想说这。不过我呢…有必须要去的理由…", 3003275);
//npc.setDelay(100);
player.spawnTempNpc(3003270, 2233, 224);
player.setNpcForceMove(3003270, 1, 243, 120);
npc.setCameraMove(false, 40, 2784, 492);
//npc.setDelay(3200);
player.showNpcEffectPlay(3003270, "Effect/OnUserEff.img/emotion/oh", 0, 0, 0, true, 0, false, 0);
//npc.setDelay(1500);
npc.sayNextENoEsc("#face0#没办法咯！", 3003278);
player.setLayerBlind(true, 200, 1000);
//npc.setDelay(1000);
player.setLayerOn(2000, "0", 0, -80, -1, "Map/Effect3.img/Lacheln/episode3", 4, true, -1, false, 0, 0);
npc.sayNextENoEsc("#face0#赫丽娜，收下这。", 3003278);
npc.sayNextENoEsc("#face3#……", 3003270);
npc.sayNextENoEsc("#face0#冬青剑！", 3003274);
npc.sayNextENoEsc("#face0#它会保护你的。", 3003278);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face3#一切都结束了…您尽然把埃欧蕾的宝物送给了赫丽娜…", 3003270);
npc.sayNextENoEsc("#face4#真的无话可说…我输了…我真的被抛弃了…", 3003270);
npc.sayNextENoEsc("#face4#？所有的事情都令我埋怨…赫丽娜也是，还有埃欧蕾，一切的一切都是！为什么都要阻碍我呢！", 3003270);
player.setLayerOff(300, "0");
//npc.setDelay(1000);
player.showSpineScreen(1, "Map/Effect3.img/BossLucid/butterfly/005", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/butterfly0");
//npc.setDelay(2000);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(6000);
player.changeMap(450003000, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);