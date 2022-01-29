/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]寻找毕业生
 *  
 */

npc.sayNext("你想要什么？我很忙……");
npc.sayNextS("(你告诉阿文怎么回事。)", false);
npc.sayNext("失踪学生？听起来很危险…艾林不是失踪的最安全的地方。");
npc.completeQuest();
player.gainExp(1900);