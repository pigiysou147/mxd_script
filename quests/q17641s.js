// Created by Jackson
// Quest ID:17641
// [凯梅尔兹共和国] 远征队起航


npc.sayNext("搞什么。怎么这么迟才来。");
npc.sayNextS("啊,对不起,出了点小事。");
if (npc.askYesNo("小事儿?嗯,算了。赶紧上船吧。都准备好了吧?这次离开很长时间回不来的,需要的东西可都带齐了。")) {
        // Response is Yes
        npc.sayNextE("好了,我作为船长有事要处理就先进去了。");
        npc.startQuest();
        npc.sayNextE("没问题。去吧。", true);
        npc.sayNextE("喔啦啦,这真巧啊。", 9390204);
        npc.sayNextE("............", true);
} else {
        npc.say("还没有准备好吗?那么再去准备准备再来吧。");
}