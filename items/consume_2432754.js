



var itemList=Array(
1113075,
	1132246,
	1122267,
	1032223,
	1072743,
	1072744,
	1072745,
	1072746,
	1072747,
	1102481,
	1102482,
	1102483,
	1102484,
	1102485,
	1082543,
	1082544,
	1082545,
	1082546,
	1082547,
	1132174,
	1132175,
	1132176,
	1132177,
	1132178
);
	var txt="请选择你需要的暴君:\r\n";
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
	if(toDrop.getRUC()<3){
		toDrop.setRUC(0);
	}else{
		toDrop.setRUC(toDrop.getRUC()-3);
	}
	toDrop.setCUC(3);
	player.gainItem(toDrop);
	player.loseItem(npc.getItemId(),1);
