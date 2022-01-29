/*  This is mada by Yanran    
 *
 *  [拉克兰]难以摆脱的庆典之都
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
//player.setForcedInput(0);
////npc.setDelay(1000);
player.setInGameCurNodeEventEnd(true);
npc.sayNextENoEsc("#face3#对了，有件重要的事情忘记告诉你。", 3003252);
npc.sayNextENoEsc("#face3#如果你想沿着河水逃出去，我劝你最好放弃，这里的河水非常危险。", 3003252);
npc.sayNextENoEsc("#face3#如果掉入河水中，#b就会瞬间丧失力气。#k\r\n然后被#b分解成艾尔达的形态。#k\r\n是不是非常可怕啊？", 3003252);
//player.setLayerBlind(false, 255, 300);
////npc.setDelay(500);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);