status = -1;
var itemList = Array(
        Array(4001326,500, 1, 3),
		Array(4001327,500, 1, 3),
		Array(4001328,500, 1, 3),		
        Array(4001329,500, 1, 3),
        Array(4001330,500, 1, 3),
		Array(4001331,500, 1, 3),
		Array(4001326,500, 1, 3),
		Array(4001327,500, 1, 3),
		Array(4001328,500, 1, 3),		
        Array(4001329,500, 1, 3),
        Array(4001330,500, 1, 3),
		Array(4001331,500, 1, 3),
		Array(4001326,500, 1, 3),
		Array(4001327,500, 1, 3),
		Array(4001328,500, 1, 3),		
        Array(4001329,500, 1, 3),
        Array(4001330,500, 1, 3),
		Array(4001331,500, 1, 3),
        Array(4001332,400, 1, 3)
);

var chance = Math.floor(Math.random() * 500);
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
	var item = player.gainGachaponItem("蜡笔随机",itemId, 1,  1);
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