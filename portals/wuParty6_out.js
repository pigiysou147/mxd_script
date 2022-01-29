/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：毒雾森林 组队任务相关
 *  
 *  @Author Jackson 
 */


   var event = portal.getEvent("PQ_PoisonForest");
    if (event != null) {
        var mapStat = event.getVariable(String(map.getId()));
        if (mapStat==true) {
            party.changeMap(933029000);
        } else {
			portal.abortWarp();
		}
    }
