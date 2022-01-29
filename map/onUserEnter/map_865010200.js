// Created by Jackson
// ID:[865010200]
// MapName:贝里

if (!player.isQuestStarted(17608) && !player.isQuestCompleted(17608)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setTemporarySkillSet(0);
        player.setInGameDirectionMode(true, true, false, false);
        //player.setStandAloneMode(true);
         //player.setForcedInput(4);
        player.setUserEmotionLocal(7, 7000);
        //npc.setDelay(3000); 
        npc.sayNextSNoEsc("唉哟……这里是什么地方啊……");
        //player.setForcedInput(2);
        //npc.setDelay(1000);
        //player.setForcedInput(0);
        npc.sayNextSNoEsc("船呢……？帕尔巴特呢……？我一个人被卷到这里了吗……？ 船……翻了……？ 究竟发生了什么，我完全想不起来了……");
        npc.sayNextSNoEsc("总之，幸好似乎没有什么地方受重伤。这里……看起来像是渔村，先去随便找人问一下这里是哪里吧？");
        player.startQuest(17608, 0);//Quest Name:[凯梅尔兹共和国] 平安(?) 到达的地方
        //npc.setDelay(1000);
        // Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00
        //player.setTemporarySkillSet(0);
        player.setInGameDirectionMode(false, true, false, false);
        //player.setStandAloneMode(false);
        player.showScreenAutoLetterBox("Map/EffectBT.img/dawnveil1/temaD", 0);
}
