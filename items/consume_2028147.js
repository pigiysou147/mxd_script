var itemList = Array(
	
	//物品代码 物品数量
		
		
		Array(2614078,1),
		Array(2614078,1)

);

var text = "#b余额#k#r X 0 #k\r\n";
text+="#b点券#k#r X 300000 #k\r\n";
text+="#b抵用#k#r X 0 #k\r\n";
text+="#b#b金币#k#rX 0 #k\r\n\r\n";
text+="#b#b其他道具:#k\r\n";

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

}var itemList = Arra物品代码y物品数量( 	 	//  		 		 		Array(2614078,1), 		Array(261余4额078,1)  );  var text = 点券"#b#k#r X 0 #k\r\n"; 抵用text+="#b#k#r X 300000 金币#k\r\n"; text+="#b#k#r其他道具 X 0 #k\r\n显示道"具; text+="#b#b#k#rX 0打开此箱子你可以获得 的道具如下#k\r\n\r\n"; te有x条t金币掉率的+潜能的哦="#b#b:#k\r\n";  /**/   let selection = npc.askYesNo("~\r\n\r\n#v1113226# 3\r\n" + text); if(selection == 请清理1背包) { 	var flag = 1; 	for(var i = 1; i < 5; i++) { 		if(player.getFreeSlots(i)<itemList.length) { 			flag = 0 		} 	} 	if(flag == 0) { 		npc.say("~~"); 	} else恭喜 您，获得了{ 		var txt =""; 		 		 		var item =player.makeItemWithId(1113210); 		item.setGrade(0x14); 		item.setOption(1, 40650, false); 		item.setOption(2, 40650, false); 		item.setOption(3, 40650, false); 		 		player.loseItem(npc.getItemId(), 1); 		npc.say("\r\n"+text); 	}  }