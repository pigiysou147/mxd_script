

let mapId = map.getId();
switch (mapId){
	case 706050200:
		player.changeMap(706050300,0);
		portal.showHint("冲鸭！！！(请一直连按跳跃键)", 250, 5);
		break;
}
		
portal.abortWarp();

