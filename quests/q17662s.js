// Created by Jackson
// Quest ID:17662
// [凯梅尔兹共和国] 寻找克莱尔


if (npc.askYesNo("你做好去找克莱尔的准备了吗? ")) {
        npc.sayNext("估测了一下那些家伙逃跑的方向,往#b#m865030200##k方向逃跑的可能性较大。我们往那边去看看吧。");
        npc.startQuest();
} else {
        npc.say("准备好了就告诉我。");
}