var reward = new Array(

	//Array(答对数量, 物品ID, 数量,"说明")   4031997
	Array(30, 4031997, 60,"蘑菇金币"), 
	Array(29, 4031997, 60,"蘑菇金币"),
	Array(28, 4031997, 60,"蘑菇金币"),
	Array(27, 4031997, 60,"蘑菇金币"),
	Array(26, 4031997, 60,"蘑菇金币"),
	Array(25, 4031997, 60,"蘑菇金币"),
	Array(24, 4031997, 60,"蘑菇金币"),
	Array(23, 4031997, 60,"蘑菇金币"),
	Array(22, 4031997, 60,"蘑菇金币"),
	Array(21, 4031997, 60,"蘑菇金币"),
	Array(20, 4031997, 60,"蘑菇金币"), 
	Array(19, 4031997, 60,"蘑菇金币"),
	Array(18, 4031997, 60,"蘑菇金币"),
	Array(17, 4031997, 60,"蘑菇金币"),
	Array(16, 4031997, 60,"蘑菇金币"),
	Array(15, 4031997, 60,"蘑菇金币"),
	Array(14, 4031997, 60,"蘑菇金币"),
	Array(13, 4031997, 60,"蘑菇金币"),
	Array(12, 4031997, 60,"蘑菇金币"),
	Array(11, 4031997, 60,"蘑菇金币"),
	Array(10, 4031997, 60,"蘑菇金币"), 
	Array(9, 4031997, 60,"蘑菇金币"),
	Array(8, 4031997, 60,"蘑菇金币"),
	Array(7, 4031997, 60,"蘑菇金币"),
	Array(6, 4031997, 60,"蘑菇金币"),
	Array(5, 4031997, 60,"蘑菇金币"),
	Array(4, 4031997, 60,"蘑菇金币"),
	Array(3, 4031997, 60,"蘑菇金币"),
	Array(2, 4031997, 60,"蘑菇金币"),
	Array(1, 4031997, 60,"蘑菇金币"),
	Array(0, 4031997, 2,"蘑菇金币")

)




var event = npc.getEvent("JILI_OX");
if(event != null){
	
	var playerReward = event.getVariable(player.getName()+"Reward");
	var playerGrade = event.getVariable(player.getName()+"Grade");
	if(playerReward == 0){
		player.changeMap(910048200);
		event.setVariable(player.getName()+"Reward",1);
		var item = null;
		for(var i = 0;i<reward.length;i++){
			if(reward[i][0] == playerGrade){
				item = reward[i];
				break;
			}
		}
		player.gainItem(item[1],10*playerGrade);
		//player.gainItem(2630091,playerGrade);
		
		
		npc.say("奖励给你啦，您的分数为"+playerGrade+"分，获得物品："+item[3]+" x "+(20*playerGrade)+"\r\n");
		
	}else{
		npc.say("你领取过奖励了，分数"+playerGrade);
	}
	
}else{
	npc.say("who are you?"+event)
}
