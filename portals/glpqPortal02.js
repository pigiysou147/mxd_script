 
    if (Math.floor(((player.getJob() % 1000) / 100) * 100 - (player.getJob() % 100)) == 200 || Math.floor(((player.getJob() % 1000) / 100) * 100 - (player.getJob() % 100)) == 199) {
        player.changeMap(610030521, 0);
     } else if (player.hasItem(4032012,1)){
		player.loseItem(4032012, 1);
		player.changeMap(610030521, 0);
    } else {
        player.showSystemMessage( "这个门是只有法师职业才可以进入的，如果你有绯红之心的话，我可以破例让你进入。");
        //showSystemMessage( "Your job: " + (((player.getJob() % 1000) / 100) * 100 - (player.getJob() % 100)));
    }
