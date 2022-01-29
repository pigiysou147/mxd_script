/*  This is mada by Yanran    
 *
 *  功能：NPC 进入 仲夏夜森林 播放动画
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.scriptProgressMessage("好似从梦中惊醒，妖精森林渐行渐远。");
npc.setCameraMove(false, 100, 600, 0);
////npc.setDelay(4000);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.changeMap(101030000, 5);
