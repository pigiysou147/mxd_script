// Created by Jackson
// Quest ID:17632
// [凯梅尔兹共和国] 运河的结界


npc.sayNextS("莱文,我们回去吧。");
npc.sayNext("等下。 ");
npc.sayNextS("嗯?为什么?什么事?");
npc.sayNext("不是什么事啦.. 我想再四处转转。");
npc.sayNextS("四处转转。刚刚的事情还没让你清醒吗?");
if (npc.askYesNo("不是,不是追阿库旁多。我只是.. 想再四处转转。如果你累的话,你就先回去吧。")) {
        // Response is Yes
        npc.startQuest();
        npc.sayNextS("哎呀。我知道了。现在还很危险,我陪你一起吧。");
        player.changeMap(865020300, 3);
} else {
        // Response is No
        npc.say("好的,我回去看看,你先走。");
}
