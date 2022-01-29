// Created by Jackson
// Quest ID:17625
// [凯梅尔兹共和国] 我来抵抗阿库旁多


npc.sayNextS("统帅，我不是轻视凯梅尔兹的实力。只是，作为#b莱文的朋友#k，我想出点力而已。请你再考虑下吧。");
npc.sayNext("嗯...既然你都这么说了..好吧，那就这样吧。看来是我想得太多了。请你现在就去追上莱文吧。他应该还没跑多远。希望你帮助那孩子一起击退阿库旁多吧。");
let itemId = 1052798 + player.getJobCategory();
npc.sayNext("而且，这个也请你拿着吧。这能帮助你。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i" + itemId + "# #t" + itemId + "#\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n530255 exp");
if (player.gainItem(itemId, 1)) {
        npc.completeQuest();
        player.gainExp(530255);
        npc.sayNext("莱文应该在#b#m865020000##k。你快去找他吧。");
} else {
        npc.sayNextE("你的背包满了，清理下吧！", 9390201);
}
