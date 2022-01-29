

let mapId = map.getId();
if(mapId == 911003400){
	player.changeMap(911003600,0);
	portal.showHint("我要赶快跑了！我可是要成为跑酷王的男人！", 250, 5);
}else if(mapId == 911003600){
	player.changeMap(911001300,0);
	portal.showHint("wow,我一定会拿到第一的！", 250, 5);
}
portal.abortWarp();
