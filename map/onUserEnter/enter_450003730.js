/*  This is mada by Yanran    
 *
 *  [拉克兰]打碎碟子2
 *
 *  @Author Yanran
 */
let NPC;
let NPC1;
let NPC2;
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
//npc.setCameraZoom(200, 1500, 500,673, 78);
npc.setCameraZoom(0, 1700, 0, 673, 30);
player.removeAdditionalEffect();
//ms.setMapTagedObjectVisible("core0", 0);
//ms.setMapTagedObjectVisible("core1", 0);
//ms.setMapTaggedObjectAnimation("sand", 0);
player.spawnTempNpc(3003258, 673, 78);
player.setNpcSpecialAction(3003258, "summon", 0, false);
player.spawnTempNpc(3003251, 433, 49);
//ms.setUserEmotionLocal(1, 999999);
player.setNpcSpecialAction(3003251, "summon", 0, false);
player.setNpcForceFlip(3003251, 1);
//////npc.setDelay(3000);
player.setInGameCurNodeEventEnd(true);
npc.sayNextENoEsc("#face3#呃呃……", 3003223);
player.setNpcSpecialAction(3003258, "remove", 0, false);
////npc.setDelay(100);
player.soundEffect("Sound/SoundEff.img/kreasePQ_appear");
////npc.setDelay(1000);
npc.sayNextENoEsc("变成了音乐盒？", true);
npc.sayNextENoEsc("#face0#看来音乐盒是维持梦境装置的推测是正确的。", 3003251);
npc.setCameraMove(false, 500, 800, 90);
////npc.setDelay(1500);
player.setNpcForceFlip(3003251, -1);
//player.setForcedInput(1);
////npc.setDelay(1);
//player.setForcedInput(0);
NPC = 3003257;
player.spawnTempNpc(NPC, 100, 78);
player.setNpcSpecialAction(NPC, "summon", 0, false);
player.setNpcForceFlip(NPC, 1);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(300);
NPC1 = 3003257;
player.spawnTempNpc(NPC1, 50, 78);
player.setNpcSpecialAction(NPC1, "summon", 0, false);
player.setNpcForceFlip(NPC1, 1);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(300);
NPC2 = 3003257;
player.spawnTempNpc(NPC2, 0, 78);
player.setNpcSpecialAction(NPC2, "summon", 0, false);
player.setNpcForceFlip(NPC2, 1);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(300);
npc.sayNextENoEsc("不要碰…音乐盒……", 3003249);
player.setNpcForceFlip(3003251, -1);
npc.setCameraMove(false, 500, 1200, 90);
////npc.setDelay(1500);
player.setNpcForceFlip(3003251, 1);
npc.sayNextENoEsc("#face0#我会拖延时间，请摧毁音乐盒。", 3003251);
player.setNpcForceFlip(3003251, -1);
player.setNpcForceMove(3003251, -1, 200, 200);
////npc.setDelay(3000);
//player.setForcedInput(2);
////npc.setDelay(1);
player.soundEffect("Sound/SoundEff.img/punch");
//player.setForcedInput(0);
////npc.setDelay(1000);
player.setForcedAction(334, 30);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(500);
player.setForcedAction(334, 30);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(600);
player.setForcedAction(334, 30);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(500);
npc.sayNextENoEsc("（比我想象中的更加坚固。）", true);
npc.sayNextENoEsc("让开…真是碍手碍脚的。", 3003249);
//player.setForcedInput(1);
////npc.setDelay(1);
//player.setForcedInput(0);
////npc.setDelay(1);
npc.sayNextENoEsc("#face0#请摧毁音乐盒，#ho#。", 3003251);
player.soundEffect("Sound/SoundEff.img/punch");
//player.setForcedInput(2);
////npc.setDelay(1);
//player.setForcedInput(0);
////npc.setDelay(1);
player.setForcedAction(334, 30);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(500);
player.setForcedAction(334, 30);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(500);
player.setForcedAction(334, 30);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(500);
player.setForcedAction(411, 30);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(500);
player.soundEffect("Sound/SoundEff.img/windowcrash2");
player.setNpcSpecialAction(3003258, "die", 999999, true);
player.setNpcSpecialAction(3003251, "sit", 999999, false);
////npc.setDelay(3000);
player.destroyTempNpc(3003258);
npc.sayNextENoEsc("音乐盒被摧毁了。", true);
npc.setCameraMove(false, 600, 700, 90);
////npc.setDelay(1000);
player.setForcedFlip(-1);
npc.sayNextENoEsc("防毒面具！！", true);
npc.sayNextENoEsc("太迟了……音乐盒……", 3003249);
npc.sayNextENoEsc("梦境……正在变弱…", 3003249);
player.soundEffect("Sound/Mob.img/8643000/Die");
player.setNpcSpecialAction(NPC, "die", 0, false);
////npc.setDelay(100);
player.soundEffect("Sound/Mob.img/8643000/Die");
player.setNpcSpecialAction(NPC1, "die", 0, false);
////npc.setDelay(100);
player.soundEffect("Sound/Mob.img/8643000/Die");
player.setNpcSpecialAction(NPC2, "die", 0, false);
////npc.setDelay(3000);
player.destroyTempNpc(NPC);
player.destroyTempNpc(NPC1);
player.destroyTempNpc(NPC2);
//player.setOverlapDetail(0, 200, 200, true);
////npc.setDelay(1);
player.destroyTempNpc(3003251);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);
//ms.setBGMVolume(0,999999); 
player.changeMap(450003330, 0);