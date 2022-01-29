status = -1;
var itemList = Array(
	Array(1132173, 500),
	Array(1132172, 500),
	Array(1132171, 500),
	Array(1132170, 500),
	Array(1132169, 500),
	Array(1072741, 500),
	Array(1072740, 500),
	Array(1072739, 500),
	Array(1072738, 500),
	Array(1072737, 500),
	Array(1102480, 500),
	Array(1102479, 500),
	Array(1102478, 500),
	Array(1102477, 500)
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
	var item = player.gainGachaponItem("小暴君",itemId, 1,  1);
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