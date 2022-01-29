var itemList = Array(
	
	Array(1354017, 1),
	Array(1352824, 1),
	Array(1354007, 1),
	Array(1099011, 1),
	Array(1353606, 1),
	Array(1552084, 1),
	Array(1353505, 1),
	Array(1099012, 1),
	Array(1353105, 1),
	Array(1353807, 1),
	Array(1342095, 1),
	Array(1352009, 1),
	Array(1098009, 1),
	Array(1352206, 1),
	Array(1352216, 1),
	Array(1352226, 1),
	Array(1352807, 1),
	Array(1352296, 1),
	Array(1352406, 1),
	Array(1352506, 1),
	Array(1352707, 1),
	Array(1352815, 1),
	Array(1352906, 1),
	Array(1352824, 1),
	Array(1352286, 1),
	Array(1352276, 1),
	Array(1353405, 1),
	Array(1352916, 1),
	Array(1352935, 1),
	Array(1352945, 1),
	Array(1352957, 1),
	Array(1352967, 1),
	Array(1352975, 1),
	Array(1353006, 1),
	Array(1352928, 1),
	Array(1352236, 1),
	Array(1352246, 1),
	Array(1352256, 1),
	Array(1352266, 1),
	Array(1352109, 1),
	Array(1353707, 1),
	Array(1352606, 1),
	Array(1353306, 1)
);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的道具\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection][0];

var item = player.gainGachaponItem("银河副手自选箱", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}