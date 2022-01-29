var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(500, 1500, 3000,  6000, 12000, 20000,35000,50000);
// 礼包内容
var reward = new Array(
	// 礼包500
	Array(
		Array(5220040, 100),//转蛋
		Array(2049610, 5),//还原
		Array(4023026, 2),//紫火
		Array(4001715, 2),//金币1E
		Array(2614079, 1)//1000w
		
	),
	Array(
		// 礼包2 1500元
		Array(5220040, 300),//转蛋
		Array(2049610, 15),//还原
		Array(4023026, 6),//紫火
		Array(4001715, 6),//金币1E
		Array(2614079, 2)//1000w

	),
	
	Array(
		// 礼包4 3000元
		Array(5220040, 600),//转蛋
		Array(2049610, 30),//还原
		Array(4023026, 12),//紫火
		Array(4001715, 12),//金币1E
		Array(2614079, 4)//1000w
		
	),
	Array(
		// 礼包5 6000元
		
        Array(4033911, 5),//瓶子
		Array(4023025, 10),//金火
		Array(2431578, 3),//黑卷
		Array(3992025, 15),//大星
		Array(2614079, 10)//1000万
	),
	
	Array(
		// 礼包7 12000元
		
        Array(4033911, 10),//瓶子
		Array(4036457, 5),//黑火
		Array(2431578, 5),//黑卷
		Array(3992025, 30),//大星
		Array(2614079, 20)//1000万

	),Array(
		// 礼包7 20000元
		Array(4033911, 20),//瓶子
		Array(4036457, 10),//黑火
		Array(2431578, 8),//黑卷
		Array(3992025, 60),//大星
		Array(2614079, 30)//1000万

	),Array(
		// 礼包8 35000元
		
        Array(4033911, 35),//瓶子
		Array(4036457, 12),//黑火
		Array(3992025, 100),//大星
		Array(2614079, 50)//1000万

	),Array(
		// 礼包8 50000元
		
        Array(4033911, 50),//瓶子
		Array(4036457, 15),//黑火
		Array(2614079, 80)//1000万

	)
);

var text;
var ljname;
var revenue;

revenue = getHyPay(2);
text = "\t\t\t" + tt + " #e圣诞元旦消费礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前总消费： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
if(revenue >= 10000) {
	index = 1;
}
for(var i = 0; i <= condition.length - 1; i++) {
	var eventCount=getEventCount("圣诞元旦消费礼包" + condition[i]);
	if(eventCount == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(eventCount == 0 && revenue >= condition[i]) {
			txt = "[#b待领取#d]";
		} else if(eventCount == 0 && revenue < condition[i]) {
			txt = "[#g未达标#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 圣诞元旦累计消费福利 #r\t\t" + condition[i] + "#l\r\n\r\n\r\n";
	
	var max =4;
	if(reward[i].length<4){
		max=reward[i].length;
	}
	for(var j = 0; j < max; j++) {

		text += "#v" + reward[i][j][0] + "# X " + reward[i][j][1];
		if(reward[i][j][2] != null) {
			text += "(" + reward[i][j][2] + ")";
		}
	}
	text += "\r\n";
	//text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";
let selection = npc.askMenu(text);
text = "\t\t\t#e#r- 圣诞元旦累计消费" + condition[selection] + "元福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
	text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]";
	if(reward[selection][i].length > 2) {
		text += "[#r" + reward[selection][i][2] + "#k]\r\n";
	} else {
		text += "\r\n";
	}
}
let sel = npc.askYesNo(text);
var item =player.getInventorySlot(-1,-11);
if(sel == 1) {
	if(getEventCount("圣诞元旦消费礼包" + condition[selection]) == 1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
	} else if(revenue < condition[selection]) {
		npc.say("累计金额未达标！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	}else if(item==null){
		npc.say("请佩戴武器~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			if(reward[selection][i][0]==2614079){
				//识别突破
				if(item.getLimitBreak()>=10000000000){
					//给8倍
					item.setLimitBreak(item.getLimitBreak()+10000000*reward[selection][i][1]*8);
					player.updateItem(-11,item);
				}else{
					player.gainItem(reward[selection][i][0], reward[selection][i][1]);
				}
			}else{
				player.gainItem(reward[selection][i][0], reward[selection][i][1]);
			}
		}
		setEventCount("圣诞元旦消费礼包" + condition[selection], 0, 1);
		npc.broadcastNotice("≡≡　　恭喜玩家 " + player.getName() + " 领取了 " + condition[selection] + " 圣诞元旦消费礼包！！！");

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