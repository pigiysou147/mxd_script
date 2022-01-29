



var itemList=Array(
	1114303,
	1114303
);
	var txt="请选择你需要的创世首饰:\r\n";
	for(var i=0;i<itemList.length;i++){
		txt+="#L"+itemList[i]+"##v"+itemList[i]+"##t"+itemList[i]+"##l\r\n";
	}
	let itemid=npc.askMenuS(txt);
	var toDrop = player.makeItemWithId(itemid); // 生成一个Equip类
	toDrop.setStr(288); //装备力量
	toDrop.setDex(288); //装备敏捷
	toDrop.setInt(288); //装备智力
	toDrop.setLuk(288); //装备运气
	toDrop.setPad(288); //物理攻击
	toDrop.setMad(288); //魔法攻击
	toDrop.setMaxHp(8000);
	toDrop.setMaxMp(8000);
	toDrop.setCHUC(25);
	toDrop.setCUC(17);
	toDrop.setViciousHammer(2);
	toDrop.setRUC(0);
	toDrop.setGrade(0x14);
	toDrop.setOption(1, 40056, false);
	toDrop.setOption(2, 40056, false);
	toDrop.setOption(3, 40056, false);
	toDrop.setOption(1, 40056, true);
	toDrop.setOption(2, 40056, true);
	toDrop.setOption(3, 40056, true);

	player.gainItem(toDrop);
	player.loseItem(npc.getItemId(),1);
