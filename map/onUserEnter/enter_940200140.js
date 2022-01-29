/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第五个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
player.setVansheeMode(true); //隐身
npc.setCameraZoom(0, 1000, 0, -305, 0);
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#要背叛与末日反抗军联合作战？你在说什么？太扯了！", 3003740);
npc.sayNextENoEsc("#face4#请冷静下来，门的那端未来的风景不过都只是许造出来的东西罢了！", 3003655);//希纳斯
npc.sayNextENoEsc("#face0#这一切不是完全不可能做到的事情呀！", 3003751);//南哈特
npc.sayNextENoEsc("#face0#你说什么？", 3003740);
npc.sayNextENoEsc("#face0#开玩笑的啦！只是想起吉格蒙特说过要考虑所有可能性。", 3003751);//南哈特
npc.sayNextENoEsc("#face0#现在不是斗嘴的时候，别吵咯!", 3003658);//赫丽娜
//npc.setDelay(1000);
npc.sayNextENoEsc("#face6#呼！原来是在犹豫要不要按原计划结盟呀！一切都很顺利！", 3003250);//露西德
npc.sayNextENoEsc("#face6#在领悟到所有事情不过是假象之前我不会停止起疑，毕竟已经埋下种子啦！", 3003250);//露西德
npc.sayNextENoEsc("#face6#也可以期待有更有意思的噩梦出现，马上就可以停止起疑，哼哼。", 3003250);//露西德
//npc.setDelay(500);
npc.setCameraMove(false, 100, -280, -536);
//npc.setDelay(2000);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(1000);
player.changeMap(940200141, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);