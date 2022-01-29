
var itemList = Array(
1132169,
1102476,
1072737,
1132170,
1102477,
1072738,
1132171,
1102478,
1072739,
1132172,
1102479,
1072740,
1132173,
1102480,
1072741

);

	var text = "";
	for(var i=0; i<itemList.length; i++) {
		text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
	}
	let selection =npc.askMenuS("\r\n#r#e可以获取全属性138，攻击力68的小暴君3天~\r\n请选择你要的：\r\n#r"+text);
	
	var itemid = itemList[selection];
	var itemnum = Math.floor(Math.random()*1);
	var toDrop = player.makeItemWithId(itemid);
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp + 3*24 * 60 * 60 * 1000;
	toDrop.setExpiration(expirationDate);
	toDrop.setStr(138); //装备力量
	toDrop.setDex(138); //装备敏捷
	toDrop.setInt(138); //装备智力
	toDrop.setLuk(138); //装备运气
	toDrop.setMad(68); //魔法攻击
	toDrop.setPad(68); //物理攻击
	toDrop.setCHUC(15);
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

	
	
	
	
		
