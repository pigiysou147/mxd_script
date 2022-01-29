

/**
 * 雪原跑旗开始事件
 *
 * @author 几里  315342975
 */

/*
 932200001 - 跑旗赛 - 正午雪原：准备地图
 932200002 - 跑旗赛 - 正午雪原：退出地图
 932200003 - 跑旗赛 - 夕阳雪原：准备地图
 932200004 - 跑旗赛 - 夕阳雪原：退出地图
 932200005 - 跑旗赛 - 深夜雪原：准备地图
 932200006 - 跑旗赛 - 深夜雪原：退出地图
 
 932200100 - 跑旗赛 - 正午雪原  12点 
 932200200 - 跑旗赛 - 夕阳雪原  19点
 932200300 - 跑旗赛 - 深夜雪原  21点
 */


let time = 2 * 60 * 1000;
let joinTime = 2 * 60 * 1000;
let allTime = 15 * 60*1000;//总时间
let map,map1;
let START_MAP = 932200005; 
let GAME_MAP = 932200300; 
let player;



function init(attachment) {
	player = attachment;
    map = event.getMap(START_MAP);
	map1 = event.getMap(GAME_MAP);
	event.startTimer("PD", time);
    map.showTimer(time/1000);
}

function removePlayer(playerId, changeMap) {
	player.setEvent(null);
	event.destroyEvent();
}

function playerDisconnected(player) {
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), false);
}

function timerExpired(key) {
    switch (key) {
        case "PD":
			map.spawnTempNpc(2060102,292,2366);
			map.blowWeather(5120000,"入场NPC已出现，大家赶紧入场吧！入场时间为2分钟");
			map1.blowWeather(5120000,"时间还剩 "+(allTime)/60000+"分钟！超过这个时间将不可以再领取奖励！");
			map1.showTimer(allTime/1000);
			player.customSqlUpdate("delete from `jili_game` where gametype = 3");
			player.customSqlUpdate("delete from `jili_flag`");
			updateActiveStatus("雪原跑旗",1);
			map.showTimer(joinTime/1000);
			event.startTimer("close", joinTime);
            break;
		case "close":
			map1.blowWeather(5120000,"时间还剩 "+(allTime-joinTime)/60000+"分钟！超过这个时间将不可以再领取奖励！");
			map.blowWeather(5120000,"入场时间已过，再无法入场！");
			map1.showTimer((allTime-joinTime)/1000);
			event.startTimer("finally", (allTime-joinTime));
			//event.destroyEvent();
			break;
		case "finally":
			map1.blowWeather(5120000,"活动结束！已无法再领取奖励！请自行打开口袋精灵出场！");
			updateActiveStatus("雪原跑旗",0);
			event.destroyEvent();
			break;
			
    }
}

function deinit() {
    removePlayer(player.getId(), true);
}


function updateActiveStatus(name,status){
    var sql = "update jili_active_status set status = '"+status+"' where activeName = '" + name + "';";   
    player.customSqlUpdate(sql);
}