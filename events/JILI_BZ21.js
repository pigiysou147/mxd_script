
/**
 * 副本: 搬砖本1
 * @author 
 */
let player;
let everyTime = 1 * 60 * 1000;//每一轮时间
let MAP_ID = 104010100;
let LOG = "banzhuan2";

//怪物
let mobs = Array(
	//怪物ID 物品ID 最小数量 最大数量 物品名字
	Array(100101,4310258,1,2,"復古幣"),
	Array(130101,4310258,1,2,"復古幣")
)
let gets = Array(0,0);//有几种怪物就写几个0

let mobsIds = Array();

function init(attachment) {
        
		for(let i = 0;i<mobs.length;i++){
			mobsIds.push(mobs[i][0]);
		}
	
        player = attachment;
        map = event.getMap(MAP_ID);
		map.clearMobs();
		map.resetMobsSpawns();
        player.changeMap(MAP_ID, 0);
		
		player.setEvent(event);
		player.addPQLog(LOG);
        event.startTimer("kick", everyTime);
		map.showTimer(everyTime/1000);
}

function mobDied(mob) {
	let mobId = mob.getDataId();
	let index = mobsIds.indexOf(mobId);
	if(index == -1){
		//没有找到怪物数据
	}else{
		//player.showSystemMessage("打死了"+mob);
		let ran = Math.floor(Math.random() * (mobs[index][2]+1) + (mobs[index][3]-mobs[index][2]));
		player.gainItem(mobs[index][1],ran);
		gets[index] += ran;  
		player.scriptProgressMessage("获取了 "+mobs[index][4]+" x " + ran + " ，总共:"+gets[index]);
		player.showSystemMessage("获取了 "+mobs[index][4]+" x " + ran + " ，总共:"+gets[index]);
		
	}
}


function removePlayer(playerId, changeMap) {
	let ss = "";
	for(let i = 0;i<mobs.length;i++){
		ss += mobs[i][4] + " x " + gets[i]+"\r\n";
	}
	player.dropAlertNotice("时间到！总共获得：\r\n"+ss);
	player.setEvent(null);
	player.changeMap(910000000);
	event.destroyEvent();
}

function playerDisconnected(player) {
        removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) { 
	if(destination.getId() != MAP_ID){
		removePlayer(player.getId(),false);
	}
}

function partyMemberDischarged(party, player) {
	removePlayer(player.getId(), true);
}

function timerExpired(key) {
        switch (key) {
			case "kick":
				removePlayer(player.getId(), true);
				break;
        }
}

function deinit() {
	player.setEvent(null);
}
