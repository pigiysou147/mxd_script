// Created by Jackson
// Quest ID:17007
// [凯梅尔兹交易所]第三次航行

let step = player.getQuestRecordEx(17007);
if (!"3".equals(player.getQuestRecordEx(17009, "step"))) {
        player.updateQuestRecordEx(17009, "step", "3");
}
if ("4".equals(step)) {
        npc.sayNextIllusNoEsc("在出航之前,可以浏览贸易相关的情报。可以在这查看舰船情况。", 9390220, 9390220, 1, false);
        npc.sayIllusNoEsc("我们只以1金币为单位进行贸易,因此有时最小利益会出现0金币,这时,请要回去购买装船物品,用其他组合方式进行装载。请按出航按钮。", 9390220, 9390220, 1, false);
        player.updateQuestRecordEx(17007, "");
} else {
        npc.sayNextIllusNoEsc("实际上.. 贸易途中会不时出现怪物。虽然我很信任你,但是在吃力时,你也可以寻求其他舰船的帮助。 ", 9390220, 9390220, 1, true);
        npc.sayNextIllusNoEsc("本次航海是我们陪你进行的最后一次航海。请再次将贸易地设为[多尔切],运载2个 #t3100000##i3100000#吧。", 9390220, 9390220, 1, true);
        player.openUI(554);
}

