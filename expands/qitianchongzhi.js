/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：新手5天任务
 *  @Author ajing
 */

var regTime;
var nowTime = new Date().getTime();
var chongzhi = Array(
	Array(0, 10),
	Array(0, 20),
	Array(0, 30),
	Array(0, 40),
	Array(0, 50),
	Array(0, 60),
	Array(0, 70)
);
var itemList = Array(
	//第1天
	Array(
		
		Array(-1,10000),
		Array(2430241,1),
		
		Array(2430241,1)
	),
	//第2天
	Array(
		Array(-1,10000),
		Array(2430241,1),
		
		Array(2430241,1)
	),
	//第3天
	Array(
		Array(-1,10000),
		Array(2430241,1),
		
		Array(2430241,1)
	),
	//第4天
	Array(
		Array(-1,10000),
		Array(2430241,1),

		Array(2430241,1)	
		),
	//第5天
	Array(
		Array(-1,10000),
		Array(2430241,1),
		
		Array(2430241,1)
	),
	//第6天
	Array(
		Array(-1,10000),
		Array(2430241,1),
		
		Array(2430241,1)
	),
	//第7天
	Array(
		Array(-1,10000),
		Array(2430241,1),
		
		Array(2430241,1)
	)
);
var today=player.customSqlResult("select today from hypay where accountId=?", player.getAccountId()).get(0).get("today");

var eff = "#fEffect/ItemEff/1048001/0/0#";
var text = eff + "\t\t\t\t#r#e7天充值活动#k\t\t\t\t" + eff + "\r\n";
text += "从注册时间开始，七天内每天达到充值目标可以领取额外奖励哦\r\n";
text += "\t\t注意：#r一个账号只能领取一次哦#k\r\n";

text += "\t\t你今日的充值为 : #r"+today+"#k\r\n";
for(var i = 0; i < 7; i++) {
	text += "#L" + i + "##r#b第[" + (i + 1) + "]天充值奖励 (需要当日充值" + chongzhi[i][1] + "元)   [" + isOver(i) + "]#l\r\n";
}

let selection = npc.askMenu(text);
var txt = "#r#b第[" + (selection + 1) + "]天充值奖励 (需要当日充值" + chongzhi[selection][1] + "元)   [" + isOver(selection) + "]\r\n";
txt+="你可以获得如下奖品:\r\n"
txt+="#e点券#k:"+itemList[selection][0][1]+"\r\n\r\n"
for(var i=1;i<itemList[selection].length;i++){
	txt+="\t#v"+itemList[selection][i][0]+"# #b#z"+itemList[selection][i][0]+"# #k[#r"+itemList[selection][i][1]+"#k] \r\n";
}
let sel =npc.askYesNo(txt);

function getCreateTime(accountId) {
	var sql = "select createdat from accounts where id=?";

	var result = player.customSqlResult(sql, accountId);
	return result.get(0).get("createdat");
}

function isOver(day) {
	regTime = java.sql.Timestamp.valueOf(getCreateTime(player.getAccountId())).getTime();
	var days = (nowTime - regTime) / 86400000;
	var result = "";
	if(days > day + 1) {
		result = "#r已超时#k"
		chongzhi[day][0] = 1;
	} else {
		result = "进行中";
	}
	return result;
}