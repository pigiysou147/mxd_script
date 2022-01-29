var itemList = Array(
	1132178, //
	1132177, //	
	1132176, //
	1132175, //
	1132174, //
	1072747, //
	1072746, //
	1072745, //
	1072744, //
	1072743, //
	1082547, //
	1082546, //
	1082545, //
	1082544, //
	1082543, //
	1102485, //
	1102484, //
	1102483, //
	1102482, //
	1102481

);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的暴君\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.gainGachaponItem("暴君自选", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}