
var str = "61回忆杀活动"
var name ="61event1";
var event = npc.getEvent(name);
if(map.getId() == 104020110){
	if(event == null){
		npc.say(str+"\r\n暂未开启活动");
		if(player.isGm()){
			var YN = npc.askYesNo("是否开启61活动？")
			if(YN == 1){
				if (npc.makeEvent(name, true, player) == null) {
					npc.say("已经开始了");
					player.changeMap(104020111);
				}
			}
		}
	}else{
		
		var canPut = event.getVariable("canPut");
		if(canPut == "1"){
			var playersName = "";
			var players = event.getVariable("players");
			var playerL = players.length;
			for(var i = 0; i<playerL ;i++){
				try{
					playersName +="\r\n"+ players[i].getId() + "."+players[i].getName()+"  "
				}catch(e){
					players.splice(i,1);
				}
			}
			str +="\r\n"+playersName+"\r\n#L0#报名(目前报名总数:"+playerL+")#l"
			var selected = npc.askMenu(str);
			if(selected == 0){
				var players = event.getVariable("players");
				var index = -1;
				for(var i = 0; i<players.length ;i++){
					if(players[i].getId()  == player.getId()){
						index = i;
						break;
					}
				}
				if(index == -1){
					players.push(player);
					event.setVariable(player.getName()+"Grade",0);//分数
					event.setVariable(player.getName()+"Reward",0);//分数
					event.setVariable(player.getName()+"Kill",0);//错误次数
					player.changeMap(104020111);
					npc.say("报名成功");
				}else{
					npc.say("已经报名过了！请等待！")
				}
			}
		}else{
			npc.say("报名时间已过。")
		}
	}
}else if(map.getId() == 910048200){
	if(npc.askYesNo("参加完了活动，回市场吧？") == 1){
		player.changeMap(224000000);
	}
}else{
	npc.say("冒险家，加油答题吧！")
}
