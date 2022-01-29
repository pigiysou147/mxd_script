
/**
 * 副本: 无限火力
 * @author 
 */

let mobList = Array(
9101078,
9101078// 
);
		
let bossHpConfig = Array(
	//BOSS血量逻辑控制
	// 第几层开始 初始血量 每层提高
	Array(1,500000000000,200000000000),
	Array(1,5000000000000,2000000000000),
	Array(1,50000000000000,50000000000000)
);

var ip=""
var mac;
var macCount ;
	
let player;
let everyTime = 30 * 60 * 1000;//每一轮时间
let MAP_ID = 993160600;
let random = Math.floor(Math.random() * mobList.length);
let level = 1;
let map;
let bossHp = 1;
let endTime;
let start;
let end;
let totalTime=0;
let hard=0;

function init(attachment) {
        
        [player,hard] = attachment;
		mac=getmac();
		macCount =getCount(mac);
		var item =player.getInventorySlot(-1,-11);
		player.customSqlInsert("insert into bossrank (characterid,name,time,boss,itemid,itemname,limitbreak,endtime) values(?,?,?,?,?,?,?,now())",player.getId(),player.getName(),totalTime,"突破副本",item.getOnlyId(),item.getItemName(),item.getLimitBreak());
		
		
		
		setEventCount("wxhl3",1,1);
		player.setDeathCount(5);
		start=new Date().getTime();
        event.getMap(MAP_ID).clearMobs();
        player.changeMap(MAP_ID, 0);
        map = event.getMap(MAP_ID);
		makeMob();
		player.setEvent(event);
        event.startTimer("kick", everyTime);
		map.showTimer(everyTime/1000);
}

function mobDied(mob) {
    if(mobList.indexOf(mob.getDataId()) != -1){
		//通关
		random = Math.floor(Math.random() * mobList.length);
		event.stopTimer ("kick");
        event.startTimer("kick", everyTime);
		map.showTimer(everyTime/1000);
		
		//根据难度不同，给不同的奖励
		if(hard==0){
			var items=[
				4440300,
				4441300,
				4442300,
				4443300
			];
			for(var i=0;i<items.length;i++){
				
				player.gainItem(items[i],20);
			}
		}else if(hard==1){
			var items=[
				4440200,
				4441200,
				4442200,
				4443200
			];
			for(var i=0;i<items.length;i++){
				
				player.gainItem(items[i],20);
			}
		}else if(hard==2){
			var items=[
				4440101,
				4441101,
				4442101,
				4443101,
			];
			for(var i=0;i<items.length;i++){
				
				player.gainItem(items[i],11);
			}
		}
		
		if(level<5){
			
			player.scriptProgressMessage("当前第 "+level+" 关,新的BOSS出现啦！赶紧击败他吧！");
			makeMob();
		}else{
			removePlayer(player.getId(), false);
		}
		level++;
		
	}
}


function makeMob(){
	
	//计算BOSS血量
	var baseHp=bossHpConfig[hard][1];
	bossHp=baseHp+bossHpConfig[hard][2]*level;
	let mob = map.makeMob(mobList[random]);
	mob.changeBaseHp(bossHp);
	mob.setForcedMobStat(275,10000);
	//mob.setHpLimitPercent(10);
	//mob.setZoneDataType(1);
	player.showSystemMessage("当前 "+level+" 关 血量为 ："+bossHp/10000000+" 亿");
	map.spawnMob(mob, -30, 86);
	//mob.setZoneDataType(100);
}

function removePlayer(playerId, changeMap) {
	player.setEvent(null);     
	
	event.destroyEvent();
	player.changeMap(224000000);
}

function playerDisconnected(player) {
        removePlayer(player.getId());
}

function playerChangedMap(player,destination) { 
	if(destination.getId() != MAP_ID){
		removePlayer(player.getId());
	}
}

function partyMemberDischarged(party, player) {
	removePlayer(player.getId());
}

function timerExpired(key) {
        switch (key) {
			case "kick":
				removePlayer(player.getId());
				break;
        }
}


function deinit() {
        player.setEvent(null);
		player.setDeathCount(-1);
}

function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
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
function setEventCount(eventName, type, value) {
	
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, mac,player.getAccountId(), eventName);

}