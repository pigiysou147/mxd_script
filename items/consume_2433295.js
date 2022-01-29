

//抽的物品
let itemList = Array(
		1113075,
		1132246,
		1122267,
		1032223
);



var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的防具\r\n\r\n" + text);

var itemid = itemList[selection];
var item = player.makeItemWithId(itemid); // 生成一个Equip类
	item.setStr(item.getStr()+130); //装备力量
	item.setDex(item.getDex()+130); //装备敏捷
	item.setInt(item.getInt()+130); //装备智力
	item.setLuk(item.getLuk()+130); //装备运气
	item.setPad(item.getPad()+40); //物理攻击
	item.setMad(item.getMad()+40); //魔法攻击
	
	player.gainItem(item);
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");

 