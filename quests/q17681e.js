// Created by Jackson
// Quest ID:17681
// [凯梅尔兹共和国] 最终报告


npc.sayNextE("你来了啊，从你的脸上就能看到你很辛苦啊。", 1540451);
npc.sayNextE("真是多亏了某人啊。", true);
npc.sayNextE("什么某人啊，你这说的像是有哪个人特意让你受苦了啊。你的表情似乎是在说我就是那个人啊？", 1540451);
npc.sayNextE("……究竟帕尔巴特是什么人，你给了他什么才让他带我到凯梅尔兹的？还有，一开始去凯梅尔兹的船本身……", true);
npc.sayNextE("请你不要再说这些没营养的话了。最终你不是没什么损失吗？而且还交到了好朋友。当然，我并没有预料到这一点。", 1540451);
npc.sayNextE("#b(……我感觉这次也被这个人玩弄于股掌之中啊。)#k", true);
npc.sayNextE("总之，辛苦你了。委托你做事的时候，总是有好结果呢。看来这就是意外之喜吧。", 1540451);
npc.sayNextE("哎呀，我说错了，这都是你有实力的结果啊。", 1540451);
npc.sayNextE("#b(……我居然忘了让女皇教训南哈特……)#k", true);

npc.sayNextE("对了，这个是女皇大人为了你准备的小小奖励。\r\n\r\n#b#i2049702:##t2049702##k\r\n#b#i2431935:##t2431935##k\r\n#b#i2431936:##t2431936##k", 1540451);
if (player.getFreeSlots(2) >= 3) {
        //let selection = npc.askMenu("请挑选一件您中意的武器。\r\n#L1##b#i1432200:##t1432200##k#l\r\n#L2##b#i1442254:##t1442254##k#l", 1101002);
        npc.sayNextE("还有，你从凯梅尔兹带来的书信里，还附有这样的东西。你可得好好保管它。\r\n\r\n#b#i1142981:##t1142981##k", 1540451);
        if (player.gainItem(1142981, 1)) {
                player.gainItem(2049702, 1);
                player.gainItem(2431935, 1);
                player.gainItem(2431936, 1);
                npc.completeQuest();
                player.gainExp(11058907);
                npc.sayNextE("#face0#而我的谢礼嘛……\r\n以后我们一起去凯梅尔兹旅行吧。你不是说那里风景很秀丽吗。", 1540451);
        } else {
                npc.sayNextE("背包空间不足，请清理！", 1540451);
        }

} else {
        npc.sayNextE("背包空间不足，请清理！", 1540451);
}