var itemList = Array(
	
	//物品代码 物品数量
		
		
		Array(2614078,1),
		Array(2614078,1)

);

var text = "#b余额#k#r X 0 #k\r\n";


/*显示道具*/


let selection = npc.askYesNo("打开此箱子你可以获得的道具如下~\r\n\r\n#v1113226# 有3条金币掉率的潜能的哦\r\n" + text);
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
		
		
		var item =player.makeItemWithId(1113210);
		item.setGrade(0x14);
		item.setOption(1, 40650, false);
		item.setOption(2, 40650, false);
		item.setOption(3, 40650, false);
		player.gainItem(item);
		
		player.loseItem(npc.getItemId(), 1);
		npc.say("恭喜您，获得了\r\n"+text);
	}

}