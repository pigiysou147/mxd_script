
/**
 * 副本: 无限火力
 * @author 
 */

let mobList = Array(
	2700100,
	2700100// 
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
let everyTime =  15 * 1000;//每一轮时间
let MAP_ID = 693000044;
//let MAP_ID = 693000044;

let random = Math.floor(Math.random() * mobList.length);
let level = 1;
let map;
let bossHp = 1;
let endTime;
let start;
let end;
let totalTime=0;
let beilv=1;
let lunhui=1;
let startTime;
var totalMeso=0;
function init(attachment) {
		starttime=new Date().getTime();
		endTime=starttime+30*60*1000;

        [player,beilv,lunhui] = attachment;
		beilv=beilv/100;
		if(beilv==0)
		beilv=1;
		mac=getmac();
		macCount =getCount(mac);
		if(lunhui==25){
			everyTime=3*1000;
		}else if(lunhui==24){
			everyTime=5*1000;
		}else if(lunhui==23){
			everyTime=8*1000;
		}else if(lunhui==22){
			everyTime=10*1000;
		}else if(lunhui==21){
			everyTime=12*1000;
		}else if(lunhui==20){
			everyTime=14*1000;
		}else{
			everyTime=15*1000;
		}
		
		
		setEventCount("jbfbb",1,1);
		player.setDeathCount(5);
		start=new Date().getTime();
        event.getMap(MAP_ID).clearMobs();
        player.changeMap(MAP_ID, 0);
        map = event.getMap(MAP_ID);
		makeMob();
		player.setEvent(event);
		event.setVariable("endTime",endTime);
        event.startTimer("kick", 30*60*1000);
		map.showTimer((endTime-starttime)/1000);
}

function mobDied(mob) {
    if(map.getEventMobCount()==0){
		//结算金币
		//计算金率
		beilv=getBl();
		player.gainMesos(beilv*400000);
		totalMeso+=beilv*400000;
		player.dropMessage(1,"本次获得金币: "+(beilv*400000)/10000+" W 累计获得金币:  "+parseInt(totalMeso/100000000)+" E ");

		event.startTimer("makeMob", everyTime);
		map.showTimer(everyTime/1000);

	}
}
function getBl(){
	
var potList = Array(
	Array(-1, "帽子", 0),
	Array(-2, "前额", 0),
	Array(-3, "脸饰", 0),
	Array(-4, "耳饰", 0),
	Array(-5, "衣服", 0),
	Array(-6, "短裤", 0),
	Array(-7, "鞋子", 0),
	Array(-8, "手套", 0),
	Array(-9, "披风", 0),
	Array(-29, "腰带", 0),
	Array(-30, "肩部", 0),
	Array(-37, "符号", 0),
	Array(-36, "徽章", 0),
	Array(-26, "奖牌", 0),
	Array(-17, "吊坠", 1),
	Array(-38, "吊坠", 2),
	Array(-10, "副手", 0),
	Array(-11, "武器", 0),
	Array(-12, "戒指", 1),
	Array(-13, "戒指", 2),
	Array(-15, "戒指", 3),
	Array(-16, "戒指", 4),
	Array(-27, "戒指", 5),
	Array(-28, "戒指", 6),
	Array(-33, "口袋", 0),
	Array(-34, "机器", 0),
	Array(-35, "心脏", 0),
	Array(-5000, "图腾", 1),
	Array(-5001, "图腾", 2),
	Array(-5002, "图腾", 3),
	Array(-1600, "神秘", 1),
	Array(-1601, "神秘", 2),
	Array(-1602, "神秘", 3),
	Array(-1603, "神秘", 4),
	Array(-1604, "神秘", 5),
	Array(-1605, "神秘", 6)
);



var lunhui =0;
var totalJl=0;
for(var i=0;i<potList.length;i++){
	var zb =player.getInventorySlot(-1,potList[i][0]);
	if(zb!=null){
        //识别轮回星级
        if(1202193==zb.getItemId()){
            lunhui=zb.getCHUC();
        }
		//3064442 20金率

		//3064441 15金率
		if(zb.getSocket1()==3064442){
			totalJl+=20;
		}else if(zb.getSocket1()==3064441){
			totalJl+=15;
		}

		if(zb.getSocket2()==3064442){
			totalJl+=20;
		}else if(zb.getSocket2()==3064441){
			totalJl+=15;
		}

		if(zb.getSocket3()==3064442){
			totalJl+=20;
		}else if(zb.getSocket3()==3064441){
			totalJl+=15;
		}

		//第1条
		if(zb.getOption(1,false)==40650){
			totalJl+=20;
		}else if(zb.getOption(1,false)==42650){
			totalJl+=5;
		}
		
		//第2条
		if(zb.getOption(2,false)==40650){
			totalJl+=20;
		}else if(zb.getOption(2,false)==42650){
			totalJl+=5;
		}
		
		//第3条
		if(zb.getOption(3,false)==40650){
			totalJl+=20;
		}else if(zb.getOption(3,false)==42650){
			totalJl+=5;
		}
		
		//第1条
		if(zb.getOption(1,true)==40650){
			totalJl+=20;
		}else if(zb.getOption(1,true)==42650){
			totalJl+=5;
		}
		
		//第2条
		if(zb.getOption(2,true)==40650){
			totalJl+=20;
		}else if(zb.getOption(2,true)==42650){
			totalJl+=5;
		}
		
		//第3条
		if(zb.getOption(3,true)==40650){
			totalJl+=20;
		}else if(zb.getOption(3,true)==42650){
			totalJl+=5;
		}

	}
}
totalJl=totalJl/100;
	if(totalJl==0)
	totalJl=1;
return totalJl;
}

function makeMob(){
	
	//计算BOSS血量
	map.showTimer((endTime-new Date().getTime())/1000);

	let mob = map.makeMob(2700100);
	mob.changeBaseHp(4000000000);
	//mob.setForcedMobStat(275,10000);
	map.spawnMob(mob, -989, -38);

	mob = map.makeMob(2700100);
	mob.changeBaseHp(4000000000);
	//mob.setForcedMobStat(275,10000);
	map.spawnMob(mob, -726, -38);

	mob = map.makeMob(2700100);
	mob.changeBaseHp(4000000000);
	//mob.setForcedMobStat(275,10000);
	map.spawnMob(mob, -37, -38);

	mob = map.makeMob(2700100);
	mob.changeBaseHp(4000000000);
	//mob.setForcedMobStat(275,10000);
	map.spawnMob(mob, -151, -38);

	mob = map.makeMob(2700100);
	mob.changeBaseHp(4000000000);
	//mob.setForcedMobStat(275,10000);
	map.spawnMob(mob, -292, -38);

	mob = map.makeMob(2700100);
	mob.changeBaseHp(4000000000);
	//mob.setForcedMobStat(275,10000);
	map.spawnMob(mob, -542, -38);

	mob = map.makeMob(2700100);
	mob.changeBaseHp(4000000000);
	//mob.setForcedMobStat(275,10000);
	map.spawnMob(mob, -726, -38);


	
}

function removePlayer(playerId, changeMap) {
	player.setEvent(null);     
	
	event.destroyEvent();
	//player.changeMap(910000000);
}

function playerDisconnected(player) {
        removePlayer(player.getId());
}

function partyMemberDischarged(party, player) {
	removePlayer(player.getId(), true);
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
			case "makeMob":
				makeMob();
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