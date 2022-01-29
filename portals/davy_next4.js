
    var eim = portal.getEvent("Pirate");
    if ( eim.getVariable("stage4")>="3") {
        party.changeMap(925100500,0);
    } else {
		portal.abortWarp();
        player.dropMessage(11, "请关闭所有入口,否则无法通过!");
    }

