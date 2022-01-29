

//player.gainGuildCommitment(500);
player.modifyCashShopCurrency(1,3000);
player.gainItem(3994979,2);
addHyPay(10);
player.gainItem(4001715,1);
player.loseItem(2432297,1);
npc.broadcastNotice("【家族礼包】:玩家"+player.getName()+" 领取了家族任务奖励");
player.dropAlertNotice("领取成功");


function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}
