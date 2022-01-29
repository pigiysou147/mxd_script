/*  This is mada by Yanran   
 *
 *  功能：[列娜海峡]列娜海峡的勇士，地图谈话芭芭拉。
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
////npc.setDelay(1500);
npc.setCameraMove(false, 300, -300, 100);
////npc.setDelay(1500);
npc.sayNextNoEsc("真不敢相信……我都想不起来了，你竟是小时候救了我们的大恩人啊！", 1510003);
npc.sayNextNoEsc("我隐隐约约能记起来，被温暖的大手照料的那种感觉……但没想到她竟是人类，甚至还被我们称作魔女。", 1510005);
npc.sayNextNoEsc("这么说，你在这里做这样的善事已经至少有数十年了。天啊……对我们种族来说，你是像母亲一样的恩人啊！", 1510004);
npc.sayNextNoEsc("真让人感动啊，老奶奶。", 1510007);
npc.sayNextNoEsc("少肉麻，好久不见，吃顿饭再走吧。", 1510008);
npc.sayNextNoEsc("还有，你们这帮家伙，别再相互斗了……", 1510008);
npc.sayNextNoEsc("…?", 1510003);
////npc.setDelay(1000);
npc.sayNextNoEsc("太好了。今后三个种族之间再不会互相斗了吧？", 1510008);
npc.setCameraMove(true, 300, 300, 125);
////npc.setDelay(2223);
npc.sayNextNoEsc("哈哈，这全要归功于航海士啊。", 1510008);
////npc.setDelay(1000);
player.changeMap(141000000, 0);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);