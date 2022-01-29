/* global cm */

var status = -1;
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz11 = "#fEffect/CharacterEff/1112904/0/0#"; //彩心
var bossName = Array(
	
	"困难戴米安",
	"困难露西德",
	"觉醒希腊(普通)",
	"至暗魔晶",
	"敦凯尔",
	"威尔",
	"地狱威尔",
	"黑魔法师",
	"深渊黑魔法师"
);
var bossName2 = Array(
	
	
	"地狱威尔",
	"黑魔法师",
	"深渊黑魔法师"
);
var icon1=Array(
	"#v2870878#",
	"#v2870698#",
	"#v2870943#",
	"#v4034839#",
	"#v2870950#",
	"#v2870897#",
	"#v2870897#",
	"#v3018230#",
	"#v3018230#"
);
var icon2=Array(
	"#v2870897#",
	"#v3018230#",
	"#v3018230#"
);
var txt="\r\n#r#e请选择要查看的BOSS通关的模式\r\n";
txt+="\t#L0#单人模式#l \t #L2#领取昨日奖励#l\r\n\r\n";
txt+="\t#L1#组队模式#l \t \r\n\r\n";
let se = npc.askMenuS(txt);
if(se==0){
	txt ="\r\n#r#e\t#L0#今日排行榜#l \r\n\r\n";
	txt+="\t#L1#昨日排行榜#l\r\n\r\n";
	
	let today = npc.askMenuS(txt);
	var text ="";
	var sql ="";
	if(today==0){
		//查看今日排行榜
		
		text = "#e#b         ┏   " + tz13 + "《今日单人竞速》" + tz13 + "   ┓ #r\r\n";
		for(var i = 0; i < bossName2.length; i++) {
			text += "\t\t\t#r#L" + i + "#" + tz11 + bossName2[i] + tz11 + "#l\r\n";
		}
		text += "\r\n#e#b         ┗                      ┛\r\n";
		let selection =npc.askMenuS(text);
		
		sql = "SELECT c.endtime,c.characterid,c.name,MIN(c.time) time from (SELECT *,count(id) count  from bossrank where boss=? and TO_DAYS(endtime)=TO_DAYS(now()) GROUP BY time    limit 58) as c where c.count=1 GROUP BY name order by time";
		var resultList = player.customSqlResult(sql,bossName2[selection]);
		var text = "\t\t\t#e#d "+icon2[selection]+" BOSS"+bossName2[selection]+"击杀排行 #k#n\r\n\r\n";
	}else if(today ==1){
		//查看昨日排行榜
		text = "#e#b         ┏   " + tz13 + "《昨日单人竞速》" + tz13 + "   ┓ #r\r\n";
		for(var i = 0; i < bossName2.length; i++) {
			text += "\t\t\t#r#L" + i + "#" + tz11 + bossName2[i] + tz11 + "#l\r\n";
		}
		text += "\r\n#e#b         ┗                      ┛\r\n";
		let selection =npc.askMenuS(text);
		
		sql = "SELECT c.endtime,c.characterid,c.name,MIN(c.time) time from (SELECT *,count(id) count  from bossrank where boss=? and TO_DAYS(endtime)>=TO_DAYS(now())-1 and TO_DAYS(endtime)<TO_DAYS(now()) GROUP BY time    limit 58) as c where c.count=1 GROUP BY name order by time";
		var resultList = player.customSqlResult(sql,bossName2[selection]);
		var text = "\t\t\t#e#d "+icon2[selection]+" BOSS"+bossName2[selection]+"击杀排行 #k#n\r\n\r\n";
	}
	
	
	text += "\t\t#e名次#n\t#e 玩家昵称#n\t\t#e     时间#n #e #n\r\n";
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
		text += "\t\t " + rank + "\t\t  ";
		// 填充名字空格
		text += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t" + result.get("time") ;
		text += "\r\n";
	}
	npc.say(text);
	
}else if(se ==1){
	txt ="\r\n#r#e\t#L0#今日排行榜#l \r\n\r\n";
	txt+="\t#L1#昨日排行榜#l\r\n\r\n";
	
	let today = npc.askMenuS(txt);
	var text ="";
	var sql ="";
	let selection=0;
	if(today==0){
		//查看今日排行榜
		
		text = "#e#b         ┏   " + tz13 + "《今日单人竞速》" + tz13 + "   ┓ #r\r\n";
		for(var i = 0; i < bossName2.length; i++) {
			text += "\t\t\t#r#L" + i + "#" + tz11 + bossName2[i] + tz11 + "#l\r\n";
		}
		text += "\r\n#e#b         ┗                      ┛\r\n";
		selection =npc.askMenuS(text);
		
		sql = "SELECT c.endtime,c.characterid,c.name,MIN(c.time) time from (SELECT *,count(id) count  from bossrank where boss=? and TO_DAYS(endtime)=TO_DAYS(now()) GROUP BY time    limit 58) as c where c.count>1 GROUP BY name order by time";
		var resultList = player.customSqlResult(sql,bossName2[selection]);
		var text = "\t\t\t#e#d "+icon2[selection]+" BOSS"+bossName2[selection]+"击杀排行 #k#n\r\n\r\n";
	}else if(today ==1){
		//查看昨日排行榜
		text = "#e#b         ┏   " + tz13 + "《昨日单人竞速》" + tz13 + "   ┓ #r\r\n";
		for(var i = 0; i < bossName2.length; i++) {
			text += "\t\t\t#r#L" + i + "#" + tz11 + bossName2[i] + tz11 + "#l\r\n";
		}
		text += "\r\n#e#b         ┗                      ┛\r\n";
		selection =npc.askMenuS(text);
		
		sql = "SELECT c.endtime,c.characterid,c.name,MIN(c.time) time from (SELECT *,count(id) count  from bossrank where boss=? and TO_DAYS(endtime)>=TO_DAYS(now())-1 and TO_DAYS(endtime)<TO_DAYS(now()) GROUP BY time    limit 58) as c where c.count>1 GROUP BY name order by time";
		var resultList = player.customSqlResult(sql,bossName2[selection]);
		text = "\t\t\t#e#d"+icon2[selection]+" BOSS"+bossName2[selection]+"击杀排行 #k#n\r\n\r\n";
	}
	
	text += "\t\t#e名次#n\t\t#e 队长昵称#n#e\t\t 时间#n #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(today==1){
			text+="\t  #L"+i+"#";
		}else{
			text+="\t\t";
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "" + rank + "\t\t\t ";
		// 填充名字空格
		text += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t" + result.get("time") ;
		if(today==1){
			
			text += "#l";
		}
		text+="\r\n";
	}
	let duiwu=npc.askMenuS(text);
	text = "\t\t\t#e#d "+icon2[selection]+" BOSS"+bossName2[selection]+"击杀信息 #k#n\r\n\r\n";
	text +="#r#e通关信息如下:\r\n";
	//查询队伍信息
	sql = "SELECT * from bossrank where time=? and boss=?";
	var resultList = player.customSqlResult(sql,resultList.get(duiwu).get("time"),bossName2[selection]);
	text +="\t#b队伍排名为:"+(duiwu+1)+" 名\r\n#r";
	text +="\t#b通关时长为:"+resultList.get(0).get("time")+" 秒\r\n#r";
	
	
	var flag=0;
	for(var i=0;i<resultList.size();i++){
		if(resultList.get(i).get("name")==player.getName()){
			flag=1;
			if(today==1){
				text+="\r\n";
				text+="#L"+i+"#队员名称: "+resultList.get(i).get("name")+" 领取奖励#l\r\n";
				text+="\r\n";
			}else{
				text+="\t队员名称: "+resultList.get(i).get("name")+"\r\n";
			}
		}else{
			text+="\t队员名称: "+resultList.get(i).get("name")+"\r\n";
		}
	}
	text += "#L999#奖励说明#l\r\n\r\n";
	if(flag==0){
		text+="#b很遗憾，你不在当前的队伍内";
	}

	let duiyuan=npc.askMenuS(text);
	if(duiyuan==999){
		var txt="\r\n";
			txt+="";
			txt+="#r#e尊敬的玩家你好，当前BOSS通关奖励如下：.#k\r\n\n";  
			txt+="#b每天晚上0点清空排行榜.\r\n排行榜前50名都可领取对应奖励\r\n";
			txt+="#r注意:本排行榜严禁多账号多角色刷奖.查到会封停所有该IP旗下账号.\r\n";
			txt+="#r注意:突破奖励会直接加在身上的武器上\r\n";
			txt+="#r特别注意:队伍六人的时候领取最大化.  不足六人的时候每个人领取的突破也不会少\r\n";
		if(selection==0){
			//地狱威尔
			txt+="第一名:   奖励  #v2614079#突破 1500W\r\n";
			txt+="第二名:   奖励  #v2614079#突破 1250W\r\n";
			txt+="第三名:   奖励  #v2614079#突破 1000W\r\n";
			txt+="4-10名:   奖励  #v2614079#突破 750W\r\n";
			txt+="10-50名:  奖励  #v2614079#突破 500W\r\n";
			
		}else if(selection==1){
			//黑魔法师
			txt+="第一名:   奖励  #v2614079#突破 1750W\r\n";
			txt+="第二名:   奖励  #v2614079#突破 1500W\r\n";
			txt+="第三名:   奖励  #v2614079#突破 1250W\r\n";
			txt+="4-10名:   奖励  #v2614079#突破 1000W\r\n";
			txt+="10-50名:  奖励  #v2614079#突破 750W\r\n";
		}else if(selection==2){
			//地狱黑魔法师
			txt+="第一名:   奖励  #v2614079#突破 2500W\r\n";
			txt+="第二名:   奖励  #v2614079#突破 2000W\r\n";
			txt+="第三名:   奖励  #v2614079#突破 1500W\r\n";
			txt+="4-10名:   奖励  #v2614079#突破 1250W\r\n";
			txt+="10-50名:  奖励  #v2614079#突破 1000W\r\n";
		}
		npc.say(txt);
	}else{
		var wq=player.getInventorySlot(-1,-11);
		if(wq==null){
			npc.say("请佩戴武器");
		}else if(getEventCount("组队"+bossName2[selection])>0){
			npc.say("请不要重复领取");
		}else{
			var onlyIdString=wq.toString().substr(wq.toString().indexOf("EntId") + 6, 20);
			onlyId=parseInt(onlyIdString);
			if(setEventCount("组队"+bossName2[selection]+onlyId)>0){
				npc.say("该武器已经领取过今日的组队BOSS "+bossName2[selection]+" 排名奖励了，请不要重复领取。");
			}else{
				setEventCount("组队"+bossName2[selection]+onlyId,1,1);
				setEventCount("组队"+bossName2[selection],1,1);
				
				rank=duiwu+1;
				//细分通关奖励
				if(selection==0){
					//地狱威尔
					if(rank==1){
						wq.setLimitBreak(wq.getLimitBreak()+30000000/2);
					}else if(rank==2){
						wq.setLimitBreak(wq.getLimitBreak()+25000000/2);
					}else if(rank==3){
						wq.setLimitBreak(wq.getLimitBreak()+20000000/2);
					}else if(rank>=4 && rank<=10){
						wq.setLimitBreak(wq.getLimitBreak()+15000000/2);
					}else if(rank>=11 && rank<=50){
						wq.setLimitBreak(wq.getLimitBreak()+10000000/2);
					}						
				}else if(selection==1){
					//黑魔法师
					if(rank==1){
						wq.setLimitBreak(wq.getLimitBreak()+35000000/2);
					}else if(rank==2){
						wq.setLimitBreak(wq.getLimitBreak()+30000000/2);
					}else if(rank==3){
						wq.setLimitBreak(wq.getLimitBreak()+25000000/2);
					}else if(rank>=4 && rank<=10){
						wq.setLimitBreak(wq.getLimitBreak()+20000000/2);
					}else if(rank>=11 && rank<=50){
						wq.setLimitBreak(wq.getLimitBreak()+15000000/2);
					}
				}else if(selection==2){
					//地狱黑魔法师
					if(rank==1){
						wq.setLimitBreak(wq.getLimitBreak()+50000000/2);
					}else if(rank==2){
						wq.setLimitBreak(wq.getLimitBreak()+40000000/2);
					}else if(rank==3){
						wq.setLimitBreak(wq.getLimitBreak()+30000000/2);
					}else if(rank>=4 && rank<=10){
						wq.setLimitBreak(wq.getLimitBreak()+25000000/2);
					}else if(rank>=11 && rank<=50){
						wq.setLimitBreak(wq.getLimitBreak()+20000000/2);
					}
				}
									
				player.updateItem(-11,wq);
								
				npc.say("领取成功，当前为 BOSS"+bossName2[selection]+"你的昨日排名为:"+rank);
			}
		}
	}
	
	
}else if(se ==2){
	var text = "#e#b            " + tz13 + "BOSS竞速奖励" + tz13 + "    #r\r\n";
	for(var i = 0; i < bossName2.length; i++) {
		text += "\t\t\t#r#L" + i + "#" + tz11 + bossName2[i] + tz11 + "#l\r\n";
	}
	let bo =npc.askMenuS(text);
	text = "#e#b            " + tz13 + "BOSS"+bossName2[bo]+"竞速奖励" + tz13 + "    #r\r\n";
	text+="\t\t#L0#查看当前"+icon2[bo]+"boss奖励#l\r\n\r\n";
	text+="\t\t#L1#领取奖励#l\r\n";
	
	let selection =npc.askMenuS(text);
	
	if(selection==0){
		var txt="\r\n";
			txt+="";
			txt+="#r#e尊敬的玩家你好，当前BOSS通关奖励如下：.#k\r\n\n";  
			txt+="#b每天晚上0点清空排行榜.\r\n排行榜前50名都可领取对应奖励\r\n";
			txt+="#r注意:本排行榜严禁多账号多角色刷奖.查到会封停所有该IP旗下账号.\r\n";
			txt+="#r注意:突破奖励会直接加在身上的武器上\r\n";
		if(bo==0){
			//地狱威尔
			txt+="第一名:   奖励  #v2614079#突破 3000W\r\n";
			txt+="第二名:   奖励  #v2614079#突破 2500W\r\n";
			txt+="第三名:   奖励  #v2614079#突破 2000W\r\n";
			txt+="4-10名:   奖励  #v2614079#突破 1500W\r\n";
			txt+="10-50名:  奖励  #v2614079#突破 1000W\r\n";
			
		}else if(bo==1){
			//黑魔法师
			txt+="第一名:   奖励  #v2614079#突破 3500W\r\n";
			txt+="第二名:   奖励  #v2614079#突破 3000W\r\n";
			txt+="第三名:   奖励  #v2614079#突破 2500W\r\n";
			txt+="4-10名:   奖励  #v2614079#突破 2000W\r\n";
			txt+="10-50名:  奖励  #v2614079#突破 1500W\r\n";
		}else if(bo==2){
			//地狱黑魔法师
			txt+="第一名:   奖励  #v2614079#突破 5000W\r\n";
			txt+="第二名:   奖励  #v2614079#突破 4000W\r\n";
			txt+="第三名:   奖励  #v2614079#突破 3000W\r\n";
			txt+="4-10名:   奖励  #v2614079#突破 2500W\r\n";
			txt+="10-50名:  奖励  #v2614079#突破 2000W\r\n";
		}
		npc.say(txt);
		
	}else if(selection ==1){
		var sql = "SELECT c.endtime,c.characterid,c.name,MIN(c.time) time from (SELECT *,count(id) count  from bossrank where boss=? and TO_DAYS(endtime)>=TO_DAYS(now())-1 and TO_DAYS(endtime)<TO_DAYS(now()) GROUP BY time    limit 58) as c where c.count=1 GROUP BY name order by time";
		var resultList = player.customSqlResult(sql,bossName2[bo]);
		var rank = 0;
		for(var i = 0; i < resultList.size(); i++) {
			
			var result = resultList.get(i);
			if(resultList.get(i).get("characterid")==player.getId()){
				//确认排名
				rank=i+1;
				break;
			}
			
		}
		if(rank==0){
			npc.say("你今天没有上榜哦,请点开榜单查询是否上榜~");
		}else{
			var wq=player.getInventorySlot(-1,-11);
			if(wq==null){
				npc.say("请佩戴武器");
			}else if(getEventCount(bossName2[bo])>0){
				npc.say("请不要重复领取");
			}else{
				var onlyIdString=wq.toString().substr(wq.toString().indexOf("EntId") + 6, 20);
				onlyId=parseInt(onlyIdString);
				if(setEventCount(bossName2[bo]+onlyId)>0){
					npc.say("该武器已经领取过今日的BOSS "+bossName2[bo]+" 排名奖励了，请不要重复领取。");
				}else{
					setEventCount(bossName2[bo]+onlyId,1,1);
					setEventCount(bossName2[bo],1,1);
					var beishu=1;
					if(wq.getLimitBreak()>=10000000000){
						beishu=10;
					}
					//细分通关奖励
					if(bo==0){
						//地狱威尔
						if(rank==1){
							wq.setLimitBreak(wq.getLimitBreak()+30000000);
						}else if(rank==2){
							wq.setLimitBreak(wq.getLimitBreak()+25000000);
						}else if(rank==3){
							wq.setLimitBreak(wq.getLimitBreak()+20000000);
						}else if(rank>=4 && rank<=10){
							wq.setLimitBreak(wq.getLimitBreak()+15000000);
						}else if(rank>=11 && rank<=50){
							wq.setLimitBreak(wq.getLimitBreak()+10000000);
						}						
					}else if(bo==1){
						//黑魔法师
						if(rank==1){
							wq.setLimitBreak(wq.getLimitBreak()+35000000);
						}else if(rank==2){
							wq.setLimitBreak(wq.getLimitBreak()+30000000);
						}else if(rank==3){
							wq.setLimitBreak(wq.getLimitBreak()+25000000);
						}else if(rank>=4 && rank<=10){
							wq.setLimitBreak(wq.getLimitBreak()+20000000);
						}else if(rank>=11 && rank<=50){
							wq.setLimitBreak(wq.getLimitBreak()+15000000);
						}
					}else if(bo==2){
						//地狱黑魔法师
						if(rank==1){
							wq.setLimitBreak(wq.getLimitBreak()+50000000);
						}else if(rank==2){
							wq.setLimitBreak(wq.getLimitBreak()+40000000);
						}else if(rank==3){
							wq.setLimitBreak(wq.getLimitBreak()+30000000);
						}else if(rank>=4 && rank<=10){
							wq.setLimitBreak(wq.getLimitBreak()+25000000);
						}else if(rank>=11 && rank<=50){
							wq.setLimitBreak(wq.getLimitBreak()+20000000);
						}
					}
										
					player.updateItem(-11,wq);
									
					npc.say("领取成功，当前为 BOSS"+bossName2[bo]+"你的昨日排名为:"+rank);
				}
				
			}
		}
	}
}else if(se==3){
	var text = "#e#b            " + tz13 + "BOSS竞速奖励" + tz13 + "    #r\r\n";
	for(var i = 0; i < bossName2.length; i++) {
		text += "\t\t\t#r#L" + i + "#" + tz11 + bossName2[i] + tz11 + "#l\r\n";
	}
	let bo =npc.askMenuS(text);
	text = "#e#b            " + tz13 + "BOSS"+bossName2[bo]+"竞速奖励" + tz13 + "    #r\r\n";
	text+="\t\t#L0#查看当前"+icon2[bo]+"boss奖励#l\r\n\r\n";
	text+="\t\t#L1#领取奖励#l\r\n";
	
	let selection =npc.askMenuS(text);
	
	if(selection==0){
		var txt="\r\n";
			txt+="";
			txt+="#r#e尊敬的玩家你好，当前BOSS通关奖励如下：.#k\r\n\n";  
			txt+="#b每天晚上0点清空排行榜.\r\n排行榜前50名都可领取对应奖励\r\n";
			txt+="#r注意:本排行榜严禁多账号多角色刷奖.查到会封停所有该IP旗下账号.\r\n";
			txt+="#r注意:突破奖励会直接加在身上的武器上\r\n";
		if(bo==0){
			//地狱威尔
			txt+="第一名:   奖励  #v2614079#突破 3000W\r\n";
			txt+="第二名:   奖励  #v2614079#突破 2500W\r\n";
			txt+="第三名:   奖励  #v2614079#突破 2000W\r\n";
			txt+="4-10名:   奖励  #v2614079#突破 1500W\r\n";
			txt+="10-50名:  奖励  #v2614079#突破 1000W\r\n";
			
		}else if(bo==1){
			//黑魔法师
			txt+="第一名:   奖励  #v2614079#突破 3500W\r\n";
			txt+="第二名:   奖励  #v2614079#突破 3000W\r\n";
			txt+="第三名:   奖励  #v2614079#突破 2500W\r\n";
			txt+="4-10名:   奖励  #v2614079#突破 2000W\r\n";
			txt+="10-50名:  奖励  #v2614079#突破 1500W\r\n";
		}else if(bo==2){
			//地狱黑魔法师
			txt+="第一名:   奖励  #v2614079#突破 5000W\r\n";
			txt+="第二名:   奖励  #v2614079#突破 4000W\r\n";
			txt+="第三名:   奖励  #v2614079#突破 3000W\r\n";
			txt+="4-10名:   奖励  #v2614079#突破 2500W\r\n";
			txt+="10-50名:  奖励  #v2614079#突破 2000W\r\n";
		}
		npc.say(txt);
		
	}else if(selection ==1){
		var sql = "SELECT c.endtime,c.characterid,c.name,MIN(c.time) time from (SELECT *,count(id) count  from bossrank where boss=? and TO_DAYS(endtime)>=TO_DAYS(now())-1 and TO_DAYS(endtime)<TO_DAYS(now()) GROUP BY time  order by time  limit 58) as c where c.count>1 GROUP BY name";
		var resultList = player.customSqlResult(sql,bossName2[bo]);
		var rank = 0;
		for(var i = 0; i < resultList.size(); i++) {
			
			var result = resultList.get(i);
			if(resultList.get(i).get("characterid")==player.getId()){
				//确认排名
				rank=i+1;
				break;
			}
			
		}
		if(rank==0){
			npc.say("你今天没有上榜哦,请点开榜单查询是否上榜~");
		}else{
			var wq=player.getInventorySlot(-1,-11);
			if(wq==null){
				npc.say("请佩戴武器");
			}else if(getEventCount(bossName2[bo])>0){
				npc.say("请不要重复领取");
			}else{
				var onlyIdString=wq.toString().substr(wq.toString().indexOf("EntId") + 6, 20);
				onlyId=parseInt(onlyIdString);
				if(setEventCount(bossName2[bo]+onlyId)>0){
					npc.say("该武器已经领取过今日的BOSS "+bossName2[bo]+" 排名奖励了，请不要重复领取。");
				}else{
					setEventCount(bossName2[bo]+onlyId,1,1);
					setEventCount(bossName2[bo],1,1);
					var beishu=1;
					if(wq.getLimitBreak()>=10000000000){
						beishu=10;
					}
					//细分通关奖励
					if(bo==0){
						//地狱威尔
						if(rank==1){
							wq.setLimitBreak(wq.getLimitBreak()+30000000);
						}else if(rank==2){
							wq.setLimitBreak(wq.getLimitBreak()+25000000);
						}else if(rank==3){
							wq.setLimitBreak(wq.getLimitBreak()+20000000);
						}else if(rank>=4 && rank<=10){
							wq.setLimitBreak(wq.getLimitBreak()+15000000);
						}else if(rank>=11 && rank<=50){
							wq.setLimitBreak(wq.getLimitBreak()+10000000);
						}						
					}else if(bo==1){
						//黑魔法师
						if(rank==1){
							wq.setLimitBreak(wq.getLimitBreak()+35000000);
						}else if(rank==2){
							wq.setLimitBreak(wq.getLimitBreak()+30000000);
						}else if(rank==3){
							wq.setLimitBreak(wq.getLimitBreak()+25000000);
						}else if(rank>=4 && rank<=10){
							wq.setLimitBreak(wq.getLimitBreak()+20000000);
						}else if(rank>=11 && rank<=50){
							wq.setLimitBreak(wq.getLimitBreak()+15000000);
						}
					}else if(bo==2){
						//地狱黑魔法师
						if(rank==1){
							wq.setLimitBreak(wq.getLimitBreak()+50000000);
						}else if(rank==2){
							wq.setLimitBreak(wq.getLimitBreak()+40000000);
						}else if(rank==3){
							wq.setLimitBreak(wq.getLimitBreak()+30000000);
						}else if(rank>=4 && rank<=10){
							wq.setLimitBreak(wq.getLimitBreak()+25000000);
						}else if(rank>=11 && rank<=50){
							wq.setLimitBreak(wq.getLimitBreak()+20000000);
						}
					}
										
					player.updateItem(-11,wq);
									
					npc.say("领取成功，当前为 BOSS"+bossName2[bo]+"你的昨日排名为:"+rank);
				}
				
			}
		}
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
	
