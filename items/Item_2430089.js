








	var count =0;
	
	//player.updateQuestRecordEx(1477, "count", "0");
	//npc.say("今天的运气可真差，什么都没有拿到。");
	if(player.getQuestRecordEx(1477,"count")==null){
		
		player.updateQuestRecordEx(1477, "count", "0");
		
	}else{
		
	}
	
	count=parseInt(player.getQuestRecordEx(1477,"count"))+50;
	player.updateQuestRecordEx(1477, "count", count.toString());
	//npc.say(count);
	player.loseItem(npc.getItemId(), 1);
	
	
	
	
	
	
	
