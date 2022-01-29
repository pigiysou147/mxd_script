   var event = portal.getEvent("CWKPQ");
	if (event != null) {
		
		// map.revertReactor(6109000); //destroy the fake ones, non-GMS like or is this necessary
		// map.revertReactor(6109001); 
		// map.revertReactor(6109002); 
		// map.revertReactor(6109003); 
		// map.revertReactor(6109004);
		
        if (parseInt(event.getVariable("glpq3")) <5){
			map.blowWeatherEffectNotice("请先激活所有的祭坛！", 162,15000);
		} else if (parseInt(event.getVariable("glpq3")) == 5) {
			party.changeMap(610030400, 0);
			map.reset();
			event.setVariable("glpq3",0);
            event.setVariable("pass_number", parseInt(event.getVariable("pass_number")) + 1);
			var pass_number = event.getVariable("pass_number");
			map.blowWeatherEffectNotice("第"+pass_number+"个冒险家通过了!", 162,15000);
            if (parseInt(event.getVariable("pass_number")) == 5) {
                map.blowWeatherEffectNotice("所有玩家都通过了，请从左下角移动到下一关卡去。", 162,15000);
				map.screenEffect("quest/party/clear");//通过
				//player.changeMap(610030400, 0);
               // pi.playFieldSound("Party1/Clear");
               // pi.setObjectState("3pt");
            }
        }
    }
 
