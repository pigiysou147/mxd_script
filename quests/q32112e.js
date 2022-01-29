/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]第一个线索
 *  
 */

npc.sayNext("你找到了剧本？让我看看。\r\n\r\n…………这不是有关将黑魔法师封印起来的冒险岛世界英雄们的故事吗？难怪台词如此激昂……不过，这种剧本为什么会在那些孩子手里呢？");
npc.say("接下来调查3楼吧！我会在上面等着你。\r\n\r\n(#b在艾利涅3楼，与#e#p1500000##k#n谈谈吧。 )");
player.loseItem(4033828);
//npc.startQuest();	
npc.completeQuest();
player.completeQuest(32111, 1500000);