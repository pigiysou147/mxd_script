// Created by Jackson
// Quest ID:17626
// [凯梅尔兹共和国] 击退阿库旁多（1)


npc.sayNext("哦? #h0#,你怎么回来这里?");
npc.sayNextS("我向统帅请求。我说想作为你的朋友帮助你们。");
npc.sayNext("我爸那个老顽固居然听了你的话。你还真了不起。不管怎么样,那就拜托你了!");
if (npc.askAccept("好，我们来好好玩一场吧！你只要帮我消灭#b30只#o9390808##k#n。 剩下的就交给我了。")) {
        // Response is Yes
        npc.startQuest();
        npc.say("我们来打赌，看谁先结束吧？");
} else {
        // Response is No
        npc.say("你还没准备好?准备好之后,告诉我。");
}