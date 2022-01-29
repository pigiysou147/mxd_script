/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：游戏中心
 *  @Author Kent 
 */

/* global cm */

var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var a = "#fEffect/CharacterEff/1114000/1/0#"; //红色六芒星
var b = "#fEffect/CharacterEff/1003271/0/0#";
var c = "#fEffect/CharacterEff/1112905/0/0#"; //篮心
var d = "#fEffect/CharacterEff/1002667/0/0#"; //黄星
var e = "#fEffect/CharacterEff/1003252/1/0#"; //音乐
var g = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fEffect/CharacterEff/1112904/2/1#"; //彩色五角星

var text = "\r\n#d┏━━━━━━━━━━━账户中心━━━━━━━━━━┓#k\n\r";
//text = cool+"";
text += "在线时间：#r" + player.getOnlineTime() + "#k分\t  ";
text += "" + xxx + "余额：#r" + getHyPay() + "#k\t ";
text += "" + xxx + "活跃度：#r" + getEventCount("活跃") + "#k\r\n";
text += "" + xxx + "点券：#r" + player.getCashShopCurrency(1) + "#k\t\t";
text += "" + xxx + "活力：#r" + player.getPQLog("活力") + "#k\t ";
text += "" + xxx + "大冒险币：#r" + player.getAmountOfItem(4310028) + "#k\r\n";
player.addPQLog("活力",1,999);
npc.say(text);

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0,0);
		return 0;
	}

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