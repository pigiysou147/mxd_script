var itemList = Array(
	1412139,
	1532101,
	1472217,
	1362093,
	1542069,
	1242067,
	1302278,
	1432170,
	1492183,
	1522098,
	1282001,
	1272001,
	1372181,
	1212067,
	1222066,
	1442227,
	1462197,
	1232061,
	1382213,
	1332228,
	1322206,
	1482172,
	1402202,
	1452208,
	1312157

);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的道具\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.gainGachaponItem("新手10周年武器箱", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}