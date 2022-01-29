/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]弥补缺失的那2%的味道
 *  
 *  @Author Yanran
 */

if (player.isQuestStarted(34215) && player.hasItem(4034958, 1)) {
        player.loseItem(4034958, 1);
        npc.completeQuest();
        player.gainExp(315000000);
        player.changeMap(450002205, 0);
}
