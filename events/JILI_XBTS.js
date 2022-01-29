

/**
 * 雪崩逃生开始事件
 *
 * @author 几里  315342975
 */

let time = 1 * 60 * 1000;
let joinTime = 5 * 60 * 1000;
let map;
let START_MAP= 993000700;
let player;



function init(attachment) {
	player = attachment;
    map = event.getMap(START_MAP);
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
			map.spawnTempNpc(2060102,632,53);
			map.blowWeather(5120000,"入场NPC已出现，大家赶紧逃离雪崩岛吧！入场时间为5分钟");
			updateActiveStatus("雪崩逃生",1);
			player.customSqlUpdate("delete from `jili_game` where gametype = 2");
			map.showTimer(joinTime/1000);
			event.startTimer("close", joinTime);
            break;
		case "close":
			map.blowWeather(5120000,"入场时间已过，再无法入场！");
			updateActiveStatus("雪崩逃生",0);
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