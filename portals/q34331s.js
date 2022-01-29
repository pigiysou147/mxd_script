/*  This is mada by     
 *
 *  功能：[拉克兰]决战
 *
 *  @Author 
 */
        player.setInGameCurNodeEventEnd(true);
        player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.setLayerBlind(true, 255, 300);
        npc.startQuest();
        //npc.completeQuest();	
        //player.setOverlapDetail(0, 200, 200, true);
        player.setInGameCurNodeEventEnd(true);
        //player.setForcedInput(1);
        player.setStandAloneMode(false);
        player.setInGameDirectionMode(false, false, false, false);
        //player.removeOverlapDetail(1500);
        player.changeMap(450003770, 1);
