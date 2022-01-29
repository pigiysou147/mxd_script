status = -1;
var itemList = Array(
	// ------ 随机FFN防具 ------
	Array(1003797, 500, 1, 3),
	Array(1003798, 500, 1, 3),
	Array(1003799, 500, 1, 3),
	Array(1003800, 500, 1, 3),
	Array(1003801, 500, 1, 3),
	Array(1042254, 500, 1, 3),
	Array(1042255, 500, 1, 3),
	Array(1042256, 500, 1, 3),
	Array(1042257, 500, 1, 3),
	Array(1042258, 500, 1, 3),
	Array(1062165, 500, 1, 3),
	Array(1062166, 500, 1, 3),
	Array(1062167, 500, 1, 3),
	Array(1062168, 500, 1, 3),
	Array(1062169, 500, 1, 3)
);

var chance = Math.floor(Math.random() * 600);
var finalitem = Array();
for(var i = 0; i < itemList.length; i++) {
	if(itemList[i][1] >= chance) {
		finalitem.push(itemList[i]);
	}
}

if(finalitem.length != 0) {
	var item;
	var random = new java.util.Random();
	var finalchance = random.nextInt(finalitem.length);
	var itemId = finalitem[finalchance][0];
	var item = player.gainGachaponItem("随机FFN防具箱子",itemId, 1,  1);
	if(item != -1) {

		
		player.loseItem(npc.getItemId(), 1);
		npc.say("你获得了 #b#t" + itemId + "##k X 1 。");
	} else {
		npc.say("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
	}
} else {
	npc.say("今天的运气可真差，什么都没有拿到。");
	player.loseItem(npc.getItemId(), 1);
}