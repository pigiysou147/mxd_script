

let port = player.getIntQuestRecordEx(17012, "port");
//航行次数
let sailCount = player.getIntQuestRecordEx(17018, String(port));
let baseCoin = player.getIntQuestRecordEx(17012, "base_coin");
let income = player.getIntQuestRecordEx(17012, "base_income");
var sql = "select * from hanghai where characterid = ?  ";

var result = player.customSqlResult(sql, player.getId());
var nowCount=0;
if(result.size() > 0) {
	
	nowCount=result.get(0).get("total_count");
															
} else {
	var sql = "insert into  hanghai  (id,accountid,characterid,character_name,rank_count,total_count) values(0,?,?,?,?,?)";

	var result = player.customSqlInsert(sql,player.getAccountId(), player.getId(), player.getName(), 1,1);
	
}
if(port==5){
	//第六个地图
	//每5次弹一个不同的礼包
	if(nowCount%6==0 && nowCount>=6){
		if(player.getPQLog("航海礼包5阶段"+(parseInt(nowCount/6)))==0){
			player.addPQLog("航海礼包5阶段"+(parseInt(nowCount/6)),1,999);
			let item = player.makeItemWithId(2431399);
			item.setExpiration(new Date().getTime() + 3*60 * 60 *  1000);
			player.gainItem(item);
			
			let item1 = player.makeItemWithId(2431395);
				item1.setExpiration(new Date().getTime() + 3*60 * 60 *  1000);
				player.gainItem(item1);
			
			npc.broadcastPlayerNotice(1,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
			npc.broadcastPlayerNotice(2,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
			npc.broadcastPlayerNotice(3,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
			npc.broadcastWeatherEffectNotice(37, "恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！", 10000);
		}
			
	 }
}else{
	//其他几个地图，通关达到5次以上，可以弹一个礼包出来
	//
	if(sailCount>=6){
		//1-5号地区
		if(port==0){
			if(player.getPQLog("航海礼包"+port)==0){
				player.addPQLog("航海礼包"+port,1,999);
				let item = player.makeItemWithId(2431396);
				item.setExpiration(new Date().getTime() + 3*60 * 60 *  1000);
				player.gainItem(item);
				npc.broadcastPlayerNotice(1,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
				npc.broadcastPlayerNotice(2,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
				npc.broadcastPlayerNotice(3,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
				npc.broadcastWeatherEffectNotice(37, "恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！", 10000);
			}
			
				
		}else if(port==1){
			if(player.getPQLog("航海礼包"+port)==0){
				player.addPQLog("航海礼包"+port,1,999);
				let item = player.makeItemWithId(2431397);
				item.setExpiration(new Date().getTime() + 3*60 * 60 *  1000);
				player.gainItem(item);
				npc.broadcastPlayerNotice(1,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
				npc.broadcastPlayerNotice(2,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
				npc.broadcastPlayerNotice(3,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
				npc.broadcastWeatherEffectNotice(37, "恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！", 10000);
			}
		}else if(port==2){
			if(player.getPQLog("航海礼包"+port)==0){
				player.addPQLog("航海礼包"+port,1,999);
				let item = player.makeItemWithId(2431398);
				item.setExpiration(new Date().getTime() + 3*60 * 60 *  1000);
				player.gainItem(item);
				npc.broadcastPlayerNotice(1,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
				npc.broadcastPlayerNotice(2,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
				npc.broadcastPlayerNotice(3,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！");
				npc.broadcastWeatherEffectNotice(37, "恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本，获得了限时礼包的购买机会！！！", 10000);
			}
		}else if(port==3){
			if(player.getPQLog("航海礼包"+port)==0){
				player.addPQLog("航海礼包"+port,1,999);
				let item = player.makeItemWithId(2431398);
				item.setExpiration(new Date().getTime() + 3*60 * 60 *  1000);
				player.gainItem(item);
			}
		}else if(port==4){
			if(player.getPQLog("航海礼包"+port)==0){
				player.addPQLog("航海礼包"+port,1,999);
				let item = player.makeItemWithId(2431398);
				item.setExpiration(new Date().getTime() + 3*60 * 60 *  1000);
				player.gainItem(item);
			}
		}
		
	}
}
player.dropMessage(1,"当前为:第"+(port+1)+"地图 航行次数为:"+(nowCount-1));