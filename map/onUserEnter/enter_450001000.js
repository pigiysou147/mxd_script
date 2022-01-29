/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]第一次进入
 *
 *  @Author Yanran
 */
        if (!"1".equals(player.getQuestRecordEx(20000))) {
        player.teleportToPos(3, 1, new java.awt.Point(-2238, 59));
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        let selection = npc.playMovie("V5.avi", true);
        if (selection == 0) {
                player.scriptProgressMessage("播放动画失败。");
        }
        player.useItemEffect(2022863);//移动药水，保证角色移动速度
        npc.setCameraMove(false, 999999, -1344, -180);
        ////npc.setDelay(2000);
        //player.setForcedInput(2);
        npc.setCameraMove(true, 250, 0, 0);
        ////npc.setDelay(4500);
        player.addPopupSay(3003101, 2000, "#info2#所有的一切都结束了……记忆之树……我珍贵的记忆！", "");
        //player.setForcedInput(0);
        ////npc.setDelay(3000);
        //player.setForcedInput(2);
        ////npc.setDelay(1500);
        player.addPopupSay(3003100, 2000, "#info2#异邦人……这都是因为你…！", "");
        //player.setForcedInput(0);
        ////npc.setDelay(500);
        //player.setForcedInput(1);
        ////npc.setDelay(3);
        //player.setForcedInput(0);
        ////npc.setDelay(3000);
        //player.setForcedInput(2);
        ////npc.setDelay(3800);
        player.addPopupSay(3003111, 2000, "#info2#你…那是的那个人…不对，虽然长有的有点像，但是总感觉不一样……", "");
        //player.setForcedInput(0);
        ////npc.setDelay(3000);
        player.setInGameDirectionMode(false, false, false, false);
        player.updateQuestRecordEx(20000, "1");
        player.cancelItemEffect(2022863);
}
/*if (player.isQuestStarted(39364)) {
 player.spawnTempNpc(3003104, -1663, 59);
 }*/