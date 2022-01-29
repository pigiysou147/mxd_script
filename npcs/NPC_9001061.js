

/* global npc, player, map */
if (map.getId()==240080500){
	let event = npc.getEvent("party_dragon_rider");
	if(event==null){
		  npc.say("副本错误 ，请重新进入");
	}else{
			
		let stage = parseInt(map.getId() - 240080000) / 100;  
		let clear = event.getVariable(stage + "stageclear");
            if (clear) {
				let members = party.getLocalMembers();
				//npc.sayNext("你们已经完成了所有的任务，现在把你们传送到市场"+members.length);
				//var txt="";
				for (let i = 0; i < members.length; i++) {
					//txt+=members[i].getName();
					
					if(members[i].getPQLog("御龙魔")<2){
                        members[i].addPQLog("御龙魔");
						if(members[i].getId()==party.getLeader()){
							members[i].addPQLog("带队次数",1,1);
						}
                        //给奖励
						members[i].addPQLog("活力",20,999);
						members[i].modifyCashShopCurrency(1,1500);
						members[i].gainItem(2614052,1);//突破50W
						members[i].gainItem(4310028,3);
						
						npc.broadcastNoticeWithoutPrefix("【御龙魔奖励】 玩家  "+members[i].getName()+" 完成了御龙魔组队任务，获得了一系列的奖励");
                        //增加组队点数	
						var zudui = parseInt((Math.random() * 3+1)*5000) ;
						members[i].updateQuestRecordEx(7907,"point",members[i].getIntQuestRecordEx(7907,"point")+zudui );
						members[i].dropMessage(1,"获得了组队点数："+zudui);

					}else{
						members[i].	dropMessage(1,"超过次数无法获得奖励了");
					}
					members[i].changeMap(240080000);
					
					
						
				}
				
                
            } else {
                npc.say("请清理掉最后的BOSS以完成任务");
            }
	}
	
}