









	//npc.say("今天的运气可真差，什么都没有拿到。");
	player.updateQuestRecordEx(1477, "count", "50");
	npc.say(player.getQuestRecordEx(1477));
	player.loseItem(npc.getItemId(), 1);
