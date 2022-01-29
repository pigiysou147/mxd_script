
/**
 * 副本：次元入侵
 * @author 
 */


let BOSS_LOG = "DimensionInavde";
let party;
let members;
let everyTime = 1 * 50 * 1000; //第一關時間
let everyTimes = [1*50*1000,1*51*1000,1*52*1000,1*53*1000,1*54*1000,1*55*1000,1*56*1000]
let MAP_ID = 940021000;
let RETURN_MAP_ID = 940020000;
let maxLevel = 6;
let map;
let level = 1;
let stage = 0;

function init(attachment) {
    map = event.getMap(MAP_ID);
    map.clearMobs();
    party = attachment;
    party.changeMap(MAP_ID, "st00");
    members = party.getLocalMembers();

    event.setVariable("members", members);
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(BOSS_LOG);
    }
    map.showTimer(everyTime/1000);
    event.startTimer("kick", everyTime);
	
    event.startTimer("makeMobs", 2 * 1000);
}


function makeMobs() {
    //根據關卡來處理召喚怪物
	stage ++; 
	let maxStage;
    switch (level) {
        case 1:
			maxStage = 2; //有幾輪
			if(stage > maxStage){
				stage = 0;
				everyTime = everyTimes[level];
				level++;
				map.clearMobs();
				party.changeMap(MAP_ID, "st00");
				//這裡可以加獎勵代碼 TODO
			}else{
				for (let i = 0; i < members.length; i++) {
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].showSystemMessage("【次元入侵】第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
				}
				for (var i = 0; i < 3 * stage; i++) {
					let mob = map.makeMob(9300618);
					mob.setMaxHp(10000000 * (stage * 3));
					mob.changeBaseHp(10000000 * (stage * 3));
					map.spawnMob(mob, 2579, 29);
				}
				for (var i = 0; i < 5 * wave; i++) {
					let mob = map.makeMob(9300619);
					mob.setMaxHp(5000000 * (stage * 3));
					mob.changeBaseHp(10000000 * (stage * 3));
					map.spawnMob(mob, 2579, 29);
				}
			}
			break;
        case 2:
			maxStage = 1; //有幾輪
			if(stage > maxStage){
				stage = 0;
				level++;
				map.clearMobs();
				party.changeMap(MAP_ID, "st00");
				//這裡可以加獎勵代碼 TODO
			}else{
				for (let i = 0; i < members.length; i++) {
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].showSystemMessage("【次元入侵】第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
				}
				let mob = map.makeMob(9300622);
				mob.setMaxHp(1000000);
				mob.changeBaseHp(1000000);
				map.spawnMob(mob, 2579, 29);
			}
			break;
        case 3:
			maxStage = 2; //有幾輪
			if(stage > maxStage){
				stage = 0;
				everyTime = everyTimes[level];
				level++;
				map.clearMobs();
				party.changeMap(MAP_ID, "st00");
				//這裡可以加獎勵代碼 TODO
			}else{
				for (let i = 0; i < members.length; i++) {
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].showSystemMessage("【次元入侵】第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
				}
				for (var i = 0; i < 3 * stage; i++) {
					let mob = map.makeMob(9300618);
					mob.setMaxHp(10000000 * (stage * 3));
					mob.changeBaseHp(10000000 * (stage * 3));
					map.spawnMob(mob, 2579, 29);
				}
				for (var i = 0; i < 5 * stage; i++) {
					let mob = map.makeMob(9300619);
					mob.setMaxHp(5000000 * (stage * 3));
					mob.changeBaseHp(10000000 * (stage * 3));
					map.spawnMob(mob, 3364, 29);
				}
				for (var i = 0; i < 5 * stage; i++) {
					let mob = map.makeMob(9300824);
					mob.setMaxHp(5000000 * (stage * 3));
					mob.changeBaseHp(10000000 * (stage * 3));
					map.spawnMob(mob, 2029, 29);
				}
			}
			break;
        case 4:
			maxStage = 2; //有幾輪
			if(stage > maxStage){
				stage = 0;
				everyTime = everyTimes[level];
				level++;
				map.clearMobs();
				party.changeMap(MAP_ID, "st00");
				//這裡可以加獎勵代碼 TODO
			}else{
				for (let i = 0; i < members.length; i++) {
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].showSystemMessage("【次元入侵】第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
				}
				for (var i = 0; i < 5 * stage; i++) {
					let mob = map.makeMob(9300620);
					mob.setMaxHp(10000000 * (stage * 3));
					mob.changeBaseHp(10000000 * (stage * 3));
					map.spawnMob(mob, 2029, 29);
				}
				for (var i = 0; i < 5 * stage; i++) {
					let mob = map.makeMob(9300621);
					mob.setMaxHp(5000000 * (stage * 3));
					mob.changeBaseHp(10000000 * (stage * 3));
					map.spawnMob(mob, 2029, 29);
				}
			}
			break;
        case 5:
			maxStage = 1; //有幾輪
			if(stage > maxStage){
				stage = 0;
				everyTime = everyTimes[level];
				level++;
				map.clearMobs();
				party.changeMap(MAP_ID, "st00");
				//這裡可以加獎勵代碼 TODO
			}else{
				for (let i = 0; i < members.length; i++) {
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
					members[i].showSystemMessage("【次元入侵】第"+level+"關 當前"+stage+"/"+maxStage+" 怪物已召喚！清消滅他們！");
				}
				//BOSS
				let mob = map.makeMob(9300634);
				mob.setMaxHp(10000000);
				mob.changeBaseHp(10000000);
				map.spawnMob(mob, 2676, 29);
				
				//小怪
				for (var i = 0; i < 5 * stage; i++) {
					let mob = map.makeMob(9300827);
					mob.setMaxHp(5000000 * (stage * 3));
					mob.changeBaseHp(10000000 * (stage * 3));
					map.spawnMob(mob, 2029, 29);
				}
				for (var i = 0; i < 5 * stage; i++) {
					let mob = map.makeMob(9300621);
					mob.setMaxHp(5000000 * (stage * 3));
					mob.changeBaseHp(10000000 * (stage * 3));
					map.spawnMob(mob, 2029, 29);
				}
			}
			break;
        case 6:
			maxStage = 1; //有幾輪
			if(stage > maxStage){
				stage = 0;
				everyTime = everyTimes[level];
				level++;
				map.clearMobs();
				party.changeMap(MAP_ID, "st00");
				//這裡可以加獎勵代碼 TODO
			}else{
				for (let i = 0; i < members.length; i++) {
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" BOSS已召喚！清消滅他們！");
					members[i].scriptProgressMessage("第"+level+"關 當前"+stage+"/"+maxStage+" BOSS已召喚！清消滅他們！");
					members[i].showSystemMessage("【次元入侵】第"+level+"關 當前"+stage+"/"+maxStage+" BOSS已召喚！清消滅他們！");
				}
				//BOSS
				let mob = map.makeMob(9303098);
				mob.setMaxHp(10000000);
				mob.changeBaseHp(10000000);
				map.spawnMob(mob, 2774, 29);
				//BOSS
				mob = map.makeMob(9303101);
				mob.setMaxHp(10000000);
				mob.changeBaseHp(10000000);
				map.spawnMob(mob, 2774, 29);
				//BOSS
				mob = map.makeMob(9303098);
				mob.setMaxHp(10000000);
				mob.changeBaseHp(10000000);
				map.spawnMob(mob, 2774, 29);
			}
			break;
	}
	
}

function mobDied(mob) {
	/*
	for (let i = 0; i < members.length; i++) {
		members[i].showSystemMessage("還剩余 "+map.getEventMobCount());
	}
	*/
	if(map.getEventMobCount() < 1){
		if(level >= maxLevel){
			//這裡寫通關的
			for (let i = 0; i < members.length; i++) {
				members[i].runScript("次元入侵通關獎勵");
				members[i].changeMap(RETURN_MAP_ID, "st00");
				members[i].showSystemMessage("【次元入侵】完成挑戰！獲得豐厚獎勵！");
			}
		}else{
			makeMobs();
		}
	}
}

function removePlayer(playerId, changeMap) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].getId() == playerId) {
            //dissociate event before changing map so playerChangedMap is
            //not called and this method is not called again by the player
            members[i].setEvent(null);
            if (changeMap)
                members[i].changeMap(RETURN_MAP_ID, "st00");
            //collapse the members array so we don't accidentally warp
            //this member again if the leader leaves later.
            members.splice(i, 1);
            break;
        }
    }
    if (members.length <= 0) {
        event.destroyEvent();
    }
}

function playerDisconnected(player) {
    //changeMap is false since all PQ maps force return the player to the exit
    //map on his next login anyway, and we don't want to deal with sending
    //change map packets to a disconnected client
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
    //TODO: is it true that even when a non-leader clicks Nella, the entire
    //party is booted? and that GMS forces party out when only two members
    //remain alive and online?
    switch (destination.getId()) {
        case MAP_ID:
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("【次元入侵】:當前為第 "+level+" 關,請繼續加油抵禦外族入侵！");
				members[i].showSystemMessage("【次元入侵】:當前為第 "+level+" 關,請繼續加油抵禦外族入侵！");
				members[i].showSystemMessage("【次元入侵】:當前為第 "+level+" 關,請繼續加油抵禦外族入侵！");
				members[i].scriptProgressMessage("當前為第 "+level+" 關,請繼續加油抵禦外族入侵！");
				members[i].scriptProgressMessage("當前為第 "+level+" 關,請繼續加油抵禦外族入侵！");
				members[i].scriptProgressMessage("當前為第 "+level+" 關,請繼續加油抵禦外族入侵！");
			}
			makeMobs();
			event.stopTimer("kick");
			event.startTimer("kick", everyTime);
			map.showTimer(everyTime/1000);
			
            break;
        default:
            //player died and respawned or clicked Nella to leave PQ
            //changeMap is false so player doesn't get re-warped to exit map
            removePlayer(player.getId(), false);
    }
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), true);
}

function timerExpired(key) {
    switch (key) {
        case "kick":
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("【次元入侵】：真遺憾挑戰失敗！");
			}
            removePlayer(party.getLeader(), true);
            break;
        case "makeMobs":
            makeMobs();
            break;
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
    }
}