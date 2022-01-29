var icon = "#fEffect/CharacterEff/1112904/0/0#";

 
		  
	var text = "#e请选择以下功能：#r\r\n";  
	  
	text += "\t\t\t#L1#今日排行榜#l\r\n";
	text += "\t\t\t#L2#昨日排行榜#l\r\n";
	text += "\t\t  #L3#领取昨日排行奖励#l\r\n";
	text += "\t\t  #L4#武陵排行奖励说明#l\r\n";
	text += "\t#L5#突破极限，给自己目标。历史通关TOP100#l\r\n"; 
	var selection =npc.askMenu(text);
	var date =new Date();
	var 年=new Date().getFullYear;
	var 月 = new Date().getMonth() + 1;
	var 日 = new Date().getDate();
	var 時 = new Date().getHours();
	var 分 = new Date().getMinutes();
	var startTime="2022-"+月+"-"+日+" 00:00:00";
	
	var yesterday="2022-"+月+"-"+(日-1)+" 00:00:00";
	if(selection == 1){
		//2021-02-08 00:00:00
		
		var sql = "SELECT b.`name`,a.floor,time,limitbreak FROM zz_dojang a, characters b WHERE a.starttime >?     AND a.character_id = b.id    ORDER BY a.floor DESC, a.time asc LIMIT 50";
		var resultList = player.customSqlResult(sql,startTime);
		var text ="    "+icon+icon+icon+icon+icon+icon+icon+icon+icon+"武陵排行榜（今日)"+icon+icon+icon+icon+icon+icon+icon+icon+icon+"\r\n";
		  
		if(player.isGm()){
			text += 年+"\t#e名次#n\t#e玩家昵称#n\t\t#e层数#n\t\t时间\t突破#n\r\n"+yesterday+startTime;
		}else{
			text += "\t#e名次#n\t#e玩家昵称#n\t\t#e层数#n\t\t时间(s) #n\r\n";
		}
				
		for(var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			text+="\t"+(i+1)+"\t\t"
			text += result.get("name");
			for (var j = 16 - result.get("name").length; j > 0 ; j--) {
				text += " ";
			}
			text+=result.get("floor")+"\t\t\t";
			text+=result.get("time")+"\t";
			if(player.isGm()){
				text+=Math.floor(result.get("limitbreak")/100000000)+"亿";
			}
			text+="\r\n";
		} 
		npc.say(text);
	
	}else if(selection == 2){
		var sql ="SELECT b.`name`,a.floor,time,limitbreak FROM zz_dojang a, characters b WHERE a.starttime >? and a.starttime<?     AND a.character_id = b.id    ORDER BY a.floor DESC, a.time asc LIMIT 50";
		var resultList = player.customSqlResult(sql,yesterday,startTime);
		 
		var text ="    "+icon+icon+icon+icon+icon+icon+icon+icon+icon+"武陵排行榜（昨日)"+icon+icon+icon+icon+icon+icon+icon+icon+icon+"\r\n";
		if(player.isGm()){
			text += "\t#e名次#n\t#e玩家昵称#n\t\t#e层数#n\t\t时间\t突破#n\r\n";
		}else{
			text += "\t#e名次#n\t#e玩家昵称#n\t\t#e层数#n\t\t时间(s) #n\r\n";
		}
				
		for(var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			text+="\t"+(i+1)+"\t\t"
			text += result.get("name");
			for (var j = 16 - result.get("name").length; j > 0 ; j--) {
				text += " ";
			}
			text+=result.get("floor")+"\t\t\t";
			text+=result.get("time")+"\t";
			if(player.isGm()){
				text+=result.get("limitbreak")+"";
			}
			text+="\r\n";
		} 
		npc.say(text);
	}else if(selection ==3){
		var sql ="SELECT a.character_id,b.`name`,a.floor,time,limitbreak FROM zz_dojang a, characters b WHERE a.starttime >? and a.starttime<?     AND a.character_id = b.id    ORDER BY a.floor DESC, a.time asc LIMIT 50";
		var resultList = player.customSqlResult(sql,yesterday,startTime);
		var charid = player.getId();
		var sort = 0;
		var sn=0;
		 for (var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			if(result.get("character_id")==player.getId()){
				sort=i+1;
				sn=result.get("sn");
				break;
			}
		 }
		 var equip =  player.getInventorySlot(-1,-11);
		 if(equip ==null){
			npc.say("请佩戴武器,需要核对SN。"); 
		 }else if(sort==0){
			npc.say("您不在排行之中，请继续努力!"); 
		 }else if(bag(1)<5 || bag(2)<5 || bag(3)<5|| bag(4)<5|| bag(5)<5){
			npc.say("请将所有栏背包空出5个格子.\r\n装备栏："+bag(1)+"\r\n消耗栏："+bag(2)+"\r\n其他栏："+bag(4)+"\r\n设置栏："+bag(3)+"\r\n特殊栏："+bag(5));    
		}else{
			if(player.getPQLog("武陵奖励")<1&& getEventCount("武陵奖励")<1){
				
			
				if(sort==1){
					player.gainItem(4001620,1000);
				}else if(sort==2){
					player.gainItem(4001620,800);
				}else if(sort==3){
					player.gainItem(4001620,600);
				}else if(sort>=4 && sort<=10){
					player.gainItem(4001620,500);
				}else if(sort>10 && sort<=30){
					player.gainItem(4001620,300);
				}else if(sort>30 && sort<=50){
					player.gainItem(4001620,200);
				}
				player.addPQLog("武陵奖励");
				setEventCount("武陵奖励",1,1);
				npc.broadcastNotice("『武陵日排行奖励』 ：玩家 "+ player.getName() +"领取了排行第"+sort+"的奖励。");
				npc.broadcastWeatherEffectNotice(0x13,"『武陵日排行奖励』 ：玩家 "+ player.getName() +"领取了排行第"+sort+"的奖励。",15000);
			}else{
				npc.say("请明天再来");
			}
		}
		 
		 
	}else if(selection ==4){
		var text ="\r\n每日通关奖励如下:\r\n";
		text+="第一名#v4001620# X 1000\r\n";
		text+="第二名#v4001620# X 800\r\n";
		text+="第三名#v4001620# X 600\r\n";
		text+="第四名-第十#v4001620# X 500\r\n";
		text+="第十名-第三十#v4001620# X 300\r\n";
		text+="第三十名-第五十#v4001620# X 200\r\n";
		npc.say(text);
	}else if(selection ==5){
		
		
		var sql ="SELECT b.`name`,a.floor,time,limitbreak FROM zz_dojang a, characters b WHERE a.character_id = b.id    ORDER BY a.floor DESC, a.time asc LIMIT 50";
		var resultList = player.customSqlResult(sql);
		var text ="    "+icon+icon+icon+icon+icon+icon+icon+icon+icon+"武陵排行榜（今日)"+icon+icon+icon+icon+icon+icon+icon+icon+icon+"\r\n";
		  
		if(player.isGm()){
			text += "\t#e名次#n\t#e玩家昵称#n\t\t#e层数#n\t\t时间\t突破#n\r\n";
		}else{
			text += "\t#e名次#n\t#e玩家昵称#n\t\t#e层数#n\t\t时间(s) #n\r\n";
		}
				
		for(var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			text+="\t"+(i+1)+"\t\t"
			text += result.get("name");
			for (var j = 16 - result.get("name").length; j > 0 ; j--) {
				text += " ";
			}
			text+=result.get("floor")+"\t\t\t";
			text+=result.get("time")+"\t";
			if(player.isGm()){
				text+=result.get("limitbreak")+"";
			}
			text+="\r\n";
		} 
		npc.say(text);
	}
 
 
 
function bag(type){
	let bagCount =0;
	for(var slot = 1;slot<129;slot++){
		let item = player.getInventorySlot(type, slot);
		if(item==null){
			bagCount++
		}
	}
	return bagCount;
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