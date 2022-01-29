// Created by Jackson
// Quest ID:17007
// [凯梅尔兹交易所]第三次航行


if (player.gainItem(4310100, 1)) {
        npc.completeQuest();
        npc.sayNextNoEsc("你刚刚通过贸易获得了1个凯梅尔兹金币。 ");
        npc.sayNextNoEsc("为进行贸易所做的准备已经全部完成。怎么样?感觉马上就能成为有钱人了吧?继续这样进行贸易的话,你的等级会提高,也会变得富有的。 ");
        npc.sayNoEsc("我会期待着你成为凯梅尔兹的大富豪的那一天。");
} else {
        npc.sayNext("背包空间不足，无法获得金币，请清理背包其他栏！");
}
