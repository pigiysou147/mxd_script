// Created by Jackson
// Quest ID:17646
// [凯梅尔兹共和国] 海里的暴徒


if (npc.askYesNo("#h0#!!快来帮忙!!")) {
        npc.sayNextNoEsc("大家都镇定点儿!!", 9390202);
        npc.sayNextSNoEsc("莱文!!没事吧?那些令人作呕的腿脚都是什么呀");
        npc.sayNextNoEsc("深海巨妖是海洋的霸主！请小心，不要死了哦！");
        map.spawnMob(9390835, 33, 250);
        npc.startQuest();
} else {
        npc.sayS("喂,你在磨蹭什么呢!!");
}
