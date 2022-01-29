// Created by Jackson
// Quest ID:17668
// [凯梅尔兹共和国] 西温的消失


npc.sayNext("现在就去,去了就行了吧。");
npc.sayNextS("好吧,现在就去吧。");
npc.sayNext("等会,特来敏小姐去哪了?", 9390202);
npc.sayNext("啊,刚刚战斗前我怕克莱尔小姐被卷进来,把她送到外面去了。");
npc.sayNext("大概..在#b#m865030300##k了吧。");
if (npc.askYesNoS("原来是那样。那么我们也赶紧出去吧。")) {
        npc.sayNextENoEsc("好吧,赶紧带到吉尔伯特首领那儿去吧。", true);
        npc.sayNextENoEsc("那样可不行。", 9390218);
        let OBJECT_1 = player.spawnTempNpc(9390218, -485, 70, 1);//NpcName:OBJECT_1
        player.destroyTempNpc(OBJECT_1);
        player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
        npc.sayNextE("呃啊!");
        npc.startQuest();
        player.destroyTempNpc(OBJECT_1);
        npc.sayNextENoEsc("厄，西温呢！重要的证人消失了。", true);
        npc.sayNextENoEsc("现在要如何才能洗脱罪名呢。", 9390202);
        npc.sayNextENoEsc("稍微放松一下竟然就发生这样的事情。将来的事情也让人担心呐。", true);
        npc.sayNextENoEsc(" 嗯,啊,如此特来敏小姐也叫人担心呢!得赶紧出去看看!", 9390202);
        npc.sayNextENoEsc("刚刚西温说克莱尔在哪里?", true);
        npc.sayNextENoEsc("说大概会在#b#m865030300##k。赶紧走吧。", 9390202);
} else {
        npc.sayS("等等,还不能出去。");
}