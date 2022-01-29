
/**
 *  皮埃爾 QQ:739977676
 * 
 */

let EXIT_MAP = 105200000; //退出地圖
let BossHp = 999999999;
let DEATH_COUNT = 5; //復活次數

let BOSS_LOG = "piaier";
let party;
let members;
let endTime;
let getBoss = true;

let time = 15 * 60 * 1000; //時間 15分鐘  1秒=1000毫秒
let useTicket = 1;   //入場券消耗 寫0不消耗

function init(attachment) {
        party = attachment;
        party.changeMap(105200600, 0);
        members = party.getLocalMembers();

        let map_1 = event.getMap(105200600);
        var map_2 = event.getMap(105200610);

        map_1.showTimer(time/1000);
        map_1.clearMobs();
        map_1.resetMobsSpawns();
        map_2.clearMobs();
		
		
        event.startTimer("kick", time);
        endTime = new Date().getTime() + time;

        event.setVariable("members", members);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
        }
		
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8900000://BOSS死了
                        break;
        }
}

function removePlayer(playerId, changeMap) {
        for (let i = 0; i < members.length; i++) {
                if (members[i].getId() == playerId) {
                        //dissociate event before changing map so playerChangedMap is
                        //not called and this method is not called again by the player
                        members[i].setEvent(null);
                        if (changeMap)
                                members[i].changeMap(EXIT_MAP, "st00");
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
        removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
        switch (destination.getId()) {
                case 105200600:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        player.showDeathCount();
                        break;
                case 105200610:
						if(getBoss){
							getBoss = false;
							//召喚怪物
							var map_2 = event.getMap(105200610);
							map_2.broadcastEventNotice("3秒后皮埃爾將出現~勇士！你準備好了嗎？");
							map_2.broadcastEventNotice("3秒后皮埃爾將出現~勇士！你準備好了嗎？");
							map_2.broadcastEventNotice("3秒后皮埃爾將出現~勇士！你準備好了嗎？");
							event.startTimer("boss", 3000);
						}
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        player.showDeathCount();
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

function kick() {
        for (let i = 0; i < members.length; i++) {
                //dissociate event before changing map so playerChangedMap is not
                //called and this method is not called again by the player
                members[i].setEvent(null);
                members[i].changeMap(EXIT_MAP);
        }
        event.destroyEvent();
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        kick();
                        break;
                case "boss":
						var map_2 = event.getMap(105200610);
						let boss = map_2.makeMob(8900000);
						boss.changeBaseHp(BossHp);
						map_2.spawnMob(boss, 466, 550);
						map_2.broadcastEventNotice("皮埃爾將出現~勇士 戰勝它吧!!");
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}


