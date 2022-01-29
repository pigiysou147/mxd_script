/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 初次进入，醒来
 *
 *  @Author Yanran
 */

if (!player.isQuestCompleted(30002)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setForcedInput(0);
        //player.setLayerBlind(true, 255, 0);
        //player.setLayerOn(0, "0", 0, 0, -1, "Map/Effect2.img/BlackOut", 4, true, -1, false, 0, 0);
        player.showReservedEffect("Effect/Direction11.img/meet/Scene0");
        //npc.setDelay(3000);
        player.showReservedEffect("Effect/Direction11.img/meet/Scene1");
        //npc.setDelay(3000);
        //player.setLayerOff(300, "0");
        ////player.setLayerBlind(false, 255, 0);
        player.showReservedEffect("Effect/Direction11.img/meet/Scene2");
        //npc.setDelay(14000);
        player.setInGameDirectionMode(false, false, false, false);
        //player.setStandAloneMode(false);
}