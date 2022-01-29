






var txt="尊敬的月卡用户你好。\r\n";
	txt+="在这里每天你可以领取40余额40累计哦";
	let sel =npc.askYesNo(txt);
	if(sel==1){
		if(getEventCount("月卡福利")>0){
			npc.say("请明天再来");
		}else{
			setEventCount("月卡福利",1,1);
			addHyPay(40);
			npc.say("领取成功");
		}
	}
	
	
function addHyPay(price) {

	var sql = "update hypay set pay=pay+?,leiji=leiji+? where accountId=?";

	var result = player.customSqlUpdate(sql, price,price, player.getAccountId());

}
function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {
	
	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value,player.getAccountId(), eventName);

}
