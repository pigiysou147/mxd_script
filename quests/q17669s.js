// Created by Jackson
// Quest ID:17669
// [凯梅尔兹共和国] 发现结界（2）


npc.sayNextS("赶紧一起回桑凯梅尔兹吧。");
npc.sayNext("请稍等。我感觉到了什么。");
npc.sayNextS("感觉?你感觉到了什么啊?");
npc.sayNext("说不上来..虽然不知道是什么,但是是种不祥的感觉。");
if (npc.askYesNo("特来敏小姐说感觉到什么,我也好像有所感觉似的。#h0#我们稍微查看一下四周如何?", 9390202)) {
        npc.startQuest();
        npc.sayNextS("嗯,就看看吧。而且说是不祥的感觉,就这么走的话真是有点不踏实。克莱尔你是在哪儿感觉到的呢?");
        npc.sayNext("好像就在这附近。其实从一开始我就感觉到了, 那时还以为是因为西温和暗杀团员们的原因呢。");
        npc.sayNextS("那么就得以这为中心四周找找看看了。");
} else {
        npc.say("感觉不好。找找看岂不更好。");
}