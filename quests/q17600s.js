// Created by Jackson
// Quest ID:17600
// [凯梅尔兹共和国] 南哈特的呼唤

if (npc.askAccept("你这段时间过得还好吗？女皇正在找你。你能来圣地吗？\r\n#b(接受时立刻前往圣地。)#k")) {
        // Response is Yes
        npc.sayNext("那我就在圣地等着你。");
        npc.startQuest();
        player.changeMap(130000000);
} else {
        npc.sayNext("现在没有时间吗？");
}
