

var 	list =Array(

Array(5062024,30),//
Array(4310225,1)//


);


if(player.getFreeSlots(1) < 5||player.getFreeSlots(2) < 5||player.getFreeSlots(3) < 5||player.getFreeSlots(5) < 5||player.getFreeSlots(4) < 5) {
	npc.say("请清理背包~~，需要5个格子以上");
	
} else {
	player.loseItem(npc.getItemId(), 1);
	for(var i=0;i<list.length;i++){
		player.gainItem(list[i][0],list[i][1]);
	}
	//给余额
	addHyPay(1500);
	player.modifyCashShopCurrency(1,50000);
	
	npc.broadcastNotice( "恭喜玩家 " + player.getName() + " 顿悟宇宙真理购买了永久会员折扣礼包");
	
	npc.say("恭喜您，获得了#b永久会员礼包");
	
}



function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, price,player.getAccountId());

}