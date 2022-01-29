var jsts = "#fEffect/ItemEff/1102376/effect/proneStab/7#"; //橘色翅膀
var a11 = "#fUI/UIPVP.img/MiniMapIcon/star#"; //黄星星
var xxx = "#fEffect/CharacterEff/1032054/0/0#"; //选项两边

var mac=getmac();
var text = "";
var questid = 100100;
var maxtimes = 26;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var hitemid = 0;
var hitemcs = 0;
var 一键完成奖励 = [
[1,10000],//这里给点券
[2,12000],//这里给抵用
[3,25],//这里给活跃
[4001839,2500],//下面是 道具+数量 自己往下面加 最后一个不要逗号
[2614054,75],
[4001785,70],
[5062500,25],
[5062009,25],
[5062024,2],
[5062009,2],
[2614000,25],
[2430069,5]//下面是 道具+数量 自己往下面加 最后一个不要逗号
];
var questitems = Array(
	Array(4000000, 25, "蓝色蜗牛的壳.", 104010100), // 蓝色蜗牛壳 - 蓝色蜗牛的壳.
    Array(4000001, 25, "花蘑菇的盖", 120010100), // 蓝色蜗牛壳 - 蓝色蜗牛的壳.
    Array(4000014, 25, "龙的头骨", 105020100), // 是龙的头骨 - 是龙的头骨
    Array(4000034, 25, "蛇皮", 103030000), // 青蛇的外皮. - 青蛇的外皮.
    Array(4000048, 25, "小白雪人皮", 211010000), // 小白雪人皮 - 小白雪人的外皮，由白色软毛构成.
    Array(4000331, 25, "听说有人在#r仙人掌爸爸#k身上见到过这种东西", 260010200), // 能从仙人掌爸爸那儿得到的仙人掌的花，因为花的植物液体比较甜，能作为茶的材料。
    Array(4000330, 25, "听说有人在#r仙人掌妈妈#k身上见到过这种东西", 260010100), // 是龙的头骨 - 是龙的头骨
    Array(4004000, 25, "力量母矿", 251010402), // 力量母矿 - 力量母矿
    Array(4004002, 25, "敏捷母矿", 105020100), // 是龙的头骨 - 是龙的头骨
    Array(4004003, 25, "幸运母矿", 105020100), // 是龙的头骨 - 是龙的头骨
    Array(4000014, 25, "龙的头骨", 105020100), // 是龙的头骨 - 是龙的头骨
    Array(4000269, 25, "听说有人在#r蓝飞龙#k身上见到过这种东西", 240040000), //飞龙的腮
    Array(4000268, 25, "听说有人在#r红飞龙#k身上见到过这种东西", 240040000), // 飞龙的翅膀 - 红飞龙的红色翅膀
    Array(4000270, 25, "听说有人在#r黑飞龙#k身上见到过这种东西", 240040200), // 飞龙的指甲 - 附在黑飞龙翅膀两端的尖锐指甲
    Array(4000000, 25, "蓝色蜗牛的壳", 104010100), // - 山羊角 - 山羊的角，不那么锋利，但有点危险。
    Array(4000001, 25, "花蘑菇的盖", 120010100), // 黑羊毛 - 黑绵羊的毛，有点粗糙。
    Array(4000002, 25, "漂漂猪的蝴蝶结", 120000400), // 鸡爪 - 斗鸡的脚,可以交换玉米或糖葫芦
    Array(4000011, 25, "是蘑菇的芽孢", 104010200), // 鸭蛋 - 大头鸭的蛋,可以交换玉米或糖葫芦
    Array(4000017, 25, "是猪的头.", 120000400), // 鸡肉 - 鸡毛都退掉的整理好的鸡肉
    //Array(4000028, 25, "月牙牛魔王的角.非常硬而且重.", 910000000), // 火焰的眼 - 把被封印的扎昆树的种子人工制作的。用于扎昆祭坛祭物的材料。
    Array(4000021, 25, "也许你可以想想#r火野猪#k什么的", 240010500), // 动物皮 - 是动物的外皮.
    Array(4000052, 25, "在#r冰封雪域#k有人看见过这种东西", 211040100), // 白狼之尾 - 白狼的尾，由白色软毛构成.
    Array(4000595, 25, "在#r埃德尔斯坦#k有人看见过这种东西", 310020000), // 嫩芽
    Array(4000596, 25, "在#r埃德尔斯坦#k有人看见过这种东西", 310020100), // 喇叭花.
    Array(4000597, 25, "在#r埃德尔斯坦#k有人看见过这种东西", 310020200), // 软木塞
    Array(4000598, 25, "在#r埃德尔斯坦#k有人看见过这种东西", 310030000), // 巡逻机器人的记忆芯片
    Array(4000601, 25, "在#r埃德尔斯坦#k有人看见过这种东西", 310030200), // 偷水贼的水平
    Array(4000602, 25, "在#r埃德尔斯坦#k有人看见过这种东西", 310030300), // 尘粒
    Array(4000156, 25, "在#r水下世界#k有人看见过这种东西", 230010400), // 海象尖牙
    Array(4000157, 25, "在#r水下世界#k有人看见过这种东西", 230010400), // 海豹的肉
    Array(4000167, 25, "在#r水下世界#k有人看见过这种东西", 230020000), // 坚硬的鳞片
    Array(4000106, 25, "在#r玩具塔#k有人看见过这种东西", 220010500), // 玩具熊猫的棉花
    //Array(4000073, 25, "在#r天空之城#k有人看见过这种东西", 910000000), // 独角狮的硬角
    Array(4000232, 25, "听说这是#r火焰半人马#k之力量的来源", 240020000), // 半人马的火花 - 火焰半人马之力量的来源。
    Array(4000233, 25, "听说这是#r寒冰半人马#k之力量的来源", 240020500), // 半人马的净水 - 寒冰半人马之力量的来源。
    Array(4000234, 25, "听说这是#r暗黑半人马#k之力量的来源", 240020102), // 半人马的骨头 - 暗黑半人马之力量的来源。
    Array(4000238, 25, "听说这是#r哈维#k身上掉下的尾羽毛", 240010700), // 哈维羽毛 - 哈维身上掉下的尾羽毛。外观很美，用于装饰品。
    Array(4000050, 25, "雪域可能会有哦", 211030000), // 宠物指令：小狗系列 // 记载着可对小狗使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
    //Array(4000099, 25, "小章鱼样子的钥匙装饰品。玩具城可能会有哦。", 910000000), // 宠物能力值转移卷轴 // 记载着可转移宠物能力值的卷轴。\n#c快速双击该道具，便可知道详细内容。#
    Array(4000110, 25, "木马骑兵的武器。玩具城可能会有哦。", 220010000) // 宠物指令：小白雪人 // 记载着可对小白雪人使用的指令说明书。\n#c快速双击该道具，便可开启书本。#
);
var mapId = 0;
playerid = player.getId();
var info = player.getQuestRecordEx(questid, "COUNT");
accepttimes = getEventCount("RINGQUSTION");
if(info == null || accepttimes <= 0) {
	info = player.updateQuestRecordEx(questid, "COUNT=1;DONE=0;AC=0;ITEM=0;REQ=0;ID=0");
}
text = "\t\t\t\t#e#d" + xxx + "<25环任务>" + xxx + "#n\r\n";
text += "#d" + a11 + "您今日可领取次数：#r" + (maxtimes - accepttimes) + "#k#d次" + a11 + "完成每环任务会获得奖励：\r\n";
text += "#e#r" + a11 + "400点卷、500点抵用券、大量游戏经验、10000突破、100个星星、,1点活力值#k\r\n";
text += "" + a11 + "#d每#g5#k#d环为#b双倍奖励#k#d，并有100%获得1个#z2430069#,几率多获得#b#r#z2439292##k#d神秘力量一个！\r\n#k";
text += "#e#d" + a11 + "注意:每天晚上12点会重置任务!不管有没有完成!#n#k\r\n\r\n";
if(accepttimes<1){
	
text+="#L999# #r一键完成25环任务(仅限一次都没接受过任务的)#k#l\r\n";
	
}
if(player.getLevel() < 59) {
	npc.say("连续跑环任务需要角色等级大于#r60#k级");
} else if(getEventCount("连续跑环") > 0 || getCount("连续跑环")>0) {
	npc.say("同一个账号、机器码、IP下当天跑环任务已经做完请明天再来!");
} else {
	if(player.getQuestRecordEx(questid, "AC").equals("1")  ) { // 判断是否接取了任务
		if(accepttimes < maxtimes) { // 判断是否超过完成次数
			hitemid = parseInt(player.getQuestRecordEx(questid, "ITEM"));
			hitemcs = parseInt(player.getQuestRecordEx(questid, "REQ"));
			text += "\t\t#e当前第#r" + Math.max(1, accepttimes) + "#k环  收集 #r#z" + hitemid + "# " + hitemcs + "#k个#n\r\n\r\n";
			if(player.hasItem(hitemid, hitemcs)) { // 判断是否满足任务条件
				text += "#b#L1#完成任务#l\r\n";
			} else {
				text += "#e怎么了？还没找到我要的东西吗？#n\r\n";
			}
			
			text += "#r#L2#放弃任务 (无法获得任何奖励，且会消耗一次任务次数)#l\r\n";
		} else {
			text += "#e该帐号跑环任务已经做完请明天再来!#n\r\n";
		}
	} else {
		text += "#e#b#L3#" + a11 + "接受任务" + a11 + "#l\r\n";
	}
	//可以跑环的选项
	let selection = npc.askMenuS(text);
	if(selection == 0) { // 重新接受任务 初始化
		var questrandid = Math.floor(Math.random() * questitems.length);
		questitemid = questitems[questrandid][0]; // 任务道具ID
		questitemcs = questitems[questrandid][1];
		
		text = "#e第#r" + (accepttimes + 1) + "#k环：#n\r\n\r\n请帮我找到#b" + questitemcs + "#k个#r#z" + questitemid + "##k\r\n" + questitems[questrandid][3] + "\r\n#k感激不尽，快去快回~";
		// 重新接受任务
		player.updateQuestRecordEx(questid, "AC", "1");
		player.updateQuestRecordEx(questid, "DONE", "0");
		// 写入任务道具ID
		player.updateQuestRecordEx(questid, "ITEM", questitemid + "");
		// 写入任务道具数量
		player.updateQuestRecordEx(questid, "REQ", questitemcs + "");
		npc.say(text);
	} else if(selection == 1) { // 完成任务
		var doneCount = accepttimes + 1;
		//完成任务
		player.updateQuestRecordEx(questid, "DONE", "1");
		player.updateQuestRecordEx(questid, "AC", "0");
		player.updateQuestRecordEx(questid, "COUNT", doneCount + "");
		//经验值奖励
		var baseExp = 0.02;
		if(player.getLevel() > 220) {
			baseExp = 0.01;
		} else if(player.getLevel() > 240) {
			baseExp = 0.001;
		}

		if(!(accepttimes % 5)) {
			player.gainItem(4001839, 200);
			
			
			if(getEventCount("RINGQUSTION") <= maxtimes) {
				player.modifyCashShopCurrency(2, 2000);
				player.modifyCashShopCurrency(1, 800);
				player.gainItem(2430069, 1);
				player.gainMesos(20000000);
				player.gainItem(2614025,1);
			}
			if(Math.round(Math.random() * 1)) {
				player.gainItem(2439292, 1);
				player.gainItem(2431170, 1);
				player.gainItem(2614000, 1); //突破
				npc.broadcastNotice("[每日任务]" + " : " + "真是好运，玩家【" + player.getName() + "】获得了一盒神秘力量并且得到了一个250级以上专用的经验药水。");
			}
		} else {
			player.gainItem(4001839, 100);
			player.gainItem(2614000, 1); //突破
			player.gainItem(2614054, 1); //突破
			player.gainMesos(10000000);
			//cm.gainPlayerEnergy(1);
			if(getEventCount("RINGQUSTION") <= maxtimes) {
				player.modifyCashShopCurrency(2, 1000);
				player.modifyCashShopCurrency(1, 400);
			}
		}
		
		var calcExp = baseExp;
		if(calcExp >= 2147483647) {
			//计算分成几次
			expNum = Math.floor((calcExp / 2147483647));
			//计算余数
			lastExp = Math.floor((calcExp % 2147483647));
			//根据计算次数多次给予经验
			for(var i = 0; i < expNum; i++) {
				player.gainExp(2147483647);
			}
			//给予余数经验
			player.gainExp(lastExp);
		} else {
			player.gainExp(calcExp);
		}
		player.loseItem(hitemid, hitemcs);
		text = "恭喜您完成了任务~~";
		player.addPQLog("活力",20,999);
		
		npc.broadcastNotice("[每日任务]" + " : " + "恭喜玩家【" + player.getName() + "】,完成了【第" + accepttimes + "环】任务获得了丰厚的奖励。");
		
		if(doneCount >= maxtimes) {
			getEventCount("活跃");
					setEventCount("活跃",1,10);
			setEventCount("连续跑环",1,1);
			text = "您已经完成了今天的任务，请明天0点后再来吧~";
		}
		npc.say(text);
		
	} else if(selection == 2) { // 放弃任务
		var doneCount = accepttimes + 1;
		//完成任务
		player.updateQuestRecordEx(questid, "DONE", "0");
		player.updateQuestRecordEx(questid, "AC", "0");
		player.updateQuestRecordEx(questid, "COUNT", doneCount + "");
		text = "任务已放弃……";
		if(doneCount >= maxtimes) {
			setEventCount("连续跑环",1,1);
		}
		npc.say(text);
		
	} else if(selection == 3) { // 接受任务
		var questrandid = Math.floor(Math.random() * questitems.length);
		questitemid = questitems[questrandid][0]; // 任务道具ID
		if(questitems[questrandid][1] < 0) {
			questitemcs = Math.floor(Math.random() * 20 * player.getLevel() / 10) + 30 + Math.floor(Math.random()); // 任务道具数量
		} else {
			questitemcs = questitems[questrandid][1];
		}
		text = "#e第#r" + (accepttimes + 1) + "#k环：#n\r\n\r\n请帮我找到#b" + questitemcs + "#k个#r#z" + questitemid + "##k\r\n\r\n#k快去快回~";
		player.updateQuestRecordEx(questid, "AC", "1");
		player.updateQuestRecordEx(questid, "DONE", "0");
		// 写入任务道具ID
		player.updateQuestRecordEx(questid, "ITEM", questitemid + "");
		// 写入任务道具数量
		player.updateQuestRecordEx(questid, "REQ", questitemcs + "");
		setEventCount("RINGQUSTION",1,1);
		let sel =npc.askMenuS(text + "\r\n #r#L0#传送到材料地图（不想传送请退出对话框）#l \r\n #r#L1#直接提交材料#l \r\n #k");
		mapId = questitems[questrandid][3];
		
		if(sel==0){
			player.changeMap(mapId);
		}else{
			player.runScript("mrph");
			
		}
	}else if(selection ==999){
		if(getEventCount("连续跑环")<1){
			if(player.hasItem(4162009,1)){
				player.loseItem(4162009,1);
				setEventCount("连续跑环",1,1);
				getEventCount("活跃");
					setEventCount("活跃",1,10);
				setEventCount("RINGQUSTION",1,25);
				player.addPQLog("活力",500,999);
				for (var i = 0; i < 一键完成奖励.length; i++) {
					if(一键完成奖励[i][0] == 1){//点券
					player.modifyCashShopCurrency(1, 一键完成奖励[i][1]);
					}else if(一键完成奖励[i][0] == 2){//抵用
					player.modifyCashShopCurrency(2, 一键完成奖励[i][1]);
					}else if(一键完成奖励[i][0] == 3){//活跃
					player.addPQLog("活力",一键完成奖励[i][1],999);
					}else{
					player.gainItem(一键完成奖励[i][0],一键完成奖励[i][1]);
					}
				}
					npc.broadcastPlayerNotice(0x15, "『每日跑环』: 玩家 " + player.getName() + " 使用了一键完成所有跑环功能!");
			}else{
				npc.say("你需要一个#i4162009# 可以在每日充值30元里获取道具");
			}
		}else{
				npc.say("一天只能使用一次这个功能哦");
			}
		
	}

}
function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}

function getCount(name){
	var sql = "select sum(value) macCount from accounts_event where `event`=? and mac =?";
	var result = player.customSqlResult(sql,name,mac);
	macCount =result.get(0).get("macCount");
	if(macCount==null){
		macCount= 0;
	}
	return macCount;
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

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0,0);
		return 0;
	}

}

function setEventCount(eventName,type,value) {

	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type,value,mac,player.getAccountId(), eventName);


}

function getHyPay() {

	var sql = "select pay from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}