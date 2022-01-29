/**
 * Boss: Will
 * @author NautMS
 */

let EXIT_MAP = 450007240;

let PHASE_1_DIR = 450008700;
let PHASE_1 = 450008750;

let PHASE_2_DIR = 450008800;
let PHASE_2 = 450008850;

let PHASE_3_DIR = 450008900;
let PHASE_3 = 450008950;

let DEATH_COUNT = 10;

let BOSS_LOG = "Will";
let party;
let members;
let endTime;
let start;

var bossname="威尔";
function init(attachment) {
	start=new Date().getTime();
	[party,hard] = attachment;
	if(hard==1){
		BOSS_LOG="Will_hard";
		bossname="地狱威尔";
	}
    
    event.setVariable("hard", hard);

    let map_1 = event.getMap(PHASE_1);
    let map_2 = event.getMap(PHASE_2);
    let map_3 = event.getMap(PHASE_3);

    map_1.showTimer(30 * 60);
    map_1.reset();
    map_2.reset();
    map_3.reset();

    party.changeMap(PHASE_1_DIR, 5);
    members = party.getLocalMembers();
    event.startTimer("kick", 30 * 60 * 1000);
    endTime = new Date().getTime() + 30 * 60 * 1000;
    event.startTimer("ReadyCheckWillHp", 1 * 5 * 1000 ); //1m 20s frist time


    event.setVariable("members", members);
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(BOSS_LOG);
        setEventCount(BOSS_LOG,members[i].getAccountId(),3,1);
        setEventCount(BOSS_LOG+"today",members[i].getAccountId(),1,1);
        members[i].setDeathCount(DEATH_COUNT);
        members[i].modifyMoonlightValue(0);
    }
    event.startTimer("MoonLight", 100);
}

function mobDied(mob) {
    switch (mob.getDataId()) {
        case 8880340:
            event.setVariable("boss1", true);
            event.stopTimer("ReadyCheckWillHp");
            event.stopTimer("CheckWillHp");
            event.stopTimer("WillSpaceCollapse");
            event.startTimer("To_Stage_2", 4000);
            break;
        case 8880341://2阶段 威尔
            event.setVariable("boss2", true);
            event.startTimer("To_Stage_3", 4000);
            event.startTimer("NarrowWeb", 1000);
            break;
        case 8880342://3阶段威尔
			var end=new Date().getTime();
			var totalTime=(end-start)/1000;
			for (let i = 0; i < members.length; i++) {
				
					
				var wq= members[i].getInventorySlot(-1,-11);
				if(wq!=null){
					members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss,itemid,itemname,limitbreak,endtime) values(?,?,?,?,?,?,?,now())",members[i].getId(),members[i].getName(),totalTime,bossname,wq.getOnlyId(),wq.getItemName(),wq.getLimitBreak());
					event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器："+wq.getItemName()+"突破："+wq.getLimitBreak()/100000000+" 亿");
				}else{
					members[i].customSqlInsert("insert into bossrank (characterid,name,time,boss) values(?,?,?,?)",members[i].getId(),members[i].getName(),totalTime,bossname);
					event.broadcastNotice("玩家:"+members[i].getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒  武器：空");
				
				}
				if(hard==1){
					
					members[i].runScript("地狱威尔掉落");
				}else{
					members[i].runScript("威尔掉落");
				}
			}
            event.stopTimer("NarrowWeb");
            event.setVariable("boss3", true);
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
        case PHASE_1_DIR:
        case PHASE_2_DIR:
        case PHASE_3_DIR:
        case PHASE_1:
        case PHASE_2:
        case PHASE_3:
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

function warpToMap(map, portal) {
    for (let i = 0; i < members.length; i++) {
        members[i].changeMap(map, portal);
    }
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            event.stopTimer("NarrowWeb");
            event.stopTimer("ReadyCheckWillHp");
            event.stopTimer("CheckWillHp");
            event.stopTimer("WillSpaceCollapse");
            kick();
            break;
        case "To_Stage_2":
            warpToMap(PHASE_2_DIR, 0);
            break;
        case "To_Stage_3":
            warpToMap(PHASE_3_DIR, 0);
            break;
        case "ReadyCheckWillHp":
            event.getMap(PHASE_1).prepareCheckWillHp();
            event.startTimer("CheckWillHp", 3000);
            event.startTimer("ReadyCheckWillHp", 60 * 1000); //2m
            break;
        case "CheckWillHp":
            if (event.getMap(PHASE_1).checkWillHp(false)) { //平衡血量并释放裂屏技能 判断是否可以进入魔眼
                event.startTimer("EndEyeGame", 2000); //魔眼持续25秒
                event.startTimer("WillSpaceCollapse_Eye", 2000); //魔眼秒杀在24秒后
                event.setVariable("InPattern", true);
                event.setVariable("Pattern_Fail", false);
                let map = event.getMap(PHASE_1); //召唤两个空间的魔眼
                let eye = map.makeMob(8880307);
                eye.changeBaseHp(2100000000000000); //防止意外杀死
                map.spawnMob(eye, 19, -2020);
                eye = map.makeMob(8880305);
                eye.changeBaseHp(2100000000000000); //防止意外杀死
                map.spawnMob(eye, 19, 20);
            } else {
                event.startTimer("WillSpaceCollapse", 10000);
            }
            break;
        case "WillSpaceCollapse": //进行解锁
            event.getMap(PHASE_1).checkWillHp(true);
            break;
        case "NarrowWeb":
            event.getMap(PHASE_3).addNarrowWeb();
            event.startTimer("NarrowWeb", 1000);
            break;
        case "MoonLight":
            for (let i = 0; i < members.length; i++) {
                let pMapId = members[i].getMapId();
                if (pMapId == PHASE_1 || pMapId == PHASE_2 || pMapId == PHASE_3) {
                    members[i].modifyMoonlightValue(3);
                }
            }
            event.startTimer("MoonLight", 1000);
            break;
        case "EndEyeGame":
            event.setVariable("InPattern", false); //结束魔眼，判断是否解锁
            event.getMap(PHASE_1).endWillEyeGame(event.getVariable("Pattern_Fail") != true);
            break;
        case "WillSpaceCollapse_Eye": //魔眼秒杀
            event.getMap(PHASE_1).actionWillSpaceCollapseEye();
            break;
        case "EndWillDistortionMirror": //结束谎言之镜，判断是否解锁
            event.stopTimer("ActionDistortionMirror");
            event.setVariable("InPattern", false);
            event.getMap(PHASE_2).checkWillHp(event.getVariable("Pattern_Fail") != true);
            break;
        case "ActionDistortionMirror": //50%开关谎言之镜，召唤3轮蜘蛛腿
            if (event.getVariable("InPattern") == true) {
                event.getMap(PHASE_2).actionWillDistortionMirror();
                event.startTimer("ActionDistortionMirror", 6000);
            }
            break;

    }
}

function mobHit(player, mob, damage) {
    switch (mob.getDataId()) {
        case 8880305:
        case 8880307:
            event.getMap(PHASE_1).createWillObtacleAtom(player);
            break;
        case 8880341:
            if (mob.getHpLimitPercent() > 0 && mob.getHPPercent() <= Math.ceil(mob.getHpLimitPercent() * 100.0) && event.getVariable("InPattern") != true) {
                event.getMap(PHASE_2).startWillDistortionMirror();
                event.setVariable("InPattern", true);
                event.setVariable("Pattern_Fail", false);
                event.startTimer("EndWillDistortionMirror", 25000);
                event.startTimer("ActionDistortionMirror", 1);
            }
            break;
    }

}

function deinit() {
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
    }
}

function playerDied(player) {
    if (event.getVariable("InPattern") == true) {
        event.setVariable("Pattern_Fail", true);
    }
}

function setEventCount(eventName,accid, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = members[0].customSqlUpdate(sql, type, value, accid, eventName);

}