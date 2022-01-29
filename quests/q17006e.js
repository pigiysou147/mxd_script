// Created by Jackson
// Quest ID:17006
// [凯梅尔兹交易所]第二次航行


// Inventory Operation with 1 operations.
if (player.gainItem(4310100, 1)) {
        npc.completeQuest();
        npc.sayNextNoEsc("你刚刚通过贸易获得了1个凯梅尔兹金币。 ");
        npc.sayNoEsc("贸易结束之后,请不要忘记来我这领取贸易奖励。 ");
} else {
        npc.sayNext("背包空间不足，无法获得金币，请清理背包其他栏！");
}
