// Created by Jackson
// Quest ID:17623
// [凯梅尔兹共和国] 我只是个异邦人


if (npc.askYesNoS("都怪莱文没事乱出头,现在情况变得很奇怪。好累啊,还是先休息吧。", true)) {
        // Response is Yes
        npc.startQuest();
        player.changeMap(865000004, 2);
} else {
        // Response is No
        npc.sayS("还有事情要做。", true);
}
