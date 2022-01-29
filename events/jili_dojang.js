
let EXIT_MAP = 925020002;

let party;
let members;
let endTime;
let pqlog = "jili_dojang"
let killed = 0;
let stage = 1;
let nowMap;
let index;
let bugstage = true;
let maps = Array();

function init(attachment) {
    party = attachment;
	
	
    party.changeMap(925070100);
    members = party.getLocalMembers();
	
    for (var i = 1; i <= 40; i++) {
        var map = event.getMap(925070000 + (i * 100));
		map.clearMobs();
        map.resetMobsSpawns();
		maps.push(925070000 + (i * 100));
    }
	
    event.startTimer("kick", 15 * 60 * 1000);
    endTime = new Date().getTime() + 15 * 60 * 1000;
    event.setVariable("startTime", new Date().getTime());

    event.setVariable("members", members);
	
    event.setVariable("floor", "0");

    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
		if(!members[i].isGm()) //GM不扣次數
			members[i].addPQLog(pqlog);
    }

    event.getMap(925070100).showTimer(15 * 60);
	
    event.startTimer("time", 30 * 1000);
	
}

function mobDied(mob) {
	var map1 = event.getMap(mob.getMapId());
    var floor = parseInt(event.getVariable("floor"));
	if(mob.getDataId() == 9305300 + floor){
		if(floor != 39){
			map1.blowWeather(5120024,"成功擊敗怪物，前往下一關吧！");
			event.setVariable(mob.getDataId()+"", "1");
		}else{
			map1.blowWeather(5120024,"恭喜你完成40層挑戰！");
			event.setVariable("floor","40");
			event.setVariable(mob.getDataId()+"", "1");
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
	}else{
		event.getMap(destination.getId()).showTimer((endTime - new Date().getTime()) / 1000);
	}
	
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), true);
}

function timerExpired(key) {
    switch (key) {
        case "kick":
			for (let dd = 0; dd < members.length; dd++) {
				members[dd].showSystemMessage("[武陵道場]:挑戰時間到!很遺憾，你沒有完成挑戰！");
			}
            removePlayer(party.getLeader(), true);
            break;
        case "time":
			event.startTimer("time", 30 * 1000);
			
			let startTime = parseFloat(event.getVariable("startTime"));
			let usedTime = Math.floor((new Date().getTime() - startTime)/1000);
			let min = Math.floor((15*60-usedTime) / 60);
			let sc = (15*60-usedTime) % 60;
			for (let dd = 0; dd < members.length; dd++) {
				members[dd].showSystemMessage("[武陵道場]:副本剩余挑戰時間 "+min+"分"+sc+"秒!");
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