var z = "#fEffect/CharacterEff/1112926/0/0#"; //红星

var nameList = Array(
	// -  PQ名字       
	"阿卡伊勒",
	"进阶暗黑龙王",
	"强化钻机",
	"班·雷昂",
	"希纳斯",
	"混沌品克缤",
	"希拉[困难]",
	"CRAZY兰丸",
	"浓姬",
	"进阶模式<半半>",
	"进阶模式<血腥女王>",
	"进阶模式<皮埃尔>",
	"进阶模式<贝伦>",
	"麦格纳斯",
	"麦格纳斯[困难]",
	"斯乌",
	"斯乌<困难>",
	"阿勒玛",
	"神秘领域",
	"桃乐丝",
	"乌鲁斯",
	"贝勒·德",
	"戴米安",
	"戴米安<困难>",
	"卡雄",
	"威尔",
	"Lucid"
);

var selStr = z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z;
selStr += "\r\n- #e#r随身npc#k#n\r\n";
selStr += "#d欢迎使用随身特权,本次给您带来快捷服务：#k\r\n";
selStr += "#r#L0#" + z + "每日福利#l  #l #L1#" + z + "领取勋章#l  #L2#" + z + " 自选发型#l\r\n\r\n";

selStr += "#L3#" + z + "副本重置#l  #b#L5#" + z + " 洗血洗蓝#l  #L10#" + z + " 神秘商店#l\r\n\r\n";

selStr += "#L7#" + z + "三倍双爆#l  #L8#" + z + " 每日返点#l  #L9#" + z + " 每日BOSS币#l\r\n\r\n";
//selStr += "#L100#" + z + " 余额商店#l\r\n\r\n";
selStr += z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z;
let selection = npc.askMenuS(selStr);
if(selection == 0) {
	if(player.getPQLog("每日福利") < 1) { //工资
		//给东西
		player.gainMesos(50000000);
		player.modifyCashShopCurrency(1, 10000);
		var item = player.gainGachaponItem("会员每日福利", 2614002, 1, 3); //百万突破
		var item = player.gainGachaponItem("会员每日福利", 5062024, 5, 3); //六角
		var item = player.gainGachaponItem("会员每日福利", 5062009, 30, 3); //超级魔方
		var item = player.gainGachaponItem("会员每日福利", 5062500, 30, 3); //大师魔方
		var item = player.gainGachaponItem("会员每日福利", 2340000, 10, 3); //祝福卷轴
		var item = player.gainGachaponItem("会员每日福利", 2022529, 1, 3); //金币花语
		var item = player.gainGachaponItem("会员每日福利", 2430683, 1, 3); //情人节卷轴箱子
		player.addPQLog("每日福利", 1, 1);
		npc.say("恭喜您领取理财服务的每日福利~~");

	} else {
		npc.say("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。");

	}
} else if(selection == 2) {

	npc.say("正在研发当中");

	//im.openNpc(9310362, "zxfx");
} else if(selection == 7) {
	if(player.getPQLog("三倍") < 2) { //三倍
		var toDrop = player.makeItemWithId(5211060); // 生成一个Equip类
		var expirationDate = java.lang.System.currentTimeMillis() + 60 * 60 * 2 *1000;
		toDrop.setExpiration(expirationDate);
		player.gainItem(toDrop);
		
		var toDrop = player.makeItemWithId(5360015); // 生成一个Equip类
		var expirationDate = java.lang.System.currentTimeMillis() + 60 * 60 * 2 *1000;
		toDrop.setExpiration(expirationDate);
		player.gainItem(toDrop);
		
		player.addPQLog("三倍", 1, 1);
		npc.say("恭喜您领取理财服务的每日三倍经验卡一张.");
		npc.broadcastNotice( "『理财服务』 ：玩家 " + player.getName() + " 在随身NPC里领取每日三倍经验卡和双倍爆率卡。");

	} else {
		npc.say("您已经领取过，请明日再领。");

	}
} else if(selection == 8) {
	if(player.getPQLog("返点") < 1) { //双爆

		if(player.getPQLog("年会员") > 0) {

			//永久
			addHyPay(5);
			player.addPQLog("返点", 1, 1);
			npc.say("恭喜您领取理财服务的每日返点5余额.");
			npc.broadcastNotice("『理财服务』 ：年会员 玩家 " + player.getName() + " 在随身NPC里领取每日5余额。");

		} else {
			npc.say("很抱歉，你还不是年会员。快去开通吧 每日有5余额返点哦");

		}

	} else {
		npc.say("您已经领取过，请明日再领。");

	}
} else if(selection == 9) {
	if(player.getPQLog("boss币") < 1 ) { //魔方
		var item = player.gainGachaponItem("理财每日",4310143, 2,  3);
		player.addPQLog("boss币", 1, 1);
		npc.say("恭喜你获得boss币x2");

	} else {
		npc.say("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。");

	}
} else if(selection == 1) {
	if(player.getPQLog("会员装备") == 0) {
		if(player.getPQLog("年会员") > 0) {
			//生成物品
			var toDrop = player.makeItemWithId(1143059); // 生成一个Equip类
			toDrop.setStr(300); //装备力量
			toDrop.setDex(300); //装备敏捷
			toDrop.setInt(300); //装备智力
			toDrop.setLuk(300); //装备运气
			toDrop.setPad(300); //物理攻击
			toDrop.setMad(300); //魔法攻击
			toDrop.setMaxHp(5000); //血量
			toDrop.setBossDamageR(15);
			toDrop.setIgnorePDR(15);
			toDrop.setTitle("永久会员土豪专属");
			player.gainItem(toDrop);
			player.addPQLog("会员装备");
			npc.broadcastGachaponMsgEx("    【会员中心】 :  玩家 " + player.getName() + "得到了会员专属勋章大家一起恭喜我吧!", toDrop);

		} else if(player.getPQLog("月会员") > 0) {
			//生成物品
			var toDrop = player.makeItemWithId(1142742); // 生成一个Equip类
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setPad(100); //物理攻击
			toDrop.setMad(100); //魔法攻击
			toDrop.setMaxHp(5000); //血量
			toDrop.setBossDamageR(5);
			toDrop.setIgnorePDR(5);
			toDrop.setTitle("月理财土豪专属");
			var expirationDate = java.lang.System.currentTimeMillis() + 60 * 60 * 24 * 30 * 1000;
			toDrop.setExpiration(expirationDate);
			player.addPQLog("会员装备",1,30);
			player.gainItem(toDrop);
			npc.broadcastGachaponMsgEx("    【会员中心】 :  玩家 " + player.getName() + "得到了会员专属勋章大家一起恭喜我吧!", toDrop);
			
		}
		

	} else {
		npc.say("你身上已经有会员勋章了哦");
	}

} else if(selection == 5) {
	let sel=npc.askMenu("\r\n#L0#" + z + " #r洗血#k#l　#L1#" + z + " #r洗蓝#k#l\r\n\r\n");
	if(sel==0){
		player.runScript("hyhp");
	}else{
		player.runScript("hymp");
	}
} else if(selection == 10) {
	if(player.getPQLog("年会员")>0){
		player.runScript( "yelb");
	}else{
		npc.say("只有永久会员才可以开启哦~");
	}
	
} else if(selection == 3) {
	if(player.getPQLog("所有副本重置") < 1) { //副本重置
		var name = "";
		for(var i = 0; i < nameList.length; i++) {
			name=nameList[i];
			player.resetPQLog(name);
		}
		player.addPQLog("所有副本重置",1,1);
		npc.say("恭喜您使用理财服务的重置了副本");
		npc.broadcastNotice( "『理财服务』 ：玩家 " + player.getName() + " 在随身NPC里重置了全部副本任务。");

	} else {
		npc.say("您已经领取过，请明日再领。");

	}
}

function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	player.customSqlUpdate(sql, price, player.getAccountId());

}