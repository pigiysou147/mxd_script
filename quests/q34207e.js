/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]寻找五色东山的美味&amp;lt;1&gt;
 *  
 *  @Author Yanran
 */

npc.say("#b#ho#！#k\r\n你已经集齐材料啦？用这些材料应该可以做出面包？的味道！！", 3003160);
if (player.isQuestStarted(34207)) {
        player.loseItem(4034943, 40);
        npc.completeQuest();
        player.gainExp(310000000);
}