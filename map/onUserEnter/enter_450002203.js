/*  This is mada by Yanran    
 *
 *  功能：[啾啾岛]首次进入 - 穆托大战水怪
 *
 *  @Author Yanran
 */

if (!player.isQuestStarted(34200) && !player.isQuestCompleted(34200)) {
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        
        ////npc.setDelay(30);
        player.setLayerOn(2000, "0", 0, 0, -1, "Map/Effect2.img/ArcaneRiver2/drop1", 4, true, -1, false, 0, 0);
        ////npc.setDelay(3000);
        player.setVansheeMode(true);
        npc.sayNextENoEsc("额啊~~~~！！怎么这么高啊！！", true);
        ////npc.setDelay(1500);
        player.setLayerOn(2000, "1", 0, 0, -1, "Map/Effect2.img/ArcaneRiver2/drop2",4, true, -1, false, 0, 0);
        player.setLayerOff(300, "0");
        ////npc.setDelay(3000);
        ////npc.setDelay(1500);
        npc.sayNextENoEsc("那…那是什么啊？！", true);
        ////npc.setDelay(1500);
        player.setLayerOn(2000, "2", 0, 0, -1, "Map/Effect2.img/ArcaneRiver2/drop3",4, true, -1, false, 0, 0);
        player.setLayerOff(100, "1");
        ////npc.setDelay(3000);
        player.setLayerOn(2000, "2", 0, 0, -1, "Map/Effect2.img/ArcaneRiver2/drop3",4, true, -1, false, 0, 0);
        player.setLayerOff(100, "1");
        npc.sayNextENoEsc("呃..！", true);
        ////npc.setDelay(1500);
        player.setLayerOff(300, "2");
        player.setVansheeMode(false);
        player.changeMap(450002200, 0);
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
        //ms.applyEffect(80002204);    
} else {
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        
        player.setLayerOn(2000, "0", 0, 0, -1, "Map/Effect2.img/ArcaneRiver2/fight", 4);
        ////npc.setDelay(4000);
        player.setLayerOff(300, "0");
        ////npc.setDelay(1000);
        player.changeMap(450002021, 0);
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
}