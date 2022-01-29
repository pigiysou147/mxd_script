let mapId = map.getId();
if(mapId == 921160700){
	portal.showHint("到这里已经回不了头了，请击败BOSS！", 250, 5);
}else{
	player.runScript("逃脱出口");
	
}
portal.abortWarp();