
    //if (player.hasItem(4001260,7) && party != null && map.getEventMobCount() == 0) {
		if (player.hasItem(4001260,7) && map.getEventMobCount() == 0) {
        party.changeMap(925100100, 0);
        player.loseItem(4001260);
    } else {
		portal.abortWarp()
        player.dropMessage(11, "请收集老海盗箱子的钥匙7个并消灭所有怪物,否则无法通过!");
    }

