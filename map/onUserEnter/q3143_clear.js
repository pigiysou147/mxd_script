/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 完成狮子王城探索任务。
 *
 *  @Author Yanran
 */

if (player.isQuestCompleted(3167) && player.isQuestStarted(3143)) {
        player.updateQuestRecordEx(3143, "expl", "1");
        //npc.sayNextS("探索完成，报告比斯特吧。");		
}
