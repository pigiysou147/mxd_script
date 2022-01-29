var itemList = Array(
	
	//物品代码 物品数量
		
		

);

var text = "#b余额#k#r X 0 #k\r\n";
text+="#b点券#k#r X 0 #k\r\n";
text+="#b抵用#k#r X 0 #k\r\n";
text+="#b#b金币#k#rX 0 #k\r\n\r\n";
text+="#b#b其他道具:#k\r\n";

/*显示道具*/
for(var i = 0; i < itemList.length; i++) {
	text += "#v" + itemList[i][0] + "# X #r"+itemList[i][1]+"#k";
}

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
		for(var i = 0; i < itemList.length; i++) {
			player.gainItem(itemList[i][0], 1);
		}
		
		var item =player.makeItemWithId(1113210);
		item.setGrade(0x14);
		item.setOption(1, 40650, false);
		item.setOption(2, 40650, false);
		item.setOption(3, 40650, false);
		
		player.gainItem(item);
		
		
		player.modifyCashShopCurrency(1, 0);
		
		player.loseItem(npc.getItemId(), 1);
		npc.broadcastNotice("【周末福利】:玩家"+player.getName()+" 领取了周末在线整点福利，获得了大量奖励");
		npc.say("恭喜您，获得了\r\n"+text);
	}

}