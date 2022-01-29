	if (player.getLevel()<=10){
		player.gainExp(999999);
	}else{
		npc.say("#e你的等级已经超过10级，不能使用该道具了哦\r\n该功能为某些职业无法到达10级制造");
	}