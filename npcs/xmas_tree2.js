


var need =4036087;
var holdCount=player.getAmountOfItem(need);
var totalCount=getEventCount("圣诞捐赠");
var sql="select sum(value) total from accounts_event where `event`='圣诞捐赠'";
var worldCount=player.customSqlResult(sql).get(0).get("total");
var txt="\t\t\t#r#e#v"+need+"#圣诞树装扮大作战#v"+need+"#\r\n\r\n";
txt+=" 你好，我是一棵光秃秃的圣诞树。。。\r\n\r\n";
txt+="你可以帮我去收集#v"+need+"#来装扮一下我吗？\r\n\r\n";
txt+="全服目前收集的总个数为:#b"+worldCount+"#r\r\n\r\n";
txt+="你目前收集的总个数为:#b"+totalCount+"#r\r\n\r\n";
txt+="#b#L0#我要提交材料#l\t"
txt+="#b#L1#我要领取奖励#l\r\n"
let selection =npc.askMenu(txt);
if(selection==0){
	//捐赠逻辑
	let number=npc.askNumber("#r#e请输入要捐赠#v"+need+"#的个数；",1,1,holdCount);
	let sel =npc.askYesNo("#r#e你要捐赠的#v"+need+"# 个数为  #b"+number+" 个#r \r\n\r\n如果确认要捐赠请点击是");
	if(sel==1){
		player.loseItem(need,number);
		
		
		setEventCount("圣诞捐赠",0,number);
		
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
	if(totalCount<5000){
		npc.say("你收集的#v"+need+"#不够5000，还不可以领奖哦");
	}else{
		var item=player.getInventorySlot(-1,-11);
		if(item==null){
			npc.say("请佩戴武器");
		}else{
			if(ch==0){
				if(worldCount>50000){
					if(getEventCount("收集5万奖励")==0){
						//5W的奖励
						if(item.getLimitBreak()>=10000000000){
							//100E以上的
							item.setLimitBreak(item.getLimitBreak()+5000000*2*8);
							player.updateItem(-11,item);
						}else{
							player.gainItem(2614078,2);
						}
						addHyPay(50);
						setEventCount("收集5万奖励",0,1)
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
					if(getEventCount("收集10万奖励")==0){
						//5W的奖励
						if(item.getLimitBreak()>=10000000000){
							//100E以上的
							item.setLimitBreak(item.getLimitBreak()+5000000*3*8);
							player.updateItem(-11,item);
						}else{
							player.gainItem(2614078,3);
						}
						addHyPay(50);
						setEventCount("收集10万奖励",0,1)
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
					if(getEventCount("收集20万奖励")==0){
						//5W的奖励
						if(item.getLimitBreak()>=10000000000){
							//100E以上的
							item.setLimitBreak(item.getLimitBreak()+5000000*4*8);
							player.updateItem(-11,item);
						}else{
							player.gainItem(2614078,4);
						}
						addHyPay(50);
						setEventCount("收集20万奖励",0,1)
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
					if(getEventCount("收集30万奖励")==0){
						//5W的奖励
						if(item.getLimitBreak()>=10000000000){
							//100E以上的
							item.setLimitBreak(item.getLimitBreak()+5000000*6*8);
							player.updateItem(-11,item);
						}else{
							player.gainItem(2614078,6);
						}
						addHyPay(50);
						setEventCount("收集30万奖励",0,1)
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
					if(getEventCount("收集50万奖励")==0){
						//5W的奖励
						
						addHyPay(100);
						setEventCount("收集50万奖励",0,1)
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