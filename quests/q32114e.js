/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]妖精学院搜索作战4
 *  
 */

npc.sayNext("你找到纸条了吗？让我看看。\r\n\r\n…嗯，第一幕中有一些明显的问题，圣代酒吧的“你能吃就吃”的场景看起来有点乱七八糟，但这是童话娱乐的一个很好的例子。为什么孩子们有这个？");
npc.say("让我们调查一下三楼！也许我们会找到别的。\r\n\r\n(#b与在艾利涅学院三楼的 #e#p1500000##k#n 对话。)");
npc.startQuest();
//player.startQuest(32135, 1500000, "1");
player.loseItem(4033828);
