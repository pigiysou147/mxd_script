 
	var event = portal.getEvent("CWKPQ"); 
    if (event != null) {
        if (event.getVariable("glpq1").equals("1")) {
            event.setVariable("glpq1", "2");
           // player.changeMap(map.getId(), 0);
			
            map.broadcastEventNotice("黑魔法师的力量变弱了，请到下一关卡去");
			map.blowWeatherEffectNotice("玩家 "+player.getName()+" 找到了隐藏在这里的门了，快跟随着他进去吧~！", 162,15000);
        //} else if (event.getVariable("glpq1").equals("2")) {
           party.changeMap(610030200, 0);
        } else {
            player.dropMessage(11, "请先让队长给杰克对话。");
			portal.abortWarp();
        }
    }
 
