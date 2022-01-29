// Created by Jackson
// Quest ID:17617
// [凯梅尔兹共和国] 贸易品在哪里


npc.sayNext("啊,现在想来,是有点奇怪的地方。");
if (npc.askYesNoS("(他说的奇怪的地方是什么呢,先听他说说吧?)")) {
        // Response is Yes
        npc.sayNextS(" 奇怪的地方?");
        npc.sayNext(" 嗯,分明是海上贸易品,量也很多,迪巴斯却自己用拉货的车全部运走了。 我觉得这个有点奇怪。正如你所见到的,交易所就在港口前面,一般海上贸易品都是直接装船的。");
        npc.sayNextS("你看见他是往什么方向走的了吗?");
        npc.sayNext("这个么…交易所那个时候很忙,我记不清了,但是当时从贝里来的拉鱼车翻倒,他拉货的车是不可能往贝里方向的西边的路走的。那时整条路上全是鱼,鱼腥味很重的。");
        npc.sayNext("桑凯梅尔兹除了通往贝里的西边的路,就只剩下通往运河的东边的路了,那现在只有一种可能了吧?");
        npc.sayNextS("嗯。这个信息非常重要。谢谢你。");
        npc.sayNext("桑凯梅尔兹居然发生了交易品被盗的事件,真是难以想象。希望你能尽快抓到犯人。");
        npc.completeQuest();
        player.gainExp(530255);
} else {
        // Response is No
        npc.sayS("能稍后再说吗?");
}