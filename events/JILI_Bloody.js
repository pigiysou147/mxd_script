
/**
 *  血腥女王 QQ:739977676
 * 血量在反应堆 
 */

let EXIT_MAP = 105200000; //退出地图

let DEATH_COUNT = 10; //复活次数

let BOSS_LOG = "nvwang";
let party;
let members;
let endTime;


let time = 15 * 60 * 1000; //时间 15分钟  1秒=1000毫秒
let useTicket = 1;   //入场券消耗 写0不消耗

function init(attachment) {
        party = attachment;
       
        members = party.getLocalMembers();

        let map_2 = event.getMap(105200710);
		 party.changeMap(map_2, 0);
        
        map_2.clearMobs();
		map_2.resetReactors();
		
		
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
                case 8920000://BOSS死了
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
                case 105200700:
                case 105200710:
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
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}


