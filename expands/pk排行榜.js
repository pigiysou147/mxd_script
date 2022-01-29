/* global cm */

var status = -1;
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz11 = " #v4310272# "; //彩心

var text="\r\n\t\t\t\t#v4031569##r玩家PK排行榜#v4031569##k";
	text += "\r\n\t\t\t#r #L0#" + tz11 + "PK周榜" + tz11 + "#l\r\n";
	text += "\t\t   #r#L4#" + tz11 + "PK上周周榜" + tz11 + "#l\r\n";
	text += "\t\t #r#L2#" + tz11 + "排行榜奖励详情" + tz11 + "#l\r\n";
	text += "\t\t #L3#" + tz11 + "领取本周PK奖励" + tz11 + "#l\r\n";
	text += "\t\t #L5#" + tz11 + "PK积分累计奖励" + tz11 + "#l\r\n\r\n";


let selection =npc.askMenuS(text);
if(selection == 0) {
	
	var sql = "select name,score,gender from characters where   score<>0 order by score desc limit 200;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 玩家PK本周积分排行 ★#k#n\r\n\r\n";
	text += "\t\t#e名次#n\t\t#e玩家昵称#n\t\t\t#e积分#n#e#n\r\n";
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
		if(rank<10){
			//排版对齐
			text += "\t\t  " + rank + "\t\t\t ";
		}else if(rank<100 && rank >=10){
			text += "\t\t " + rank + "\t\t\t ";
		}else{
			text += "\t\t " + rank + "\t\t ";
		}
		// 填充名字空格
		text += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + result.get("score");
		text += "\r\n";
	}
	npc.say(text);

}else if(selection == 4) {
	
	var sql = "select name,last_score,gender from characters where last_score>0 order by last_score desc limit 200;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 玩家PK上周积分排行 ★#k#n\r\n\r\n";
	text += "\t\t#e名次#n\t\t#e玩家昵称#n\t\t\t#e积分#n#e#n\r\n";
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
		if(rank<10){
			//排版对齐
			text += "\t\t  " + rank + "\t\t\t ";
		}else if(rank<100 && rank >=10){
			text += "\t\t " + rank + "\t\t\t ";
		}else{
			text += "\t\t " + rank + "\t\t ";
		}
		// 填充名字空格
		text += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + result.get("last_score");
		text += "\r\n";
	}
	npc.say(text);

} else if(selection==2){
	var txt="\r\n";
	txt+="";
	txt+="#r#e你好. 每PK一次通关后既计入一次PK次数.#k\r\n\n";  
	txt+="#b每周1晚上0点清空排行榜.\r\n排行榜前200名都可领取对应奖励\r\n";
	txt+="#r注意:本排行榜严禁多账号多角色刷奖.查到会封停所有该IP旗下账号.\r\n";
	txt+="第一    #v2614057# X 30   #v4021030# X 1500  \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各600个\r\n\r\n";
	txt+="第二    #v2614057# X 25   #v4021030# X 1200  \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各450个\r\n\r\n";
	txt+="第三    #v2614057# X 20   #v4021030# X 1000  \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各400个\r\n\r\n";
	txt+="第四    #v2614057# X 18   #v4021030# X 800   \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各350个 \r\n\r\n";
	txt+="第五    #v2614057# X 16   #v4021030# X 700   \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各300个 \r\n\r\n";
	txt+="第六    #v2614057# X 13   #v4021030# X 600   \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各250个 \r\n\r\n";
	txt+="第七    #v2614057# X 12   #v4021030# X 500   \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各200个\r\n\r\n";
	txt+="第八    #v2614057# X 10   #v4021030# X 450   \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各180个\r\n\r\n";
	txt+="第九    #v2614057# X 10   #v4021030# X 400   \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各160个\r\n\r\n";
	txt+="第十    #v2614057# X 8    #v4021030# X 350   \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各130个\r\n\r\n";
	txt+="11-20   #v2614057# X 6    #v4021030# X 300   \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各100个\r\n\r\n";
	txt+="21-30   #v2614057# X 3    #v4021030# X 200   \r\n\r\n\t#v4440300#\t#v4441300#\t#v4442300#\t#v4442300#各80个\r\n\r\n";
	npc.say(txt);
	
	
}else if(selection ==3){
	var sql = "select name,last_score,gender,id from characters where last_score>0  order by last_score desc limit 200;";
	var resultList = player.customSqlResult(sql);
	var rank = 0;
	for(var i = 0; i < resultList.size(); i++) {
		
		var result = resultList.get(i);
		if(resultList.get(i).get("id")==player.getId()){
			//确认排名
			rank=i+1;
			break;
		}
		
	}
	if(rank==0){
		npc.say("你上周没有上榜哦");
	}else{
		var wq=player.getInventorySlot(-1,-11);
		if(wq==null){
			npc.say("请佩戴武器");
		}else if(getEventCount("PK奖励")>0){
			npc.say("请不要重复领取");
		}else{
			
				setEventCount("PK奖励",5,1);
				var beishu=1;
				
				//细分PK奖励
				if(rank==1){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*30);
					player.gainItem(4021030,1500);
					player.gainItem(4440300,600);
					player.gainItem(4441300,600);
					player.gainItem(4442300,600);
					player.gainItem(4443300,600);
					
				}else if(rank==2){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*25);
					player.gainItem(4021030,1200);
					player.gainItem(4440300,450);
					player.gainItem(4441300,450);
					player.gainItem(4442300,450);
					player.gainItem(4443300,450);
				}else if(rank==3){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*20);
					player.gainItem(4021030,1000);
					player.gainItem(4440300,400);
					player.gainItem(4441300,400);
					player.gainItem(4442300,400);
					player.gainItem(4443300,400);
				}else if(rank==4 ){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*18);
					player.gainItem(4021030,800);
					player.gainItem(4440300,350);
					player.gainItem(4441300,350);
					player.gainItem(4442300,350);
					player.gainItem(4443300,350);
				}else if(rank==5 ){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*16);
					player.gainItem(4021030,700);
					player.gainItem(4440300,300);
					player.gainItem(4441300,300);
					player.gainItem(4442300,300);
					player.gainItem(4443300,300);
				}else if(rank==6 ){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*13);
					player.gainItem(4021030,600);
					player.gainItem(4440300,250);
					player.gainItem(4441300,250);
					player.gainItem(4442300,250);
					player.gainItem(4443300,250);
				}else if(rank==7 ){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*12);
					player.gainItem(4021030,500);
					player.gainItem(4440300,200);
					player.gainItem(4441300,200);
					player.gainItem(4442300,200);
					player.gainItem(4443300,200);
				}else if(rank==8 ){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*10);
					player.gainItem(4021030,450);
					player.gainItem(4440300,180);
					player.gainItem(4441300,180);
					player.gainItem(4442300,180);
					player.gainItem(4443300,180);
				}else if(rank==9 ){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*10);
					player.gainItem(4021030,400);
					player.gainItem(4440300,160);
					player.gainItem(4441300,160);
					player.gainItem(4442300,160);
					player.gainItem(4443300,160);
				}else if(rank==10 ){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*8);
					player.gainItem(4021030,130);
					player.gainItem(4440300,130);
					player.gainItem(4441300,130);
					player.gainItem(4442300,130);
					player.gainItem(4443300,130);
				}else if(rank>=11 && rank<=20){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*6);
					player.gainItem(4021030,300);
					player.gainItem(4440300,100);
					player.gainItem(4441300,100);
					player.gainItem(4442300,100);
					player.gainItem(4443300,100);
				}else if(rank>=21 && rank<=30){
					wq.setLimitBreak(wq.getLimitBreak()+10000000*3);
					player.gainItem(4021030,200);
					player.gainItem(4440300,80);
					player.gainItem(4441300,80);
					player.gainItem(4442300,80);
					player.gainItem(4443300,80);
				}
				
				player.updateItem(-11,wq);
				
				
				
				npc.say("领取成功，你的上周排名为:"+rank);
			
			
		}
	}
		
	
	
}else if(selection==5){
	player.runScript("称谓奖励");
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

function setEventCount(eventName, type, value) {
	
	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}