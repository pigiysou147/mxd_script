var itemList = Array(
	1122430,
	1012632,
	1022278,
	1032316,
	1113306,
	1132308
);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的武器\r\n\r\n" + text);

var itemid = itemList[selection];

var item = player.gainGachaponItem("【创世首饰自选】", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}