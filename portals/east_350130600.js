
let mapId = map.getId();
if(mapId == 350130600){
	player.changeMap(350130700,3);
	portal.showHint("赶快逃离这个鬼地方！", 250, 5);
}else{
	
	player.gainItem(4032472,100);
	player.changeMap(993000800,1);
	portal.showHint("终于逃离了雪龟岛！", 250, 5);
	
}
portal.abortWarp();
