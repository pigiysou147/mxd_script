
var itemList = Array(
1005200,//	高贵流浪者帽	
1005199,//	高贵刺客软帽	
1005198,//	高贵游侠贝雷帽	
1005197,//	高贵流丹维奇帽	
1005196,//	高贵战士头盔
1042391,//	鹰眼流浪者外衣	
1042390,//	鹰眼刺客衬衣	
1042389,//	鹰眼游侠斗篷	
1042388,//	鹰眼丹维奇长袍	
1042387,//	鹰眼战士盔甲
1062257,//	魔术师流浪者短裤	
1062256,//	魔术师刺客短裤	
1062255,//	魔术师游侠短裤	
1062254,//	魔术师丹维奇短裤	
1062253//	魔术师战士短裤

);

	var text = "";
	for(var i=0; i<itemList.length; i++) {
		text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
	}
	let selection =npc.askMenuS("\r\n#r#e可以获取全属性188，攻击力298的FFN防具30天~\r\n请选择你要的：\r\n#r"+text);
	
	var itemid = itemList[selection];
	var itemnum = Math.floor(Math.random()*1);
	var toDrop = player.makeItemWithId(itemid);
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp + 30*24 * 60 * 60 * 1000;
	toDrop.setExpiration(expirationDate);
	toDrop.setStr(188); //装备力量
	toDrop.setDex(188); //装备敏捷
	toDrop.setInt(188); //装备智力
	toDrop.setLuk(188); //装备运气
	toDrop.setMad(298); //魔法攻击
	toDrop.setPad(298); //物理攻击
	toDrop.setCHUC(25);
	toDrop.setCUC(10);
	toDrop.setCuttable(5);
	toDrop.setDurability(-1);
	toDrop.setRUC(0);
	toDrop.setGrade(0x14);
	toDrop.setOption(1, 60005, false);
	toDrop.setOption(2, 60005, false);
	toDrop.setOption(3, 60005, false);
	toDrop.setOption(1, 60038, true);
	toDrop.setOption(2, 60038, true);
	toDrop.setOption(3, 60038, true);
	toDrop.setTitle("拉满游戏体验");
	player.gainItem(toDrop);
	npc.broadcastGachaponMsgEx("【武器租赁】:玩家"+player.getName()+"在武器租赁中得到了全属性极品武器", toDrop);
	player.loseItem(npc.getItemId(),1);
	npc.say("获取成功");

	
	
	
	
		
