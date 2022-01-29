
let EXIT_MAP = 744000000;

let party;
let members;
let endTime;
let maps = [744000014,744000013,744000015,744000003,744000002,744000006,744000007,744000010,744000009,744000011,744000012,744000004,744000001]
let pqlog = "FSchool"
let killed = 0;
let stage = 1;
let nowMap;
let index;
let bosshp = 20000000000
let bugstage = true;

let rewards=Array(
	// 物品ID 最小数量 最大数量
	Array(4310105,5,10)
)

function init(attachment) {
    party = attachment;
	
	//丢弃任务物品
    party.loseItem(4001008);
    party.changeMap(744000014);
    members = party.getLocalMembers();

    event.getMap(744000014).showTimer(30 * 60);
	
	for(let i = 0;i<maps.length;i++){
		event.getMap(maps[i]).clearMobs();
		event.getMap(maps[i]).resetMobsSpawns();
	}
	
    var map = event.getMap(744000014);
	nowMap = map;
	var mob = map.makeMob(9410183);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
	
    map = event.getMap(744000013);
	mob = map.makeMob(9410182);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
	
    map = event.getMap(744000015);
	mob = map.makeMob(9410184);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
	
    map = event.getMap(744000003);
	mob = map.makeMob(9410178);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
	
    map = event.getMap(744000002);
	mob = map.makeMob(9410179);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
	
    map = event.getMap(744000006);
    for(var i = 9410147; i <= 9410151; i++){
		mob = map.makeMob(i);
		mob.changeBaseHp(bosshp);
		map.spawnMob(mob, 50, 240);
    }
	
    map = event.getMap(744000007);
	mob = map.makeMob(9410171);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
	
    map = event.getMap(744000010);
	mob = map.makeMob(9410173);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 80, 240);
	mob = map.makeMob(9410174);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 150, 240);
	mob = map.makeMob(9410175);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 220, 240);
	mob = map.makeMob(9410176);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 290, 240);
    for(var i = 0; i <= 9; i++){
		mob = map.makeMob(9410190);
		mob.changeBaseHp(10000000);
		map.spawnMob(mob, 50, 240);
    }
	
    map = event.getMap(744000009);
    for(var i = 9410187; i <= 9410189; i++){
		mob = map.makeMob(i);
		mob.changeBaseHp(10000000);
		map.spawnMob(mob, 50, 240);
    }
	
	
    map = event.getMap(744000011);
	mob = map.makeMob(9410180);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
	
    map = event.getMap(744000012);
	mob = map.makeMob(9410181);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
	
    map = event.getMap(744000001);
	mob = map.makeMob(9410181);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
    for(var i = 9410165; i <= 9410168; i++){
		mob = map.makeMob(i);
		mob.changeBaseHp(bosshp);
		map.spawnMob(mob, 50, 240);
    }
	
	
    map = event.getMap(744000004);
	mob = map.makeMob(9410177);
	mob.changeBaseHp(bosshp);
    map.spawnMob(mob, 50, 240);
	
	
    event.startTimer("kick", 30 * 60 * 1000);
    endTime = new Date().getTime() + 30 * 60 * 1000;

    event.setVariable("members", members);

    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
		if(!members[i].isGm()) //GM不扣次数
			members[i].addPQLog(pqlog);
    }
	
	//召唤怪物
}

function mobDied(mob) {
	killed ++;
	var needKill = 0;
	switch (stage){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 7:
		case 10:
		case 11:
		case 12:
			needKill = 1;
			break;
		case 6:
			needKill = 5;
			break;
		case 8:
			needKill = 9;
			break;
		case 9:
			needKill = 3;
			break;
		case 13:
			needKill = 5;
			break;
	}
	index = maps.indexOf(nowMap.getId());
	if(killed >= needKill){
		if(stage == maps.length){
			//最后一关
			
			//奖
			for (let dd = 0; dd < members.length; dd++) {
				members[dd].scriptProgressMessage("恭喜你制霸高校！三秒后自动退出副本！");
				event.broadcastNoticeWithoutPrefix("[枫之高校]:玩家 "+members[dd].getName()+" 成功通过枫之高校！");
				members[dd].showSystemMessage("----------------获得通关奖励------------------");
				for(let mm = 0;mm<rewards.length;mm++){
					let ran = Math.floor(Math.random() * (rewards[mm][2] - rewards[mm][1] + 1) + rewards[mm][1]);
					if(ran > 0){
						members[dd].gainItem(rewards[mm][0],ran);
						
					}
					if(members[dd].getPQLog("枫之高校通关")<1){
						var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";
						var result = members[dd].customSqlUpdate(sql, 1,10,members[dd].getAccountId(), "活跃");
					}
					
					members[dd].addPQLog("枫之高校通关",1,1);
				}
			}
			event.startTimer("end", 3 * 1000);
		}else{
			killed = 0;
			stage++;
			if(stage != 11){
				event.startTimer("next", 2 * 1000);
				for (let dd = 0; dd < members.length; dd++) {
					members[dd].scriptProgressMessage("恭喜你挑战成功！三秒后进入下一关！");
					members[dd].scriptProgressMessage("恭喜你挑战成功！三秒后进入下一关！");
					members[dd].scriptProgressMessage("恭喜你挑战成功！三秒后进入下一关！");
					members[dd].showSystemMessage("【枫之高校】恭喜你挑战成功！三秒后进入下一关！");
				}
			}else{
				/*
				for (let dd = 0; dd < members.length; dd++) {
					members[dd].showSystemMessage(stage);
					members[dd].showSystemMessage(maps[stage-1]);
					members[dd].showSystemMessage("走了这裡11111111111111");
				}
				*/
				party.changeMap(maps[stage-1]);
			}
		}
	}
}

function removePlayer(playerId, changeMap) {
    if (party.getLeader() == playerId) {
        //boot the entire party (changeMap parameter only applies to member
        //whose player ID matches playerId parameter, so those who are not the
        //leader are always booted)
        for (let i = 0; i < members.length; i++) {
            //dissociate event before changing map so playerChangedMap is not
            //called and this method is not called again by the player
            members[i].setEvent(null);
            if (changeMap || members[i].getId() != playerId)
                members[i].changeMap(EXIT_MAP);
        }
        event.destroyEvent();
    } else {
        for (let i = 0; i < members.length; i++) {
            if (members[i].getId() == playerId) {
                //dissociate event before changing map so playerChangedMap is
                //not called and this method is not called again by the player
                members[i].setEvent(null);
                if (changeMap)
                    members[i].changeMap(EXIT_MAP);
                //collapse the members array so we don't accidentally warp
                //this member again if the leader leaves later.
                members.splice(i, 1);
                break;
            }
        }
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
    if (maps.indexOf(destination.getId()) == -1){
        //player died and respawned or clicked Nella to leave PQ
        //changeMap is false so player doesn't get re-warped to exit map
        removePlayer(player.getId(), false);
		player.loseItem(4001008);
		player.loseItem(4001007);
	}else{
        player.showTimer((endTime - new Date().getTime()) / 1000);
	}
	
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), true);
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            removePlayer(party.getLeader(), true);
            break;
		case "next":
			if(stage != 11){
				/*
				for (let dd = 0; dd < members.length; dd++) {
					members[dd].showSystemMessage(stage);
					members[dd].showSystemMessage(maps[stage-1]);
					members[dd].showSystemMessage("走了这裡22222222222");
				}
				*/
				party.changeMap(maps[stage-1]);
			}
			
			break;
		case "end":
			party.changeMap(EXIT_MAP);
			break;
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++)
        members[i].setEvent(null);

}