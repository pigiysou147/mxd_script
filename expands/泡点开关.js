/**
 * 几里
 
 * 进自由自动泡点说明:
 请在你传送到自由的脚本处 加上以下代码
 
		if(player.getChannel() == 1){
			var event= npc.getEvent("JILI_PDT");
			if(event != null){
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
					player.showSystemMessage("[市场泡点]: 已加入泡点");
				}else{
					player.showSystemMessage("[市场泡点]: 已在泡点");
				}
			}
		}
**/


if(player.getChannel() == 1){
	
	var event= npc.getEvent("JILI_PDT");
	if(event != null){
		
		var players = event.getVariable("players");
		var playersName = "";
		var playerL = players.length;
		for(var i = 0; i<playerL ;i++){
			try{
				playersName += players[i].getId() + "."+players[i].getName()+"  "
			}catch(e){
				players.splice(i,1);
			}
		}
		
		var sss = "#r1.从外面传送回自由市场 自动开启泡点\r\n";
		sss += "#r2.掉线/换频道/换地图/进商城/进拍卖 会关闭泡点\r\n";
		sss += "#r3.如果上线就在自由市场 需要手动开启\r\n";
		
		if(player.isGm())
			sss += "#d当前泡点人员:\r\n"+playersName
		
		let selected = npc.askMenu(sss+"\r\n#L0##b开启泡点#l#L1#关闭泡点#l");
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
				npc.say("加入泡点");
			}else{
				npc.say("已在泡点")
			}
		
		}else{
			var players = event.getVariable("players");
			var index = -1;
			for(var i = 0; i<players.length ;i++){
				if(players[i].getId()  == player.getId()){
					index = i;
					break;
				}
			}
			if(index == -1){
				npc.say("未开启泡点");
			}else{
				players.splice(i,1);
				npc.say("关闭泡点")
			}
		}
	}
	
}else{
	npc.say("泡点功能暂时只能在1线市场哦")
}