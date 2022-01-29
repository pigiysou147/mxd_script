// Created by Jackson
// Quest ID:17640
// [凯梅尔兹共和国] 组织远征队（3）


npc.sayNext("啊,来啦。我拜托的东西呢?");
npc.sayNextS("嗯,可是我在杂货店听说可以送货的呀。");
if (npc.askYesNo("嗯,可以那样的啊。船员们和佣兵们都已经到齐了。好像可以出发了。如何?")) {
        npc.startQuest();
        npc.sayNextS("(这家伙竟调转话题。) 嗯,我也准备好了。");
        npc.sayNext("好的,那就在码头见吧。");
} else {
        npc.say("嗯?还没准备好呐。准备好了就告诉我。");
}