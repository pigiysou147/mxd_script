/*     
 *  
 *  
 *  功能：武陵道场 下一个阶段传送口
 *  
 *  @author NautMS 
 */


    var mapID = map.getId();
    var stage = parseInt(mapID % 10000 / 100);

    var em = npc.getEvent("PQ_Dojang");
    if (em != null) {
        var floor = em.getVariable("Floor_" + stage);
        if ("1".equals(floor)) {
            player.changeMap(mapID+100,0);
        } else {
			portal.abortWarp();
			
            pi.showSystemMessage("还有剩下的怪物。");
        }
    }
portal.playPortalSE();
