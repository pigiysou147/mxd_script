var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
// 每个阶段礼包所需的充值数
var condition = new Array(12, 24, 60, 286, 570);
// 礼包内容
var reward = new Array(
	// 首充6元
	Array(
		    //6元的  每日的 
		Array(2049116, 1),//强化混沌
		Array(4031764, 1,"[商店兑换稀有卷]"),
		Array(4001714, 10),//定居金币100万
		Array(4000299, 10),//天书
		Array(4000060, 10),//月光精灵月块
		Array(4310238, 3),//绝对味币
		Array(4000182, 5),//石灰粉瓶
		//Array(4000299, 10),
		Array(4000124, 2),//内存卡
		Array(4000313, 10),//黄金枫叶
		Array(4021016, 5),//最高物品结晶
		Array(4001006, 30),//火焰羽毛
		Array(4001618, 5),//传说枫叶
		Array(5062009, 30),//超级神奇魔方
		Array(5062500, 30)//附加大师魔方
	),
	Array(
		//12元的  每日的 
		Array(2614071, 1),//突破五十万100%
		Array(4031764, 2,"[商店兑换稀有卷]"),
		Array(2049116, 2),//强化混沌
		Array(4001714, 20),//定居金币100万
		Array(4000060, 20),//月光精灵月块
		Array(4000299, 20),//天书
		Array(4310238, 5),//绝对味币
		Array(4000182, 10),//石灰粉瓶
		//Array(4000299, 20),
		Array(4000124, 3),//内存卡
		Array(4000672, 20),//火石头
		Array(4000645, 20),//脖子肉
		Array(4000627, 20),//钉头锤
		Array(4000133, 20),//发动机
		Array(4021016, 10),//最高物品结晶
		Array(4001006, 50),//火焰羽毛
		Array(4001618, 10),//传说枫叶
		Array(4000313, 20),//黄金枫叶
		Array(5062009, 60),//超级神奇魔方
		Array(5062500, 60)//附加大师魔方
	),
	Array(
		//30元的  每日的 
		Array(2049116, 3),//强化混沌
		Array(4162009, 1,"[完成20次跑环]"),
		Array(2614058, 1),//突破百万100%
		Array(2049323, 2),//高级装备强化卷
		Array(3994979, 1,"      {巨人球是机器人自选极品潜能所需材料}"),
		Array(4031764, 3,"[商店兑换稀有卷]"),
		Array(4001714, 30),//定居金币100万
		Array(4310238, 12),//绝对味币
		Array(4000182, 20),//石灰粉瓶
		Array(4000124, 5),//内存卡
		Array(4000313, 30),//黄金枫叶
		Array(4021016, 20),//最高物品结晶
		Array(4001618, 20),//传说枫叶
		Array(4000672, 30),//火石头
		Array(4000645, 30),//脖子肉
		Array(4000627, 30),//钉头锤
		Array(4000133, 30),//发动机
		Array(4001006, 120),//火焰羽毛
		Array(5062009, 80),//超级神奇魔方
		Array(5062500, 80)//附加大师魔方

	),
	Array(
		//143元的  每日的 
		Array(2049116, 3),//强化混沌
		Array(2614058, 1),//突破百万100%
		Array(2049604, 5),//还原
		Array(2049323, 2),//高级装备强化卷
		Array(3994979, 2,"      {巨人球是机器人自选极品潜能所需材料}"),
		Array(4031764, 6,"[商店兑换稀有卷]"),
		Array(4001714, 50),//定居金币100万
		Array(4000124, 5),//内存卡
		Array(5062024, 30)//闪炫魔方

	),
	Array(
		//285元的  每日的 
		Array(4001326, 1,"{随机极品SS潜能属性}"),
		Array(4001327, 1,"{随机极品SS潜能属性}"),
		Array(4001328, 1,"{随机极品SS潜能属性}"),
		Array(4001329, 1,"{随机极品SS潜能属性}"),
		Array(4001330, 1,"{随机极品SS潜能属性}"),
		Array(4001331, 1,"{随机极品SS潜能属性}")

	)
);

var text;
var ljname;
var revenue;

revenue = getHyPay(2);
text = "\t\t\t" + tt + " #e每日充值(12点更新)" + tt";
text+=" #r最后一层奖励赠送6根蜡笔哦#k#k#n \r\n#L10##r充值链接，充值享受0.35折#k#l\r\n\r\n";
text+=" #r以下对应档次就是2元-6元-11元-50元-100元奖励#k#k#n \r\n";
text += "#d#e今日充值金额数量： #r" + revenue + " #d元\r\n";


var txt = "";
for(var i = 0; i <= condition.length - 1; i++) {
	if(getEventCount("每日充值礼包" + condition[i]) == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(getEventCount("每日充值礼包" + condition[i]) == 0 && revenue>=condition[i]){
			txt = "[#b待领取#d]";
		}else if(getEventCount("每日充值礼包" + condition[i]) == 0 && revenue<condition[i]){
			txt = "[#g未达标#d]";
		}
		
	}
	
	text += "#d#L" + i + "#" + tt + txt + " 每日充值满  #r" + condition[i] + "#k  元福利 \t\t\t#l\r\n";
	
}
text += "#k";
let selection = npc.askMenu(text);
if(selection==10){
	player.runScript("payurl");
}else{
text = "\t\t\t#e#r- 每日充值" + condition[selection] + "元福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
	text += "\t\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]\r\n";
}
let sel = npc.askYesNo(text);
if(sel == 1) {
	if(getEventCount("每日充值礼包" + condition[selection]) == 1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
	} else if(revenue < condition[selection]) {
		npc.say("每日金额未达标！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			player.gainItem(reward[selection][i][0], reward[selection][i][1]);
		}
		setEventCount("每日充值礼包" + condition[selection], 1, 1);
		
		
		npc.broadcastNotice("≡每日充值≡　　恭喜玩家 " + player.getName() + " 领取了每日充值 " + condition[selection] + " 元的福利礼包！！！");
		
		npc.say("领取成功");
	}
}
}

function addHyPay(price) {
	var sql = "update hypay set cash=cash+? where accountId=?";
	var result = player.customSqlUpdate(sql, price,player.getAccountId());

}
function getHyPay() {

	var sql = "select today from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("today");
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