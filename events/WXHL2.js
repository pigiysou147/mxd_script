
/**
 * 副本: 无限火力
 * @author 
 */

let mobList = Array(
9303095, // - 伟大的阿卡伊勒
9303092, // - 伟大的希纳斯
9303087, // - 伟大的品克缤
9303085, // - 伟大的班·雷昂
9303083, // - 伟大的蝙蝠怪
9303103, // - 伟大的毛莫
9303104, // - 迷你毛莫战士
9303105, // - 迷你毛莫魔法师
9303106, // - 迷你毛莫弓箭手
9303107, // - 迷你毛莫飞侠
9303090,
9303087,
9303108// - 迷你毛莫海盗
);
		
let bossHpConfig = Array(
	//BOSS血量逻辑控制
	// 第几层开始 初始血量 每层提高
	Array(1,2000000000,1000000000)
);

let rewardChance = 100;//每关获得物品的几率
let rewardRan = Array(
	//每关可能获得的随机奖励
	Array(5062500,2)
);

let mustLevel = 5;//多少阶段一定获得物品
let mustReward = Array(
	//随机会获得一个物品 通关mustLevel关后
	Array(5062024,3)
);

var ip=""
var mac;
var macCount ;
	
let player;
let everyTime = 1 * 60 * 1000;//每一轮时间
let MAP_ID = 280030200;
let LOG = "tupojiangli";
let random = Math.floor(Math.random() * mobList.length);
let level = 1;
let map;
let bossHp = 1;
let endTime;
let start;
let end;
let totalTime=0;


function init(attachment) {
        
        player = attachment;
		mac=getmac();
		macCount =getCount(mac);
		var item =player.getInventorySlot(-1,-11);
		player.customSqlInsert("insert into bossrank (characterid,name,time,boss,itemid,itemname,limitbreak,endtime) values(?,?,?,?,?,?,?,now())",player.getId(),player.getName(),totalTime,"突破副本",item.getOnlyId(),item.getItemName(),item.getLimitBreak());
		
		
		
		setEventCount("wxhl2",1,1);
		
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
		
		//奖励
		var add=0;
		var item =player.getInventorySlot(-1,-11);
		if(item!=null){
			var tupo=item.getLimitBreak()/100000000;
			
			if(tupo>5 && tupo<10){
				add=20000;
			}else if(tupo>=10 && tupo<20){
				
				add=25000;
			}else if(tupo>=20 && tupo<30){
				
				add=33000;
			}else if(tupo>=30 && tupo<50){
				
				add=40000;
			}else if(tupo>=50 && tupo<60){
				
				add=50000;
			}else if(tupo>=60 && tupo<70){
				
				add=55000;
			}else if(tupo>=70 && tupo<80){
				
				add=65000;
			}else if(tupo>=80 && tupo<90){
				add=85000;
			}else if(tupo>=90 && tupo<100){
				add=100000;
			}else if(tupo>=100){
				add=1650000;
			}else{
				add=10000;
			}
			item.setLimitBreak(item.getLimitBreak()+add);
			player.updateItem(-11,item);
			player.scriptProgressMessage("恭喜您通过第 "+level+" 关,你当前的突破:"+tupo+"亿 获得了突破 :"+add+"请继续加油！");
		}
		
		end=new Date().getTime();
		totalTime=(end-start)/1000;
		//写入数据库
		updateDatabase(totalTime);
		
		
		if(level<61){
			if(level==20){
				if(getEventCount("tpfb")==0){
					setEventCount("tpfb",1,1);
					getEventCount("活跃");
					setEventCount("活跃",1,20);
				}
			}
		
			player.scriptProgressMessage("当前第 "+level+" 关,新的BOSS出现啦！赶紧击败他吧！");
			makeMob();
		}else{
			removePlayer(player.getId(), false);
		}
		level++;
		
	}
}

function updateDatabase(totalTime){
    let sql = "select * from wxhl where name = '" + player.getName() + "'";
    let push = player.customSqlResult(sql);
    if (push.size() == 0) {
        player.customSqlInsert("INSERT INTO `wxhl` (`name`, `level`,`totalTime`) VALUES ('" +  player.getName() + "', '1',"+totalTime+")");
    }else{
        var oldLevel = push.get(0).get("level");
		if(oldLevel < level){
			player.customSqlUpdate("update wxhl set level = '"+level+"',totalTime="+totalTime+" where name = '" + player.getName() + "';");
		}
	}
	
}

function makeMob(){
	
	//计算BOSS血量
	let i = bossHpConfig.length - 1;
	while(true){
		if(bossHpConfig[i][0] <= level){
			bossHp = Math.pow(2,(level-bossHpConfig[i][0]))
			break;
		}
		i--;
	}
	let mob = map.makeMob(mobList[random]);
	mob.setMaxHp(bossHp);
	mob.changeBaseHp(bossHp);
	map.spawnMob(mob, -30, 86);
}

function removePlayer(playerId, changeMap) {
	player.setEvent(null);
	player.changeMap(910000000);
	player.showSystemMessage("挑战结束！最终通关层数 "+level+" 关");
	player.showSystemMessage("挑战结束！最终通关层数 "+level+" 关");
	player.showSystemMessage("挑战结束！最终通关层数 "+level+" 关");
	event.broadcastPlayerNotice(7, "【超越极限】 ： 玩家"+player.getName()+"在『超越极限突破挑战副本』通过了"+level+"关");
	event.destroyEvent();
}

function playerDisconnected(player) {
        removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) { 
	if(destination.getId() != MAP_ID){
		removePlayer(player.getId(),false);
	}
}

function partyMemberDischarged(party, player) {
	removePlayer(player.getId(), true);
}

function timerExpired(key) {
        switch (key) {
			case "kick":
				removePlayer(player.getId(), true);
				break;
        }
}

function deinit() {
	player.setEvent(null);
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