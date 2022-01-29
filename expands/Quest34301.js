/*  This is mada by Yanran    
 *  
 *  [拉克兰]难以摆脱的庆典之都
 *  
 *  @Author Yanran
 */

if (!"2".equals(player.getQuestRecordEx(34340, "enter"))) {
        npc.sayNextS("（好像无法经过这里。）");
        npc.sayNextS("（还是先回去吧。）");
        player.changeMap(450003100, 0);
        player.updateQuestRecordEx(34340, "enter", "2");
}