





var mac=getmac();

var npcid= npc.getNpcId();

var nameRe = player.customSqlResult("select name from playernpcs where scriptid=?",npcid);
var name="";
if(nameRe.size()>0)
name=nameRe.get(0).get("name")

var txt="\r\n#e你好，欢迎来到名人堂，";
if(name!=null)
 txt ="我是: #r#e"+name;
 
if(  npcid==9310181 ){
	//GM NPC 
	txt +="\r\n#e名人堂每天点击玩家NPC可以领取点卷+突破奖励#r#e";
	txt +="\r\n#e每个名人堂的玩家NPC都能领的哦。\r\n名人堂登记条件如下:#r#e";
	txt +="\r\n#e1.全身25X装备。\r\n2.突破超过1000E.\r\n3.单挑或者组队通关黑魔法师#r#e";
	txt +="\r\n#r玩家们每天都可以来领取1W点券。"
	txt +="\r\n#L0#领取点券#l";
	var count=0
	var result = player.customSqlResult("select * from accounts_event where event='"+name+"' and value=1");
	//npc.say("select * from accounts_event where event='"+name+"' and value=1");
	count=result.size();
	if(count>40){
		count+=60;
	}
	txt+="\r\n\r\n#e#r当前NPC今日总领取人数为:"+count;
	let selection=npc.askMenu(txt);
	if(selection==0){
		if(getCount(name)>0 || getEventCount(name)>0){
			npc.say("同一个账号、机器码、IP下当天只能领取一次 "); 
		}else{
			player.modifyCashShopCurrency(1,10000);
			player.gainItem(2614054,1);
			setEventCount(name,1,1);
			if(getEventCount("名人堂")==0){
				getEventCount("活跃");
					setEventCount("活跃",1,5);
			}
			
			setEventCount("名人堂",1,1);
			setEventCount(name+"次数",0,1);
			npc.say("领取成功");
		}
	}
	
}else{
	switch (npcid){
		case 9310183:
			txt+="#b\r\n冒险还是要有一群小伙伴在一起更好玩\r\n";
			txt+="我的小伙伴：回忆，弥果，点卷，火火，觉觉，小白白，箭箭\r\n";
			txt+="祝大家在回忆岛玩的开心\r\n";
		break;
	}
	txt+="\r\n#r玩家们每天都可以来领取1W点券。"
	txt+="\r\n#L0#领取点券#l";
	var count=0
	var result = player.customSqlResult("select * from accounts_event where event='"+name+"' and value=1");
	//npc.say("select * from accounts_event where event='"+name+"' and value=1");
	count=result.size();
	if(count>40){
		count+=60;
	}
	txt+="\r\n\r\n#e#r当前NPC今日总领取人数为:"+count;
	let selection=npc.askMenu(txt);
	if(selection==0){
		if(getCount(name)>0 || getEventCount(name)>0){
			npc.say("同一个账号、机器码、IP下当天只能领取一次 "); 
		}else{
			player.modifyCashShopCurrency(1,10000);
			player.gainItem(2614054,1);
			setEventCount(name,1,1);
			if(getEventCount("名人堂")==0){
				getEventCount("活跃");
					setEventCount("活跃",1,5);
			}
			
			setEventCount("名人堂",1,1);
			setEventCount(name+"次数",0,1);
			npc.say("领取成功");
		}
	}
}


function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}

function getCount(name){
	var sql = "select sum(value) macCount from accounts_event where `event`=? and mac =?";
	var result = player.customSqlResult(sql,name,mac);
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
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value,time) values(?,?,?,?,?,now())";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 3, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value,day) {
	
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, mac,player.getAccountId(), eventName);

}

