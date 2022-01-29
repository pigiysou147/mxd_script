/*  This is mada by Yanran    
 *  
 *  功能：[拉克兰]原形毕露之地
 *  
 *  @Author Yanran
 */

if (player.isQuestStarted(34319) || player.isQuestCompleted(34319)) {
        portal.playPortalSE();
        player.changeMap(450003400, 4);
} else {
        portal.abortWarp();
        player.runScript("QuestLKLCLOSE");
}
