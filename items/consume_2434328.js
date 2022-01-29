







if(map.getId()!=811000012){
	player.changeMap(811000012);
}else{
	let boss = map.makeMob(9833376);
        boss.changeBaseHp(2000000000000000);
        //boss.setForcedMobStat(230, 2);
        map.spawnMob(boss, player.getPosition().getX(), player.getPosition().getY());
	
	player.loseItem(npc.getItemId(), 1);
	npc.say("成功召唤出了稻草人");
}
	
