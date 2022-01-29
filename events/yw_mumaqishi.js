// -几里


/**
 ** 配置项
 **/
var map = 806090000; //BOSS地图
var bossId = 9800119; //BOSSID
var bossHp = 10000000000;//BOSS血量
var mapX = 132; //X坐标
var mapY = 37; //Y坐标
var refushTime = 20;//死亡后刷新时间（分钟）


var mapObj;
var nextTime = "";



function init(attachment) {
	event.setVariable("map", map);
	event.startTimer("start",  1000);
	event.setVariable("nextTime", nextTime + "");
	nextTime = new Date().getTime();
	mapObj =event.getMap(map);
}


function timerExpired(key) {
    switch (key) {
        case "start":
			spawnMob();
			break;
    }
}

function spawnMob(){
	if(event.getChannel()==1){
		var boss = mapObj.makeMob(bossId);
		boss.changeBaseHp(bossHp);
		mapObj.spawnMob(boss, mapX,mapY);
		event.setVariable("isBorn", 1);
	}
}


function mobDied(mob) {
	if(mob.getDataId() == bossId){
		event.broadcastNoticeWithoutPrefix("BOSS被击杀 将于 "+refushTime+" 分钟后刷新");
		event.setVariable("isBorn", 0);
		nextTime = new Date().getTime() + refushTime * 60 * 1000;
		event.setVariable("nextTime", nextTime);
		event.startTimer("start",  refushTime * 60 * 1000);
	}
}


function playerChangedMap(player, destination) {
	if(destination.getId() != map)
		player.setEvent(null);
}