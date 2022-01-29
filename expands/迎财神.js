var tt = "#v1143234#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(98,198,398,688,888,1888);
// 礼包内容
var reward = new Array(
	// 礼包1 100
	Array(200,100),
	Array(300,100),
	Array(500,100),
	Array(700,200),
	Array(1000,500),
	Array(2000,500)
);

var text;
var ljname;
var revenue = getHyPay();
var cash = 
text = "\t\t\t" + tt + " #r#e迎财神#k#n " + tt + "\r\n\r\n";
text += "#d#e今日充值： #r" + revenue + " #d元\r\n";
var txt = "";

for(var i = 0; i <= condition.length - 1; i++) {
	var eventCount=getEventCount("迎财神" + condition[i]);
	if(eventCount == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(eventCount == 0 && revenue >= condition[i]) {
			txt = "[#b待领取#d]";
		} else if(eventCount == 0 && revenue < condition[i]) {
			txt = "[#g未达标#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 每日充值达标 #r\t" + condition[i] + "#l\r\n\r\n";

	text += "\t注入直冲" + reward[i][0] + " 可以获得最大" + (reward[i][0]+reward[i][1])+"直冲";
		
	text += "\r\n";
	//text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";
let selection = npc.askMenu(text);
text = "\t\t\t#e#r- 每日充值" + condition[selection] + "元 \r\n\r\n";
text += "\t\t是否注入直冲" + reward[selection][0] + " 可以获得最大" + (reward[selection][0]+reward[selection][1])+"直冲";
	
let sel = npc.askYesNo(text);
if(sel == 1) {
	if(getEventCount("迎财神" + condition[selection]) == 1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
	} else if(revenue < condition[selection]) {
		npc.say("当日充值金额未达标！");
	}else if(getCash()<reward[selection][0]){
		npc.say("注入需要"+reward[selection][0]+"直冲！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	}else {
		
		var zs = Math.floor(Math.random() * reward[selection][1]);
		updateHypay(zs);
		setEventCount("迎财神" + condition[selection], 1, 1);
		npc.broadcastNotice("≡≡　　恭喜玩家 " + player.getName() + " 迎财神,扣除了直冲 :"+reward[selection][0]+" 获得了直冲 "+(zs+reward[selection][0]));
		npc.broadcastPlayerNotice(1,"≡≡　　恭喜玩家 " + player.getName() + " 迎财神,扣除了直冲 :"+reward[selection][0]+" 获得了直冲 "+(zs+reward[selection][0]));
		npc.broadcastPlayerNotice(2,"≡≡　　恭喜玩家 " + player.getName() + " 迎财神,扣除了直冲 :"+reward[selection][0]+" 获得了直冲 "+(zs+reward[selection][0]));
		npc.broadcastPlayerNotice(3,"≡≡　　恭喜玩家 " + player.getName() + " 迎财神,扣除了直冲 :"+reward[selection][0]+" 获得了直冲 "+(zs+reward[selection][0]));
		
		npc.say("领取成功,扣除了直冲 :"+reward[selection][0]+" ，获得了直冲 "+(zs+reward[selection][0]));
	}
}

function updateHypay(pay) {

	var sql = "update hypay set cash = cash +? where accountid=?";

	var result = player.customSqlUpdate(sql, pay,  player.getAccountId());

}

function getHyPay() {

	var sql = "SELECT sum(rmb) total from paylog,hypay where hypay.accountid=? and hypay.accname=paylog.account and paylog.paytime>DATE_FORMAT( now(),'%y-%m-%d')";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0).get("total") != null) {
			return result.get(0).get("total");
		}else{
			return 0;
		}
	} else {
		return 0;
	}

}
function getCash() {
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