
var itemid=1202260;

var toDrop = player.makeItemWithId(itemid); // 生成一个Equip类 luxide 1033000
	toDrop.setStr(toDrop.getStr()+100); //装备力量
	toDrop.setDex(toDrop.getDex()+100); //装备敏捷
	toDrop.setInt(toDrop.getInt()+100); //装备智力
	toDrop.setLuk(toDrop.getLuk()+100); //装备运气
	toDrop.setPad(toDrop.getPad()+30); //物理攻击
	toDrop.setMad(toDrop.getMad()+30); //魔法攻击
	player.gainItem(toDrop);
	
    itemid=1202261;

    toDrop = player.makeItemWithId(itemid); // 生成一个Equip类 luxide 1033000
	toDrop.setStr(toDrop.getStr()+100); //装备力量
	toDrop.setDex(toDrop.getDex()+100); //装备敏捷
	toDrop.setInt(toDrop.getInt()+100); //装备智力
	toDrop.setLuk(toDrop.getLuk()+100); //装备运气
	toDrop.setPad(toDrop.getPad()+30); //物理攻击
	toDrop.setMad(toDrop.getMad()+30); //魔法攻击
	player.gainItem(toDrop);	
	
	itemid=1202262;

    toDrop = player.makeItemWithId(itemid); // 生成一个Equip类 luxide 1033000
	toDrop.setStr(toDrop.getStr()+100); //装备力量
	toDrop.setDex(toDrop.getDex()+100); //装备敏捷
	toDrop.setInt(toDrop.getInt()+100); //装备智力
	toDrop.setLuk(toDrop.getLuk()+100); //装备运气
	toDrop.setPad(toDrop.getPad()+30); //物理攻击
	toDrop.setMad(toDrop.getMad()+30); //魔法攻击
	player.gainItem(toDrop);	
	
	
	
	
	
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");