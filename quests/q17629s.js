// Created by Jackson
// Quest ID:17629
// [凯梅尔兹共和国] 击退阿库旁多（4）


if (npc.askAccept("这里也到处都是#b#e#o9390810##k#n！那好！我们来做个了结吧！你来消灭#b#e30只左右#k#n这些家伙！")) {
        // Response is Yes
        npc.startQuest();
        npc.say("加油！没剩多少了。");
} else {
        // Response is No
        npc.say("你为什么总是犹豫不决。是不是害怕了?");
}