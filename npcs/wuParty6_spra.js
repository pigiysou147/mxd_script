/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：毒雾森林 组队任务相关
 *  
 *  @Author Jackson 
 */
/* global cm */
if (map.getId()==933027000){
var event = npc.getEvent("PQ_PoisonForest");
var mapStat = event.getVariable(String(map.getId()));
                if (player.hasItem(4001816,1)) {
                            npc.sayNext("紫色魔力石拿来啦,怪人经常拿着它在祭坛附近研究着什么东西……");
                            if (mapStat!=true) {
                                event.setVariable(String(map.getId()), true);
          		  map.screenEffect("quest/party/clear");
                            party.changeMap(933028000);
                    }
                } else {
                    npc.say("打开怪人放在桌子上的箱子，把紫色魔力石拿过来!");
                }
}