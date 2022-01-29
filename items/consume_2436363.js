var z = "#fEffect/CharacterEff/1112926/0/0#"; //红星

var nameList = Array(
	// -  PQ名字       限定次数   需要的币------
	Array("品克缤", "Pinkbeen", 1),
	Array("混沌品克缤", "Pinkbeen_Chaos", 1),
	Array("森兰丸", "Ranmaru_Crazy", 1),
	Array("浓姬", "浓姬", 1),
	Array("希纳斯", "Shinas", 1),
	Array("普通血腥女王", "Bloody", 2),
	Array("进阶血腥女王", "Bloody_CHAOS", 1),
	Array("普通皮埃尔", "Pierre", 2),
	Array("进阶皮埃尔", "Pierre_CHAOS", 1),
	Array("普通半半", "Banban", 2),
	Array("进阶半半", "Banban_CHAOS", 1),
	Array("普通贝伦", "Bellum", 2),
	Array("进阶贝伦", "Bellum_CHAOS", 1),
	Array("贝勒德", "Beidler", 2),
	Array("卡雄", "Caoong", 1)
	/*,
	Array("普通麦格纳斯", "Magnus", 2),
	Array("困难麦格纳斯", "Magnus_Hard", 1),
	Array("阿勒玛", "阿勒玛", 10),
	Array("调和精灵", "调和精灵", 5),
	Array("斯乌", "Siwu", 2),
	Array("困难斯乌", "Siwu_Chaos", 1),
	Array("桃乐丝", "taoalesi", 1),
	Array("乌鲁斯", "UrusBOSS", 2),
	Array("戴米安", "Demian", 2),
	Array("普通路西德", "Lucid", 3),
	Array("困难路西德", "Lucid_Hard", 1),
	Array("敦凯尔", "Dunkel", 2),
	Array("威尔", "Will", 2),
	Array("至暗魔晶", "Dusk", 2),
	Array("普通觉醒西拉", "JinHillah", 1),
	Array("困难觉醒西拉", "JinHillah_Hard", 1),
	Array("黑魔法师", "BlackMage", 1)
	*/

);

var selStr = z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z;
selStr += "\r\n- #e#r随身npc#k#n\r\n";
selStr += "#d欢迎使用随身特权,本次给您带来快捷服务：#k\r\n";
selStr += "#r#L0#" + z + "每日福利#l  #l #L1#" + z + "领取勋章#l  #L2#" + z + " 会员特权#l\r\n\r\n";

selStr += "#L3#" + z + "副本重置#l  #b#L5#" + z + " 洗血洗蓝#l  #L10#" + z + " 神秘商店#l\r\n\r\n";

selStr += "#L7#" + z + "三倍双爆#l  #L8#" + z + " 每日返点#l  #L9#" + z + " 每日BOSS币#l\r\n\r\n";
selStr += "#L888#" + z + "勋章外形更换#l  #L99#" + z + " 年会员延期#l\r\n\r\n";
//selStr += "#L100#" + z + " 余额商店#l\r\n\r\n";
selStr += z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z;
let selection = npc.askMenuS(selStr);
if(selection == 0) {
	if(player.getPQLog("每日福利") < 1) { //工资
		//给东西
		player.gainMesos(10000000);
		player.gainItem(4001715,2);
		player.modifyCashShopCurrency(1, 10000);
		var item = player.gainGachaponItem("会员每日福利", 2614002, 1, 3); //百万突破
		var item = player.gainGachaponItem("会员每日福利", 5062024, 5, 3); //六角
		var item = player.gainGachaponItem("会员每日福利", 5062009, 30, 3); //超级魔方
		var item = player.gainGachaponItem("会员每日福利", 5062500, 30, 3); //大师魔方
		var item = player.gainGachaponItem("会员每日福利", 2340000, 10, 3); //祝福卷轴
		var item = player.gainGachaponItem("会员每日福利", 2430683, 1, 3); //情人节卷轴箱子
		var item = player.gainGachaponItem("会员每日福利", 4032226, 20, 3); //情人节卷轴箱子
		var item = player.gainGachaponItem("会员每日福利", 2022530, 1, 1); //情人节卷轴箱子
		
		player.addPQLog("每日福利", 1, 1);
		npc.say("恭喜您领取理财服务的每日福利~~");

	} else {
		npc.say("失败：\r\n\r\n#r1). 您已经领取过，请明日再领。");

	}
} else if(selection == 2) {

	player.runScript("会员特权");

	//im.openNpc(9310362, "zxfx");
} else if(selection == 7) {
	if(player.getPQLog("三倍") < 2) { //三倍
		var toDrop = player.makeItemWithId(5211060); // 生成一个Equip类
		var expirationDate = java.lang.System.currentTimeMillis() + 60 * 60 * 24 *1000;
		toDrop.setExpiration(expirationDate);
		player.gainItem(toDrop);
		
		var toDrop = player.makeItemWithId(5360015); // 生成一个Equip类
		var expirationDate = java.lang.System.currentTimeMillis() + 60 * 60 * 24 *1000;
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
	
		
		if(player.getPQLog("年会员") > 0) {
			if(player.getAmountOfItem(1142803) <1) {	
				//生成物品
				var toDrop = player.makeItemWithId(1142803); // 生成一个Equip类
				toDrop.setStr(300); //装备力量
				toDrop.setDex(300); //装备敏捷
				toDrop.setInt(300); //装备智力
				toDrop.setLuk(300); //装备运气
				toDrop.setPad(300); //物理攻击
				toDrop.setMad(300); //魔法攻击
				toDrop.setMaxHp(5000); //血量
				toDrop.setBossDamageR(30);
				toDrop.setIgnorePDR(30);
				toDrop.setTitle("永久会员土豪专属");
				player.gainItem(toDrop);
				player.addPQLog("年会员装备");
				npc.broadcastGachaponMsgEx("    【会员中心】 :  玩家 " + player.getName() + "得到了会员专属勋章大家一起恭喜我吧!", toDrop);

			} else {
				npc.say("你身上已经有会员勋章了哦");
			}

			

		} else if(player.getPQLog("月会员") > 0) {
			if(player.getAmountOfItem(1142742) <1) {
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
			}else{
				npc.say("你身上已经有会员勋章了哦");
			}
			
			
		}else{
			npc.say("只有会员可以领取哦");
		}
	
} else if(selection == 5) {
	player.runScript("hyxx");
} else if(selection == 10) {
	if(player.getPQLog("年会员")>0){
		player.runScript( "yelb");
	}else{
		npc.say("只有永久会员才可以开启哦~");
	}
	
} else if(selection == 3) {
	player.runScript("boss重置");
}else if(selection==888){
	   var waixing=Array(
		   1142840,
		   1143052,
		   1143136,
		   1143000,
		   1142922,
		   1142676,
		   1142677,
		   1142678,
		   1142679,
		   1142680,
			1142803,
			1143012,
			1142871,
			1142111,
			1142802,
			1142891,
			1142796,
			1142178,
			1142499,
			1142742,
			1142741,
			1142802,
			1143175,
			1142669,
			1142655,
			1143043,

			1143085,

			1143077,

			1143112,

			1143026


			
	   );
	   var txt="\r\n请选择想要更换的勋章的外形:\r\n"
	   for(var i=0;i<waixing.length;i++){
	   var itemid=waixing[i];
			txt+="#L"+itemid+"##z"+itemid+"#"+"#v"+itemid+"#\r\n";
	   }
		let selection=npc.askMenuS(txt);
		let item = player.getInventorySlot(1,1);
		if(item==null){
			npc.say("请在第一个格子放上年会员勋章~");
		}else{
			if(item.getTitle()=="永久会员土豪专属" || item.getTitle()=="年费会员土豪专属" ){
				let sel = npc.askYesNo("是否确定更换成为#v"+selection+"#");
				if(sel==1){
					item.setItemId(selection);
					if(item.getBossDamageR()<30){
						
						item.setBossDamageR(30);
					}
					if(item.getIgnorePDR()<30){
						
						item.setIgnorePDR(30);
					}
					player.updateItem(1,item);
					npc.say("更换成功");
				}
			}else{
				npc.say("只有永久会员勋章可以更换造型哦");
			}
		}
}else if(selection == 99) {
	var txt="#r#e请把会员箱子放在消耗栏的第一个格子，系统将会自动给你续上会员限期\r\n";
		txt+="#L0#我要延期会员#l";
		let ss=npc.askMenu(txt);
		if(ss==0){
			var item =player.getInventorySlot(2,1);
			if(item==null ){
				npc.say("请把会员箱子放在第一个格子");
			}else{
				if(item.getDataId()==2436363){
					if(item.getExpiration()==3439728000000 || item.getExpiration()==-1){
						if( player.getPQLog("年会员")<1){
							player.addPQLog("年会员",1,999);
							npc.say("延期成功");
						}else{
							npc.say("你好像不需要延期");
						}
					} else{
						npc.say("你的会员箱子不是永久的哦 时效："+item.getExpiration());
					}
					
				}else{
					npc.say("请放上#v2436363#");
				}
			}
		}
	
}

function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	player.customSqlUpdate(sql, price, player.getAccountId());

}