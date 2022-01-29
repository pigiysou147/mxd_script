/**
 *	雪崩逃生入口 作者：几里 QQ：315342975
 **/

if(npc.makeEvent("JILI_XBTS", false, player)){
	updateActiveStatus("雪崩逃生",0);
	map.blowWeather(5120000,"雪崩逃生活动马上开启，请大家等待入场NPC的出现");
	npc.broadcastPlayerNotice(10,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
	npc.broadcastPlayerNotice(13,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
	npc.broadcastPlayerNotice(12,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
	npc.broadcastPlayerNotice(13,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
	npc.broadcastPlayerNotice(10,"[次元活动]: <雪崩逃生>活动入场倒计时2分钟，请各位玩家注意,,进入频道<1>,通过活动副本雪崩探险进入<次元空间入口>进行参与！ ");
	
}


function updateActiveStatus(name,status){
    var sql = "update jili_active_status set status = '"+status+"' where activeName = '" + name + "';";   
    player.customSqlUpdate(sql);
}