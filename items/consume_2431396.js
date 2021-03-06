/* 
 *礼包脚本
 */

var itemList=[
[4023026,2],//紫火
[4023025,1]//金火
];
//拿到该箱子
var item;
for(var i=1;i<128;i++){
	item=player.getInventorySlot(2,i);
	if(item!=null){
		if(item.getDataId()==npc.getItemId()){
			break;
		}
	}
	
}
var restTime=(item.getExpiration()- new Date().getTime())/1000;
var restHour=parseInt(restTime/3600);
var restMinutes=parseInt((restTime-restHour*3600)/60);
var cash = getHyPay();
var yue=170;
var needCash=50;
var paihangbang2=60;
var eff = "#fEffect/ItemEff/1102877/effect/default/1#"; //云朵
var text = "";
text += "\t\t\t#v4009025##e#r航海限时礼包#k#n#v4009025#\r\n\r\n";
text += "#r#e#fs18#\t\t超值900%返利！！！#fs12#\r\n";
text +="#b#e剩余购买时长"+restHour+" 小时 "+restMinutes+"分  错过不再有哦\r\n";
text += "#r#e航海限时礼包,购买价格为:"+needCash+"直冲点 \r\n礼包里面包含着内容为 "+yue+" 余额 "+yue+" 累计 "+paihangbang2+" 现金点 #k\r\n";
text += "#b";
for(var i=0;i<itemList.length;i++){
	text += "#v"+itemList[i][0]+"# X "+itemList[i][1]+" ";
}
text+="#k";
text+="#r#e#v2614069# X 1\r\n（突破超过100E,则会直接给予10倍突破加在武器上）\r\n";
text += "#L1##r#e#fEffect/ItemEff/1048001/0/0#我要抢购这些限时物品#fEffect/ItemEff/1048001/0/0##k";
let selection = npc.askMenuS(text);
var wq =player.getInventorySlot(-1,-11);
if(selection == 1) {
	if(player.getFreeSlots(3) < 5) {
		npc.say("#b装备栏空间需要5个格子");
	} else if(cash < needCash) {
		npc.say("#b您当前的直冲点不够哦~还差" + (needCash - cash) + "就可以带走这个礼包里面的东西了哦");
	}else if(wq==null){
		npc.say("请佩戴好武器~");
	} else {
		player.loseItem(npc.getItemId(), 1);
		for(var i=0;i<itemList.length;i++){
			player.gainItem(itemList[i][0],itemList[i][1]);
		}
		if(wq.getLimitBreak()>=10000000000){
			wq.setLimitBreak(wq.getLimitBreak()+500000000);
			player.updateItem(-11,wq);
		}else{
			//给突破石头5000W
			player.gainItem(2614069,1);
		}
		addHyPay(needCash,yue,paihangbang2*2.86);
		npc.broadcastPlayerNotice(1,"【航海礼包】 :  玩家 " + player.getName() + " 购买了价值"+needCash+"直冲的航海礼包!");
		npc.broadcastPlayerNotice(2,"【航海礼包】 :  玩家 " + player.getName() + " 购买了价值"+needCash+"直冲的航海礼包!");
		npc.broadcastPlayerNotice(3,"【航海礼包】 :  玩家 " + player.getName() + " 购买了价值"+needCash+"直冲的航海礼包!");
		npc.broadcastWeatherEffectNotice(37, "【航海礼包】 :  玩家 " + player.getName() + "购买了价值"+needCash+"直冲的航海礼包!", 10000);
		npc.say("购买成功");
	}
}

function getHyPay() {
	var sql = "select cash from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("cash");
		}
	} else {
		return 0;
	}

}

function addHyPay(number,result,xjd) {
	var sql = "update hypay set pay=pay+?,leiji=leiji+?,paihangbang=paihangbang+?,paihangbang2=paihangbang2+?,today=today+?,cash=cash-? where accountId=?";
	var result = player.customSqlUpdate(sql, result,result,result,xjd,result,number, player.getAccountId());
	player.gainItem(4009398,number);
	var remark="购买航海礼包"+needCash;
	var cashSql="insert into cash_log  values(0,"+player.getAccountId()+",'"+player.getName()+"',"+number*-1+",'"+remark+"',now())";
	player.customSqlInsert(cashSql);
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

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0,0);
		return 0;
	}

}

function setEventCount(eventName,type,value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type,value,player.getAccountId(), eventName);


}