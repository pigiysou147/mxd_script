var itemList = Array(
	1214016,
	1482168,
	1232117,
	1472269,
	1212124,
	1302275,
	1462247,
	1382269,
	1552063,
	1403036,//法弗纳拳炮
	1212063,
	1532098,
	1302347,
	1522094,
	1252100,
	1372177,
	1332225,
	1422192,
	1432167,
	1412184,
	1272015,
	1342082,
	1542063,
	1372232,
	1332283,
	1422140,
	1492239,
	1582016,
	1412135,
	1252015,
	1213039,
	1213016,
	1213040,
	1482225,
	1462193,
	1242127,
	1222117,
	1232057,
	1402196,
	1342107,
	1242060,
	1262043,
	1532152,
	1312153,
	1442280,
	1452205,
	1312207,
	1242061,
	1362090,
	1322203,
	1582033,
	1522147,
	1542120,
	1262016,
	1362144,
	1282015,
	1552122,
	1432222,
	1472214,
	1322259,
	1442223,
	1382208,
	1452261,
	1402263,
	1492179,
	1222058
);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的道具\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.gainGachaponItem("150FFN武器自选箱子", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}