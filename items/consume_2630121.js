var itemList = Array(
1542063,
1552063,
1212063,
1403036,//法弗纳拳炮
1222058,
1242060,
1242061,
1302275,
1312153,
1412135,
1322203,
1332225,
1232057,
1342082,
1362090,
1382208,
1402196,
1422140,
1432167,
1442223,
1452205,
1462193,
1472214,
1482168,
1492179,
1522094,
1592018,
1532098,
1252015,
1262016
);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的武器\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.gainGachaponItem("FFN武器箱", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}