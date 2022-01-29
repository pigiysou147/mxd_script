/*  This is mada by Yanran    
 *
 *  功能：[主题副本][列娜海峡]
 *
 *  @Author Yanran
 */
/* global ms */
player.useSkillEffect(80001298, 1);
if (player.isQuestStarted(32163)) {
        npc.sayNext("你说过你是第一次航海吧？航海没什么难的。这个地区的海峡不算很宽。只要之间有大海相连，你想去哪里都行。", 1510006);
        npc.say("如果你要搜集木材，就#b用鼠标点击#k前面漂浮的受难船碎片进行调查吧。", 1510006);
} else if (player.isQuestCompleted(32163) && player.isQuestStarted(32167)) {
        npc.say("第1观测站在总部上方，从总部过去很近，不难找的。", 1510006);
} else if (player.isQuestCompleted(32167) && player.isQuestStarted(32170)) {
        npc.say("声音是从西边传出来的……我们到左边去瞧瞧吧？航海士？", 1510006);
} else if (player.isQuestCompleted(32170) && player.isQuestStarted(32171)) {
        npc.say("谢谢你救了我，航海士。你要到总部去吗？", 1510007);
} else if (player.isQuestCompleted(32171) && player.isQuestStarted(32173)) {
        npc.say("你往下走，就能看见第2观测站，航海士。", 1510006);
} else if (player.isQuestCompleted(32173) && player.isQuestStarted(32176)) {
        npc.say("环境污染是个很严重的问题……元凶真的是魔女吗？不管怎样，我们先回总部吧，航海士！", 1510007);
} else if (player.isQuestCompleted(32176) && player.isQuestStarted(32177)) {
        npc.say("航海士，我们去消灭邪恶的魔女芭芭拉吧！一直往右走到底，在下方就能找到她。", 1510006);
} else if (player.isQuestCompleted(32177) && player.isQuestStarted(32179)) {
        npc.say("在大海上可以钓鱼耶。你到#b鱼群聚集区#k上方去，使用物品栏里的#i2431796##t2431796#吧。", 1510007);
} else if (player.isQuestCompleted(32179) && player.isQuestStarted(32180)) {
        npc.say("魔女是清白的……航海士，你到总部去吧。", 1510006);
} else if (player.isQuestCompleted(32180) && player.isQuestStarted(32182)) {
        npc.say("第3观测站位于海峡中央的正上方，航海士。", 1510006);
} else if (player.isQuestCompleted(32182) && player.isQuestStarted(32186)) {
        npc.say("航海士，向总部前进吧！", 1510007);
} else if (player.isQuestCompleted(32186) && player.isQuestStarted(32187)) {
        npc.say("你要去冰川破坏者的巢穴啊，航海士。你往右上方最偏僻的地方走就能到达。", 1510006);
}