/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]安息洞穴 - 选择岔路
 *
 *  @Author Yanran
 */

if (player.isQuestCompleted(34119)) {
        portal.playPortalSE();
        if (!player.isQuestCompleted(34120)) {
                player.changeMap(450001350, 0);
        } else {
                player.changeMap(450001240, 1);
        }
} else {
        portal.abortWarp();
        player.showSystemMessage("需要先击退阿勒玛！");
}

