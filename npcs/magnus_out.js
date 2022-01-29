















		var str = "勇士，麦格纳斯的喔多桑 , 这个畜生已经被黑魔法师磨灭了心智 \r\n我能帮你强化暴君防具，请帮我消灭这个逆子，还赫里希安一片安宁。#b\r\n";
		//str += "#L1#      #r 强化创世武器 #k#l \r\n";
		str += "#L2#      #r 强化暴君防具 #k#l \r\n";
		
		let selection =npc.askMenu(str);
	
		if(selection == 1) {
			player.runScript("cswq");

		}else if(selection==2){
			player.runScript("csss暴君");

		}



