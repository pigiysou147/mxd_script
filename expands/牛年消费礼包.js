var tt = "#v1143234#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(500, 1500, 3000,  6000, 12000, 20000,35000);
// 礼包内容
var reward = new Array(
	// 礼包500
	Array(
		Array(4440300,10),//C级宝石
		Array(4441300,10),//C级宝石
		Array(4442300,10),//C级宝石
		Array(4443300,10),//C级宝石
		Array(4021030,10),//灵魂攻击石
		Array(5220040, 100),//转蛋
		Array(4023026, 2),//紫火
		Array(2614079, 1)//1000w
		
	),
	Array(
		// 礼包2 1500元
		Array(4440300,30),//C级宝石
		Array(4441300,30),//C级宝石
		Array(4442300,30),//C级宝石
		Array(4443300,30),//C级宝石
		Array(4021030,30),//灵魂攻击石
		Array(5220040, 300),//转蛋
		Array(4023026, 5),//紫火
		Array(2614079, 2)//1000w

	),
	
	Array(
		// 礼包4 3000元
		Array(4440300,50),//C级宝石
		Array(4441300,50),//C级宝石
		Array(4442300,50),//C级宝石
		Array(4443300,50),//C级宝石
		Array(4021030,50),//灵魂攻击石
		Array(5220040, 1000),//转蛋
		Array(4023026, 12),//紫火
		Array(2614079, 5)//1000w
	),
	Array(
		// 礼包5 6000元
		
		Array(4440300,100),//C级宝石
		Array(4441300,100),//C级宝石
		Array(4442300,100),//C级宝石
		Array(4443300,100),//C级宝石
		Array(4021030,100),//灵魂攻击石
		Array(4033298,15),//信任
		Array(4023025, 15),//金火
		Array(2431578,3),//黑卷
		Array(3992025,30),//大星
		Array(2614079, 10)//1000w
	),
	
	Array(
		// 礼包7 12000元
		
        Array(4440300,200),//C级宝石
		Array(4441300,200),//C级宝石
		Array(4442300,200),//C级宝石
		Array(4443300,200),//C级宝石
		Array(4021030,200),//灵魂攻击石
		Array(4033298,35),//信任
		Array(4036457, 6),//黑火
		Array(2431578,8),//黑卷
		Array(3992025,60),//大星
	    Array(2614079, 20)//1000w

	),Array(
		// 礼包7 20000元
		Array(4440200,100),//B级宝石
		Array(4441200,100),//B级宝石
		Array(4442200,100),//B级宝石
		Array(4443200,100),//B级宝石
		Array(4021030,100),//灵魂攻击石
		Array(2431578,12),//黑卷
		Array(3992025,100),//大星
		Array(4033298,60),//信任
		Array(4036457, 12),//黑火
		Array(2614079, 40)//1000w

	),Array(
		// 礼包8 35000元
		
        Array(4440200,150),//B级宝石
		Array(4441200,150),//B级宝石
		Array(4442200,150),//B级宝石
		Array(4443200,150),//B级宝石
		Array(4021030,150),//灵魂攻击石
		
		Array(4009457,300),//冒险岛世界元素
		Array(4009459,300),//冒险岛世界元素
		Array(4009456,300),//冒险岛世界元素
		Array(4009454,300),//冒险岛世界元素
		Array(4009455,300),//冒险岛世界元素
		Array(4001118,100),//航海图碎片
		Array(2614079, 60)//1000w

	)
);

var text;
var ljname;
var revenue;

revenue = getHyPay(2);
text = "\t\t" + tt + " #e双旦余额消费礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前总消费余额： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
if(revenue >= 10000) {
	index = 1;
}
for(var i = 0; i <= condition.length - 1; i++) {
	var eventCount=getEventCount("双旦消费" + condition[i]);
	if(eventCount == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(eventCount == 0 && revenue >= condition[i]) {
			txt = "[#b待领取#d]";
		} else if(eventCount == 0 && revenue < condition[i]) {
			txt = "[#g未达标#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 双旦消费福利 #r\t" + condition[i] + "#l\r\n\r\n\r\n";

	for(var j = 0; j < 4; j++) {

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
text = "\t\t\t#e#r- 双旦累计余额消费" + condition[selection] + "元福利 -#k#n\r\n\r\n";
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
	var item =player.getInventorySlot(-1,-11);
	if(getEventCount("双旦消费" + condition[selection]) == 1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
	} else if(revenue < condition[selection]) {
		npc.say("累计金额未达标！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	}else if(item==null){
		npc.say("请佩戴武器。");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			if(reward[selection][i][0]==2614079){
				var beishu=1;
				//突破石头单独识别
				if(item.getLimitBreak()>10000000000 && item.getLimitBreak()<100000000000 ){
					//8倍
					beishu=10;
					item.setLimitBreak(item.getLimitBreak()+10000000*beishu*reward[selection][i][1]);
				}else if(item.getLimitBreak()>=100000000000){
					//12倍
					beishu=12;
					item.setLimitBreak(item.getLimitBreak()+10000000*beishu*reward[selection][i][1]);
				}else{
					player.gainItem(reward[selection][i][0],reward[selection][i][1]);
				}
				
				player.updateItem(-11,item);
				
			}else{
				player.gainItem(reward[selection][i][0], reward[selection][i][1]);
			}
			
		}
		setEventCount("双旦消费" + condition[selection], 0, 1);
		npc.broadcastNotice("≡≡　　恭喜玩家 " + player.getName() + " 领取了 " + condition[selection] + " 双旦消费礼包！！！");

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