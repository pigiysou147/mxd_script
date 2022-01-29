//706051000


let mapId = map.getId();
switch (mapId){
	case 911001300:
		if(player.hasItem(4001007,1)){
			player.changeMap(911001100,0);
			player.loseItem(4001007);
			portal.showHint("谢谢大蘑菇的通关凭证，我一定会加油的！", 250, 5);
		}else{
			portal.showHint("请到制高点找到大蘑菇获取通关凭证", 250, 5);
		}
		
		
		break;
	case 911001100:
		player.changeMap(911001200,0);
		portal.showHint("wow,我一定会拿到第一的！", 250, 5);
		break;
	case 911001000:
		player.changeMap(911001200,0);
		portal.showHint("wow,我一定会拿到第一的！", 250, 5);
		break;
	case 911001200:
		player.changeMap(911001400,0);
		portal.showHint("wow,我一定会拿到第一的！", 250, 5);
		break;
	case 911001400:
		player.changeMap(911000960,0);
		portal.showHint("wow,我一定会拿到第一的！", 250, 5);
		break;
}
		
portal.abortWarp();

