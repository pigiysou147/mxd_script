/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]穿过火焰地带的方法
 *
 *  @Author Yanran
 */
npc.sayNext("这个空间要比你们迄今为止所经历过的所有空间都要危险。");
npc.sayNext("无论面对什么样的状况都不能放松警惕，特别是这里又称消亡火焰地带，因为一旦碰触到这里的火花，肉身就会永远消亡。为了顺利逃离这里……");
let selection = npc.askYesNo("在此之前，请你先答应我，不会再做出任何鲁莽之举，你会遵照我的向导，走上安全的道路，你愿意答应我吗？");
if (selection == 1) {
        npc.startQuest();
} else {
        npc.sayNextS("内心似乎还很复杂。");
}