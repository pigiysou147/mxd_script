status = -1;
var itemList = Array(
	//物品ID    获得概率数字越大概率越大
	
	Array(1072743, 1000),
	Array(1072744, 1000),
	Array(1072745, 1000),
	Array(1072746, 1000),
	Array(1072747, 1000),
	Array(1102481, 1000),
	Array(1102482, 1000),
	Array(1102483, 1000),
	Array(1102484, 1000),
	Array(1102485, 1000),
	Array(1082543, 1000),
	Array(1082544, 1000),
	Array(1082545, 1000),
	Array(1082546, 1000),
	Array(1082547, 1000),
	Array(1132174, 1000),
	Array(1132175, 1000),
	Array(1132176, 1000),
	Array(1132177, 1000),
	Array(1132178, 1000)
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
	var item = player.gainGachaponItem("暴君随机",itemId, 1,  1);
	if(item != -1) {

		player.loseItem(npc.getItemId(), 1);
		npc.say("你获得了 #b#t" + itemId + "##k X 1 。");
	} else {
		im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
	}
} else {
	im.sendOk("今天的运气可真差，什么都没有拿到。");
	player.loseItem(npc.getItemId(), 1);
}