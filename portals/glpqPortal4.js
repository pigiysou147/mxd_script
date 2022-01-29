var event = portal.getEvent("CWKPQ");
    if (event != null) {
        if (parseInt(event.getVariable("glpq4"))!=5 ) {
            player.dropMessage(1,"门户还没有打开。");
			portal.abortWarp();
        } else {
            player.changeMap(610030500, 0);
        }
    }
