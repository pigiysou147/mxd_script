// player.gainAp(10);
// player.resetHyperSkill();
// player.resetHyperStatSkill();
//player.runScript("分布式_魔魂主");
//player.changeMap(806040000);
var mac=getmac();
	 
var macCount =getCount(mac);
var result = player.customSqlResult("select * from acc ");
var txt="\r\n\t\t#r#e【内测专属奖励】\r\n\r\n";
txt+="#L1#领取奖励#l#v4310060# X 100 #v4031997# X 200 #v4001785# X 200";
txt+="#L0#查看内测达标名单 共计有 #r"+result.size()+" 名内测玩家符合条件#l \r\n\r\n";
let selection =npc.askMenu(txt);
if(selection ==0){
	//查看
	txt="名单如下：\r\n";
	var result = player.customSqlResult("select * from acc ");
	for(var i=0;i<result.size();i++){
		txt+="玩家名字： "+result.get(i).get("name")+"\r\n";
	}
	npc.say(txt);
}else{
	var result = player.customSqlResult("select * from acc where acc=?",player.getAccountName());
	if(result.size()>0){
		//可以领
		if(getEventCount("内测奖励")<1){
			if(macCount>0){
				npc.say("同IP 请不要重复领取");

			}else{
				setEventCount("内测奖励", 0, 1)
				player.gainItem(4310060,100);
				player.gainItem(4031997,200);
				player.gainItem(4001785,200);
				npc.say("领取成功");
			}
			


		}else{
			npc.say("请不要重复领取");
		}

	}else{
		npc.say("抱歉，你不在名单内");
	}
}



function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}

function getCount(mac){
	
	
	var sql = "select sum(value) macCount from accounts_event where `event`='内测奖励' and mac =?";
	var result = player.customSqlResult(sql,mac);
	macCount =result.get(0).get("macCount");
	if(macCount==null){
		macCount= 0;
	}
	return macCount;
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
		
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, mac,player.getAccountId(), eventName);

}