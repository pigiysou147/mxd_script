// Created by Jackson
// Quest ID:17650
// [凯梅尔兹共和国] 报告&忧虑


if (npc.askYesNo("反正我们两人在这里怎么说也说不出答案来。我整理一下扫尾工作,你可以先去向首领大人报告吗?")) {
        npc.startQuest();
        npc.sayNext("那么就拜托你了。我也马上就跟去。");
} else {
        npc.say("扫尾工作我一个人就能搞定了,你赶紧去报告吧..");
}