var itemList = Array(
1222111,
1232111,
1242118,
1252097,
1262037,
1302336,
1312201,
1322253,
1332277,
1342103,
1362137,
1372225,
1382263,
1212117,
1402253,
1412180,
1422187,
1432216,
1442270,
1282020,
1452255,
1462241,
1472263,
1482218,
1492233,
1522140,
1532146,
1542116,
1552118,
1582028,
1592012,
1272011
);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的防具\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.gainGachaponItem("寻宝武器箱子", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}