/* global cm */

var status = -1;
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz11 = "#fEffect/CharacterEff/1112904/0/0#"; //彩心

var text = "\r\n\t\t\t#r#L0#" + tz11 + "航海周榜" + tz11 + "#l\r\n\r\n";
	text += "\t\t  #r#L4#" + tz11 + "航海上周周榜" + tz11 + "#l\r\n\r\n";
	
	text += "\t\t  #L1#" + tz11 + "全服航海总榜" + tz11 + "#l\r\n\r\n";
	text += "\t\t  #L2#" + tz11 + "航海奖励详情" + tz11 + "#l\r\n\r\n";
	text += "\t\t #L3#" + tz11 + "领取本周航海奖励" + tz11 + "#l\r\n\r\n";
	text += "\t\t#L5#" + tz11 + "航海礼包累计购买奖励" + tz11 + "#l\r\n\r\n";


let selection =npc.askMenuS(text);
if(selection == 0) {
	
	var sql = "select * from hanghai where rank_count>0 and characterid<>1952 and characterid<>1990 order by rank_count desc limit 1800;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t  #e#d#v4031438# 航海本周排行 #v4031438##k#n\r\n\r\n";
	text += "  #e名次#n\t\t#e玩家昵称#n\t\t  #e总次数\t #e头衔#n #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("character_name");
		for(var j = 18 - result.get("character_name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + result.get("rank_count");
		if(rank == 1) {
			text += "\t\t  #r超新星#k";
		} else if(rank == 2) {
			text += "\t\t  #g见习船长#k";
		} else if(rank == 3) {
			text += "\t\t  #b见习大副#k";
		}else if(rank>3 &&rank <10){
			text += "\t\t  #b见习水手#k";
		}else{
			text += "\t\t  #b跟船酱油#k";
		}
		text += "\r\n";
	}
	npc.say(text);

}else if(selection == 4) {
	
	var sql = "SELECT * from hanghai  ORDER BY last_count desc";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t  #e#d#v4031438# 航海上周排行 #v4031438##k#n\r\n\r\n";
	text += "  #e名次#n\t\t#e玩家昵称#n\t\t  #e总次数\t #e头衔#n #e #n\r\n";
	var last_count=0;
	var last_rank=0;
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(result.get("last_count")==last_count){
			//并列清空
			rank=last_rank;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("character_name");
		for(var j = 18 - result.get("character_name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + result.get("last_count");
		if(rank == 1) {
			text += "\t\t  #r超新星#k";
		} else if(rank == 2) {
			text += "\t\t  #g见习船长#k";
		} else if(rank == 3) {
			text += "\t\t  #b见习大副#k";
		}else if(rank>3 &&rank <10){
			text += "\t\t  #b见习水手#k";
		}else{
			text += "\t\t  #b跟船酱油#k";
		}
		text += "\r\n";
		last_count=result.get("last_count");
		last_rank=rank;
	}
	npc.say(text);

}  else if(selection == 1) {
	//财富排行
	
	var sql = "select * from hanghai where total_count>0 and characterid<>1952 and characterid<>1990 order by total_count desc limit 1800;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t  #e#d#v4031438# 航海总排行 #v4031438##k#n\r\n\r\n";
	text += "  #e名次#n\t\t#e玩家昵称#n\t\t  #e总次数\t #e头衔#n #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("character_name");
		for(var j = 18 - result.get("character_name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + result.get("total_count");
		if(rank == 1) {
			text += "\t\t  #r航海王#k";
		} else if(rank == 2) {
			text += "\t\t  #g资深船长#k";
		} else if(rank == 3) {
			text += "\t\t  #b稳健大副#k";
		}else if(rank>3 &&rank <10){
			text += "\t\t  #b老水手#k";
		}else{
			text += "\t\t  #b中级水手#k";
		}
		text += "\r\n";
	}
	npc.say(text);
}else if(selection==2){
	var txt="\r\n";
	txt+="";
	txt+="#r#e航海家你好. 每航海一次通关后既计入一次航海次数.#k\r\n\n";  
	txt+="#b每周1晚上0点清空排行榜.\r\n排行榜前200名都可领取对应奖励\r\n";
	txt+="#r注意:100E突破以上的玩家,航海排行榜领取的突破X10倍(自动加在武器上)\r\n";
	txt+="#r注意:本排行榜严禁多账号多角色刷奖.查到会封停所有该IP旗下账号.\r\n";
	txt+="第一名:   奖励 #v4001118#CD时装碎片 X 60 突破6000W\r\n";
	txt+="第二名:   奖励 #v4001118#CD时装碎片 X 50 突破5000W\r\n";
	txt+="第三名:   奖励 #v4001118#CD时装碎片 X 40 突破4000W\r\n";
	txt+="4-10名:   奖励 #v4001118#CD时装碎片 X 30 突破3000W\r\n";
	txt+="10-50名:  奖励 #v4001118#CD时装碎片 X 25 突破2000W\r\n";
	txt+="50-100名: 奖励 #v4001118#CD时装碎片 X 20 突破1500W\r\n";
	txt+="100-200名:奖励 #v4001118#CD时装碎片 X 15 突破1000W\r\n";
	npc.say(txt);
}else if(selection ==3){
	var sql = "SELECT last_count from hanghai GROUP BY last_count ORDER BY last_count desc ";
	var resultList = player.customSqlResult(sql);
	var mycountRe=player.customSqlResult("SELECT last_count from hanghai where characterid=?",player.getId());

	var myCount=0;
	if(mycountRe.size()>0)
	myCount=mycountRe.get(0).get("last_count");


	var rank=0;
	//查找排名
	for(var i=0;i<resultList.size();i++){
		if(resultList.get(i).get("last_count")==myCount){
			rank=(i+1);
		}
	}
 

	if(rank==0){
		npc.say("你上周没有上榜哦");
	}else if(myCount==0){
		npc.say("次数为0 不能领奖。");

	}else{
        
		var wq=player.getInventorySlot(-1,-11);
		if(wq==null){
			npc.say("请佩戴武器");
		}else if(getEventCount("航海奖励")>0){
			npc.say("请不要重复领取");
		}else{
			var onlyIdString=wq.toString().substr(wq.toString().indexOf("EntId") + 6, 20);
			onlyId=parseInt(onlyIdString);
			if(getWq("航海奖励"+onlyId)>1){
				npc.say("该武器已经领取过本周的航海奖励了，请不要重复领取。");
			}else{
				setEventCount("航海奖励"+onlyId,3,1);
				setEventCount("航海奖励",3,1);
				var beishu=1;
				if(wq.getLimitBreak()>=10000000000){
					beishu=10;
				}
				//细分航海奖励
				if(rank==1){
					wq.setLimitBreak(wq.getLimitBreak()+60000000*beishu);
					player.gainItem(4001118,60);
				}else if(rank==2){
					wq.setLimitBreak(wq.getLimitBreak()+50000000*beishu);
					player.gainItem(4001118,50);
				}else if(rank==3){
					wq.setLimitBreak(wq.getLimitBreak()+40000000*beishu);
					player.gainItem(4001118,40);
				}else if(rank>=4 && rank<=10){
					wq.setLimitBreak(wq.getLimitBreak()+30000000*beishu);
					player.gainItem(4001118,30);
				}else if(rank>=11 && rank<=50){
					wq.setLimitBreak(wq.getLimitBreak()+20000000*beishu);
					player.gainItem(4001118,25);
				}else if(rank>=51 && rank<=100){
					wq.setLimitBreak(wq.getLimitBreak()+15000000*beishu);
					player.gainItem(4001118,20);
				}else if(rank>=101 && rank<=200){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*beishu);
					player.gainItem(4001118,15);
				}
				
				player.updateItem(-11,wq);
				npc.say("领取成功，你的上周排名为:"+rank);
				
				
				
				
			}
			
		}
		
	}
		
	
	
}else if(selection==5){
	player.runScript("航海累计");
} 

function getWq(eventName) {

	var sql = "select value,time from accounts_event where  event =? ";

	var result = player.customSqlResult(sql,  eventName);

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
	
	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}