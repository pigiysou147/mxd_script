
/**
 * 副本: 無限火力
 * @author 
 */

let mobList = Array(
		9300684,
		9300685,
		9300686,
		9300687,
		9300688,
		9300689,
		9300690,
		9300691,
		9300692,
		9300693
        );
		
let bossHpConfig = Array(
	//BOSS血量邏輯控制
	// 第幾層開始 初始血量 每層提高
	Array(1,1,1)
);

let rewardChance = 100;//每關獲得物品的幾率
let rewardRan = Array(
	//每關可能獲得的隨機獎勵
);

let mustLevel = 20;//多少階段一定獲得物品
let mustReward = Array(
	//隨機會獲得一個物品 通關mustLevel關后
);

		
let player;
let everyTime = 5 * 60 * 1000;//每一輪時間
let REWARD_SCRIPT_NAME = "無限火力獎勵"
let MAP_ID = 993000500;
let LOG = "經驗副本";
let random = Math.floor(Math.random() * mobList.length);
let level = 1;
let map;
let bossHp = 5;
function init(attachment) {
	event.setVariable("state", "1");
	event.setVariable("leader", "true");
        player = attachment;
        event.getMap(MAP_ID).clearMobs();
        player.changeMap(MAP_ID, 0);
        map = event.getMap(MAP_ID);
		makeMob();
		
		player.setEvent(event);
		player.addPQLog(LOG);
        event.startTimer("kick", everyTime);
		map.showTimer(everyTime/1000);
}
function mobDied(mob) {
    if(mobList.indexOf(mob.getDataId()) != -1){
		//通關
		random = Math.floor(Math.random() * mobList.length);
		event.stopTimer ("kick");
        event.startTimer("kick", everyTime);
		
		//獎勵
		if(level % mustLevel == 0){
			let ran = Math.floor(Math.random() * mustReward.length);
			makeMob();
			player.scriptProgressMessage("恭喜您通過第 "+(level/20)+" 關!運氣爆棚,獲得額外獎勵！");
		}else{		
			let ran = Math.floor(Math.random() * 100);
			if(ran < rewardChance){
				ran = Math.floor(Math.random() * rewardRan.length);
			var sql = "select needexp from levelup where id = '" + player.getLevel() + "'";
			var push = player.customSqlResult(sql);
			if (push.size() > 0) {
			var result = push.get(0);
			var getExpNeededForLevel = result.get("needexp");
	}
			if (player.getLevel() <= 180) {
			player.gainExp(getExpNeededForLevel * 0.4);
		} else if (player.getLevel() > 180 && player.getLevel() <= 200) {
			player.gainExp(getExpNeededForLevel * 0.2);
		} else if (player.getLevel() > 200 && player.getLevel() <= 210) {
			player.gainExp(getExpNeededForLevel * 0.00625);
		} else if (player.getLevel() > 210 && player.getLevel() <= 220) {
			player.gainExp(getExpNeededForLevel * 0.00625);
		} else if (player.getLevel() > 220 && player.getLevel() <= 230) {
			player.gainExp(getExpNeededForLevel * 0.00625);
		} else if (player.getLevel() > 230 && player.getLevel() <= 240) {
			player.gainExp(getExpNeededForLevel * 0.00625);
		} else if (player.getLevel() > 240 && player.getLevel() <= 250) {
			player.gainExp(getExpNeededForLevel * 0.00625);
		}
			}else{
				player.showSystemMessage("恭喜您通過第 "+level+" 關!請繼續加油！");
			}
		}
		level++;
		if(level == 260){
		removePlayer(player.getId(), true);
		}
	}
}


function makeMob(){	
	//計算BOSS血量
	for (var i = 0; i < 20; i++) {
	let mob = map.makeMob(mobList[random]);
	mob.setMaxHp(bossHp);
	mob.changeBaseHp(bossHp);
	map.spawnMob(mob, 319, 353);
	}
}

function removePlayer(playerId, changeMap) {
	player.setEvent(null);
	player.changeMap(910000000);
	player.showSystemMessage("已完成經驗副本，系統將您傳送至自由市場");
	event.broadcastPlayerNotice(7, "【經驗副本】 ： 玩家"+player.getName()+"在『經驗副本』獲得大量經驗值");
	event.destroyEvent();
}

function playerDisconnected(player) {
        removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) { 
	if(destination.getId() != map){
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