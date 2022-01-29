
/**
 * 副本: 无限火力
 * @author 
 */

let mobList = Array(
        9303095, // - 伟大的阿卡伊勒
        9303092, // - 伟大的希纳斯
        9303087, // - 伟大的品克缤
        9303085, // - 伟大的班·雷昂
        9303083, // - 伟大的蝙蝠怪
        9303103, // - 伟大的毛莫
        9303104, // - 迷你毛莫战士
        9303105, // - 迷你毛莫魔法师
        9303106, // - 迷你毛莫弓箭手
        9303107, // - 迷你毛莫飞侠
        9303090,
        9303087,
        9303108// - 迷你毛莫海盗
        );
		
let bossHpConfig = Array(
	//BOSS血量逻辑控制
	// 第几层开始 初始血量 每层提高
	Array(1,1000000,20000000)
);

let rewardChance = 100;//每关获得物品的几率
let rewardRan = Array(
	//每关可能获得的随机奖励
	Array(5062500,2)
);

let mustLevel = 5;//多少阶段一定获得物品
let mustReward = Array(
	//随机会获得一个物品 通关mustLevel关后
	Array(5062024,3)
);

		
let player;
let everyTime = 1 * 30 * 1000;//每一轮时间
let REWARD_SCRIPT_NAME = "无限火力奖励"
let MAP_ID = 923020100;
let LOG = "wxhl2019";
let random = Math.floor(Math.random() * mobList.length);
let level = 1;
let map;
let bossHp = 1;

function init(attachment) {
        
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
		//通关
		random = Math.floor(Math.random() * mobList.length);
		event.stopTimer ("kick");
        event.startTimer("kick", everyTime);
		map.showTimer(everyTime/1000);
		
		//奖励
		if(level % mustLevel == 0){
			let ran = Math.floor(Math.random() * mustReward.length);
			player.scriptProgressMessage("恭喜您通过第 "+level+" 关!获得阶段额外奖励！");
			player.gainItem(mustReward[ran][0],mustReward[ran][1]);
		}else{
			
			let ran = Math.floor(Math.random() * 100);
			if(ran < rewardChance){
				ran = Math.floor(Math.random() * rewardRan.length);
				player.scriptProgressMessage("恭喜您通过第 "+level+" 关!运气爆棚,获得额外奖励！");
				player.gainItem(rewardRan[ran][0],rewardRan[ran][1]);
			}else{
				player.scriptProgressMessage("恭喜您通过第 "+level+" 关!请继续加油！");
			}
		}
		
		//写入数据库
		//updateDatabase();
		
		level++;
		player.scriptProgressMessage("当前第 "+level+" 关,新的BOSS出现啦！赶紧击败他吧！");
		makeMob();
	}
}


function makeMob(){
	
	//计算BOSS血量
	let i = bossHpConfig.length - 1;
	while(true){
		if(bossHpConfig[i][0] <= level){
			bossHp = Math.pow(2,(level-bossHpConfig[i][0]))
			break;
		}
		i--;
	}
	let mob = map.makeMob(mobList[random]);
	mob.setMaxHp(bossHp);
	mob.changeBaseHp(bossHp);
	map.spawnMob(mob, 500, 151);
}

function removePlayer(playerId, changeMap) {
	player.setEvent(null);
	player.changeMap(910000000);
	player.showSystemMessage("时间到，挑战失败！最终通关层数 "+level+" 关");
	player.showSystemMessage("时间到，挑战失败！最终通关层数 "+level+" 关");
	player.showSystemMessage("时间到，挑战失败！最终通关层数 "+level+" 关");
	event.broadcastPlayerNotice(7, "【无限火力】 ： 玩家"+player.getName()+"在『无限火力副本』通过了"+level+"关");
	event.destroyEvent();
}

function playerDisconnected(player) {
        removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) { 
	if(destination.getId() != 923020100){
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
