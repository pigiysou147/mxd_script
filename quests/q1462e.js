npc.sayNext("我想问的问题非常简单。");
npc.askMenu("你在这个世界上最珍惜、最想守护的东西是什么？\r\n\r\n#L0#和我一起对抗黑魔法师的同伴们#l\r\n");
npc.sayNext("我认为可以相互信任的同伴最为珍贵。\r\n\r\n所以我最珍惜跟我一起对抗黑魔法师的同伴们。当然，其中也有些不可靠的家伙，但... 这都是小问题。");
npc.sayNext("这样啊。这并不是一个简单的问题。因为对所有人来说，珍惜的东西都不仅只有一个。\r\n\r\n这个问题并没有正确答案。我只是好奇勇士你为什么想守护这个世界而已。\r\n\r\n#b#i2435734:# #t2435734:# 1个");
npc.sayNext("这个石头被称为#b神秘石#k。如果勇士你把自己的力量记录在这石头上，艾尔达之力就会化作适合你的形态，渗入你的体内。");
if (player.canGainItem(2435734, 1)) {
        npc.sayNext("通过了女神的考验，获得了神秘石。现在去找其他女神吧。\r\n\r\n#b#p1540943##k : 万神殿的#b#m400000001##k\r\n#b#p1540944##k : 堕落世界树的#b#m105300000##k");
        //player.gainItem(2435734, 1); // 完成任务时候系统会送一个石头
        npc.completeQuest();
} else {
        npc.sayNext("背包空间不足！请清理\r\n或者你已经获得了神秘石#i2435734#");

}