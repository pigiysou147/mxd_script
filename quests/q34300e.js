/*  This is mada by Yanran    
 *  
 *  功能：[拉克兰]庆典正酣之都
 *  
 *  @Author Yanran
 */

npc.sayNext("你是从外面进来的吗？");
npc.sayNextS("？", false);
npc.sayNext("这个地方很危险…该死，已经晚了。");
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 1000);
//player.setForcedInput(1000);
//player.setOverlapDetail(0, 500, 500, true);	
//player.removeOverlapDetail(1500);
npc.completeQuest();
player.changeMap(450003710, 0);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);