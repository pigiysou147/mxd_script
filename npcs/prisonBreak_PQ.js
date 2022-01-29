
if (map.getId()==921160700){
	let event = npc.getEvent("party_prison_break");
	if(event==null){
		  npc.say("副本错误 ，请重新进入");
	}else{
			
		let stage = parseInt((921160700 - 240080000) / 100);
		let clear = event.getVariable(stage + "stageclear");
            if (clear) {
                        npc.sayNext("你们已经完成了所有的任务，现在把你们传送到外面");
						let members = party.getLocalMembers();
							
						for (let i = 0; i < members.length; i++) {
							
							if(members[i].getPQLog("逃脱组队")<2){
								if(members[i].getId()==party.getLeader()){
									members[i].addPQLog("带队次数",1,1);
								}

								members[i].addPQLog("逃脱组队");
								//给奖励
								members[i].addPQLog("活力",30,999);
								members[i].modifyCashShopCurrency(1,3000);
								members[i].gainItem(2614053,1);//突破50W
								members[i].gainItem(4310028,5);
								//增加组队点数	
								npc.broadcastNoticeWithoutPrefix("【逃脱组队奖励】 玩家"+members[i].getName()+"   完成了逃脱组队任务，获得了一系列的奖励");
								
							}else{
								
								members[i].dropMessage(1,"超过次数无法获得奖励了");
							}
							
								
						}
						party.changeMap(211060200);
                        
                
            } else {
                npc.say("请清理掉最后的BOSS以完成任务");
            }
	}
	
}