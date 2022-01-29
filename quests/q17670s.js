// Created by Jackson
// Quest ID:17670
// [凯梅尔兹共和国] 不寻常的气息


npc.sayNext("特来敏小姐。是这个结界吗?");
npc.sayNext("应该就是这里。从这儿能感觉到强烈的不好的气息。", 9390205);
if (npc.askYesNo("嗯.. 原来如此。进去看看吧。#h0#,赶紧进去调查调查吧")) {
        npc.startQuest();
        npc.sayNextS("好吧。但是就我一个人进去。你留在这里。");
        npc.sayNext("嗯?你干嘛要一个人进去啊?");
        npc.sayNextS("谁知道里面有什么。而且你一起进去的话我不放心克莱尔的安全。");
        npc.sayNext("嗯。好吧,知道了。但是如果发生什么事的话,你不要逞强马上出来。");
        npc.sayNextS("嗯,知道了。好了,那我进去喽。");
        player.changeMap(865030400, 2);
} else {
        npc.say("怎么了,很恐怖吗?你先喘口气再说。");
}