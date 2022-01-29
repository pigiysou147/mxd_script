var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(500, 1000, 1500, 2000, 3000, 4000, 5000);
// 礼包内容
var reward = new Array(
	// 礼包50
	Array(
		Array(5220040, 50),
		Array(2049610, 5),
		Array(4023026, 2),
		Array(4001715, 2)
	),
	Array(
		// 礼包2 500元
		Array(5220040, 100), //
		Array(2049610, 10), //
		Array(4023026, 5), //
		Array(4001715, 3), //
		Array(4023025, 2) //

	),
	Array(
		// 礼包3 1000元
		Array(5220040, 200), //
		Array(2049610, 20), // 
		Array(4001715, 5), // 
		Array(2435824, 2) // 

	),
	Array(
		// 礼包4 2000元
		Array(5220040, 300), //
		Array(2049610, 30),
		Array(4001715, 7),
		Array(2435824, 3)
	),
	Array(
		// 礼包5 3000元
		Array(5220040, 500), //
		Array(2049610, 50), //
		Array(4001715, 10), //
		Array(2435824, 5) //
	),
	Array(

		// 礼包6 4000元
		Array(2049610, 85), //
		Array(3992025, 20), //
		Array(2049389, 1), //
		Array(4001839, 2500) // 星星
	),
	Array(
		// 礼包7 5000元
		Array(3992025, 30), //
		Array(4001715, 25), //
		Array(4023025, 5), //
		Array(4023026, 10), //
		Array(2430675, 5), //
		Array(5220040, 100) //转蛋卷

	)
);

var text;
var ljname;
var revenue;

revenue = getHyPay(2);
text = "\t\t\t" + tt + " #e鼠年消费礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前总消费： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
if(revenue >= 10000) {
	index = 1;
}
for(var i = 0; i <= condition.length - 1; i++) {
	if(getEventCount("鼠年消费礼包" + condition[i]) == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(getEventCount("鼠年消费礼包" + condition[i]) == 0 && revenue >= condition[i]) {
			txt = "[#b待领取#d]";
		} else if(getEventCount("鼠年消费礼包" + condition[i]) == 0 && revenue < condition[i]) {
			txt = "[#g未达标#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 鼠年累计消费福利 #r\t\t\t" + condition[i] + "#l\r\n\r\n\r\n";

	for(var j = 0; j < 4; j++) {

		text += "#v" + reward[i][j][0] + "# X " + reward[i][j][1];
		if(reward[i][j][2] != null) {
			text += "(" + reward[i][j][2] + ")";
		}
	}
	text += "\r\n";
	text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";
let selection = npc.askMenu(text);
text = "\t\t\t#e#r- 鼠年累计消费" + condition[selection] + "元福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
	text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]";
	if(reward[selection][i].length > 2) {
		text += "[#r" + reward[selection][i][2] + "#k]\r\n";
	} else {
		text += "\r\n";
	}
}
let sel = npc.askYesNo(text);
if(sel == 1) {
	if(getEventCount("鼠年消费礼包" + condition[selection]) == 1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
	} else if(revenue < condition[selection]) {
		npc.say("累计金额未达标！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			player.gainItem(reward[selection][i][0], reward[selection][i][1]);
		}
		setEventCount("鼠年消费礼包" + condition[selection], 0, 1);
		npc.broadcastNotice("≡≡　　恭喜玩家 " + player.getName() + " 领取了 " + condition[selection] + " 突破！！！");

		npc.say("领取成功");
	}
}

function getHyPay() {

	var sql = "select payused from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("payused");
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