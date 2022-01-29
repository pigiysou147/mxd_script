var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(570, 1428, 2857, 5394, 8251, 11107, 14286);
// 礼包内容
var reward = new Array(
	// 礼包50
	Array(
		// 礼包1 200元
		Array(2431041, 1),//赌狗
		Array(2614079, 2),//1000万突破
		Array(2430215,1),
		Array(4031997, 300),//蘑菇金币
		Array(4023026, 3),//紫火
		Array(4001329, 1),//小蜡笔
		Array(4001330, 1),//小蜡笔
		Array(4001331, 1),//小蜡笔
		Array(4440000, 2)
	),
	Array(
		// 礼包2 500元
		Array(2431041, 2),//赌狗
		Array(2614079, 5),//1000万突破
		
		Array(2430215,2),
		Array(4031997, 500),//蘑菇金币
		Array(4023026, 5),//紫火
		Array(4001326, 1),//小蜡笔
		Array(4001327, 1),//小蜡笔
		Array(4001328, 1),//小蜡笔
		Array(4001329, 1),//小蜡笔
		Array(4001330, 1),//小蜡笔
		Array(4001331, 1),//小蜡笔
		Array(4440000, 5)

	),
	Array(
		// 礼包3 1000元
		Array(2431041, 3),//赌狗
		Array(2614079, 10),//1000万突破
		
		Array(2430215,3),
		Array(4031997, 1000),//蘑菇金币
		Array(4023026, 10),//紫火
		Array(4023025, 3),//金火
		Array(3992025, 30),//大星
		Array(2435824, 5),//大星
		Array(2049323, 100),//大星
		Array(4440000, 10)

	),
	Array(
		// 礼包4 2000元
		Array(2431041, 5),//赌狗
		Array(2614079, 20),//1000万突破
		Array(4031997, 1800),//蘑菇金币
		Array(4023026, 20),//紫火
		Array(4023025, 5),//金火
		Array(3992025, 50),//大星
		Array(2435824, 10),//V卷
		Array(4440000, 20)
	),
	Array(
		// 礼包5 2888元
		Array(2431041, 8),//赌狗
		Array(2614079, 30),//1000万突破
		Array(4031997, 3000),//蘑菇金币
		Array(4001332, 2),//大蜡笔
		Array(4023026, 30),//紫火
		//Array(4023025, 5),//金火
		Array(3992025, 70),//大星
		Array(2431578, 5),//黑卷自选
		Array(4440000, 30)
	),
	Array(
		// 礼包6 3888元
		Array(2431041, 10),//赌狗
		Array(2614079, 50),//1000万突破
		Array(4031997, 3880),//蘑菇金币
		Array(4001332, 3),//大蜡笔
		Array(4036457, 5),//黑火
		Array(4023025, 10),//金火
		Array(3992025, 100),//大星
		Array(2431578, 8),//黑卷自选
		Array(4440000, 40)
	),
	Array(
		// 礼包6 5000元
		Array(2431041, 10),//赌狗
		Array(2614079, 50),//1000万突破
		Array(4031997, 3880),//蘑菇金币
		Array(4001332, 3),//大蜡笔
		Array(4036457, 5),//黑火
		Array(4023025, 10),//金火
		Array(3992025, 100),//大星
		Array(2431578, 8),//黑卷自选
		Array(4440000, 40)
	)
);

var text;
var ljname;
var revenue;

var xiangou = new Array(1,1,1,1,1,1,1);
var countList=getcountList();

revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e元宵礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前可用于购买礼包的金额为： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;

for(var i = 0; i < condition.length ; i++) {
	if(getEventCount("元宵礼包" + (i+1)) >= xiangou[i]) {
		txt = "[#r已购买最大值#d]";
	} else {
		if( revenue >= parseInt(condition[i]*0.35+1)) {
			txt = "[#b可购买#d]";
		} else  {
			txt = "[#g充值金额不足#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 元宵礼包"+(i+1)+" #r\t\t\t" + parseInt(condition[i]*0.35+1) + "#l\r\n\r\n\r\n";
	text+="#b当前全服已购买数量为:#k#r"+countList.get(i).get("total")+"#k\r\n";
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
text = "\t\t\t#e#r- 元宵礼包" + parseInt(condition[selection]*0.35+1) + "元福利 -#k#n\r\n\r\n";
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
	if(getEventCount("元宵礼包" + (selection+1)) >=xiangou[selection]) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
	} else if(revenue < parseInt(condition[selection]*0.35+1)) {
		npc.say("活动期间内充值金额未达标！"+revenue);
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			player.gainItem(reward[selection][i][0], reward[selection][i][1]);
		}
		setEventCount("元宵礼包" + (selection+1), 0, 1);
		addHyPay(condition[selection]);
		npc.say("领取成功");
	}
}
function getcountList(){	//														570, 1428, 2857, 5394, 8251,11108
	var sql="select event,sum(value) total from accounts_event where `event` in('元宵礼包1','元宵礼包2','元宵礼包3','元宵礼包4','元宵礼包5','元宵礼包6') GROUP BY event";
	var result = player.customSqlResult(sql);
	return result;
	
}
function addHyPay(price) {
	var sql = "update hypay set paihangbang2=paihangbang2-? where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

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