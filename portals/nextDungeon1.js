portal.abortWarp();


if (map.getEventMobCount() <= 0) {
	player.changeMap(map.getId()+1000, 0);
} else {
player.showSystemMessage("地图上还剩余："+map.getEventMobCount()+"怪物,请清理之后进入下一关卡.");
}	

