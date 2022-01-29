// Created by Jackson
// Quest ID:17625
// [凯梅尔兹共和国] 我来抵抗阿库旁多


if (npc.askYesNo("你想了解更多关于阿库旁多的事情？")) {
        // Response is Yes
        npc.sayNextE("阿库旁多在很久之前就和我们共同存在了。实际上，虽然以前我们说不上是往来关系，但至少是中立关系。");
        npc.sayNextE("虽然现在凯梅尔兹成为贸易发达的国家，但以前这里主要以渔业为主。不知从何时开始，这里通过贸易变得富有，开发了首都桑凯梅尔兹，还建了运河。");
        npc.sayNextE("从那时开始，阿库旁多就开始敌对我们。大概他们认为是我们破坏了他们生活的地方。总之，之后他们就少数人聚集在一起开始袭击旅行者和商人。");
        npc.sayNextE("所以，我们这次想要教训下阿库旁多那些家伙。");
        npc.sayNextE("#b(就是这个!!)#k\r\n统帅,请把我也编入阿库旁多讨伐团吧。", true);
        npc.sayNextE("嗯?这不是你国家的事情,你为什么打算参与呢?");
        npc.sayNextE("#b友.邦.国.家#k.的事情就是我的事情,这是冒险岛世界的传统。", true);
        npc.sayNextE("嗯.... 感谢你的好意,但...");
        npc.sayNextE("爸爸，不...统帅！#h0#...拥有出众的实力。我能保证。他肯定会给我们带来帮助的。让他和我们在一起怎么样？", 9390202);
        npc.sayNextE("你认为我们弱到需要借助别人的力量了吗?");
        npc.sayNextE("我不是那个意思...", 9390202);
        npc.sayNextE("你快去讨伐阿库旁多那些家伙吧。");
        npc.sayNextE("是…我知道了。", 9390202);
        npc.startQuest();
        npc.sayE("你是叫#h0#吧…很感谢你的好意，但我不想让外人插手我们共和国的事情。希望你能谅解。");
} else {
        // Response is No
        npc.say("哼…如果你不愿意也没办法。我看你眼睛发光，以为你有兴趣呢。");
}