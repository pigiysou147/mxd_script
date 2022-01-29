
/**
 * 副本: 无限火力
 * @author 
 */

let mobList = Array(
9010098,
9010098// 
);
		
let bossHpConfig = Array(
	//BOSS血量逻辑控制
	// 第几层开始 初始血量 每层提高
	Array(1,200000000000,100000000000),
	Array(1,2000000000000,1000000000000),
	Array(1,20000000000000,10000000000000)
);

var ip=""
var mac;
var macCount ;
	
let player;
let everyTime = 60 * 60 * 1000;//每一轮时间
let MAP_ID = 993191350;
let random = Math.floor(Math.random() * mobList.length);
let level = 1;
let map;
let bossHp = 1;
let endTime;
let start;
let end;
let totalTime=0;
let beilv=1;

function init(attachment) {
        
        [player,beilv] = attachment;
		mac=getmac();
		macCount =getCount(mac);
		var item =player.getInventorySlot(-1,-11);
		player.customSqlInsert("insert into bossrank (characterid,name,time,boss,itemid,itemname,limitbreak,endtime) values(?,?,?,?,?,?,?,now())",player.getId(),player.getName(),totalTime,"突破副本",item.getOnlyId(),item.getItemName(),item.getLimitBreak());
		
		
		
		setEventCount("jbfb",1,1);
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
		player.gainItem(4001759,80*beilv);
		removePlayer(player.getId(), false);
		
	}
}


function makeMob(){
	
	//计算BOSS血量
	
	let mob = map.makeMob(mobList[random]);
	mob.changeBaseHp(50*60*999999);
	//mob.setForcedMobStat(275,10000);
	map.spawnMob(mob, 394, 257);
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