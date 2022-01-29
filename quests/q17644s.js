// Created by Jackson
// Quest ID:17644
// [凯梅尔兹共和国] 追击！


npc.sayNextS("是因为是海盗,所以航海技术果然更胜一筹吗?");
npc.sayNext("就是那样。比起商船移动起来迅猛地多了。");
npc.sayNextS("看见普赛依的船了!!");
if (npc.askYesNo("普赛依果然出现了。准备好了吗?")) {
        npc.startQuest();
        for (let i = 0; i < 45; i++) {
                map.spawnMob(9390815, -332 + i * 10, 198);
        }
        npc.sayNextNoEsc("海盗们从普赛依的船涌来了!!", 9390217);
        npc.sayNextNoEsc("好的,痛快地干一场吧!!");
} else {
        npc.say("你在干什么呀。赶快准备啊。");
}

