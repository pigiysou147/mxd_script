/*  This is mada by Yanran    
 *  
 *  功能：[拉克兰]噩梦时间塔
 *  
 *  @Author Yanran
 */

if (player.isQuestCompleted(34328)) {
        portal.playPortalSE();
        player.changeMap(450003520, 1);
} else {
        portal.abortWarp();
        player.runScript("QuestLKLCLOSE");
}
