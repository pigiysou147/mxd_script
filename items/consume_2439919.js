




player.loseItem(npc.getItemId(),1);


addHyPay(100);



function addHyPay(number) {
	var sql = "update hypay set pay=pay+100,leiji=leiji+100 where accountId=?";
	var result = player.customSqlUpdate(sql,player.getAccountId());
	
}