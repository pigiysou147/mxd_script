




if(npc.makeEvent("JILI_XYPQ", false, player)){
		updateActiveStatus("雪原跑旗",0);
		map.blowWeather(5120000,"雪原跑旗活动马上开启，请大家等待入场NPC的出现");
		npc.broadcastPlayerNotice(10,"[次元活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>或者频道<2>,通过营地<次元空间入口>进行参与！ ");
		npc.broadcastPlayerNotice(13,"[次元活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>或者频道<2>,通过营地<次元空间入口>进行参与！ ");
		npc.broadcastPlayerNotice(12,"[次元活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>或者频道<2>,通过营地<次元空间入口>进行参与！ ");
		npc.broadcastPlayerNotice(13,"[次元活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>或者频道<2>,通过营地<次元空间入口>进行参与！ ");
		npc.broadcastPlayerNotice(10,"[次元活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>或者频道<2>,通过营地<次元空间入口>进行参与！ ");
		
}

function updateActiveStatus(name,status){
    var sql = "update jili_active_status set status = '"+status+"' where activeName = '" + name + "';";   
    player.customSqlUpdate(sql);
}