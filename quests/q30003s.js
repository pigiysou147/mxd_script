/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 逃出巨大的树根
 *
 *  @Author Yanran
 */
npc.sayNextS("怎么才能从这里出去呢？", false);
npc.sayNext("那边有个通往外面的出口。只要通过出口出去就行。");
npc.sayNext("我已经试过好几次了，但是没办法出去。");
npc.sayNextS("没办法出去？出口堵住了吗？知道了，我去试试看。", false);
npc.say("快去帮我确认一下。我真的很想出去……");
npc.startQuest();

function end(mode, type, selection) {
        if (mode == 1)
                status++;
        else
                status--;
        if (status == 0) {
                npc.sayNext("确认了吗？");
        } else if (status == 1) {
                npc.sayNextS("嗯，没问题，可以通往外面。", false);
        } else if (status == 2) {
                npc.sayNext("真的吗？看来只有我没办法出去……");
        } else if (status == 3) {
                npc.forceStartQuest();
                npc.forceCompleteQuest();
                npc.dispose();
        }
}
