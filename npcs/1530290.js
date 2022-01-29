if(player.getChannel()!=1){
		  player.dropMessage(1,"泡点功能只能在1线才能正常使用哦。");
	}else{
		let play=[];
		let event = npc.getEvent("auto_point");
		event.setVariable("players",play);
		if (event != null) {
			var txt="";
			var count=0;
			let players = event.getVariable("players");
			let flag = false;
			
			for (var i=0;i<players.length;i++) {
				if(players[i]!=undefined && players[i]!=null){
					//txt+=players[i].getName()+" ";
					txt+=players[i];
					count++;
					//if (players[i].getId() == player.getId()) {
					//		flag = false;
					//		break;
					//}
				}
				
			}
			if (flag) {
					
					players.push(player);
					player.setEvent(event);
					player.dropMessage(1,"泡点已经开启");
				
			} else {
				  player.dropMessage(1,"已经进入泡点模式 当前泡点人数"+count+txt);
			}
		} else {
			   player.dropMessage(1,"泡点功能暂时无法使用。");
		}	
	}