var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z5 = "#fEffect/CharacterEff/1112904/2/1#"; //五角花
var tz = "#fEffect/CharacterEff/1082565/2/0#"; //兔子蓝
var eff1 = "#fEffect/CharacterEff/1112905/0/1#"; //小红心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

var rmb = 0;
rmb = getHyPay();
var mac=getmac();
//var macCount =getCount(mac);
var selStr = "  \t\t\t\t#e#d您当前的直充点为：#r" + rmb + " #d #k\r\n\r\n\r\n";
selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "";
selStr += "#r" + tz +"超值返利卡，感恩返利高达 300%。" + tz + "#k\r\n";
selStr += "#L2##b" + aaa + " 蘑菇超值周卡 售价 125 直充点[#r#e火爆#b#n点击查看]#l#k\r\n\r\n";
selStr += "#L3##e#b" + aaa + " 蘑菇超值月卡 售价 500 直充点[#r#e火爆#b#n点击查看]#l#k\r\n\r\n";
selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "";
let selection = npc.askMenuS(selStr);
if(selection == 2) {
		//周卡
		var txt = "- #e#d周卡超值返利：#n#k\r\n\r\n";
		txt += "- #e#r周卡返利 #v2431643#售价:125直冲/周#k#k#n\r\n\r\n";
		txt += "- #e#r详细说明：购买的时候，会一次性返利357累计余额，125的现金点（#r用于购买礼包#k）#n#k\r\n\t\t\r\n\r\n";
		txt += "- #e#r总共可领7次返利，每次10余额10累计。过期道具会消失并且无法领取#n#k\r\n\t\t\r\n\r\n";
		let sel = npc.askYesNo(txt);
		if(sel == 1) {
			if(rmb < 125) {
				npc.say("充值金额不够 "); 
			}else if(player.hasItem(2431643,1)){
				npc.say("周卡尚未到期，暂时不能购买 "); 
			}else if(getEventCount("周卡") >0 || getCount("周卡")>0){
				npc.say("同一个账号、机器码、IP下只能购买一次 "); 
			} else {
				
				setEventCount("周卡",3,1);
				addHyPay(125);
				addZhou();
				let newItem = player.makeItemWithId(2431643);
				newItem.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
				player.gainItem(newItem);
				
				npc.broadcastWeatherEffectNotice(37, "恭喜玩家 " + player.getName() + " 成功购买了蘑菇周卡，获取了丰厚的返利~。", 10000);
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功购买了蘑菇周卡，获取了丰厚的返利~。。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功购买了蘑菇周卡，获取了丰厚的返利~。。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功购买了蘑菇周卡，获取了丰厚的返利~。。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功购买了蘑菇周卡，获取了丰厚的返利~。。");
				npc.say("恭喜您成功购买周卡返利.");
			}
		}

}else if(selection == 3) {
		//月卡
		var txt = "- #e#d月卡超值返利：#n#k\r\n\r\n";
		txt += "- #e#r月卡返利 #v2431677#售价:500直冲/月#k#k#n\r\n\r\n";
		txt += "- #e#r详细说明：购买的时候，会一次性返利1428累计余额，500的现金点（#r用于购买礼包#k）#n#k\r\n\t\t\r\n\r\n";
		txt += "- #e#r总共可领30次返利，每次40余额40累计。过期道具会消失并且无法领取#n#k\r\n\t\t\r\n\r\n";
		let sel = npc.askYesNo(txt);
		if(sel == 1) {
			if(rmb < 500) {
				npc.say("充值金额不够 "); 
			}else if(player.hasItem(2431677,1)){
				npc.say("月卡尚未到期，暂时不能购买 "); 
			}else if(getEventCount("月卡") >0 || getCount("月卡")>0){
				npc.say("同一个账号、机器码、IP下只能购买一次 "); 
			} else {
				
				addHyPay(500);
				addYue()
				setEventCount("月卡",4,1);
				let newItem = player.makeItemWithId(2431677);
				newItem.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
				player.gainItem(newItem);
				
				npc.broadcastWeatherEffectNotice(37, "恭喜玩家 " + player.getName() + " 成功购买了蘑菇月卡，获取了丰厚的返利~。", 10000);
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功购买了蘑菇月卡，获取了丰厚的返利~。。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功购买了蘑菇月卡，获取了丰厚的返利~。。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功购买了蘑菇月卡，获取了丰厚的返利~。。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功购买了蘑菇月卡，获取了丰厚的返利~。。");
				npc.say("恭喜您成功购买月卡返利.");
			}
		}

}


function getHyPay() {

	var result = player.customSqlResult("select cash from hypay where accountId=?", player.getAccountId());

	return result.get(0).get("cash");

}
function addZhou() {

	var sql = "update hypay set pay=pay+357,leiji=leiji+357,paihangbang=paihangbang+357,paihangbang2=paihangbang2+357,today=today+357 where accountId=?";

	var result = player.customSqlUpdate(sql, player.getAccountId());

}
function addYue() {

	var sql = "update hypay set pay=pay+1428,leiji=leiji+1428,paihangbang=paihangbang+1428,paihangbang2=paihangbang2+1428,today=today+1428 where accountId=?";

	var result = player.customSqlUpdate(sql, player.getAccountId());

}

function addHyPay(price) {
	player.gainItem(4009398,price);
	var sql = "update hypay set cash=cash-? where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());
	var remark="直冲点购买返利卡";
	var cashSql="insert into cash_log  values(0,"+player.getAccountId()+",'"+player.getName()+"',"+price*-1+",'"+remark+"',now())";
	player.customSqlInsert(cashSql);

}

function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}
function getCount(name){
	var sql = "select sum(value) macCount from accounts_event where `event`=? and mac =?";
	var result = player.customSqlResult(sql,name,mac);
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
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value,time) values(?,?,?,?,?,now())";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 3, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value,day) {
	
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, mac,player.getAccountId(), eventName);

}