status = -1;
var itemList = Array(
// ------ 150暴君 ------
Array(1132174 , 600, 1, 3), //- 暴君西亚戴斯腰带 - (无描述)
Array(1132175 , 600, 1, 3), //- 暴君赫尔梅斯腰带 - (无描述)
Array(1132176 , 600, 1, 3), //- 暴君凯伦腰带 - (无描述)
Array(1132177 , 600, 1, 3), //- 暴君利卡昂腰带 - (无描述)
Array(1132178 , 600, 1, 3), //- 暴君阿尔泰腰带 - (无描述)
Array(1102481, 600, 1, 3), //- 暴君西亚戴斯披风 - (无描述)
Array(1102482 , 600, 1, 3), //- 暴君赫尔梅斯披风 - (无描述)
Array(1102483 , 600, 1, 3), //- 暴君凯伦披风 - (无描述)
Array(1102484 , 600, 1, 3), //- 暴君利卡昂披风 - (无描述)
Array(1102485 , 600, 1, 3), //- 暴君阿尔泰披风 - (无描述)
Array(1082543 , 600, 1, 3), //- 暴君西亚戴斯手套 - (无描述)
Array(1082544 , 600, 1, 3), //- 暴君赫尔梅斯手套 - (无描述)
Array(1082545 , 600, 1, 3), //- 暴君凯伦手套 - (无描述)
Array(1082546 , 600, 1, 3), //- 暴君利卡昂手套 - (无描述)
Array(1082547 , 600, 1, 3), //- 暴君阿尔泰手套 - (无描述)
Array(1072743 , 600, 1, 3), //- 暴君西亚戴斯靴 - (无描述)
Array(1072744 , 600, 1, 3), //- 暴君赫尔梅斯靴 - (无描述)
Array(1072745 , 600, 1, 3), //- 暴君凯伦靴 - (无描述)
Array(1072746 , 600, 1, 3), //- 暴君利卡昂靴 - (无描述)
Array(1072747 , 600, 1, 3) //- 暴君阿尔泰靴 - (无描述)
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