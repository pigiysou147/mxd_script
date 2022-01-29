/*  This is mada by Yanran    
 *
 *  功能：[拉克兰]噩梦时间塔4层
 *
 *  @Author Yanran
 */
/*npc.sayNext("嗯…梦境正在减弱。", 3003209);
 npc.sayNext("你难道不害怕吗？闭嘴，快走吧！我还想活命呢。", 3003209);
 npc.sayNext("你先收下这个吧。说不定我什么时候会重新变成清道夫了。", 3003209);
 npc.sayNext("这是我变成清道夫时发现的，我一直把它带在身上。看来那时我还保留了意识。不知道它能不能帮到你。", 3003209);
 npc.sayNext("话说，防毒面具最终还是没有来，看来他受到的冲击很大。", 3003209);
 npc.sayNext("不过，你不用太担心。他肯定会恢复的。", 3003209);
 npc.sayNext("#ho# 你………", 3003209);
 npc.sayNextS("我要击退路西德。", false);
 npc.sayNext("我不想阻拦你，#ho#，希望你能赢。为了你，还有，为了我们。", 3003209);*/
if (player.getFreeSlots(1) < 1) {
        player.dropAlertNotice("装备栏满了。");
} else {
        player.startQuest(39366, 0); //完成任务检查
        npc.completeQuest();
}