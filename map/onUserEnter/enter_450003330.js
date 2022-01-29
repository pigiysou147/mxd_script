/*  This is mada by Yanran    
 *
 *  功能：[拉克兰]
 *
 *  @Author Yanran
 */
        if (player.isQuestCompleted(34315) && (!player.isQuestStarted(34316) && !player.isQuestCompleted(34316))) {
        npc.sayNextNoEsc("这究竟是怎么回事？", 3003238);
        player.changeBGM("Bgm46/LachelntheIllusionCity");
        npc.sayNextNoEsc("我在做什么啊？", 3003228);
        npc.sayNextNoEsc("我的记忆… 咳，我的头……", 3003251);
        npc.sayNextSNoEsc("防毒面具？？你没事吧？究竟发生了什么事？");
        npc.sayNextNoEsc("我没事，还是把居民们……送到安全的地方……可是去哪里呢？", 3003251);
        npc.sayNextSNoEsc("要不要把他们带到据点？");
        npc.sayNextNoEsc("不，不行。音乐盒被摧毁后，清道夫立刻就消失了。说不定没有音乐盒的地方更加安全……", 3003251);
        npc.sayNextSNoEsc("我们先回据点吧。");
        npc.sayNextNoEsc("喂，我说！一起走吧！", 3003220);
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.setLayerBlind(true, 255, 2000);
        //player.playSoundWithMuteBGM("Bgm46/ClockTowerofNightmare");
        ////npc.setDelay(3000);
        //player.setOverlapDetail(0, 200, 200, true);
        ////npc.setDelay(1);
        player.changeBGM("Bgm46/ClockTowerofNightmare");
        //player.removeOverlapDetail(1500);
        player.changeMap(450003740, 0);
        //player.setStandAloneMode(false);
        player.setInGameDirectionMode(false, false, false, false);
        if (player.isQuestCompleted(34315) && (!player.isQuestStarted(34316) && !player.isQuestCompleted(34316))) {
                player.startQuest(34316, 0);
        }
}