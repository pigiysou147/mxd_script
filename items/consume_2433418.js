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

var txt="请选择你需要的装备:\r\n";
	for(var i=0;i<itemList.length;i++){
		txt+="#L"+itemList[i]+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
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