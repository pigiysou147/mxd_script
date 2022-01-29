/**
 * 武器破功潜能转移-QQ:739977676
 **/
let password = "确定"
let needYE = 10000; //需要的馀额
let itemid = Array(
	1082698,
	1354007,
	1082699,
	1082696,
	1082697,
	1082695,
	1073158,
	1073159,
	1073160,
	1073161,
	1073162,
	1102940,
	1102943,
	1102944,
	1102941,
	1102942,
	1004809,
	1004808,
	1004812,
	1004810,
	1004811,
	1152200,
	1152196,
	1152198,
	1152197,
	1152199,
	1082638,
	1082639,
	1082636,
	1082637,
	1082640,
	1052890,
	1052888,
	1052889,
	1052887,
	1052882,
	1073030,
	1073032,
	1073033,
	1073034,
	1073035,
	1102796,
	1102797,
	1102794,
	1102795,
	1102775,
	1004425,
	1004426,
	1004423,

	1004424,
	1004422,
	1152174,
	1152176,
	1152178,
	1152177,
	1152179,
	1003797,
	1042254,

	1062165,
	1003798,
	1042255,
	1062166,
	1003799,
	1042256,
	1062167,
	1003800,
	1042257,
	1062168,
	1003801,
	1042258,
	1062169,
	1099011,
	1099012,
	1342095,
	1352009,
	1352109,
	1352206,
	1352216,
	1352226,
	1352236,
	1352246,
	1352256,
	1352266,
	1352276,
	1352286,
	1352296,
	1352406,
	1352506,
	1352606,
	1352707,
	1352815,
	1353707,
	1352906,
	1352916,
	1352928,
	1352935,
	1352945,
	1352957,
	1352967,
	1352975,
	1522152,
	1353006,
	1353105,
	1353405,
	1522154,
	1522143,
	1353706,
	1352807,
	1352824,
	1098006);

var Icon = Array(
	Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
	Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
	Array("锤子", "#fUI/Basic.img/Cursor/32/0#"),
	Array("数值", "#fUI/Basic.img/LevelNo/0#"),
	Array("数值", "#fUI/Basic.img/LevelNo/1#"),
	Array("数值", "#fUI/Basic.img/LevelNo/2#"),
	Array("数值", "#fUI/Basic.img/LevelNo/3#"),
	Array("数值", "#fUI/Basic.img/LevelNo/4#"),
	Array("数值", "#fUI/Basic.img/LevelNo/5#"),
	Array("数值", "#fUI/Basic.img/LevelNo/6#"),
	Array("数值", "#fUI/Basic.img/LevelNo/7#"),
	Array("数值", "#fUI/Basic.img/LevelNo/8#"),
	Array("数值", "#fUI/Basic.img/LevelNo/9#"),
	Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
	Array("箭头", "#fUI/Basic.img/icon/arrow#"),
	Array("箭头", "#fUI/UIWindow.img/Quest/icon2/0#"),
	Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
	Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
	Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#")

);

let str = "#b┏　　　　　　　　" + Icon[17][1] + "  #r#e装备属性传承#b#n  " + Icon[17][1] + "　　　　　　　　┓#k\r\n\r\n";
str += Icon[15][1] + " #d第一个栏放入#r剥离道具#d，第二栏放入#b传承道具#k\r\n";
str += Icon[15][1] + " #d传承系统仅对#r神祕系列、航海系列&深渊系列防具#k\r\n";
str += Icon[15][1] + " #d该功能目前限定转移 #r防具#k\r\n";
str += Icon[15][1] + " #d传承结束 转移的装备 #r会被删除 #r会被删除 #r会被删除#k\r\n";
str += Icon[15][1] + " #d道具传承结束 已剥离道具消失 属性(武器包含破功)将传承到新道具中#k\r\n\r\n";
str += Icon[15][1] + " #d#r注意:#b此功能是将#r剥离道具#b的属性「覆盖」到#r传承道具#b上，不是「累积」。#k\r\n\r\n";
str += Icon[15][1] + " #g重点说明#r:您需要 " + needYE + " 余额才可以使用这个功能\r\n"
str += Icon[15][1] + " #r#e您是否需要使用该功能？";

let YN = npc.askYesNo(str);
if(YN == 1) {
	if(getHyPay(1) < needYE) {
		npc.say("余额不足");
	} else {
		//获取装备
		let toDrop1 = player.getInventorySlot(1, 1);
		let toDrop2 = player.getInventorySlot(1, 2);

		if(toDrop1 == null || toDrop2 == null) {
			npc.say("请将需要转换的两把武器放到装备栏#r第一格#k和#r第二格");
		} else if(itemid.indexOf(toDrop1.getDataId()) == -1 || itemid.indexOf(toDrop2.getDataId()) == -1) {
			npc.say("#b您其中一个装备不是#r#eFFN、AS、神秘、创世，#b#n请加以确认再使用本功能");
		} else {
			str = "#b请确定您要更换的装备:\r\n";
			str += "您的第一格装备：#r#v" + toDrop1.getDataId() + "##r#e此为剥离道具，传承成功后删除";
			str += "\r\n#b#n您的第二格装备：#r#v" + toDrop2.getDataId() + "##r#b#e此为传承道具，会继承第一格装备";
			str += "\r\n\r\n#b请输入#r确定#b以确保确认传承？如有失误#r无法补偿。"
			YN = npc.askText(str, "", 0, 999);
			if(YN == password) {
				//更换破功
				toDrop2.setLimitBreak(toDrop1.getLimitBreak()); //破功
				toDrop2.setRUC(toDrop1.getRUC()); //卷轴
				toDrop2.setCUC(toDrop1.getCUC()); //卷轴
				toDrop2.setStr(toDrop1.getStr()); //力量
				toDrop2.setDex(toDrop1.getDex()); //敏捷
				toDrop2.setInt(toDrop1.getInt()); //智力
				toDrop2.setLuk(toDrop1.getLuk()); //幸运				
				toDrop2.setPad(toDrop1.getPad()); //AD
				toDrop2.setMad(toDrop1.getMad()); //AP
				toDrop2.setJump(toDrop1.getJump()); //跳跃力
				toDrop2.setTitle(toDrop1.getTitle()); //抬头
				toDrop2.setCHUC(toDrop1.getCHUC()); //星力

				temp = toDrop1.getGrade(); //浅能等级
				toDrop2.setGrade(temp);

				temp = toDrop1.getOption(1, false);
				toDrop2.setOption(1, temp, false);

				temp = toDrop1.getOption(2, false);
				toDrop2.setOption(2, temp, false);

				temp = toDrop1.getOption(3, false);
				toDrop2.setOption(3, temp, false);

				temp = toDrop1.getOption(1, true);
				toDrop2.setOption(1, temp, true);

				temp = toDrop1.getOption(2, true);
				toDrop2.setOption(2, temp, true);

				temp = toDrop1.getOption(3, true);
				toDrop2.setOption(3, temp, true);

				player.loseInvSlot(1, 1);
				player.updateItem(2, toDrop2);
				addHyPay(needYE)
				npc.say("转换成功");
				npc.broadcastGachaponMsgEx("[属性转移]:恭喜 " + player.getName() + " 使用1000馀额转移了装备的属性", toDrop2);
			} else {
				npc.say("你不确定那我也没办法囉~");
			}
		}
	}

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

function addHyPay(price) {
	var sql = "update hypay set pay=pay-?,payused=payused+" + price + " where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}