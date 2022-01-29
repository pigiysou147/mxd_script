

var list =Array(

Array(2450163,2),//3倍经验
Array(2022530,1),//花语
Array(2430683,1),//X抽奖箱子
Array(2614025,1),//100万突破
Array(5062009,30),//超级神奇魔方
Array(5062500,20),//大师附加魔方
Array(5062024,5)//闪炫魔方


);


if(player.getFreeSlots(1) < 5||player.getFreeSlots(2) < 5||player.getFreeSlots(3) < 5||player.getFreeSlots(5) < 5||player.getFreeSlots(4) < 5) {
	npc.say("请清理背包~~，需要5个格子以上");
	
} else {
	player.loseItem(npc.getItemId(), 1);
	for(var i=0;i<list.length;i++){
		player.gainItem(list[i][0],list[i][1]);
	}
	addHyPay(0);//余额
	player.modifyCashShopCurrency(1, 20000);//点券
	
	npc.broadcastNotice( "恭喜玩家 " + player.getName() + " 领取了Panda冒险岛公测礼包	~。");
	
	npc.say("恭喜您，获得了#b公测礼包");
	
}



function addHyPay(price) {
	var sql = "update hypay set pay=pay+?,leiji=leiji+?,today=today+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, price,price,player.getAccountId());

}