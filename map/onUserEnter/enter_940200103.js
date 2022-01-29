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
npc.sayNextENoEsc("#face0#我就说没有双弩枪也可以同样优秀。甚至想要把她介绍给其他同伴。", 3003278);
npc.sayNextENoEsc("#face0#这段时间对你来说非常有价值，下次见面时你说不定会变得更了不起…", 3003278);
npc.sayNextENoEsc("#face0#真的好幸福，好想永远保留…不要被破坏…", 3003270);
//npc.setDelay(1000);
player.setLayerBlind(true, 255, 2000);
player.changeMap(940200104, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);