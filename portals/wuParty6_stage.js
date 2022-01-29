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
        switch (map.getId()) {
            case 933021000:
				portal.playPortalSE();
                player.changeMap(933022000);
                break;
            case 933022000:
				portal.playPortalSE();
                player.changeMap(933023000);
                break;
            case 933023000:
                if (mapStat==true) {
				portal.playPortalSE();
                    player.changeMap(933024000);
                } else {
					portal.abortWarp();
                    player.showSystemMessage("请消灭所有苔藓木妖，才能进入下一阶段！");
                }
                break;
            case 933024000:
                if (mapStat=true) {
				    portal.playPortalSE();
                    event.setVariable(String(map.getId()), true);
                    player.changeMap(933025000);
                } else {
					portal.abortWarp();
                    player.showSystemMessage("请使用稀释的毒素清除荆棘草！");
                }
                break;
            default:

                break;
        }
    }