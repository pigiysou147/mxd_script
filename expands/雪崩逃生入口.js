/**
 *	雪崩逃生入口 作者：几里 QQ：315342975
 **/
if(map.getId() == 993000700){
	if(player.isGm()){
		let YN = npc.askYesNo("是否开启雪崩逃生活动？",9001064);
		if(YN == 1){
			if(npc.makeEvent("JILI_XBTS", false, player)){
				updateActiveStatus("雪崩逃生",0);
				map.blowWeather(5120000,"雪崩逃生活动马上开启，请大家等待入场NPC的出现");
				npc.broadcastPlayerNotice(10,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
				npc.broadcastPlayerNotice(13,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
				npc.broadcastPlayerNotice(12,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
				npc.broadcastPlayerNotice(13,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
				npc.broadcastPlayerNotice(10,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
				npc.say("开启成功",9001064);
			}else{
				npc.say("开启失败",9001064);
				
			}
		}else{
			npc.say("想开启再来找我",9001064);
		}
	}else{
		npc.say("#r请等待GM开启活动，倒计时结束时将会出现入场NPC，请留意！",9001064);
	}
}else{
	
}


function updateActiveStatus(name,status){
    var sql = "update jili_active_status set status = '"+status+"' where activeName = '" + name + "';";   
    player.customSqlUpdate(sql);
}