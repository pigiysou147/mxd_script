/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]安息洞穴 - 通向啾啾岛
 *
 *  @Author Yanran
 */
if (player.getLevel() < 210) {
        player.scriptProgressMessage("只有210级以上玩家才能进入该区域！");
        portal.playPortalSE();
        player.changeMap(450001250, 1);
} else if (!player.isQuestCompleted(34120)) {
        player.scriptProgressMessage("请完成任务后离开！");
        portal.playPortalSE();
        player.changeMap(450001250, 1);
} else if (player.isQuestCompleted(34120) && player.getLevel() >= 210) {
        //portal.abortWarp();
        player.runScript("ChewChewfirst");
} else {
        portal.playPortalSE();
        player.changeMap(450001250, 1);
        player.scriptProgressMessage("210级以上才能过去！");
}
