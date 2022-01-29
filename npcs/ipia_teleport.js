/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 还有希望吗
 *
 *  @Author Yanran
 */
        if (player.isQuestStarted(3178) && !"2".equals(player.getQuestRecordEx(3178))) {
        let selection = npc.askYesNo("你想前往接见室么？");
        if (selection == 1) {
                let tomap = 921140000;//980041008	   	       
                //player.changeMap(tomap, 0);
                npc.makeEvent("QuestEvent_01", false, [player, tomap]);
        }
} else {
        npc.say("可怜的雷昂……要是他能恢复原状的话……");
}