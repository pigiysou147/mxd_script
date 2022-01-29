

var 	list =Array(

	Array(2431399,500),//金
	Array(2630133,10),//金
	
	Array(2431170,9999),//金
	Array(2431170,9999),//金
	Array(2431170,9999),//金
	Array(2431170,9999),//金
	Array(2431170,9999),//金
	Array(2431170,9999),//金
	Array(2435902,9999),//金
	
	
Array(4023025,500),//金
Array(4001716,100),//10E金币
Array(2048723,500),//火花
Array(4310028,500),//大冒险币
Array(4001332,200),//大冒险币
Array(4110010,999),//豆豆票
Array(4000055,800),//
Array(4000048,800),//
Array(4000060,800),//
Array(4000299,1000),//
Array(4000182,1000),//
Array(4000835,1000),//
Array(4000004,1000),//
Array(4001618,400),//
Array(4032933,1),//
Array(4000000,20000),//
Array(4000016,20000),//
Array(4021016,400),//
Array(4000124,400),//
Array(4000313,1280),//
Array(4033356,310),//
Array(4000037,1000),//
Array(4001006,3600)//


);


if(player.getFreeSlots(1) < 5||player.getFreeSlots(2) < 5||player.getFreeSlots(3) < 5||player.getFreeSlots(5) < 5||player.getFreeSlots(4) < 5) {
	npc.say("请清理背包~~，需要5个格子以上");
	
} else {
	player.loseItem(npc.getItemId(), 1);
	for(var i=0;i<list.length;i++){
		player.gainItem(list[i][0],list[i][1]);
	}
	//给余额
	addHyPay(1);
	player.modifyCashShopCurrency(9999999, 1);
	
	npc.broadcastNotice( "『内测有惊喜』：恭喜玩家 " + player.getName() + " 获得了材料礼包一份~。");
	player.loseItem(npc.getItemId(),1);
	
	npc.say("恭喜您，获得了#b内测材料礼包");
	
}



function addHyPay(price) {
	var sql = "update hypay set cash=99999 where accountId=?";
	var result = player.customSqlUpdate(sql,player.getAccountId());

}