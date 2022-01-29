

var txt="\r\n#r#e10月单日充值1000达标奖励;\r\n";
	
var sql="SELECT * from(SELECT sum(rmb) total,DAY(paytime) day  from paylog where MONTH(paytime) =MONTH('2020-10-01 00:00:00') and account=?  GROUP BY DAY(paytime)) as c  where c.total>=1000";
var result =player.customSqlResult(sql,player.customSqlResult("select name from accounts where id ="+player.getAccountId()).get(0).get("name"));
if(result.size()==0){
	txt+="你当月没有满足单日充值1000的记录";
	npc.say(txt);
}else{
	txt+="以下是你当月充值满1000的日期\r\n";
	for(var i=0;i<result.size();i++){
			txt+="#L"+1+"#日期:"+result.get(i).get("day")+" 充值金额"+result.get(i).get("total")+"#l \r\n"
		
		
	}
	let selection =npc.askMenu(txt);
	if(getEventCount("10月单日充值")==0){
		//可以领取
		
		player.gainItem(4001326, 5),
		player.gainItem(4001327, 5),
		player.gainItem(4001328, 5),
		player.gainItem(4001329, 5),
		player.gainItem(4001330, 5),
		player.gainItem(4001331, 5)
		player.gainItem(2614074,2);
		setEventCount("10月单日充值",0,1);
		npc.broadcastWeatherEffectNotice(37, "恭喜玩家 " + player.getName() + " 领取了10月单日充值1000的稀有奖励", 10000);
		npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 领取了10月单日充值1000的稀有奖励。");
		npc.say("领取成功");
	}else{
		npc.say("请不要重复领取");
	}
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

    var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}