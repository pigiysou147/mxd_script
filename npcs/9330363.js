
		var str = "我要吃鸡腿！我要吃鸡腿！我要吃鸡腿！我要吃鸡腿！\r\n你有钱帮我在杂货店买鸡腿的话，我就帮你加强鲁塔比斯系列装备。:#v1003797##v1003797##v1042257#。#b\r\n";
		str += "#L1#      #r 强化法弗纳防具 #k#l \r\n";
		//str += "#L2#      #r 强化法弗纳防具 #k#l \r\n";
		
		let selection =npc.askMenu(str);
			if(selection == 1) {
			player.runScript("csss鲁塔比斯2");

		}else if(selection==2){
			player.runScript("csss鲁塔比斯22");

		}



