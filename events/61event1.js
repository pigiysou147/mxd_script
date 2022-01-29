/**
 * OX答题
 *
 * @author 几里  315342975
 */

let time = 300 * 1000; //准备时间

let player;
let players = [];

let map,map1,map2,before_map;
let flag=0;
function init(attachment) {
	player = attachment;
	
    before_map = event.getMap(104020111);
    map = event.getMap(104020110);
    map1 = event.getMap(200090010);
    map2 = event.getMap(200000111);
    before_map.blowWeather(5120199,"请等待"+time/1000+"秒后系统自动传送到怀旧天空之船地图~");
	
	
	event.setVariable("canPut", "1");
	
	event.startTimer("canPut0", time);
    event.setVariable("players", players);
	map.blowWeather(5120199,"开始报名进入天空之船，点击<售票员>报名吧");
}

function removePlayer(playerId, changeMap) {
	//player.setEvent(null);
	event.destroyEvent();
}


function mobDied(mob) {
	map1.blowWeather(5120199,"蝙蝠魔已经被消灭");
	event.startTimer("return", 20 * 1000);
	map1.showTimer(20);
	players = event.getVariable("players");
	for(var i = 0; i<players.length ;i++){
		if(players[i].getPQLog("蝙蝠魔1")<1){
			players[i].addPQLog("蝙蝠魔1");
			players[i].runScript("蝙蝠魔掉落");
		}
		
		
	}
	
}

function playerDisconnected(player) {
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
	
	switch (destination.getId()) {
			case 104020111:
					
					break;
			case 104020110:
					
					break;	
			case 200090010:
			
			break;
			default:
					//player died and respawned or clicked Nella to leave PQ
					//changeMap is false so player doesn't get re-warped to exit map
					removePlayer(player.getId(), false);
	}
	
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), false);
}

function timerExpired(key) {
    switch (key) {
       
		case "canPut0":
			event.setVariable("canPut", "0");
			map1.showTimer(300);
			map.showTimer(300);
			map.blowWeather(5120199,"停止报名，30秒后传送到61怀旧地图！");
			map1.blowWeather(5120199,"停止报名，30秒后传送到61怀旧地图！");
			event.startTimer("start", 300000);
			break;
       
		case "start":
			players = event.getVariable("players");
			for(var i = 0; i<players.length ;i++){
				try{
					players[i].setEvent(event);
					players[i].changeMap(200090010);
				}catch(e){
					
				}
			}
			map1.showTimer(30);
			map1.blowWeather(5120199,"30秒后蝙蝠魔到达战场！");
			event.startTimer("zhaohuan", 30 * 1000);
			
			
			
			break;
		case "zhaohuan":
		map1.showBalrogShip();
		let boss = map1.makeMob(8150000);
			boss.changeBaseHp(15000000000000000);
			boss.setForcedMobStat(265);
			map1.spawnMob(boss, 339, 148);
			
			map1.showTimer(3600);
			map1.blowWeather(5120199,"勇士们，你们有1个小时的时间来打败蝙蝠魔！");
			event.startTimer("return", 3600 * 1000);
		break;
       
		case "return":
			for(var i = 0; i<players.length ;i++){
				try{
					players[i].changeMap(200000111);
				}catch(e){
					
				}
			}
			map2.showTimer(20);
			map2.blowWeather(5120199,"感谢大家参与61怀旧活动~~蘑菇冒险岛与你们同在");
			event.startTimer("kick", 20 * 1000);
			break;
		case "kick":
			/*
			for(var i = 0; i<players.length ;i++){
				try{
					players[i].changeMap(910000000);
				}catch(e){
					
				}
			}
			*/
			event.destroyEvent();
			break;
			
    }
}

function deinit() {
    removePlayer(player.getId(), true);
}

