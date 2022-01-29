
    if (map.getEventMobCount() == 0) {
        party.changeMap(925100400, 0); //next
    } else {
		portal.abortWarp();
        player.dropMessage(11, "请消灭所有的怪物");
    }

