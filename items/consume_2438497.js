



var itemList=Array(
	1122430,
	1012632,
	1022278,
	1032316,
	1113306,
	1132308
);
	var txt="请选择你需要的创世首饰:\r\n";
	for(var i=0;i<itemList.length;i++){
		txt+="#L"+itemList[i]+"##v"+itemList[i]+"##t"+itemList[i]+"##l\r\n";
	}
	let itemid=npc.askMenuS(txt);
	var toDrop = player.makeItemWithId(itemid); // 生成一个Equip类
	toDrop.setStr(toDrop.getStr()+30); //装备力量
	toDrop.setDex(toDrop.getDex()+30); //装备敏捷
	toDrop.setInt(toDrop.getInt()+30); //装备智力
	toDrop.setLuk(toDrop.getLuk()+30); //装备运气
	toDrop.setPad(toDrop.getPad()+30); //物理攻击
	toDrop.setMad(toDrop.getMad()+30); //魔法攻击
	if(toDrop.getRUC()-3<0){
		
		toDrop.setRUC(0);
	}else{
		
		toDrop.setRUC(toDrop.getRUC()-3);
	}
	toDrop.setCUC(3);
	player.gainItem(toDrop);
	player.loseItem(npc.getItemId(),1);
