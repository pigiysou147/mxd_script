var itemList = Array(
	
	//物品代码 物品数量

	Array(2048723,5)
	

);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#v" + itemList[i][0] + "##z" + itemList[i][0] + "# X "+itemList[i][1]+"\r\n";
}
let selection = npc.askYesNo("打开此箱子你可以获得的道具如下~\r\n\r\n" + text);
if(selection == 1) {
	var flag = 1;
	for(var i = 1; i < 5; i++) {
		if(player.getFreeSlots(i)<itemList.length) {
			flag = 0
		}
	}
	if(flag == 0) {
		npc.say("请清理背包~~");
	} else {
		var txt ="";
		for(var i = 0; i < itemList.length; i++) {
			player.gainItem(itemList[i][0], itemList[i][1]);
		}

		player.loseItem(npc.getItemId(), 1);
		
		npc.say("恭喜您，获得了\r\n"+text);
	}

}