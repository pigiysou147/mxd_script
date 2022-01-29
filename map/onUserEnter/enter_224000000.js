

// player.customSqlUpdate("update hypay set name =? where accountid=?",player.getName(),player.getAccountId());



// if(player.getPQLog("装备评分更新")<20){
// player.addPQLog("装备评分更新");
// player.runScript("装备评分更新");
// player.dropMessage(1,"装备评分更新完毕~");
// }

/*监控物品数量 player.customSqlInsert("insert into playeritem");

var lunhui = player.getAmountOfItem(1202193);
if(lunhui>0){
	if(player.customSqlResult("select * from playeritem where itemid=? and characterid=?",1202193,player.getId()).size()>0){
			player.customSqlUpdate("update playeritem set count =? where itemid=? and characterid=?",lunhui,1202193,player.getId());
	}else{
		
		player.customSqlInsert("insert into playeritem values(0,?,?,?,?,?)",1202193,lunhui,player.getId(),player.getName(),player.getAccountId());
	}
}
*/