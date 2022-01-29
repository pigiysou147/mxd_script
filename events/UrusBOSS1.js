/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：BOSS 乌鲁斯
 *  @Author Kent 
 */

let DEATH_COUNT = 2;
let FIELD_1 = 970072000;
let EXIT_MAP = 970072200;
let BOSS_LOG = "乌鲁斯";
let party;
let map_1;

function init(attachment) {
	 party = attachment;
        members = party.getLocalMembers();
        map_1 = event.getMap(FIELD_1);
		map_1.reset();
        party.changeMap(FIELD_1, "st00");
        event.getMap(FIELD_1).showTimer(30 * 60);
        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;
		var mob = map_1.makeMob(8881000);
		mob.changeBaseHp(10000000000000);//300E
        map_1.spawnMob(mob, 13, 85);
        event.setVariable("members", members);
		
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
        }
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8881000:
					for (let i = 0; i < members.length; i++) {
							//members[i].gainItem(2430890,1);
							members[i].addPQLog("英雄BOSS悬赏乌鲁斯");
						}
					event.getMap(FIELD_1).clearMobs();
                    break;
        }
}
function removePlayer(playerId, changeMap) {
        for (let i = 0; i < members.length; i++) {
                if (members[i].getId() == playerId) {
                        //dissociate event before changing map so playerChangedMap is
                        //not called and this method is not called again by the player
                        members[i].setEvent(null);
                        if (changeMap) {
                                members[i].changeMap(EXIT_MAP, "st00");
                        }
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
                case FIELD_1:
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
        if (party.getLeader() == player.getId()) {
                kick();
        } else {
                removePlayer(player.getId(), true);
        }
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
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}