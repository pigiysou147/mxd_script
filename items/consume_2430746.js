status = -1;
var itemList = Array(
// ------ 周年宝物箱 ------
    Array(2046110,600, 1, 3),
	Array(2046111,600, 1, 3),
	Array(2046108,600, 1, 3),
	Array(2046109,600, 1, 3),
	Array(2046008,600, 1, 3),
	Array(2046009,600, 1, 3),
	Array(2046010,600, 1, 3),
	Array(2046011,600, 1, 3)
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
	var item = player.gainGachaponItem("周年卷轴箱",itemId, 1,  1);
	if(item != -1) {

		
		
		player.loseItem(npc.getItemId(), 1);
	} else {
		npc.say("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
	}
} else {
	npc.say("今天的运气可真差，什么都没有拿到。");
	player.loseItem(npc.getItemId(), 1);
}