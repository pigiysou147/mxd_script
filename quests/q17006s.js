// Created by Jackson
// Quest ID:17006
// [凯梅尔兹交易所]第二次航行


let step = player.getQuestRecordEx(17006);
if (!"2".equals(player.getQuestRecordEx(17009, "step"))) {
        player.updateQuestRecordEx(17009, "step", "2");
}
if ("2".equals(step)) {
        npc.sayNextIllusNoEsc("快看,贸易品购买窗出现了吧?刚开始能够购买的贸易品不是很多,但是以后随着交易地区逐渐增多,能够购买的贸易品也会变多的,不用担心。", 9390220, 9390220, 1, true);
        npc.sayNextIllusNoEsc("把鼠标放在图标上,就能查看到各个贸易品的情况了。", 9390220, 9390220, 1, true);
        npc.sayNextIllusNoEsc("抓怪物时,偶尔可以捡到怪物掉落的物品,可以把其中比较珍贵的物品作为个人贸易品来卖。这种珍贵的物品可以卖到很多金币的。 ", 9390220, 9390220, 1, true);
        npc.sayIllusNoEsc("购买贸易品需要使用金币。试着用我刚刚给你的金币来购买贸易品吧?试着运载2个 #t3100000# 吧。", 9390220, 9390220, 1, true);
        player.updateQuestRecordEx(17006, "");
} else if ("3".equals(step)) {
        npc.sayNextIllusNoEsc("你做得很好。马上就要出航了,快上船吧。 ", 9390220, 9390220, 1, false);
        player.updateQuestRecordEx(17006, "");
        npc.makeEvent("sail_event", false, [player, 865000100]);
} else {
        npc.sayNextIllusNoEsc("但第一次航海太高兴了,结果忘记要装载贸易品了。那.. 这次就试着购买贸易品吧。请再点一次多尔切地区吧。 ", 9390220, 9390220, 1, false);
        player.openUI(554);
}



