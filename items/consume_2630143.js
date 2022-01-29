
var itemList = Array(
1222111,
1232111,
1242118,
1282020,
1252097,
1262037,
1302336,
1312201,
1212117,
1322253,
1332277,
1342103,
1362137,
1372225,
1382263,
1402253,
1412180,
1292015,
1422187,
1432216,
1442270,
1452255,
1462241,
1472263,
1482218,
1492233,
1522140,
1532146,
1542116,
1552118,
1582028,
1592012,
1272011



);

	var text = "";
	for(var i=0; i<itemList.length; i++) {
		text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
	}
	let selection =npc.askMenuS("可以获取全属性50的外星人武器~\r\n请选择你要的：\r\n#r"+text);
	
	var itemid = itemList[selection];
	var itemnum = Math.floor(Math.random()*1);
	var toDrop = player.makeItemWithId(itemid);
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp + 7*24 * 60 * 60 * 1000;
	toDrop.setExpiration(expirationDate);
	toDrop.setStr(50); //装备力量
	toDrop.setDex(50); //装备敏捷
	toDrop.setInt(50); //装备智力
	toDrop.setLuk(50); //装备运气
	toDrop.setMad(280); //魔法攻击
	toDrop.setPad(280); //物理攻击
	toDrop.setJump(80); //跳跃力
	toDrop.setSpeed(20); //移动速度
	toDrop.setMaxHp(500); //血
	toDrop.setMaxMp(500); //蓝
	toDrop.setCHUC(20);
	toDrop.setLimitBreak(50000000);//破功值
	player.gainItem(toDrop);
	npc.broadcastGachaponMsgEx("【武器租赁】:玩家"+player.getName()+"在武器租赁中得到了全属性极品武器", toDrop);
	player.loseItem(npc.getItemId(),1);
	npc.say("获取成功");

	
	
	
	
		
