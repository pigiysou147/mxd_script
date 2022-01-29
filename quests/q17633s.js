// Created by Jackson
// Quest ID:17633
// [凯梅尔兹共和国] 回归


if (npc.askYesNo("现在要立刻回去吗?")) {
        // Response is Yes
        npc.startQuest();
        npc.sayNextNoEsc("好了,我们快去向统帅报告吧。");
        player.changeMap(865000000, 0);
} else {
        npc.say("你好像还没准备好。准备好了的话,就告诉我。");
}