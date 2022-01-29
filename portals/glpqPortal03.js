
 
    if (Math.floor(((player.getJob() % 1000) / 100) * 100 - (player.getJob() % 100)) == 400|| player.getJob()==3612) {
        player.changeMap(610030530, 0);
	} else if (player.hasItem(4032012,1)){
		player.loseItem(4032012, 1);
		player.changeMap(610030530, 0);
		map.reset();
    } else {
        player.showSystemMessage( "这个门是只有飞侠职业才可以进入的，如果你有绯红之心的话，我可以破例让你进入。");
        //showSystemMessage( "Your job: " + (((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)));
    }
 
