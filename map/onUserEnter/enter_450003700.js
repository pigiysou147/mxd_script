/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]初入拉克兰
 *
 *  @Author Yanran
 */

        player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.removeAdditionalEffect();
player.setUserEmotionLocal(7, 9999999);//设置玩家表情
//player.setForcedInput(4);
player.changeBGM("SoundEff.img/ArcaneRiver/night");
////npc.setDelay(3000);
player.setInGameCurNodeEventEnd(true);
npc.sayNextENoEsc("嗯…", true);
////npc.setDelay(1000);
//player.setOverlapDetail(0, 200, 200, true);	
npc.setCameraZoom(0, 2200, 500, 452, 210);
//player.removeOverlapDetail(1000);	
////npc.setDelay(5000);
npc.sayNextENoEsc("真是奇怪……怎么感觉浑身无力…？", true);
player.changeBGM("Bgm46/ClockTowerofNightmare");
////npc.setDelay(2000);
player.showSpineScreen(0, "Map/Effect3.img/BossLucid/butterfly/005", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/butterfly0");
////npc.setDelay(2000);
player.setLayerBlind(true, 255, 2000);
////npc.setDelay(6000);
let selection = npc.playMovie("Lucid.avi", true);
player.changeBGM("Bgm00/Silence");
if (selection == 0) {
        player.scriptProgressMessage("播放动画失败。");
}
if (!player.isQuestCompleted(34300)) {
        player.updateQuestRecordEx(34340, "enter", "1");
}
player.changeMap(450003000, 3);
//player.setLayerBlind(false, 255, 1000);
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);