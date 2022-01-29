
/**
 * 副本: 无限火力
 * @author 
 */

let mobList1 = Array(
	//被污染的树液
	
	Array(8240180,-717,155),
	Array(8240180,-556,155),
	Array(8240180,-479,155),
	
	//8620011 石头人
	
	Array(8620009,-1140,155),
	Array(8620010,-1127,155),
	
	//1210103 蓝水灵
	Array(1210103,-1084,155),
	Array(1210103,-1021,155),
	Array(1210103,-950,155),
	Array(1210103,-910,155),
	Array(1210103,-857,155),
	
	//僵尸
	Array(5130108,-410,155),
	Array(5130108,-353,155),
	Array(5130108,-268,155),
	
	//红蜗牛
	Array(130101,-717,155),
	Array(130101,-556,155),
	Array(130101,-479,155),
	
	//蓝蜗牛
	Array(100101,-500,155),
	Array(100101,-600,155),
	Array(100101,-700,155),
	
	//绿蜗牛
	Array(100000,-700,155),
	Array(100000,-800,155),
	Array(100000,-900,155)
	
);

let mobList2 = Array(
	//被污染的树液
	
	Array(8240180,2815,227),
	Array(8240180,2947,227),
	Array(8240180,3099,227),
	
	//8620011 石头人
	
	Array(8620009,2557,437),
	Array(8620010,2440,437),
	
	//1210103 蓝水灵
	Array(1210103,2065,-13),
	Array(1210103,2243,-13),
	Array(1210103,2422,-13),
	Array(1210103,2596,-13),
	Array(1210103,2786,-13),
	
	//僵尸
	Array(5130108,3024,437),
	Array(5130108,2863,437),
	Array(5130108,2720,437),
	
	//红蜗牛
	Array(130101,1966,227),
	Array(130101,2070,227),
	Array(130101,2212,227),
	
	//蓝蜗牛
	Array(100101,2359,227),
	Array(100101,2498,227),
	Array(100101,2641,227),
	
	//绿蜗牛
	Array(100000,2290,437),
	Array(100000,2148,437),
	Array(100000,2032,437)
	
);

var ip=""
var mac;
var macCount ;
	
let player;
let MAP_ID ;
let LOG = "guaji";
let level = 1;
let map;
let bossHp = 1;
let endTime;
let start;
let end;
let totalTime=0;

function init(attachment) {
        [player, MAP_ID] = attachment;
        
		start=new Date().getTime();
        event.getMap(MAP_ID).clearMobs();
        player.changeMap(MAP_ID, 0);
        map = event.getMap(MAP_ID);
		player.dropMessage(1,"  15 秒时候会刷下一波怪物哦");
		player.dropMessage(2,"  15 秒时候会刷下一波怪物哦");
		player.dropMessage(3,"  15 秒时候会刷下一波怪物哦");
		player.dropMessage(4,"  15 秒时候会刷下一波怪物哦");
		player.dropMessage(5,"  15 秒时候会刷下一波怪物哦");
		event.startTimer("makeMob", 15*1000);
		player.addPQLog(LOG);
		player.loseMesos(10000000);
		player.setEvent(event);
}

function mobDied(mob) {
	//识别怪物是否清空,清空后8秒后刷下一批
    if(map.getEventMobCount()==0){
		player.dropMessage(1,"当前怪物已经清空  15 秒时候会刷下一波怪物哦");
		player.dropMessage(2,"当前怪物已经清空  15 秒时候会刷下一波怪物哦");
		player.dropMessage(3,"当前怪物已经清空  15 秒时候会刷下一波怪物哦");
		player.dropMessage(4,"当前怪物已经清空  15 秒时候会刷下一波怪物哦");
		player.dropMessage(5,"当前怪物已经清空  15 秒时候会刷下一波怪物哦");
		event.startTimer("makeMob", 15*1000);
	}
	
}



function makeMob(){
	//全图刷怪
	if(map.getEventMobCount()==0){
		//全部清空
		if(map.getId()==867131100){
			//复古猎场
			for(var i=0;i<mobList2.length;i++){
				let mob = map.makeMob(mobList2[i][0]);
				map.spawnMob(mob, mobList2[i][1], mobList2[i][2]);
			}
		}else {
			for(var i=0;i<mobList1.length;i++){
				let mob = map.makeMob(mobList1[i][0]);
				map.spawnMob(mob, mobList1[i][1], mobList1[i][2]);
			}
		}
		
		//刷怪完毕
		
		player.startAutoAttack(60);
	}
	
}

function removePlayer(playerId, changeMap) {
	player.setEvent(null);
	event.destroyEvent();
}

function playerDisconnected(player) {
        removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) { 
	removePlayer(player.getId(),false);
}

function partyMemberDischarged(party, player) {
	removePlayer(player.getId(), true);
}

function timerExpired(key) {
        switch (key) {
			case "kick":
				removePlayer(player.getId(), true);
				break;
			case "makeMob":
				makeMob();
				break;
        }
}

function deinit() {
	player.setEvent(null);

}

function getmac(){
	var sql = "select dlqComputer from accounts where id =?";
	var result = player.customSqlResult(sql,player.getAccountId());
	mac =result.get(0).get("dlqComputer");
	return mac;
}

function getCount(mac){
	var sql = "select sum(value) macCount from accounts_event where `event`='Day_Quest' and mac =?";
	var result = player.customSqlResult(sql,mac);
	macCount =result.get(0).get("macCount");
	if(macCount==null){
		macCount= 0;
	}
	return macCount;
}

function setEventCount(eventName, type, value) {
	
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, mac,player.getAccountId(), eventName);

}