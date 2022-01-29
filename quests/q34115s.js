/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]安息洞穴
 *
 *  @Author Yanran
 */

npc.sayNext("#ho#，你醒了啊，啊……能掉在沙子上可真是万幸啊……");
npc.sayNext("额，坠落时受的伤……没，没什么，你不用放在心上，只要想一想该如何逃出这个洞穴吧。");
npc.sayNextS("（虽然卡奥的事很叫人放心不下，可眼下似乎也没有空闲可以考虑这些了。）#k");
npc.sayNext("这里是消亡旅途的终点站……安息洞穴，这个洞穴的尽头与消亡旅途的尽头相连，现在差不多快到头了。");
let selection = npc.askYesNo("这地方虽然像迷路一般复杂……但我知道通往洞穴出口的捷径，来，跟我走吧。");
if (selection == 1) {
        npc.sayNext("但是不用担心，只要我也在这里，就不会发生这种事的。");
        npc.startQuest();
        npc.completeQuest();
} else {
        npc.say("我们不能一直待在洞穴里，我说这些倒不是为了让#ho#惶恐不安……但这里是那些消亡之物安息的地方……若是被这里吞噬，便永世不得超生了。");
}