/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 掉落
 *
 *  @Author Yanran
 */

if ((!player.isQuestActive(30002) && player.isQuestCompleted(30000)) || (player.isQuestStarted(30003) && player.isQuestCompleted(30002))) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setForcedInput(0);
        //npc.setDelay(1000);
        if (player.isQuestStarted(30003)) {
                npc.sayNextENoEsc("出口没有任何问题啊？重新回去吧。", true);
        } else {
                npc.sayNextENoEsc("四周的雾很浓，看不清东西。不知道会有什么东西出现，必须小心一点。", true);
        }
        if (player.isQuestStarted(30003)) {
                let value = "2";
                let exVariable = "portaluse";
                player.updateQuestRecordEx(30003, exVariable, value);
                player.changeMap(910700200, 0);
        }
        player.setInGameDirectionMode(false, false, false, false);
        //player.setStandAloneMode(false);
}