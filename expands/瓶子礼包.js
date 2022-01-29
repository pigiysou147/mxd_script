var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(570, 1428);
// 礼包内容
var reward = new Array(
	// 礼包50
	Array(
		// 礼包1 200元
		Array(2431041, 1),//赌狗
		Array(2614025, 30),//1000万突破
		
		Array(4033911, 10)
	),
	Array(
		// 礼包2 500元
		Array(2431041, 2),//赌狗
		Array(2614025, 70),//1000万突破
		
		Array(4033911, 20)

	)
);

var text;
var ljname;
var revenue;

var xiangou = new Array(15,15);

var countList=getcountList();
revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e一周限购瓶子礼包#k#n " + tt + "\r\n\r\n";
text += "#d#e当前可用于购买礼包的金额为： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;

for(var i = 0; i < condition.length ; i++) {
	var holdCount=getEventCount("pingzi" + (i+1));
	if(holdCount >= xiangou[i]) {
		txt = "[#r已购买最大值#d]";
	} else {
		if( revenue >= parseInt(condition[i]*0.35+1)) {
			txt = "[#b可购买#d]";
		} else  {
			txt = "[#g充值金额不足#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 瓶子礼包"+(i+1)+" #r\t\t\t" + parseInt(condition[i]*0.35+1) + "#l\r\n\r\n\r\n";
	
	for(var j = 0; j < 3; j++) {

		text += "#v" + reward[i][j][0] + "# X " + reward[i][j][1];
		if(reward[i][j][2] != null) {
			text += "(" + reward[i][j][2] + ")";
		}
	}
	text += "\r\n";
	text+="#b本周购买次数:#k#r";
	
	text+=holdCount;
	
	text+="#k\r\n";
	
	text+="#b本周全服已购买数量为:#k#r";
	if(countList.size()>i){
		text+=countList.get(i).get("total");
	}else{
		text+=0;
	}
	text+="#k\r\n";
	text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";

let selection = npc.askMenu(text);
text = "\t\t\t#e#r- 周末礼包" + parseInt(condition[selection]*0.35+1) + "元福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
	text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]";
	if(reward[selection][i].length > 2) {
		text += "[#r" + reward[selection][i][2] + "#k]\r\n";
	} else {
		text += "\r\n";
	}
}
let sel = npc.askYesNo(text);

	//可以购买
	if(sel == 1) {
		if(getEventCount("pingzi" + (selection+1)) >=xiangou[selection]) {
			npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
		} else if(revenue < parseInt(condition[selection]*0.35+1)) {
			npc.say("活动期间内充值金额未达标！当前礼包需要消耗:"+parseInt(condition[selection]*0.35+1)+"现金点");
		} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
			npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
		} else {

			for(var i = 0; i < reward[selection].length; i++) {
				player.gainItem(reward[selection][i][0], reward[selection][i][1]);
			}
			setEventCount("pingzi" + (selection+1), 3, 1);
			setEventCount("pingzitotal" + (selection+1), 0, 1);
			addHyPay(condition[selection]);
			npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 瓶子大礼包，掌声送给土豪！！！",10000);
            npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 瓶子大礼包，掌声送给土豪！！！");
            npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 瓶子大礼包，掌声送给土豪！！！");
            npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 瓶子大礼包，掌声送给土豪！！！");

			npc.say("领取成功");
		}
	}


function getcountList(){	//														570, 1428, 2857, 5394, 8251,11108
	var sql="select event,sum(value) total from accounts_event where `event` in('pingzitotal1','pingzitotal2','pingzitotal3','pingzitotal4','pingzitotal5','pingzitotal6') GROUP BY event";
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