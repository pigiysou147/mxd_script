// Created by Jackson
// Quest ID:32242
// 巨大古树之修嘉


let selection = npc.askMenu("那个，我叫#b修嘉#k。你不记得我了？\r\n#b#L0# 我记起来了。#l\r\n#b#L1# 我记不得了。#l");
if (selection == 1) {
        npc.sayNext("原来如此。其实我……在冒险岛见到过你。不过既然你想不起来，那你就不用在意我的话。");
} else {
        npc.sayNext("啊，真的吗？你记得我？真是太好了。我也记得卩灬孑灬你呢！");
}
npc.sayNext("其实，我正要去魔法密林参加转职考试……。不过，下面有那些虫子在，我没法过去。由于我非常非常怕虫子，所以已经手足无措在这里待了3个多小时了……。");
if (npc.askYesNo("#h0#，你能不能帮帮我呢？要是能帮我赶走下面那些虫子就好了。")) {
        let bGain = player.hasItem(1322005, 1) || player.gainItem(1322005, 1);
        if (bGain) {
                npc.startQuest();
                map.spawnMob(9300801, 241, -205);
                npc.sayNext("真的吗？你要帮我赶走虫子？谢谢你！\r\n虫子在通往魔法密林的路口边。");
                npc.say("对了，给你，这个是我一直带着的东西，希望能帮到你……");
        } else {
                npc.say("对了，我有东西要给你，可是你背包满了，清理下。");
        }
} else {
        npc.say("那样啊，我拜托你做奇怪的事情真是不好意思。\r\n要想参加转职考试，无论发生事情都得去魔法密林……。可现在无法去转职，难道只能在这附近一直练到#b100级#k吗？呜呜……。");
}