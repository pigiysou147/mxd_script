/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]安息洞穴 - 三岔路2
 *
 *  @Author Yanran
 */
if (player.isQuestCompleted(34117)) {
        portal.playPortalSE();
        player.changeMap(450001218, 1);
} else {
        portal.abortWarp();
}
