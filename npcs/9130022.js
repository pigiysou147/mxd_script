
		var str = "本能寺之仇不能忘！奈何我的力量太弱了。\r\n织田信长大人的仇只能你来帮我报了。\r\n帮我收集材料 我助你一臂之力。强化你的战国系列防具。:#v1152095##v1132159##v1152098#。#b\r\n";
		str += "#L1#      #r 战国系列防具 #k#l \r\n";
		//str += "#L2#      #r 强化法弗纳防具 #k#l \r\n";
		
		let selection =npc.askMenu(str);
	
		if(selection == 1) {
			player.runScript("csss战国1");

		}else if(selection==2){
			player.runScript("csss222");

		}



