

var toDrop = player.makeItemWithId(1115021); // 生成一个Equip类 luxide 1033000
	toDrop.setStr(333); //装备力量
	toDrop.setDex(333); //装备敏捷
	toDrop.setInt(333); //装备智力
	toDrop.setLuk(333); //装备运气
	toDrop.setPad(333); //物理攻击
	toDrop.setMad(333); //魔法攻击
	toDrop.setTitle("7W专属定制");
	player.gainItem(toDrop);
	player.loseItem(npc.getItemId(),1);
	npc.say("领取成功");

	
