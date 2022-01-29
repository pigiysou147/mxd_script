/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 奇怪的少女 监视触发完成
 *
 *  @Author Yanran
 */
        if (player.isQuestStarted(30002)) {
        player.updateQuestRecordEx(30002, "outportal=2");
        npc.sayNextS("果然有出口。应该把这一事实告诉少女。");
}