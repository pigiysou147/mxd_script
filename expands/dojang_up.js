/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：武陵道场 向上传送口
 *  
 *  @Author Jackson 
 */

	var mapID = map.getId();
	var em = npc.getEvent("pq_dojang");
	var stage = parseInt(em.getVariable("stage"));
	if(em != null) {
		var floor = em.getVariable("Floor_" + stage);
		if("1".equals(floor) || map.getEventMobCount()==0) {
			//var map = pi.getMap(mapID+100);;
			if(stage < 63) {
				//存储通关数据
				var equip = player.getInventorySlot(-1,-11);
				var sTime = parseInt(player.getQuestRecordEx(7215, "sTime"));
				var now = new Date().getTime();
				var time = (now-sTime)/1000;
				var limit = 0;
				var EntId=0;
				if(equip!=null){
					limit =equip.getLimitBreak();
					EntId =equip.getOnlyId();
				}
				if(party.getLocalMembers().length==1){

					getDayDojang(stage,time,limit,EntId);
					player.dropMessage(1,"当前关卡: "+stage+" 时间："+time+" 秒~");
				}else{
					player.dropMessage(1,"多人模式不记录榜单哦~");
				}
				
				player.changeMap(mapID+100);
				em.setVariable("stage", stage+1);
			} else  {
				//结束的时候增加一个次数
				player.addPQLog("武陵道场");
				player.changeMap(925020003, 0);
				npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"通关武陵道场的全部关卡，登顶武陵道场，从此受到万人敬仰！！！",10000);
				npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"通关武陵道场的全部关卡，登顶武陵道场，从此受到万人敬仰！！！");
				npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"通关武陵道场的全部关卡，登顶武陵道场，从此受到万人敬仰！！！");
				npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"通关武陵道场的全部关卡，登顶武陵道场，从此受到万人敬仰！！！");
				npc.broadcastPlayerNotice(4,"恭喜玩家"+player.getName()+"通关武陵道场的全部关卡，登顶武陵道场，从此受到万人敬仰！！！");
				
			}
			//pi.showSystemMessage("当前层数:"+stage);
		} else {
			npc.say("还有剩下的怪物。");
		}
	}

function getDayDojang(Floor,time,limit,sn){
	var sql = "select * from zz_dojang where character_id="+player.getId()+" and starttime  = DATE_FORMAT( now(),'%y-%m-%d')  limit 1";
            var resultList = player.customSqlResult(sql);
	var aFloor=0;
	var atime=0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
    aFloor=result.get("floor");
		atime=result.get("time");
		if(aFloor==null){
			aFloor=0;
		}
		if(atime==null){
			atime=0;
		}
	}
	
		if(Floor>aFloor){
			 delDojang(time);
			 insDojang(Floor,time,limit,sn);
		}else if(Floor==aFloor&&time<atime){
			 delDojang(time);
			 insDojang(Floor,time,limit,sn);
		}
	
	
}
function delDojang(startTime){
	var sql = "delete from zz_dojang where character_id="+player.getId()+" and starttime  >?  ";
  player.customSqlUpdate(sql,startTime); 
}

function insDojang(Floor,time,limit,sn){
	var sql = "insert INTO zz_dojang(character_id,floor,time,starttime,limitbreak,sn)VALUE("+player.getId()+","+Floor+","+time+",now(),'"+limit+"','"+sn+"')";
	player.customSqlInsert(sql);	
}
