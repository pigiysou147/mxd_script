// Created by Jackson
// Quest ID:17677
// [凯梅尔兹共和国] 重返明珠港


if (npc.askYesNo("已经做好了远行的准备了吗。行李都带好了吧?那就出发吧?")) {
        npc.sayNext("出发吧！目的地是明珠港！");
        npc.startQuest();
        player.changeMap(104000000, 0);
} else {
        npc.say("好的,还有时间再准备准备。好好检查一下,可有遗漏的东西");
}