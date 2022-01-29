var itemList = Array(
	2612078,
	2612079,
	2613066,
	2613067,
	2615049,
	2615050,
	2616214,
	2616215,
	2048823,
	2048824

);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的卷轴\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.gainGachaponItem("究极黑暗卷轴自选", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}