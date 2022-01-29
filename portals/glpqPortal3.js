 var event = portal.getEvent("CWKPQ");
    if (event != null) {
        if (parseInt(event.getVariable("pass_number"))!=5&& !player.isGm() ) {
            player.dropMessage(1,"还没有5个冒险家通过,请5个冒险家通过后才会打开此门。");
			portal.abortWarp();
        } else {
            player.changeMap(610030400, 0);
        }
    }
