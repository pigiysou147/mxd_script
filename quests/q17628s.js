// Created by Jackson
// Quest ID:17628
// [凯梅尔兹共和国] 击退阿库旁多（3）


if (npc.askAccept("这里到处都是#e#b#o9390809##k#n！好，我们这次也努力各自击退#b#e30只#k#n吧！")) {
        npc.startQuest();
        npc.sayS("#b(不知为何，我有种不祥的预感...)");
} else {
        // Response is No
        npc.say("你还没准备好?准备好之后,告诉我。");
}