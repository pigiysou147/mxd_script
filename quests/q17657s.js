// Created by Jackson
// Quest ID:17657
// [凯梅尔兹共和国] 她的身份


npc.sayNext("我是谁真的有那么重要吗?");
npc.sayNext("我们可是互相救过命又互相帮助的关系嘛。以后也那样就好了。所以我希望我们能明确一下关系。", 9390202);
if (npc.askYesNo("好吧。既然你都这么说了,我就告诉你吧。你做好吃惊的准备了吗?")) {
        npc.sayNext("好吧,哎咦。");
        npc.startQuest();
} else {
        npc.say("怎么了?真的要揭晓了又害怕了吗?");
}