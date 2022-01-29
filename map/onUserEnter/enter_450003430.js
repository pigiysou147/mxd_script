/*  This is mada by Yanran    
 *
 *  功能：[拉克兰]前往舞会 首次进入
 *
 *  @Author Yanran
 */
        if (player.isQuestStarted(34319) && (!player.isQuestStarted(34320) && !player.isQuestCompleted(34320)) && !"2".equals(player.getQuestRecordEx(20001))) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.changeBGM("Bgm00/Silence");
        player.setLayerBlind(true, 255, 0);
        npc.sayNextENoEsc("#face0##ho#，你认为拉克兰居民的真实身份究竟是什么？", 3003251);
        npc.sayNextENoEsc("拉克兰居民的真实身份？？", true);
        npc.sayNextENoEsc("#face0#在音乐盒被摧毁的时候，有关神秘河畔的知识也流了出来。\r\n你是从外部来的，相比你已经知道了。", 3003251);
        npc.sayNextENoEsc("嗯…", true);
        npc.sayNextENoEsc("#face0#神秘河畔是刚刚形成的未知世界。\r\n那么#b拉克兰的居民是从哪里来的呢？", 3003251);
        npc.sayNextENoEsc("这点我也觉得奇怪。", true);
        player.soundEffect("Sound/SoundEff.img/girlLaughter");
        npc.sayNextENoEsc("#face0##ho#，我的想法是这样的。\r\n#b居民们的身份其实是艾尔达。#k他们被梦境所迷惑，误以为自己是人类。", 3003251);
        npc.sayNextENoEsc("！！也对……说不定是这样的。", true);
        npc.sayNextENoEsc("#face0#如果真是这样，那我们怎么办？如果我们只不过是能量的凝聚物。", 3003251);
        let selection = npc.askMenuENoEsc("#face0##ho#，我想问问你。难道艾尔达也有“#b灵魂#k”吗？\r\n#b#L0#肯定有。\r\n#b#L1#我不太清楚。\r\n#b#L2#没有。", 3003251);
        if (selection >= 0) {
                npc.sayNextENoEsc("#face0#也许正如你所说的那样……也许不是。", 3003251);
        }
        npc.sayNextENoEsc("#face0#没有灵魂的人为了生存而挣扎…", 3003251);
        npc.sayNextENoEsc("#face0#也许这么做真的毫无意义。", 3003251);
        //player.setOverlapDetail(0, 200, 200, true);
        ////npc.setDelay(1);
        if (player.isQuestStarted(34319) && (!player.isQuestStarted(34320) && !player.isQuestCompleted(34320))) {
                player.updateQuestRecordEx(20001, "2");
                player.changeBGM("Bgm46/LachelntheIllusionCity");
        }
        //player.removeOverlapDetail(1500);
        player.changeMap(450003430, 2);
        //player.setStandAloneMode(false);
        player.setInGameDirectionMode(false, false, false, false);
        //player.setLayerBlind(false, 255, 0);
} else if (player.isQuestCompleted(34325) && (!player.isQuestStarted(34326) && !player.isQuestCompleted(34326))) {
        npc.sayNextNoEsc("这究竟是怎么回事？", 3003246);
        npc.sayNextNoEsc("我在做什么？", 3003263);
        npc.sayNextNoEsc("记忆又再一次…呃，我的头……", 3003251);
        npc.sayNextSNoEsc("我来扶你。我们快回去吧。");
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.setLayerBlind(true, 255, 1000);
        ////npc.setDelay(1000);
        player.changeMap(450003100, 0);
        player.setLayerOn(0, "11", 0, 0, -1, "Map/Effect2.img/BlackOut", 4, true, -1, false, 0, 0);
        ////npc.setDelay(1000);
        player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q3/0");
        npc.sayNextENoEsc("#face1#你有没有试过在无法摆脱的梦境中不断挣扎？", 3003250); //0 常规 1失落 2愤怒 4疯狂
        player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q3/1");
        npc.sayNextENoEsc("#face1#即使知道是梦，却无法挣脱，那种无力感。\r\n\r\n你有没有感受过？", 3003250);
        player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q3/2");
        npc.sayNextENoEsc("#face5#你不妨期待下\r\n现在才刚刚开始。", 3003250);
        player.setLayerOn(2000, "0", 0, -80, -1, "Map/Effect3.img/Lacheln/0", 4, true, -1, false, 0, 0);
        ////npc.setDelay(3500);
        player.setLayerOff(500, "0");
        player.showSpineScreen(0, "Map/Effect3.img/BossLucid/butterfly2/buterfly", "animation", "intro");
        player.soundEffect("Sound/SoundEff.img/ArcaneRiver/butterfly1");
        ////npc.setDelay(3500);
        player.setLayerOff(1000, "11");
        //player.setOverlapDetail(0, 200, 200, true);	
        //player.updateQuestRecordEx(20002, "2");
        //player.setStandAloneMode(false);
        player.setInGameDirectionMode(false, false, false, false);
        //player.removeOverlapDetail(2000);
}