/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 逃出巨大的树根卷轴使用
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
//player.setForcedInput(0);
//npc.setDelay(2000);
npc.sayNextSNoEsc("虽然卷轴很陈旧，但是一点问题都没有。重新回去吧。");
player.changeMap(910700200, 0);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
let value = "2";
let exVariable = "oldscroll";
player.updateQuestRecordEx(30004, exVariable, value);