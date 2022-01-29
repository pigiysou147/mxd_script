// Created by Jackson
// Quest ID:17679
// [凯梅尔兹共和国] 对决! 普赛依!


npc.sayNextE("现在我就让你们这些家伙的海盗行为到达截止日期。", true);
npc.sayNextE("嗯?见过这么脑袋不灵光的朋友吗。看来你还不太明白你现在的处境啊。");
npc.sayNextE("才不呢,我可是非常清楚呢。我要抓的家伙们全部聚集在这里,反而是我们要说声谢谢呢。", true);
npc.sayNextE("哼,真是个趾高气昂的家伙。我就等着看你能装得意装到什么时候。");
if (npc.askYesNoE("(话是那么说,可是该怎么办呢。现在就立马攻击吗?", true)) {
        for (let i = 0; i < 10; i++) {
                map.spawnMob(9390815, 32, 198);
        }
        for (let i = 0; i < 10; i++) {
                map.spawnMob(9390816, 32, 198);
        }
        map.spawnMob(9390817, 32, 198);
        npc.startQuest();
} else {
        npc.sayE("(还是先等等。现在进攻还有些轻率。)", true);

}