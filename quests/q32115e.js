/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]第二个线索
 *  
 */

npc.sayNext("这些服装一定是女孩们秘密制作的！我打赌他们是在上演我们找到的那出戏！但是这是怎么导致他们失踪的呢？");
npc.say("我们回到一楼和女校长谈谈。\r\n\r\n(#b去艾利涅学院一楼。)");
player.loseItem(4033829);
player.startQuest(32135, 1500000, "1");
npc.completeQuest();
