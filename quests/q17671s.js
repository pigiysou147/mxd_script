// Created by Jackson
// Quest ID:17671
// [凯梅尔兹共和国] 返回桑凯梅尔兹


npc.sayNext("回来啦。如何?结界里面有什么吗?");
npc.sayNextS("我没有往深处去所以也不太清楚。我只到了结界的入口就感到了非同一般的杀气就没再往里去了。");
if (npc.askYesNo("做得好。再往深处去如果发生什么事的话就麻烦了。好了,那我们回桑凯梅尔兹吧?")) {
        npc.startQuest();
        npc.sayNextS("好吧,赶紧回去吧。克莱尔也累了。");
        npc.sayNext("我呢...就到入口就行了。因为我可不能碰见我父亲...", 9390205);
        npc.sayNext("啊,那就那样吧。好了,走吧");
        player.changeMap(865000000, 10);
} else {
        npc.say("嗯?你不是说回去吗。你还有什么事要办吗。");
}