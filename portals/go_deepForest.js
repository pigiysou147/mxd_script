/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]弥补缺失的那2%的味道 打呲溜树
 *  
 *  @Author Yanran
 */

if (player.isQuestStarted(34215)) {
        if (party == null) {
                portal.playPortalSE();
                portal.makeEvent("QuestEvent_02", false, [player, 450002250]);
        } else {
                portal.abortWarp();
                player.showProgressMessageFont("组队状态下无法入场。", 3, 20, 20, 0);
        }
}
