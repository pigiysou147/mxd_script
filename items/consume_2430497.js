
var itemList = Array(
1442276,//埃苏莱布斯巨灵开山斧
1312204,//埃苏莱布斯战斧
1582027,//埃苏莱布斯拳炮
1452258,//埃苏莱布斯弓
1322256,//埃苏莱布斯战锤
1592028,//埃苏莱布斯远古弓
1462244,//埃苏莱布斯弩
1332280,//埃苏莱布斯屠龙斩
1472266,//埃苏莱布斯复仇斗拳
1342105,//埃苏莱布斯之刃
1212121,//埃苏莱布斯双头杖
1213028,//埃苏莱布斯调谐器
1482222,//埃苏莱布斯拳甲
1222114,//埃苏莱布斯灵魂手铳
1492236,//埃苏莱布斯枪
1362141,//埃苏莱布斯折叠手杖
1232114,//埃苏莱布斯亡命剑
1372229,//埃苏莱布斯短杖
1242123,//埃苏莱布斯能量剑
1242124,//埃苏莱布斯能量剑
1382266,//埃苏莱布斯长杖
1252104,//埃苏莱布斯魔法棒
1522144,//埃苏莱布斯双弩枪
1262040,//埃苏莱布斯ESP限制器
1532148,//埃苏莱布斯大炮
1402260,//埃苏莱布斯宽大刀
1272021,//埃苏莱布斯锁链
1542126,//埃苏莱布斯武士刀
1412182,//埃苏莱布斯大斧
1282022,//埃苏莱布斯魔力手套
1552128,//埃苏莱布斯唤灵扇
1422190,//埃苏莱布斯大锤
1292028,//埃苏莱布斯怪扇
1432219,//埃苏莱布斯穿透矛
1302344//埃苏莱布斯军刀



);

	var text = "";
	for(var i=0; i<itemList.length; i++) {
		text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
	}
	let selection =npc.askMenuS("\r\n#r#e可以获取全属性388，攻击力777的,突破eE武器~\r\n请选择你要的：\r\n#r"+text);
	
	var itemid = itemList[selection];
	var itemnum = Math.floor(Math.random()*1);
	var toDrop = player.makeItemWithId(itemid);
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp + 3*24 * 60 * 60 * 1000;
	toDrop.setExpiration(expirationDate);
	toDrop.setStr(388); //装备力量
	toDrop.setDex(388); //装备敏捷
	toDrop.setInt(388); //装备智力
	toDrop.setLuk(388); //装备运气
	toDrop.setMad(777); //魔法攻击
	toDrop.setPad(777); //物理攻击
	toDrop.setCHUC(25);
	toDrop.setCUC(12);
	toDrop.setCuttable(5);
	toDrop.setDurability(-1);
	toDrop.setRUC(0);
	toDrop.setGrade(0x14); //如果装备没有潜能 必须先设置装备的潜能属性的等级  0x11:B 0x12:A 0x13:S 0x14:SS 
	toDrop.setOption(1, 40601, false);
	toDrop.setOption(2, 40601, false);
	toDrop.setOption(3, 40601, false);
	toDrop.setOption(1, 40601, true);
	toDrop.setOption(2, 40601, true);
	toDrop.setOption(3, 40601, true);
	toDrop.setLimitBreak(300000000);//破功值
	toDrop.setTitle("拉满游戏体验");
	player.gainItem(toDrop);
	npc.broadcastGachaponMsgEx("【武器租赁】:玩家"+player.getName()+"在武器租赁中得到了全属性极品武器", toDrop);
	player.loseItem(npc.getItemId(),1);
	npc.say("获取成功");

	
	
	
	
		
