// Created by Jackson
// Quest ID:17648
// [凯梅尔兹共和国] 重返桑凯梅尔兹


npc.sayNext("啊..那个..", 9390202);
npc.sayNext("我就在此告辞了。", 9390204);
player.setNpcViewOrHide(9390255, false, false);
npc.sayNext("我还打算问个名字什么的呢..", 9390202);
npc.sayNextS("嗯? 怎么了?问到名字你打算干嘛?");
npc.sayNext("啊,没,没什么。就那个...赶紧去报告吧。", 9390202);
npc.sayNextS("真是个奇怪的家伙。嗯?村里怎么这么乱糟糟的呢?");
npc.sayNext("就是啊。有什么事吗。那有我们商团的船员。去问问他有什么事。", 9390202);
npc.sayNextS("请问村里在搞什么活动吗?");
npc.sayNext("哎哟,莱文大人你来了呀。你来得正是时候!", 9390217);
npc.sayNext("有什么事么?为什么这么乱糟糟的。", 9390202);
npc.sayNext("其实海本王国又派人来了！", 9390217);
npc.sayNext("海本王国？那些傲慢的家伙又打算来说什么可笑的话？", 9390202);
npc.sayNextS("你说海本王国。你在说什么啊?");
npc.sayNext("啊..#h0#你还不知道啊。你等一小会儿再跟我说话。我整理一下思绪再跟你说明。", 9390202);
npc.sayNext("啊对了,这是在普赛依船上发现的东西。就当作是谢谢你帮助我送你了。", 9390202);
let itemId = 1102717 + player.getJobCategory();
if (player.gainItem(itemId, 1)) {
        npc.completeQuest();
        player.completeQuest(17731, 0);//Quest Name:第2章.海上的重大冲突
        player.startQuest(17740, 0);//Quest Name:第1章.不速之客
        player.gainExp(5953667);
} else {
        npc.sayNext("你的背包满了，清理下吧！", 9390201);
}
