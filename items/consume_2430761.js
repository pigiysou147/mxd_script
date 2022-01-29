var itemList = Array(
        1213034,1403034,1092113,1212080,1222075,1232075,1242081,1262030,1302290,1312166,1322216,1332239,1362102,1342086,1372189,1382223,1402211,1412148,
1422153,1432179,1442235,1452217,1462205,1472227,1592033,1482180,1492191,1522106,1532110,1252066,1542068,1552068,1582026

);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的道具\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.gainGachaponItem("特米武器箱子", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}