/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 哈南特的紧急呼叫
 *
 *  @Author Yanran
 */
let selection = npc.askAccept("#b#h0##k！你能马上到圣地来一趟吗？我有紧急的事情想跟你说。情况非常紧急，请尽快过来。");
if (selection == 1) {
        npc.sayNext("#b#h3##k，我会用神兽的力量立即把你传送到圣地。");
        npc.startQuest();
        player.changeMap(913080000, 0);
} else {
        npc.say("那么等你想来了，再跟我说。");
}