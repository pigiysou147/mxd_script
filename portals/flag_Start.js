
let mapId = map.getId();
//判断是否是可以领奖的时间
if(getActiveStatus("雪原跑旗") == 2 || getActiveStatus("雪原跑旗") == 1){
	if(mapId == 932200300){
		player.teleportToPos(3, portal.getId(), new java.awt.Point(-1974, 2557));
		portal.showHint("快跑快跑！第一名一定是我的！", 250, 5);
		map.blowWeather(5120000,"[雪原跑旗] "+player.getName()+" 开始跑第 "+(getFlagCount()+1)+" 圈了！");
	}
}else{
	portal.showHint("活动时间已过！", 250, 5);
}
	portal.abortWarp();


function getFlagCount(){
    var sql = "select count from jili_flag where name = '"+player.getName()+"'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
		return result.get("count");
	}
	return 0;
}

function getActiveStatus (name){
    var sql = "select status from jili_active_status where activeName = '"+name+"'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
		var stage = result.get("status");
		return stage;
	}
	return 0;
}