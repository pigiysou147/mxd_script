



var itemList=Array(
	1802653,
	
	1802653
);
	var txt="请选择你需要的宠物装备:\r\n";
	for(var i=0;i<itemList.length;i++){
		txt+="#L"+itemList[i]+"##v"+itemList[i]+"##t"+itemList[i]+"##l\r\n";
	}
	
	let itemid=npc.askMenuS(txt);
	
	let selection =npc.askMenuS("\r\n\r\n 请选择是需要潜能的类别\r\n\r\n#L0#所有属性#l  \r\n\r\n  #L1#攻击力#l ");
	
	var toDrop = player.makeItemWithId(itemid); // 生成一个Equip类
	var count =toDrop.getRUC();
	
	toDrop.setStr(toDrop.getStr()+count*8); //装备力量
	toDrop.setDex(toDrop.getDex()+count*8); //装备敏捷
	toDrop.setInt(toDrop.getInt()+count*8); //装备智力
	toDrop.setLuk(toDrop.getLuk()+count*8); //装备运气
	toDrop.setPad(toDrop.getPad()+count*8); //物理攻击
	toDrop.setMad(toDrop.getMad()+count*8); //魔法攻击
	toDrop.setRUC(0);
	toDrop.setCUC(count);
	
	toDrop.setGrade(20);
	if(selection==0){
		toDrop.setOption(1, 60002, false);
		toDrop.setOption(2, 60002, false);
		toDrop.setOption(3, 60002, false);
		toDrop.setOption(1, 60002, true);
		toDrop.setOption(2, 60002, true);
		toDrop.setOption(3, 60002, true);
	}else if(selection==1){
		toDrop.setOption(1, 40051, false);
		toDrop.setOption(2, 40051, false);
		toDrop.setOption(3, 40051, false);
		toDrop.setOption(1, 40051, true);
		toDrop.setOption(2, 40051, true);
		toDrop.setOption(3, 40051, true);
	}
	
	
	player.gainItem(toDrop);
	player.loseItem(npc.getItemId(),1);
