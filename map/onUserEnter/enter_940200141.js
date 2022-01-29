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
player.spawnTempNpc(3003283, 0, -500);
player.spawnTempNpc(3003273, -362, -455);
player.setNpcForceFlip(3003273, 1);
npc.setCameraMove(false, 10000, 50, -250);
//npc.setDelay(1000);
//player.setLayerBlind(false, -200, 1000);
//npc.setDelay(100);
npc.setCameraMove(false, 100, 50, -410);
//npc.setDelay(2000);
npc.sayNextENoEsc("#face6#全新的世界距离现在不愿了！实践我与黑魔法师理想的那一天。", 3003250);
npc.sayNextENoEsc("#face5#嘿嘿，很期待你会创造出什么样的地方。那究竟是什么的地方呢？", 3003250);
//npc.setDelay(1000);
player.setLayerBlind(true, 255, 300);
npc.sayNextENoEsc("#face0#……", 3003250);
npc.sayNextENoEsc("#face2#…完全感受不到任何东西。", 3003250);
npc.sayNextENoEsc("#face2#该不会他所说的理想指的是…", 3003250);
npc.setMonologue("黑魔法师的新世界什么也没有。\r\n", false);
npc.setMonologue("…就连黑魔法师自己。\r\n", false);
npc.setMonologue("因此从露西德成为军团长以来，他第一次决定记住一个人。\r\n", false);
npc.setMonologue("在神秘河畔创立永远的庆典都市…\r\n", true);
//npc.setDelay(2000);
player.changeMap(940200142, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);