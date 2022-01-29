status = -1;
var itemList = Array(
	//物品ID    获得概率数字越大概率越大
	
Array(2049122, 500), //火花
//Array(2430515, 500), //X抽奖
Array(4031997, 500), //X抽奖
Array(1113072, 500), //X抽奖
Array(1202139, 500), //X抽奖
Array(2614020, 500), //X抽奖
Array(2049300, 500), //X抽奖
Array(4031997, 500), //X抽奖
Array(5062500, 500), //红包500~3000W
Array(5062009, 500), //班·雷昂变身药水
Array(2430692, 500), //阿卡伊勒变身药水
Array(2003571, 500)  //迎春花花语
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
	var item = player.gainGachaponItem("祖母绿抽奖礼包",itemId, 1,  1);
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