

var 	list =Array(
	
	Array(1202193,1),//FFN防具自选
	Array(4000000,9999),//FFN防具自选
	Array(4000016,9999),//FFN防具自选
	Array(4000019,9999),//FFN防具自选
	Array(4000000,9999),//FFN防具自选
	Array(4000016,9999),//FFN防具自选
	Array(4000019,9999),//FFN防具自选
	Array(4000000,9999),//FFN防具自选
	Array(4000016,9999),//FFN防具自选
	Array(4000019,9999),//FFN防具自选
	Array(4000000,9999),//FFN防具自选
	Array(4000016,9999),//FFN防具自选
	Array(4000019,9999),//FFN防具自选
	Array(4000000,9999),//FFN防具自选
	Array(4000016,9999),//FFN防具自选
	Array(4000019,9999),//FFN防具自选
	Array(4000000,9999),//FFN防具自选
	Array(4000016,9999),//FFN防具自选
	Array(4000019,9999),//FFN防具自选
	Array(4000000,9999),//FFN防具自选
	Array(4000016,9999),//FFN防具自选
	Array(4000019,9999),//FFN防具自选
	Array(4000000,9999),//FFN防具自选
	Array(4000016,9999),//FFN防具自选
	Array(4000019,9999),//FFN防具自选
	Array(4001839,9999),//FFN防具自选
	Array(4000836,9999),//FFN防具自选
	Array(4001839,9999),//FFN防具自选
	Array(4000836,9999),//FFN防具自选
	Array(4001839,9999),//FFN防具自选
	Array(4000836,9999),//FFN防具自选
	Array(4001839,9999),//FFN防具自选
	Array(4000836,9999),//FFN防具自选
	Array(4001839,9999),//FFN防具自选
	Array(4000836,9999),//FFN防具自选
	Array(4001839,9999),//FFN防具自选
	Array(4000836,9999),//FFN防具自选
	Array(4001839,9999),//FFN防具自选
	Array(4000836,9999),//FFN防具自选
	Array(4001839,9999),//FFN防具自选
	Array(4000836,9999),//FFN防具自选
	Array(4001119,9999),//FFN防具自选
	Array(4033911,9999),//FFN防具自选
	Array(4001716,9999),//FFN防具自选
	Array(4033911,9999),//FFN防具自选
	Array(4033298,9999),//FFN防具自选
	Array(4310060,9999),//FFN防具自选
	Array(4000124,9999),//FFN防具自选
	
	Array(4009398,9999),//FFN防具自选
	Array(2630120,3),//FFN防具自选
	Array(2435733,999),//FFN防具自选
	
	Array(2431578,100),//黑暗卷轴自选
	Array(2432069,4),//暴君自选
	Array(2049376,20),//20X强化卷
	Array(4021043,500),//25X强化材料
	Array(4001332,500),//25X强化材料
	Array(4036457,500),//精髓
	Array(2614077,20),//5亿突破
	Array(4023025,500),//金
	Array(2432669,100),//10E金币
	Array(4110010,9999),//10E金币
	Array(4310060,9999),//10E金币
	
	
	Array(2630133,1),//神秘WQ自选
	Array(2048723,500),//火花
	Array(4310028,500),//大冒险币
	Array(4000055,800),//
	Array(4000048,800),//
	Array(4000060,800),//
	Array(4000299,1000),//
	Array(4000182,1000),//
	Array(4000835,1000),//
	Array(4000004,1000),//
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
	addHyPay(10000);
	player.modifyCashShopCurrency(1, 5000000);
	
	npc.broadcastNotice( "『内测有惊喜』：恭喜玩家 " + player.getName() + " 获得了内测礼包一份~。");
	
	npc.say("恭喜您，获得了#b内测大礼包");
	
}



function addHyPay(price) {
	var sql = "update hypay set pay=pay+?,leiji=leiji+?,today=today+?,cash=99999 where accountId=?";
	var result = player.customSqlUpdate(sql, price, price,price,player.getAccountId());

}