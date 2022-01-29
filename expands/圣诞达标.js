var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(500, 1000, 2000, 3000, 5000, 10000,15000);
// 礼包内容
var reward = new Array(
	Math.floor(Math.random() * 200)+100,
	Math.floor(Math.random() * 400)+100,
	Math.floor(Math.random() * 900)+100,
	Math.floor(Math.random() * 1400)+100,
	Math.floor(Math.random() * 1900)+100,
	Math.floor(Math.random() * 2900)+100,
	Math.floor(Math.random() * 4900)+100
);
var txtArr=[
	"随机返100-300余额",
	"随机返100-500余额",
	"随机返100-1000余额",
	"随机返100-1500余额",
	"随机返100-2000余额",
	"随机返100-3000余额",
	"随机返100-5000余额"
];
var text;
var ljname;
var revenue;

revenue = getHyPay(2);
text = "\t\t\t" + tt + " #e圣诞元旦直冲达标中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前总消费： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
if(revenue >= 10000) {
	index = 1;
}
for(var i = 0; i <= condition.length - 1; i++) {
	var eventCount=getEventCount("圣诞元旦直冲达标" + condition[i]);
	if(eventCount == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(eventCount == 0 && revenue >= condition[i]) {
			txt = "[#b待领取#d]";
		} else if(eventCount == 0 && revenue < condition[i]) {
			txt = "[#g未达标#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 圣诞元旦直冲且消费达标福利 #r " + condition[i] + "#l\r\n\r\n\r\n";
	text+="\t"+txtArr[i];
	
	text += "\r\n";
}
text += "#k";
let selection = npc.askMenu(text);
text = "\t\t\t#e#r- 圣诞元旦累计消费" + condition[selection] + "元福利 -\r\n\r\n";
text += "\t\t"+txtArr[selection]+"\r\n";
let sel = npc.askYesNo(text);
if(sel == 1) {
	if(getEventCount("圣诞元旦直冲达标" + condition[selection]) == 1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
	} else if(revenue < condition[selection]) {
		npc.say("累计金额未达标！");
	} else {

		addHyPay(reward[selection]);
		setEventCount("圣诞元旦直冲达标" + condition[selection], 0, 1);
		npc.broadcastNotice("≡≡　　恭喜玩家 " + player.getName() + " 领取了 " + condition[selection] + " 圣诞元旦直冲达标奖励，获得了余额  "+reward[selection]);

		npc.say("领取成功获得了余额  "+reward[selection]);
	}
}

function addHyPay(result) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, result, player.getAccountId());
	
}

function getHyPay() {

	var sql = "select sum(rmb) total from cash_log where accounts_id=? and remark not LIKE '%交易行%' and time>'2020-12-25' ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("total")*-1;
		}
	} else {
		return 0;
	}

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

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}