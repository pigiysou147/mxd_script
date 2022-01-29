 
    var event = portal.getEvent("CWKPQ");
    if (event != null) {
		
        if (parseInt(event.getVariable("glpq2"))==5 ) {
            party.changeMap(610030300, 0);
			map.blowWeatherEffectNotice("玩家 "+player.getName()+" 黑魔法师的力量变弱了，请到下一关卡去~！", 162,15000);
			//pi.getEventInstance().broadcastDropMessage(11,"黑魔法师的力量变弱了，请到下一关卡去");
        } else {
            map.blowWeatherEffectNotice( "要想继续前进，必须激活所有的祭坛。", 162,15000);
			portal.abortWarp();
        }
    }
 
