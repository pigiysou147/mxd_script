/*  This is mada by Yanran    
 *
 *  功能：NPC 进入 仲夏夜森林 播放动画
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
npc.setCameraMove(false, 100, -500, 0);
////npc.setDelay(1500);
player.showScreenDelayedEffect("temaD/enter/fairyAcademy", 0);
////npc.setDelay(2800);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
if (player.isQuestCompleted(32104)) {
        player.changeMap(101070010, 0);
} else {
        player.changeMap(101070000, 0);
}