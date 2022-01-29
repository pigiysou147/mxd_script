/*  This is mada by Yanran    
 *  
 *  功能：[拉克兰]噩梦时间塔
 *  
 *  @Author Yanran
 */

if (player.isQuestStarted(34319) || player.isQuestCompleted(34319)) {
        portal.playPortalSE();
        player.changeMap(450003500, 1);
} else {
        portal.abortWarp();
        player.runScript("QuestLKLCLOSE");
}
