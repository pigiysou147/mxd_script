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
player.setVansheeMode(true); //隐身
player.showSpineScreen(1, "Map/Effect3.img/Lacheln/Sense/002", "animation");
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(1000);
player.showSpineScreen(1, "Map/Effect3.img/Lacheln/Sense/002", "animation");
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E2/0");
npc.sayNextENoEsc("#face1#哈，哈哈，哈哈哈！", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E2/1");
npc.sayNextENoEsc("#face1#现在的心情就好像是一直压迫在我身上的东西突然消失不见了…", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E2/2");
npc.sayNextENoEsc("#face1#啊…难不成是那个人的力量？我感受到一股强烈的力量，就算被我的身体吸收，也会有剩余的力量…", 3003250);
player.showSpineScreen(1, "Map/Effect3.img/Lacheln/Sense/002", "animation");
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E2/3");
npc.sayNextENoEsc("#face6#哈，哈哈，哈哈哈。", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E2/4");
npc.sayNextENoEsc("#face6#是啊，我就是为了等待这个瞬间，重新诞生的时刻。", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E4/5");
npc.sayNextENoEsc("#face6#…现在我所描绘的梦境都将化为现实！", 3003250);
//npc.setDelay(500);
player.setLayerBlind(true, 255, 2000);
player.showSpineScreen(0, "Map/Effect3.img/BossLucid/Lucid/lusi", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/lucid_spine");
//npc.setDelay(9000);
player.showSpineScreen(0, "Map/Effect3.img/BossLucid/butterfly2/buterfly", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/butterfly1");
//npc.setDelay(4000);
player.changeMap(450003000, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);