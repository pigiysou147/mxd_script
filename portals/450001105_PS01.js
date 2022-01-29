/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]火焰地带的巨大悬崖
 *
 *  @Author Yanran
 */

if (player.isQuestCompleted(34108)) {
        portal.playPortalSE();
        player.changeMap(450001107, 0);
} else {
        portal.abortWarp();
}
