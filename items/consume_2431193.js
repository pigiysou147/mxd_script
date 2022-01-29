

var toDrop = player.makeItemWithId(1032024); // 生成一个Equip类 路西的耳环 1033000
	toDrop.setStr(888); //装备力量
	toDrop.setDex(888); //装备敏捷
	toDrop.setInt(888); //装备智力
	toDrop.setLuk(888); //装备运气
	toDrop.setPad(888); //物理攻击
	toDrop.setMad(888); //魔法攻击
	toDrop.setBossDamageR(88);
	toDrop.setTitle("5W专属定制");
	player.gainItem(toDrop);
	player.loseItem(npc.getItemId(),1);
	npc.say("领取成功");

	
