

var toDrop = player.makeItemWithId(1012553); // 生成一个Equip类
	toDrop.setStr(700); //装备力量
	toDrop.setDex(700); //装备敏捷
	toDrop.setInt(700); //装备智力
	toDrop.setLuk(700); //装备运气
	toDrop.setPad(700); //物理攻击
	toDrop.setMad(700); //魔法攻击
	toDrop.setTitle("4W专属定制");
	player.gainItem(toDrop);
	player.loseItem(npc.getItemId(),1);
	npc.say("领取成功");

	
