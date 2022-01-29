
let event = portal.getEvent("Pirate");
if (event != null) {
	
        if(player.getAmountOfItem(4001122)>=50  && player.getAmountOfItem(4001120)>=5 ){
			event.setVariable("stage2","3");
			player.loseItem(4001122,50);
			player.loseItem(4001120,5);
		}
        if (event.getVariable("stage2").equals("3") ) {
                portal.playPortalSE();
                party.changeMap(925100400, 1);
        } else {
                player.showSystemMessage("请收集初级X5个、高级X50个、海盗凭证,否则无法通过!");
                portal.abortWarp();
        }
} else {
        player.dropAlertNotice("发生错误！");
        player.changeMap(990001100, 0);
} 