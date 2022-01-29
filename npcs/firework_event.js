






var needItem=[
[4000000,1111],
[4000016,1111],
[4000001,11],
[4033356,11],
[4000124,11],
[4021016,11],
[4000313,11],
[4001006,11],
[4034999,11]

]

 var mac=getmac();
 
var macCount =getCount(mac);


var str = "#e#r大家好，我是勤快的打工人为了双12能脱单以及清空购物车，需要你帮我收集一些材料，当然为会给你奖励的哦~~#k\r\n";
	str+="#b你需要帮我收集如下材料:#k#r\r\n"
	for(var i=0;i<needItem.length;i++){
		str+="#v"+needItem[i][0]+"# X "+needItem[i][1]+" ";
		if(i%3==0 && i!=0){
			str+="\r\n";
		}
	}
//str += "\r\n\r\n#L1# #r提交材料获得奖励#k#l \r\n";
str += "#L2# #r领取15次总次数额外奖励~#k#l \r\n";

let selection =npc.askMenu(str);
if(selection==1){
	var flag=1;
	for(var i=0;i<needItem.length;i++){
		if(!player.hasItem(needItem[i][0],needItem[i][1])){
			flag=0;
		}
	}
	
	if(flag==0){
		npc.say("材料不足阿，打工人！");
	}else if(getEventCount("双12收集任务")>4 || macCount>4){
		npc.say("同一个账号、机器码、IP下当天只能领取5次 "); 
	}else{
		setEventCount("双12收集任务",1,1);
		getEventCount("双12收集任务总次数");
		setEventCount("双12收集任务总次数",0,1);
		for(var i=0;i<needItem.length;i++){
			player.loseItem(needItem[i][0],needItem[i][1]);
			
		}
		var item =player.getInventorySlot(-1,-11);
		if(item.getLimitBreak()>=10000000000){
			
			//百E玩家
			item.setLimitBreak(item.getLimitBreak()+12*12*10000*12);
			player.updateItem(-11,item);
			
		}else{
			player.gainItem(2614056,12*12);
		}
		
		npc.say("领取成功");
	}
	
}else if(selection==2){
	if(getEventCount("双12收集任务总次数")>=15){
		if(getEventCount("双12收集任务奖励领取")==0){
			//可以领取
			player.gainItem(4001753,1);
			setEventCount("双12收集任务奖励领取",0,1);
			npc.say("领取成功");
		}else{
			npc.say("请不要重复领取");
		}
		
	}else{
		npc.say("你的次数不够哦");
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
	
	
	var sql = "select sum(value) macCount from accounts_event where `event`='双12收集任务' and mac =?";
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
