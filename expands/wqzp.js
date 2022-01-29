

	let sel = npc.askYesNo("是否花费15W点券获取全属性50，攻击280的\r\n外星人武器#v2630143# X1 (7天时效)");
	if(sel==1){
		if(player.getCashShopCurrency(1)<150000){
		npc.say("需要15W点券才能获取");
		}else{
			player.modifyCashShopCurrency(1,-150000);
			player.gainItem(2630143,1);
			npc.say("获取成功");
		}
	}
	
	
	
	
	
		
