/*  This is mada by Yanran    
 *
 *  功能：[啾啾岛]安息洞穴 - 首次进入啾啾岛
 *
 *  @Author Yanran
 */

if (!player.isQuestCompleted(34200) && !player.isQuestStarted(34200)) {
        //player.setInGameCurNodeEventEnd(true);
        //player.setInGameDirectionMode(true, false, false, false);
        ////player.setStandAloneMode(true);
        let selection = npc.playMovie("ChuChu.avi", true);
        if (selection == 0) {
                player.scriptProgressMessage("播放动画失败。");
        }
        player.changeMap(450002203, 0);
} else {
        player.changeMap(450002015, 0);
}
