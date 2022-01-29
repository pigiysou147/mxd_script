

var event = reactor.getEvent("CWKPQ");
if (event != null) {
	if (map.getId() == 610030200) {
		map.broadcastEventNotice("弓箭手祭坛已激活!");
		event.setVariable("glpq2", parseInt(event.getVariable("glpq2")) + 1);
		if (parseInt(event.getVariable("glpq2")) == 5) { //all 5 done
			map.screenEffect("quest/party/clear");//通过
			//map.playAmbientSound( "Party1/Clear");
			map.broadcastEventNotice( "所有祭坛都启动了，请到下一关卡去！");
			//rm.setObjectState("2pt");
		}
	} else if (map.getId() == 610030300) {
		map.broadcastEventNotice("弓箭手祭坛启动了!听到了齿轮转动的声音······!防御系统好像启动了!必须抓紧时间!");
		event.setVariable("glpq3", parseInt(event.getVariable("glpq3")) + 1);
		if (parseInt(event.getVariable("glpq3")) ==5) {
			map.screenEffect( "quest/party/clear");//通过
			//map.playAmbientSound( "Party1/Clear");
			map.broadcastEventNotice("所有祭坛都启动了，请到下一关卡去！");
			//rm.setObjectState("3pt");
		}
	}
}