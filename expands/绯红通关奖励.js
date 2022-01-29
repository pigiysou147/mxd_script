 /**
* 绯红奖励 几里 315342975 
**/

let now = getEventCount("绯红通关");
let max = 1;//最大领奖次数
var ip=""
var mac=getmac();
var macCount =getCount(mac);
var event = npc.getEvent("CWKPQ");
if (event != null) {
	if(macCount<max && now<max && player.getPQLog("绯红通关奖励")==0){
		
		
		var item =player.getInventorySlot(-1,-11);
		if(item==null){
			npc.say("请佩戴武器");
		}else{
			setEventCount("绯红通关",1,1);
			getEventCount("活跃");
					setEventCount("活跃",1,10);
			player.addPQLog("绯红通关奖励");
			
			player.changeMap(610030800);
			addHyPay(10);
			if(item.getLimitBreak()>10000000000){
				
				item.setLimitBreak(item.getLimitBreak() + 3000000*8);
			}else{
				item.setLimitBreak(item.getLimitBreak() + 3000000);
				
				
			}
			player.updateItem(-11,item);
			player.gainItem(2049610,2);
			player.gainItem(2049116,10);
							
			
			

			npc.say("成功领取通关奖励~~");
			
		}
		
		
		
	}else{
		npc.say("#e#r 一个账号、IP地址一天只能做"+max+"次绯红任务哦。");
		
	}
}else{
	npc.say("请通过正常流程完成绯红奖励~");
}
	

 
 
function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}

function getCount(mac){
	
	
	var sql = "select sum(value) macCount from accounts_event where `event`='绯红通关' and mac =? ";
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

 function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}
