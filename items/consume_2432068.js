var itemList = Array(
	1212079,
	1222074,
	1232074,
	1242080,
	1252046,
	1302289,
	1312165,
	1322215,
	1332238,
	1362101,
	1372188,
	1382101,
	1382222,
	1432178,
	1442234,
	1472226,
	1482179,
	1492080,
	1492190,
	1522105,
	1532109,
	1542074,
	1552074

);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的道具\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.gainGachaponItem("革命武器", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}