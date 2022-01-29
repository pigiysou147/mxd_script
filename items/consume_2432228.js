status = -1;
var itemList = Array(
	//物品ID    获得概率数字越大概率越大
	Array(1112144, 500, 1, 3), //祥龙单手武器攻击卷99% 
	Array(1112101, 500, 1, 3), //祥龙单手武器魔力卷99% 
	Array(1112103, 500, 1, 3),
	Array(1112110, 500, 1, 3),
	Array(1112118, 500, 1, 3),
	Array(1112135, 500, 1, 3),
	Array(1112136, 500, 1, 3),
	Array(1112141, 500, 1, 3),
	Array(1112142, 500, 1, 3),
	Array(1112145, 500, 1, 3),
	Array(1112146, 500, 1, 3),
	Array(1112148, 500, 1, 3),//祥龙双手武器攻击卷99%
	Array(1112149, 500, 1, 3),
	Array(1112150, 500, 1, 3),
	Array(1112154, 500, 1, 3),
	Array(1112151, 500, 1, 3),
	Array(1112152, 500, 1, 3),
	Array(1112153, 500, 1, 3),
	Array(1112157, 500, 1, 3),
	Array(1112156, 500, 1, 3),
	Array(1112158, 500, 1, 3),
	Array(1112159, 500, 1, 3),
	Array(1112160, 500, 1, 3),
	Array(1112161, 500, 1, 3),
	Array(1112170, 500, 1, 3),
	Array(1112162, 500, 1, 3),
	Array(1112163, 500, 1, 3),
	Array(1112164, 500, 1, 3),
	Array(1112165, 500, 1, 3),
	Array(1112166, 500, 1, 3),
	Array(1112171, 500, 1, 3),
	Array(1112172, 500, 1, 3),
	Array(1112173, 500, 1, 3),
	Array(1112176, 500, 1, 3),
	Array(1112178, 500, 1, 3),
	Array(1112179, 500, 1, 3),
	Array(1112178, 500, 1, 3),
	Array(1112181, 500, 1, 3)
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
	var item = player.gainGachaponItem("戒指箱子",itemId, 1,  1);
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