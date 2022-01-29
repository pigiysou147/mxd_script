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
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(500);
npc.setCameraMove(false, 50, 200, 34);
npc.sayNextENoEsc("#face2#…你是谁呢？", 3003270);
//npc.setDelay(500);
npc.sayNextENoEsc("#face2#…你的气息很不寻常。", 3003270);
//npc.setDelay(500);
npc.sayNextENoEsc("#face1#不过总觉得你就是我等待许久的人…", 3003270);
//npc.setDelay(500);
npc.sayNextENoEsc("#face1#可以靠近看看你的模样吗？", 3003270);
//npc.setDelay(500);
player.setLayerBlind(true, 200, 2000);
//npc.setDelay(1000);
npc.setMonologue("永远的生命，无限的知识。\r\n", false);
npc.setMonologue("…新世界。\r\n", false);
npc.setMonologue("…对于将埃欧蕾视为全世界的露西德来说，这些都是非常诱惑她的话。\r\n", false);
npc.setMonologue("无法抵达的理想，将它视为现实仍然游刃有余的那股力量。\r\n", false);
npc.setMonologue("如此强悍的人需要她的力量。\r\n", false);
npc.setMonologue("露西德毫不犹豫的追随了黑魔法师。\r\n", true);
//npc.setDelay(1000);
player.setLayerBlind(true, 255, 2000);
player.changeMap(940200132, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);