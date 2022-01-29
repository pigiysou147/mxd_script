var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(570, 1428, 2857, 5714, 8570, 14285, 22857, 28571, 34285, 42857, 57142);
// 礼包内容
var reward = new Array(
	// 礼包50
	Array(
		// 礼包1 200元
		Array(2431041, 1),
		Array(4001326, 1),
		Array(4001327, 1),
		Array(4001328, 1),
		Array(4001329, 1),
		Array(4001330, 1),
		Array(4001331, 1),
		Array(4031997, 200),
		Array(2614058, 20),
		Array(4023026, 5)
	),
	Array(
		// 礼包2 500元
		Array(2431041, 2), //
		Array(4001329, 1), //
		Array(4001330, 1), //
		Array(4001331, 1), //
		Array(4001328, 1), //
		Array(4001327, 1), //
		Array(4001326, 1), //
		Array(4031997, 532), //
		Array(2614058, 50), //
		Array(2049389, 1) //

	),
	Array(
		// 礼包3 1000元
		Array(2435824, 5), //
		Array(4001715, 30), // 
		Array(2048749, 50), // 
		Array(4031997, 800), // 
		Array(3994979, 20), // 
		Array(2614058, 80) // 

	),
	Array(
		// 礼包4 2000元
		Array(2431041, 5), //
		Array(2435824, 10),
		Array(2049389, 2),
		Array(2048749, 100),
		Array(4023025, 5),
		Array(3992025, 30),
		Array(4023026, 10)
	),
	Array(
		// 礼包5 3000元
		Array(2431041, 7), //
		Array(2430675, 8), //
		Array(2049389, 3), //
		Array(2048749, 150), //
		Array(4031997, 2000), //
		Array(3992025, 50) //
	),
	Array(

		// 礼包6 5000元
		//Array( 2431041, 8),             //
		Array(2430675, 12), //
		Array(2630627, 1), //
		Array(4001326, 5), //
		Array(4001327, 5), //
		Array(4001328, 5), //
		Array(4001329, 5), //
		Array(4001330, 5), //
		Array(4001331, 5), //
		Array(4001332, 2)
	),
	Array(
		// 礼包7 8000元
		Array(2431041, 10), //
		Array(4031997, 4000), //
		Array(4034848, 15), //
		Array(2614079, 20), //
		Array(1132308, 1)

	),
	Array(
		//礼包8 10000元
		Array(1113302, 1), //

		Array(2630404, 1), // 
		Array(2614079, 30), // 
		Array(4001326, 8), // 
		Array(4001327, 8), //
		Array(4001328, 8), //
		Array(4001329, 8), //
		Array(4001330, 8), //
		Array(4001331, 8), //
		Array(4001332, 3)

	),
	Array(
		// 礼包9 12000元     
		Array(2630404, 1), //
		Array(4036457, 10), // 
		Array(2614079, 50), // 
		Array(3992025, 100), // 
		Array(4023025, 30)

	),
	Array(
		// 礼包10 15000元
		Array(4036457, 15), //
		Array(2614079, 80), //
		Array(3992025, 200), //
		Array(4034848, 45), //
		Array(2630404, 1), //
		Array(2048749, 200)

	),
	Array(
		// 礼包11 20000元
		Array(2630281, 1), //
		Array(3992025, 300), //
		Array(2048749, 300), //
		Array(4023026, 50), //
		Array(4001332, 5)

	)
);

var text;
var ljname;
var revenue;

revenue = parseInt(getHyPay(2));
text = "\t\t\t" + tt + " #e鼠年累计礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前总充值： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
if(revenue >= 10000) {
	index = 1;
}
for(var i = 0; i <= condition.length - 1; i++) {
	if(getEventCount("鼠年累计礼包" + condition[i]) == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(getEventCount("鼠年累计礼包" + condition[i]) == 0 && revenue >= parseInt(condition[i]*0.35+1)) {
			txt = "[#b待领取#d]";
		} else if(getEventCount("鼠年累计礼包" + condition[i]) == 0 && revenue < parseInt(condition[i]*0.35+1)) {
			txt = "[#g未达标#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 鼠年累计充值福利 #r\t\t\t" + parseInt(condition[i]*0.35+1) + "#l\r\n\r\n\r\n";

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
text = "\t\t\t#e#r- 鼠年累计充值" + parseInt(condition[selection]*0.35+1) + "元福利 -#k#n\r\n\r\n";
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
	if(getEventCount("鼠年累计礼包" + condition[selection]) == 1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
	} else if(revenue < parseInt(condition[selection]*0.35+1)) {
		npc.say("累计金额未达标！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			player.gainItem(reward[selection][i][0], reward[selection][i][1]);
		}
		setEventCount("鼠年累计礼包" + condition[selection], 0, 1);
		npc.broadcastNotice("≡鼠年累计充值≡　　恭喜玩家 " + player.getName() + " 领取了鼠年累计充值 " + parseInt(condition[selection]*0.35+1) + " 元的福利礼包！！！");

		npc.say("领取成功");
	}
}

function getHyPay() {

	var sql = "select paihangbang2 from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("paihangbang2")*0.35;
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