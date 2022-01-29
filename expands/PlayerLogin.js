var vipLevel = new Array( 	
	100,
	500, 
	1000, 
	2000, 
	3000, 
	5000, 
	8000, 
	10000, 
	15000,
	20000,
	30000,
	40000,
	50000,
	90000,
	130000,
	190000,
	250000,
	310000
	);

if(player.getPQLog("新手驾到")<1 && map.getId()!=910194251){
	player.changeMap(910194251);
}

if(map.getId()==693000044 || map.getId()==910160100){
	player.changeMap(910000000);
}

var leiji =getHyPay();

var myLevel=0;
//识别会员等级操作
for(var i=0;i<vipLevel.length;i++){
	if(leiji>=vipLevel[i]){
		myLevel++;
	}else{
		break;
	}
}

if(myLevel>=10){
	npc.broadcastWeatherEffectNotice(1,"[土豪驾到]：尊贵的 VIP等级:"+myLevel+" 玩家["+player.getName()+"] 上线啦~~~全体岛民鼓掌欢迎~",10000);

	var item=player.getInventorySlot(-1,-11);
	if(item!=null){

		var tp=parseInt(item.getLimitBreak()/100000000);
		npc.broadcastPlayerNotice(7, "[土豪驾到]：尊贵的 VIP等级:"+myLevel+" 玩家["+player.getName()+"] 上线啦~~~该大佬的突破为: "+tp+" 亿 全体岛民鼓掌欢迎~");
		npc.broadcastPlayerNotice(8, "[土豪驾到]：尊贵的 VIP等级:"+myLevel+" 玩家["+player.getName()+"] 上线啦~~~该大佬的突破为: "+tp+" 亿 全体岛民鼓掌欢迎~");
		npc.broadcastPlayerNotice(9, "[土豪驾到]：尊贵的 VIP等级:"+myLevel+" 玩家["+player.getName()+"] 上线啦~~~该大佬的突破为: "+tp+" 亿 全体岛民鼓掌欢迎~");
	}else{

		npc.broadcastPlayerNotice(7, "[土豪驾到]：尊贵的 VIP等级:"+myLevel+" 玩家["+player.getName()+"] 上线啦~~~全体岛民鼓掌欢迎~");
		npc.broadcastPlayerNotice(8, "[土豪驾到]：尊贵的 VIP等级:"+myLevel+" 玩家["+player.getName()+"] 上线啦~~~全体岛民鼓掌欢迎~");
		npc.broadcastPlayerNotice(9, "[土豪驾到]：尊贵的 VIP等级:"+myLevel+" 玩家["+player.getName()+"] 上线啦~~~全体岛民鼓掌欢迎~");
		
		// npc.broadcastNotice("[土豪驾到]：该大佬的评分为：   PK排名为：");
	}
	
}

getEventCount("活力");
player.customSqlUpdate("update hypay set name =? where accountid=?",player.getName(),player.getAccountId());
//player.loseItem(2022529);
player.runScript("装备评分更新");

 function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function getHyPay() {

	var sql = "select leiji from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("leiji");
		}
	} else {
		return 0;
	}

}