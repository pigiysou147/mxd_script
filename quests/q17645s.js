// Created by Jackson
// Quest ID:17645
// [凯梅尔兹共和国] 与普赛依交战


npc.sayNext("果然是受了普赛依的指挥的家伙们更有组织性了!", 9390235);
npc.sayNext("谢谢你的称赞。");
npc.sayNext("你是海盗王普赛依!!", 9390202);
npc.sayNext("能把我们赶到这里,实力还算是够可以得啦。但是玩笑就开到这为止了。");
if (npc.askYesNo("到底谁不行等着瞧就知道了!#h0#!准备好了吗!?", 9390235)) {
        npc.startQuest();
        for (let i = 0; i < 45; i++) {
                map.spawnMob(9390815, -332 + i * 10, 198);
        }
        npc.sayNextNoEsc("把海盗们从这海峡赶出去!!", 9390235);
        npc.sayNextNoEsc("好的,痛快地干一场吧!!", 9390235);
} else {
        npc.say("没时间了!赶快准备吧。", 9390235);
}