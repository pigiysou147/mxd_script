status = -1;
var itemList = Array(
	//物品ID    获得概率数字越大概率越大
	
Array(2048723, 500), //火花
Array(2048723, 500), //火花
Array(2430683, 500), //X抽奖
Array(2430683, 500), //X抽奖
Array(2430683, 500), //X抽奖
Array(2430683, 500), //X抽奖
Array(2430683, 500), //X抽奖
Array(2430683, 500), //X抽奖
Array(2430683, 500), //X抽奖
Array(2430210, 500), //红包200-1000W
Array(2430210, 500), //红包200-1000W
Array(2430210, 500), //红包200-1000W
Array(2430210, 500), //红包200-1000W
Array(2430210, 500), //红包200-1000W
Array(2430210, 500), //红包200-1000W
Array(2430210, 500), //红包200-1000W
Array(2430210, 500), //红包200-1000W
Array(2430210, 500), //红包200-1000W
Array(2046010, 500), //周年卷
Array(2046011, 500), //周年卷
Array(2046111, 500), //周年卷
Array(2046110, 500), //周年卷
Array(2046010, 500), //周年卷
Array(2046011, 500), //周年卷
Array(2046111, 500), //周年卷
Array(2046110, 500), //周年卷
Array(2046010, 500), //周年卷
Array(2046011, 500), //周年卷
Array(2046111, 500), //周年卷
Array(2046110, 500), //周年卷
Array(2049116, 500), //强混祝福
Array(2049116, 500), //强混祝福
Array(2340000, 500), //强混祝福
Array(2340000, 500), //强混祝福
Array(2049155, 500), //惊人正义
Array(2049155, 500), //惊人正义
Array(2049124, 500), //班·雷昂变身药水
Array(2049124, 500), //班·雷昂变身药水
Array(2022530, 500),  //迎春花花语
Array(2022530, 500), //迎春花花语
Array(2022530, 500), //迎春花花语
Array(2022530, 500),  //迎春花花语
Array(2022530, 500),  //迎春花花语
Array(2022530, 500),  //迎春花花语
Array(2210122, 500), //班·雷昂变身药水
Array(2210122, 500), //班·雷昂变身药水
Array(2210122, 500), //班·雷昂变身药水
Array(2210123, 500), //阿卡伊勒变身药水
Array(2022530, 500)  //迎春花花语
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
	var item = player.gainGachaponItem("寻宝礼物盒",itemId, 1,  1);
	if(item != -1) {

		player.loseItem(npc.getItemId(), 1);
		npc.say("你获得了 #b#t" + itemId + "##k X 1 。");
	} else {
		npc.say("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
	}
} else {
	player.loseItem(npc.getItemId(), 1);
	npc.say("今天的运气可真差，什么都没有拿到。");
}