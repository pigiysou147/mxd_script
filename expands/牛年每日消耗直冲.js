var tt = "#v1143234#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(100,200,300,500,800,1500,3000);
// 礼包内容
var reward = new Array(
	// 礼包1 100
	Array(
		Array(4440300,20),//C级宝石
		Array(4441300,20),//C级宝石
		Array(4442300,20),//C级宝石
		Array(4443300,20),//C级宝石
		Array(4021030,20),//灵魂攻击石
		Array(2436298, 1),//快乐源泉
		Array(5220040, 50),//转蛋卷
		Array(4023026, 1),//紫火
		Array(3992025, 5),//圣诞大星
		Array(2614079, 1),//1000w
		Array(4033911, 1)//瓶子
		
	),
	Array(
		// 礼包2 200元
		Array(4440300,30),//C级宝石
		Array(4441300,30),//C级宝石
		Array(4442300,30),//C级宝石
		Array(4443300,30),//C级宝石
		Array(4021030,30),//灵魂攻击石
	    Array(3992025, 10),//圣诞大星
		Array(5220040, 100),//转蛋
		Array(2436298, 1),//快乐源泉
		Array(4033911, 2),//瓶子
		
		Array(4023025, 1),//金火
		Array(4023026, 2),//紫火
		Array(2614079, 2)//1000w

	),
	
	
	Array(
		// 礼包3 300元
		Array(4440300,50),//C级宝石
		Array(4441300,50),//C级宝石
		Array(4442300,50),//C级宝石
		Array(4443300,50),//C级宝石
		Array(4021030,50),//灵魂攻击石
		Array(2436298, 1),//快乐源泉
		Array(5220040, 200),//转蛋
		Array(4023026, 3),//紫火
		Array(3992025, 15),//圣诞大星
		Array(4023025, 2),//金火
		Array(4033911, 3),//瓶子
		Array(2614079, 3)//1000w
	),
	Array(
		// 礼包4 500
		
		Array(4440300,80),//C级宝石
		Array(4441300,80),//C级宝石
		Array(4442300,80),//C级宝石
		Array(4443300,80),//C级宝石
		Array(4021030,80),//灵魂攻击石
		Array(2436298, 1),//快乐源泉
		Array(5220040, 300),//转蛋
		Array(4023026, 5),//紫火
		Array(3992025, 30),//圣诞大星
		Array(4023025, 3),//金火
		Array(4033911, 5),//瓶子
		Array(2614079, 5)//1000w
	),
	
	Array(
		// 礼包5 800
		
        Array(4440300,100),//C级宝石
		Array(4441300,100),//C级宝石
		Array(4442300,100),//C级宝石
		Array(4443300,100),//C级宝石
		Array(4021030,100),//灵魂攻击石
		Array(4009457,30),//冒险岛世界元素
		Array(4009459,30),//冒险岛世界元素
		Array(4009456,30),//冒险岛世界元素
		Array(4009454,30),//冒险岛世界元素
		Array(4009455,30),//冒险岛世界元素
		Array(2436298, 2),//快乐源泉
		Array(4033298, 10),//信任
		Array(4033911, 8),//瓶子
		Array(2614079, 8)//1000w

	),Array(
		// 礼包6 1500
		Array(4440300,200),//C级宝石
		Array(4441300,200),//C级宝石
		Array(4442300,200),//C级宝石
		Array(4443300,200),//C级宝石
		Array(4021030,200),//灵魂攻击石
		Array(4009457,60),//冒险岛世界元素
		Array(4009459,60),//冒险岛世界元素
		Array(4009456,60),//冒险岛世界元素
		Array(4009454,60),//冒险岛世界元素
		Array(4009455,60),//冒险岛世界元素
		Array(2436298,3),//快乐源泉
		Array(4033298, 20),//信任
		Array(4033911, 10),//瓶子
		Array(2614079, 10)//1000w

	),Array(
		// 礼包6 3000
		Array(4440300,500),//C级宝石
		Array(4441300,500),//C级宝石
		Array(4442300,500),//C级宝石
		Array(4443300,500),//C级宝石
		Array(4021030,500),//灵魂攻击石
		Array(4009457,130),//冒险岛世界元素
		Array(4009459,130),//冒险岛世界元素
		Array(4009456,130),//冒险岛世界元素
		Array(4009454,130),//冒险岛世界元素
		Array(4009455,130),//冒险岛世界元素
		Array(2436298,8),//快乐源泉
		Array(4023026, 20),//紫火
		Array(4023025, 15),//金火
		Array(4033298, 30),//信任
		Array(4033911, 25),//瓶子
		Array(2614079, 25)//1000w

	)
);

var text;
var ljname;
var revenue = getHyPay();
text = "\t\t" + tt + " #e每日消耗直冲礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前总累计： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
if(revenue >= 10000) {
	index = 1;
}
for(var i = 0; i <= condition.length - 1; i++) {
	var eventCount=getEventCount("每日消耗直冲礼包" + condition[i]);
	if(eventCount == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(eventCount == 0 && revenue >= condition[i]) {
			txt = "[#b待领取#d]";
		} else if(eventCount == 0 && revenue < condition[i]) {
			txt = "[#g未达标#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 每日消耗直冲福利 #r\t" + condition[i] + "#l\r\n\r\n\r\n";

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
text = "\t\t\t#e#r- 每日消耗直冲" + condition[selection] + "元福利 -#k#n\r\n\r\n";
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
	if(getEventCount("每日消耗直冲礼包" + condition[selection]) == 1) {
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
					beishu=8;
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
		setEventCount("每日消耗直冲礼包" + condition[selection], 1, 1);
		npc.broadcastNotice("≡≡　　恭喜玩家 " + player.getName() + " 领取了 " + condition[selection] + " 每日消耗直冲礼包！！！");

		npc.say("领取成功");
	}
}

function getHyPay() {

	var sql = "SELECT sum(rmb)*-1 total from cash_log where accounts_id=? and time >DATE_FORMAT( now(),'%y-%m-%d') and remark not like '%交易行%'";

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