/*  This is mada by Yanran    
 *
 *  [拉克兰]梦与幻想之都 - 开始
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setForcedInput(0);
////npc.setDelay(2000);
player.setInGameCurNodeEventEnd(true);
player.spawnTempNpc(3003257, 200, 78);
player.setNpcSpecialAction(3003257, "summon", 0, false);
player.setNpcForceFlip(3003257, 1);
player.spawnTempNpc(3003252, 405, 78);
player.setNpcSpecialAction(3003252, "special", 99999999, true);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(2000);
npc.sayNextENoEsc("#face3#你…跟我们走一趟……！", 3003249);
npc.sayNextENoEsc("（该死，瞬间被压制了！）", true);
player.setLayerBlind(true, 255, 1000);
////npc.setDelay(2000);
player.changeMap(450003711, 0);