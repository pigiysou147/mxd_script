let mapId = map.getId();
if(mapId == 701220710){
	map.clearMobs();
	let mob = map.makeMob(9305653);
	mob.changeBaseHp(10000000000000000);
    map.spawnMob(mob, 345, 302);
	npc.say("稻草人已召唤,")
}else{
	npc.say("只能在#m701220710#使用,点击确定传送过去")
	player.changeMap(701220710);
}