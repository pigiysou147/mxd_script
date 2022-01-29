// Created by Jackson
// Quest ID:17643
// [凯梅尔兹共和国] 海.盗.出.现


npc.sayNext("怎么这么宁静。该不会是海盗们有所察觉撤退了吧。");
npc.sayNextS("说不准哦。说不定会那样呢。但是才没过几天再等等看吧。");
if (npc.askYesNo("嗯..就那样吧。你做好了随时和海盗交战的准备吗?")) {
        npc.startQuest();
        for (let i = 0; i < 30; i++) {
                map.spawnMob(9390815, -332 + i * 20, 198);
        }
        npc.sayNextNoEsc("是海盗!!海盗出现了!!", 9390217);
        npc.sayNextNoEsc("终于上钩了!!");
        npc.sayNextNoEsc("海盗们朝我们商船过来了!!", 9390217);
        npc.sayNextNoEsc("去吧!#h0# !!");
} else {
        npc.say("那么就做好随时应战的准备如何。");

}
