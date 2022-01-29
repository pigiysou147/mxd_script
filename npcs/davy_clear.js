if (player.getId() == party.getLeader()) {
		
	player.loseItem(4001117);
	player.loseItem(4001120);
	player.loseItem(4001121);
	player.loseItem(4001122);

	let event = npc.getEvent("Pirate");
	let members = party.getLocalMembers();
		
	for (let i = 0; i < members.length; i++) {
		
		if(members[i].getPQLog("海盗组队奖励")<2){
			if(members[i].getId()==party.getLeader()){
				members[i].addPQLog("带队次数",1,1);
			}

			members[i].gainItem(4001455, 1);
			members[i].addPQLog("活力",30,999);
			members[i].addPQLog("海盗组队奖励",1,1);
			members[i].modifyCashShopCurrency(1,1500);
			members[i].gainItem(2614052,1);//突破50W
			members[i].gainItem(4310028,3);
			//增加组队点数	
			var zudui = parseInt((Math.random() * 3+1)*5000) ;
			members[i].updateQuestRecordEx(7907,"point",members[i].getIntQuestRecordEx(7907,"point")+zudui );
			members[i].dropMessage(1,"获得了组队点数："+zudui);
			
			npc.broadcastNoticeWithoutPrefix("【海盗组队奖励】 玩家  "+members[i].getName()+" 完成了海盗组队任务，获得了一系列的奖励");
		}else{
			members[i].	dropMessage(1,"超过次数无法获得奖励了");
		}
		members[i].changeMap(251010404);
	}
}else{
	npc.say("请让组长和我交谈");
}
