var itemList = Array(
	1712001,
	1712002,
	1712003,
	1712004,
	1712005,
	1712006
);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的道具\r\n\r\n" + text);

var itemid = itemList[selection];

var txt="#L1#力量#l\r\n";
txt+="#L2#敏捷#l\r\n";
txt+="#L3#智力#l\r\n";
txt+="#L4#运气#l\r\n";
let choose = npc.askMenuS("请选择需要的属性\r\n"+txt);
var equip = player.getInventorySlot(1,1); // 生成一个Equip类
if(equip!=null){
	npc.say("请把第一个格子空出来~~");
}else{
	player.gainItem(itemid,1);
	var toDrop = player.getInventorySlot(1,1); // 生成一个Equip类
	toDrop.setArcLevel(18);
	toDrop.setArc(1000);
	if(choose==1){
		toDrop.setStr(2000);
	}else if(choose==2){
		toDrop.setDex(2000);
	}else if(choose==3){
		toDrop.setInt(2000);
	}else if(choose==4){
		toDrop.setLuk(2000);
	}
	//toDrop.setArcExp(2600);
	player.updateItem(1,toDrop);
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
}

