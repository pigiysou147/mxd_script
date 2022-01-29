var tt = "#v1143234#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(200,500,1000, 2000,  3000,5000, 8000,12000);
// 礼包内容
var reward = new Array(
	// 礼包200
	Array(
		Array(4440300,100),
		Array(4441300,100),
		Array(4442300,100),
		Array(4443300,100),
		Array(4021030,100),
		
		
		Array(2431041, 1),//赌狗
		Array(4033911, 2),//瓶子
		
		Array(4023026, 3),//紫火
		Array(2614079, 2)//1000w
		
	),
	Array(
		// 礼包2 500元
		Array(4440300,200),
		Array(4441300,200),
		Array(4442300,200),
		Array(4443300,200),
		Array(4021030,200),
		Array(4009457,10),
		Array(4009459,10),
		Array(4009456,10),
		Array(4009454,10),
		Array(4009455,10),
		Array(2431041, 1),//赌狗
		Array(4033911, 5),//瓶子
		Array(4023026, 5),//紫火
		Array(2614079, 5)//1000w

	),
	
	Array(
		// 礼包3 1000元
		Array(4440300,500),
		Array(4441300,500),
		Array(4442300,500),
		Array(4443300,500),
		Array(4021030,500),
		Array(4009457,20),
		Array(4009459,20),
		Array(4009456,20),
		Array(4009454,20),
		Array(4009455,20),
		Array(2431041, 2),//赌狗
		Array(4033911, 10),//瓶子
		Array(4023026, 10),//紫火
		Array(2614079, 10)//1000w
	),
	Array(
		// 礼包4 2000元
		
		Array(4440300,1000),
		Array(4441300,1000),
		Array(4442300,1000),
		Array(4443300,1000),
		Array(4021030,1000),
		Array(4009457,40),
		Array(4009459,40),
		Array(4009456,40),
		Array(4009454,40),
		Array(4009455,40),
		Array(2431041, 2),//赌狗
		Array(4033911, 20),//瓶子
		Array(4023026, 20),//紫火
		Array(4001118, 20),//航海碎片
		
		Array(2614079, 20)//1000w
	),
	
	Array(
		// 礼包5 3000
		
        Array(4440300,1500),
		Array(4441300,1500),
		Array(4442300,1500),
		Array(4443300,1500),
		Array(4021030,1500),
		Array(4009457,60),
		Array(4009459,60),
		Array(4009456,60),
		Array(4009454,60),
		Array(4009455,60),
		Array(2431041, 2),//赌狗
		Array(4033911, 30),//瓶子
		Array(4023026, 30),//紫火
		Array(4001118, 30),//航海碎片
		
		Array(2614079, 30)//1000w

	),Array(
		// 礼包6 5000元
		Array(4440300,2500),
		Array(4441300,2500),
		Array(4442300,2500),
		Array(4443300,2500),
		Array(4021030,2500),
		Array(4009457,100),
		Array(4009459,100),
		Array(4009456,100),
		Array(4009454,100),
		Array(4009455,100),
		Array(2431041, 3),//赌狗
		Array(4033911, 50),//瓶子
		Array(4023026, 50),//紫火
		Array(4001118, 50),//航海碎片
		
		Array(2614079, 50)//1000w

	),Array(
		// 礼包7 8000元
		
        Array(4440300,5000),
		Array(4441300,5000),
		Array(4442300,5000),
		Array(4443300,5000),
		Array(4021030,5000),
		Array(4009457,180),
		Array(4009459,180),
		Array(4009456,180),
		Array(4009454,180),
		Array(4009455,180),
		Array(2431041, 5),//赌狗
		Array(4033911, 80),//瓶子
		Array(4023026, 100),//紫火
		Array(4001118, 80),//航海碎片
		
		Array(2614079, 80)//1000w

	),Array(
		// 礼包8 12000元
		
        Array(4440300,6000),
		Array(4441300,6000),
		Array(4442300,6000),
		Array(4443300,6000),
		Array(4021030,6000),
		Array(4009457,260),
		Array(4009459,260),
		Array(4009456,260),
		Array(4009454,260),
		Array(4009455,260),
		Array(2431041, 8),//赌狗
		Array(4033911, 150),//瓶子
		Array(4023026, 120),//紫火
		Array(4001118, 120),//航海碎片
		
		Array(2614079, 120)//1000w

	),Array(
		// 礼包8 15000元
		
        Array(4440300,8000),
		Array(4441300,8000),
		Array(4442300,8000),
		Array(4443300,8000),
		Array(4021030,8000),
		Array(4009457,350),
		Array(4009459,350),
		Array(4009456,350),
		Array(4009454,350),
		Array(4009455,350),
		Array(2431041, 8),//赌狗
		Array(4033911, 200),//瓶子
		Array(4023026, 150),//紫火
		Array(4001118, 150),//航海碎片
		
		Array(2614079, 180)//1000w

	),Array(
		// 礼包9 20000元
		
        Array(4440300,15000),
		Array(4441300,15000),
		Array(4442300,15000),
		Array(4443300,15000),
		Array(4021030,15000),
		Array(4009457,500),
		Array(4009459,500),
		Array(4009456,500),
		Array(4009454,500),
		Array(4009455,500),
		Array(2431041, 15),//赌狗
		Array(4033911, 500),//瓶子
		Array(4023026, 300),//紫火
		Array(4001118, 300),//航海碎片
		
		Array(2614079, 300)//1000w

	)
);

var text;
var ljname;
var revenue;

revenue = getHyPay(2);
text = "\t\t" + tt + " #e牛年周年庆累计直充兑换礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前总累计： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
if(revenue >= 10000) {
	index = 1;
}
for(var i = 0; i <= condition.length - 1; i++) {
	var eventCount=getEventCount("牛年周年庆累计礼包" + condition[i]);
	if(eventCount == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(eventCount == 0 && revenue >= condition[i]) {
			txt = "[#b待领取#d]";
		} else if(eventCount == 0 && revenue < condition[i]) {
			txt = "[#g未达标#d]";
		}

	}
	text += "#d#L" + i + "#" + tt + txt + " 牛年周年庆累计直充兑换福利 #r\t" + condition[i] + "#l\r\n\r\n\r\n";

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
text = "\t\t\t#e#r- 牛年周年庆累计" + condition[selection] + "元福利 -#k#n\r\n\r\n";
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
	if(getEventCount("牛年周年庆累计礼包" + condition[selection]) == 1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
	} else if(revenue < condition[selection]) {
		npc.say("累计金额未达标！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	} else if(item==null){
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
		setEventCount("牛年周年庆累计礼包" + condition[selection], 0, 1);
		npc.broadcastNotice("≡≡　　恭喜玩家 " + player.getName() + " 领取了 " + condition[selection] + " 牛年周年庆累计直充兑换礼包！！！");

		npc.say("领取成功");
	}
}

function getHyPay() {

	var sql = "select paihangbang from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("paihangbang");
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