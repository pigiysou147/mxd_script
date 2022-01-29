
var itemList = Array(
1122440,
1032318,
1113307

);

	var text = "";
	for(var i=0; i<itemList.length; i++) {
		text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
	}
	let selection =npc.askMenuS("\r\n#r#e可以获取全属性128，攻击力128的高级贝勒德3天~\r\n请选择你要的：\r\n#r"+text);
	
	var itemid = itemList[selection];
	var itemnum = Math.floor(Math.random()*1);
	var toDrop = player.makeItemWithId(itemid);
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp + 3*24 * 60 * 60 * 1000;
	toDrop.setExpiration(expirationDate);
	toDrop.setStr(128); //装备力量
	toDrop.setDex(128); //装备敏捷
	toDrop.setInt(128); //装备智力
	toDrop.setLuk(128); //装备运气
	toDrop.setMad(128); //魔法攻击
	toDrop.setPad(128); //物理攻击
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

	
	
	
	
		
