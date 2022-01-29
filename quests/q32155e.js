/*  This is mada by Yanran
 *  
 *  功能: [主题副本]妖精学院艾利涅 弓箭手
 *  
 *  @Author Yanran
 */
npc.sayNext("喵~你就是受邀前来解决妖精学院艾利涅发生的骚扰的勇士吗？喵？？");
npc.sayNextS("原……原来如此……不过，为何是只死猫？", false);
npc.say("你看去好像是个白痴，喵。但既然是有名的勇士，我就相信你一次吧，喵。");
player.startQuest(32147, 1500010, "1");
npc.completeQuest();