/*  This is mada by Yanran     
 *
 *  功能：[拉克兰]舞会面具
 *
 *  @Author Yanran
 */
//npc.completeQuest();
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 1000);
//player.setForcedInput(2000);
//player.setOverlapDetail(0, 200, 200, true);
//player.setForcedInput(1);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.setOverlapDetail(0, 200, 200, true);
//player.removeOverlapDetail(1500);
npc.makeEvent("QuestEvent_02", false, [player, 450003750]);