/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 灯泡 哈南特的紧急呼叫 查看传送口
 *
 *  @Author Yanran
 */
if (player.isQuestStarted(30000)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setForcedInput(0);
        //npc.setDelay(2000);
        npc.setCameraMove(false, 400, 764, -1032);
        //npc.setDelay(4311);
        npc.sayNextENoEsc("啊，那边有通往新地区的路。", true);
        npc.setCameraMove(true, 0, 0, 0);
        player.setInGameDirectionMode(false, false, false, false);
        //player.setStandAloneMode(false);
        player.completeQuest(30000, 0);
}