
let mapId = map.getId();
let maxCount = 3;//最大圈数就可以领奖
var nowcount=getFlagCount();
//判断是否是可以领奖的时间
var flag=getActiveStatus("雪原跑旗");
if(flag == 2 || flag == 1){
	if((nowcount+1)>=maxCount){
		//达到最大圈
		//记录
		player.teleportToPos(3, portal.getId(), new java.awt.Point(-2069, 817));
		player.runScript("雪原跑旗奖励");
		portal.showHint("我是最棒的！完成了挑战！", 250, 5);
	}else{
		if(mapId == 932200300){
			player.teleportToPos(3, portal.getId(), new java.awt.Point(-2410, 2557));
			portal.showHint("快跑快跑！第一名一定是我的！", 250, 5);
			map.blowWeather(5120000,"[雪原跑旗] "+player.getName()+" 完成第 "+(nowcount+1)+" 圈了！");
			updateFlagCount(nowcount+1)
		}
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

function updateFlagCount(count){
    var sql = "update jili_flag set count = '"+count+"'where name = '"+player.getName()+"'";   
    player.customSqlUpdate(sql);
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