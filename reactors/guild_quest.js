/**
 * 
 * @author NautMS
 */

let debug = false;
let mapz = Array(0, 100, 200, 300, 301, 400, 401, 410, 420, 430, 431, 440, 500, 501, 502, 600, 610, 611, 620, 630, 631, 640, 641, 700, 800, 900, 1000, 1100, 1101);

let EXIT_MAP = 990001100;
let MIN_PLAYER = 1;//最小游戏人数
let WAIT_TIME = 1;//等待成员时间 分钟
let members;
let endTime;

function init(attachment) {
        guildId = attachment[0];
        player = attachment[1];
        for (var i = 0; i < mapz.length; i++) {
                let map_temp = event.getMap(990000000 + mapz[i]);
                if (map_temp != null) {
                        map_temp.reset();
                }
        }

        let map = event.getMap(990000000);
        map.overridePortal("join00", "guildquest1_gate");
        map.overridePortal("st00", "guildquest1_exit");


        map = event.getMap(990000300);
        for (var i = 1; i <= 20; i++) {
                map.overrideReactor(String(i), "guildquest1_hitcombo");
        }
        map = event.getMap(990000400);
        map.overrideReactor("stonegate", "guildquest1_stonegate");

        map = event.getMap(990000430);
        map.overrideReactor("metalgate", "guildquest1_metalgate");

        map = event.getMap(990000440);
        map.overrideReactor("spear1", "guildquest1_spear");
        map.overrideReactor("spear2", "guildquest1_spear");
        map.overrideReactor("spear3", "guildquest1_spear");
        map.overrideReactor("spear4", "guildquest1_spear");
        event.setVariable("spear", 0);

        event.startTimer("checkMember", WAIT_TIME * 60 * 1000);
        endTime = new Date().getTime() + WAIT_TIME * 60 * 1000;
        members = [];

        event.setVariable("leader", player.getName());
        event.setVariable("GuildId", guildId);
        event.setVariable("canEnter", true);//设置入场NPC限制是否允许成员进入
        event.setVariable("open", false);//设置家族任务大门是否允许进入
        event.setVariable("members", members);

        members.push(player);//注册玩家

        player.setEvent(event);
        player.changeMap(990000000, 0);

}

function mobDied(mob) {
        switch (mob.getDataId()) {

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
        let leader = event.getVariable("leader");
        if (members.length > 0 && leader.equals(player.getName())) {
                kick();
        }
}

function playerChangedMap(player, destination) {
        switch (destination.getId()) {
                case 990000000://家族对抗赛 - 遗迹挖掘现场
                case 990000100://家族对抗赛 - 守护之峡谷
                case 990000200://家族对抗赛 - 遗迹的分岔口
                case 990000300://家族对抗赛 - 圣瑞尼亚城城门
                case 990000301://家族对抗赛 - 前往圣瑞尼亚城堡的路
                case 990000400://家族对抗赛 - 骑士大厅
                case 990000401://家族对抗赛 - 中央通道
                case 990000410://家族对抗赛 - 荣耀之室
                case 990000420://家族对抗赛 - 勇猛之室
                case 990000430://家族对抗赛 - 信念之室
                case 990000431://家族对抗赛 - 承诺之室
                case 990000440://家族对抗赛 - 正义之室
                case 990000500://家族对抗赛 - 贤者喷水池
                case 990000501://家族对抗赛 - 中央宴会听
                case 990000502://家族对抗赛 - 酒窖
                case 990000600://家族对抗赛 - 地下水路
                case 990000610://家族对抗赛 - 水路之迷宫
                case 990000611://家族对抗赛 - 迷宫之尽头
                case 990000620://家族对抗赛 - 水路之迷宫
                case 990000630://家族对抗赛 - 水路之迷宫
                case 990000631://家族对抗赛 - 迷宫之尽头
                case 990000640://家族对抗赛 - 水路之迷宫
                case 990000641://家族对抗赛 - 迷宫之尽头
                case 990000700://家族对抗赛 - 锡安列三世之墓
                case 990000800://家族对抗赛 - 死亡回廊
                case 990000900://家族对抗赛 - 艾里葛斯之王座
                case 990001000://家族对抗赛 - 锡安列三世之宝物仓库:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);
        }
}

function partyMemberDischarged(party, player) {
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
                        kick();
                        break;
                case "checkMember":
                        event.setVariable("canEnter", false);
                        let readyMap = event.getMap(990000000);
                        if (members.length < MIN_PLAYER) {
                                readyMap.scriptProgressMessage("由于参加家族任务人数不足，在场的人员将会被传送出去。");
                                readyMap.broadcastEventNotice("由于参加家族任务人数不足，在场的人员将会被传送出去。");
                                event.startTimer("kick", 3000);
                                endTime = new Date().getTime() + 3 * 1000;
                                map.showTimer(3);
                        } else {
                                readyMap.scriptProgressMessage("家族任务正式开启，大门已经开放！");
                                readyMap.broadcastEventNotice("家族任务正式开启，大门已经开放！");
                                event.setVariable("open", true); //设置等待地图大门开启，允许进入
                                event.startTimer("kick", 60 * 60 * 1000);//设置整个家族任务活动时间
                                endTime = new Date().getTime() + 60 * 60 * 1000;
                                readyMap.showTimer(60 * 60);
                        }
                        break;
                case "s1_gate_check":
                        makeCombo();
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}



function makeCombo() {
        let map = event.getMap(990000300);
        let gate_count = parseInt(event.getVariable("gate_count"));
        let check_idx = parseInt(event.getVariable("check_idx")) + 1;
        if (check_idx > 3 + gate_count) {
                event.setVariable("stone_move", 2);
                map.scriptProgressMessage("石像已经移动完毕，请开始重复刚才石像移动的轨迹！");
                map.broadcastEventNotice("石像已经移动完毕，请开始重复刚才石像移动的轨迹！");
        } else {
                let check = event.getVariable("check");
                let rand = roa();
                check += rand + "|";
                if (debug) {
                        map.broadcastEventNotice("Debug:Reactor Combo:" + check + " check_idx:" + check_idx);
                }
                map.setReactorState(rand, 0);
                event.setVariable("check", check);
                event.setVariable("check_idx", check_idx);
                event.startTimer("s1_gate_check", 3500);
        }
}



function roa() {
        var combos = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20");
        var num = Math.floor(Math.random() * combos.length); //生成随机数num
        return combos[num];
}