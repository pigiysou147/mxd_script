/*  This is mada by     
 *
 *  功能：[拉克兰]坠落
 *
 *  @Author 
 */
if (player.isQuestCompleted(34325)) {
    player.startQuest(34326, 0, "3");
}
player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setForcedFlip(-1);
player.spawnTempNpc(3003252, -463, -21);
player.setNpcSpecialAction(3003252, "summon", 0, false);
player.setNPCForceFlip(3003252, 1);
player.spawnTempNpc(3003256, 22, -27);
player.setNpcSpecialAction(3003256, "summon", 0, false);
player.spawnTempNpc(3003254, -67, -174);
player.setNpcSpecialAction(3003254, "summon", 0, false);
player.spawnTempNpc(3003255, 57, -169);
player.setNpcSpecialAction(3003255, "summon", 0, false);
player.spawnTempNpc(3003251, -374, -24);
player.setNpcSpecialAction(3003251, "sit", 999999, false);
player.setNPCForceFlip(3003251, 1);
player.setLayerBlind(true, 255, 0);
npc.setCameraZoom(0, 1400, 0, -221, -73);
//player.setForcedInput(0);
////npc.setDelay(30);
//player.setOverlapDetail(0, 200, 200, true);

//player.removeOverlapDetail(1500);
//player.setForcedInput(0);
//player.teleport(0); 
player.setLayerBlind(false, 255, 1000);
npc.sayNextENoEsc("#face0#防毒面具，你还好吧？", 3003252);
npc.sayNextENoEsc("#face0#随着梦境的减弱，我也在逐渐变弱，这意味着什么…！！", 3003251);
player.showNpcEffectPlay(3003251, "Effect/OnUserEff.img/emotion/oh", 0, 0, 0, true, 0, false, 0);
npc.sayNextENoEsc("#face0#你感受到了吗？", 3003251);
player.changeBGM("SoundEff.img/ArcaneRiver/thrill");
npc.sayNextENoEsc("#face0#拉克兰正在扩张！以极快的速度！", 3003251);
npc.sayNextENoEsc("#face0#难道，她的目的是…！！", 3003252);
npc.sayNextENoEsc("#face0#不仅是神秘河畔，她准备把全世界都吞噬在自己的梦境之中！", 3003251);
////npc.setDelay(1000);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/wind");
player.showNpcEffectPlay(3003252, "Map/Effect3.img/Lacheln/pung3", 0, 0, -30, true, 0, false, 0);
player.setNpcSpecialAction(3003252, "special", 99999999, false);

////npc.setDelay(500);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/wind");
player.showNpcEffectPlay(3003256, "Map/Effect3.img/Lacheln/pung3", 0, 0, -30, true, 0, false, 0);
player.setNpcSpecialAction(3003256, "special", 99999999, false);

////npc.setDelay(500);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/wind");
player.showNpcEffectPlay(3003254, "Map/Effect3.img/Lacheln/pung3", 0, 0, -30, true, 0, false, 0);
player.setNpcSpecialAction(3003254, "special", 99999999, false);

////npc.setDelay(500);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/wind");
player.showNpcEffectPlay(3003255, "Map/Effect3.img/Lacheln/pung3", 0, 0, -30, true, 0, false, 0);
player.setNpcSpecialAction(3003255, "special", 99999999, false);

////npc.setDelay(500);
npc.sayNextENoEsc("啊！！", true);
npc.sayNextENoEsc("都变成了清道夫？！！", true);
////npc.setDelay(500);
npc.sayNextENoEsc("希望与绝望………好朋友…", 3003249);
npc.sayNextENoEsc("如果一个朋友变强………其他朋友也会随之变强。", 3003249);
npc.sayNextENoEsc("就算再怎么挣扎………你们也无法摆脱这里。", 3003249);
npc.sayNextENoEsc("这里是梦境与幻想的城市。", 3003249);
npc.sayNextENoEsc("#face0#快走！！#ho#!", 3003251);
npc.sayNextENoEsc("你们要去的地方…已经定好了。", 3003249);
//player.setLayerBlind(true, 255, 100);
player.setLayerOn(1000, "11", 0, 0, -1, "Map/Effect2.img/BlackOut", 4);
npc.sayNextENoEsc("再这样要掉下去了！", true);
////npc.setDelay(1000);
player.setLayerOn(1000, "0", 0, -80, -1, "Map/Effect3.img/Lacheln/4", 4);
////npc.setDelay(3000);
player.setLayerOff(300, "0");
////npc.setDelay(1000);
npc.sayNextENoEsc("没有浮上来。", 3003249);
npc.sayNextENoEsc("神秘河畔会处理他们的。", 3003249);
npc.sayNextENoEsc("他们会变成艾尔达…成为…伟大的他的能…", 3003249);
npc.sayNextENoEsc("毫无意义的结局…", 3003249);
////npc.setDelay(1000);
npc.sayNextENoEsc("#face5#呵呵，再见。", 3003250);
////npc.setDelay(1000);
player.changeBGM("Bgm00/Silence");
npc.sayNextENoEsc("#face2#等等。", 3003250);
npc.sayNextENoEsc("#face2#刚才那个人是…", 3003250);
npc.sayNextENoEsc("#face2#难道…", 3003250);
//player.setOverlapDetail(0, 200, 200, true);
player.setLayerOff(300, "11");
player.changeMap(450003760, 1);
player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);