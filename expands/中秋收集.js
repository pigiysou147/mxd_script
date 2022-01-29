



var need =4310011;
var holdCount=player.getAmountOfItem(need);
var totalCount=getEventCount("雪花捐赠");
var sql="select sum(value) total from accounts_event where `event`='雪花捐赠'";
var worldCount=player.customSqlResult(sql).get(0).get("total");
var txt="\t\t\t#r#e#v"+need+"#公测收集活动#v"+need+"#\r\n\r\n";
txt+="你好，亲爱的回忆岛的岛民，辛苦了那么久终于迎来公测，快来参与我们的收集活动吧\r\n\r\n";
txt+="你可以收集#v"+need+"#来捐赠给我不断的解锁奖励每一个档位的奖励都不一样，解锁的越高奖励越好哦~\r\n\r\n";
txt+="全服目前收集的总雪晶值为:#b"+worldCount+"#r\r\n\r\n";
txt+="你目前收集的总雪晶值为:#b"+totalCount+"#r（捐赠达到3000可以领取）\r\n";
txt+="#b#L0#我要提交材料#l\t"
txt+="#b#L1#我要领取奖励#l\r\n"
let selection =npc.askMenu(txt,9330212);
if(selection==0){
	//捐赠逻辑
	let number=npc.askNumber("#r#e请输入要捐赠#v"+need+"#的个数；",1,1,holdCount);
	let sel =npc.askYesNo("#r#e你要捐赠的#v"+need+"# 个数为  #b"+number+" 个#r \r\n\r\n如果确认要捐赠请点击是");
	if(sel==1){
		player.loseItem(need,number);
		
		
		setEventCount("雪花捐赠",0,number);
		
		npc.say("捐赠成功");
	}
	
}else if(selection==1){
	
	txt="#r#e你目前收集的#v"+need+"#总个数为:#b"+totalCount+"#r\r\n\r\n";
	txt+="当个人捐赠#v"+need+"#达到5000以上的时候可以获得领取奖励的资格\r\n";
	txt+="#L0#领取全服收集总数50000奖励#l\r\n\r\n";
	txt+="目前进度:"+worldCount+"/"+50000+""+"  #B"+worldCount/50000*100+"[%]# "+parseInt(worldCount/50000*100)+"%\r\n\r\n";
	
	txt+="#L1#领取全服收集总数100000奖励#l\r\n\r\n";
	txt+="目前进度:"+worldCount+"/"+100000+""+"  #B"+worldCount/100000*100+"[%]# "+parseInt(worldCount/100000*100)+"%\r\n\r\n";
	
	txt+="#L2#领取全服收集总数200000奖励#l\r\n\r\n";
	txt+="目前进度:"+worldCount+"/"+200000+""+"  #B"+worldCount/200000*100+"[%]# "+parseInt(worldCount/200000*100)+"%\r\n\r\n";
	
	txt+="#L3#领取全服收集总数300000奖励#l\r\n\r\n";
	txt+="目前进度:"+worldCount+"/"+300000+""+"  #B"+worldCount/300000*100+"[%]# "+parseInt(worldCount/300000*100)+"%\r\n\r\n";
	
	txt+="#L4#领取全服收集总数500000奖励#l\r\n\r\n";
	txt+="目前进度:"+worldCount+"/"+500000+""+"  #B"+worldCount/500000*100+"[%]# "+parseInt(worldCount/500000*100)+"%\r\n\r\n";
	
	let ch=npc.askMenu(txt);
	if(totalCount<3000){
		npc.say("你收集的#v"+need+"#不够3000，还不可以领奖哦");
	}else{
		var item=player.getInventorySlot(-1,-11);
		if(item==null){
			npc.say("请佩戴武器");
		}else{
			if(ch==0){
				if(worldCount>50000){
					if(getEventCount("中秋收集5万奖励")==0){
						//5W的奖励
						if(item.getLimitBreak()>=10000000000){
							//100E以上的
							item.setLimitBreak(item.getLimitBreak()+5000000*2*8);
							player.updateItem(-11,item);
						}else{
							player.gainItem(2614078,2);
						}
						addHyPay(50);
						setEventCount("中秋收集5万奖励",0,1)
						npc.say("领取成功");
					}else{
						npc.say("请不要重复领取");
					}
					
				}else{
					npc.say("全服累计次数不足");
				}
				
				
			}else if(ch==1){
				//10W的奖励
				if(worldCount>100000){
					if(getEventCount("中秋收集10万奖励")==0){
						//5W的奖励
						if(item.getLimitBreak()>=10000000000){
							//100E以上的
							item.setLimitBreak(item.getLimitBreak()+5000000*3*8);
							player.updateItem(-11,item);
						}else{
							player.gainItem(2614078,3);
						}
						addHyPay(50);
						setEventCount("中秋收集10万奖励",0,1)
						npc.say("领取成功");
					}else{
						npc.say("请不要重复领取");
					}
					
				}else{
					npc.say("全服累计次数不足");
				}
				
			}else if(ch==2){
				//10W的奖励
				if(worldCount>200000){
					if(getEventCount("中秋收集20万奖励")==0){
						//5W的奖励
						if(item.getLimitBreak()>=10000000000){
							//100E以上的
							item.setLimitBreak(item.getLimitBreak()+5000000*4*8);
							player.updateItem(-11,item);
						}else{
							player.gainItem(2614078,4);
						}
						addHyPay(50);
						setEventCount("中秋收集20万奖励",0,1)
						npc.say("领取成功");
					}else{
						npc.say("请不要重复领取");
					}
					
				}else{
					npc.say("全服累计次数不足");
				}
				
			}else if(ch==3){
				//10W的奖励
				if(worldCount>300000){
					if(getEventCount("中秋收集30万奖励")==0){
						//5W的奖励
						if(item.getLimitBreak()>=10000000000){
							//100E以上的
							item.setLimitBreak(item.getLimitBreak()+5000000*6*8);
							player.updateItem(-11,item);
						}else{
							player.gainItem(2614078,6);
						}
						addHyPay(50);
						setEventCount("中秋收集30万奖励",0,1)
						npc.say("领取成功");
					}else{
						npc.say("请不要重复领取");
					}
					
				}else{
					npc.say("全服累计次数不足");
				}
				
			}else if(ch==4){
				//10W的奖励
				if(worldCount>500000){
					if(getEventCount("中秋收集50万奖励")==0){
						//5W的奖励
						
						addHyPay(100);
						setEventCount("中秋收集50万奖励",0,1)
						npc.say("领取成功");
					}else{
						npc.say("请不要重复领取");
					}
					
				}else{
					npc.say("全服累计次数不足");
				}
				
			}
		}
	}
}

function addHyPay(result) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, result, player.getAccountId());
	
	
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





// var event =npc.getEvent("JILI_PDT");
// //打开操作
// npc.makeEvent("JILI_PDT",true,"");
// //关闭操作
// //event.destroyEvent();

// npc.say((event.getVariables()));


// var txt="\r\n请选择你要强化的超级技能:\r\n";

// var skillList = player.customSqlResult("select * from characters_skills where   masterlevel=1 and characters_id =?",player.getId());
// for(var i=0;i<skillList.size();i++){
//     if(player.getSkillLevel(skillList.get(i).get("skillid"))==0)
//     txt+="#s"+skillList.get(i).get("skillid")+"#\t";
// }
// npc.askMenu(txt+player.getSkillMenu(25));