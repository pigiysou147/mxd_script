




if (npc.makeEvent("JILI_OX", true, player) == null) {
	
	
	map.blowWeather(5120199,"开始报名参赛，点击<甘迪>报名吧");
	npc.broadcastPlayerNotice(10,"[次元活动]: <OX问答>活动入场倒计时2分钟，通过拍卖NPC活动入口进入OX问答地图~一定要点击入口进行报名哦 ");
	npc.broadcastPlayerNotice(12,"[次元活动]: <OX问答>活动入场倒计时2分钟，通过拍卖NPC活动入口进入OX问答地图~一定要点击入口进行报名哦 ");
	npc.broadcastPlayerNotice(12,"[次元活动]: <OX问答>活动入场倒计时2分钟，通过拍卖NPC活动入口进入OX问答地图~一定要点击入口进行报名哦 ");
	npc.broadcastPlayerNotice(13,"[次元活动]: <OX问答>活动入场倒计时2分钟，通过拍卖NPC活动入口进入OX问答地图~一定要点击入口进行报名哦 ");
	npc.broadcastPlayerNotice(13,"[次元活动]: <OX问答>活动入场倒计时2分钟，通过拍卖NPC活动入口进入OX问答地图~一定要点击入口进行报名哦 ");
	
	player.changeMap(910048100);
}

function updateActiveStatus(name,status){
    var sql = "update jili_active_status set status = '"+status+"' where activeName = '" + name + "';";   
    player.customSqlUpdate(sql);
}