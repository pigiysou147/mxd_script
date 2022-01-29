status = -1;
var itemList = Array(
	// ------ 暴君随机 ------
	Array(1102481, 500, 1, 3),
	Array(1102485, 500, 1, 3),
	Array(1102484, 500, 1, 3),
	Array(1102483, 500, 1, 3),
	Array(1102482, 500, 1, 3),
	Array(1132174, 500, 1, 3),
	Array(1132175, 500, 1, 3),
	Array(1132176, 500, 1, 3),
	Array(1132177, 500, 1, 3),
	Array(1132178, 500, 1, 3),
	Array(1082544, 500, 1, 3),
	Array(1082545, 500, 1, 3),
	Array(1082546, 500, 1, 3),
	Array(1082547, 500, 1, 3),
	Array(1082543, 500, 1, 3),
	Array(1072744, 500, 1, 3),
	Array(1072743, 500, 1, 3),
	Array(1072746, 500, 1, 3),
	Array(1072745, 500, 1, 3),
	Array(1072747, 500, 1, 3)
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
	var item = player.gainGachaponItem("暴君随机箱子",itemId, 1,  1);
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