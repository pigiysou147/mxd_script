/*  This is mada by Yanran    
 *
 *  功能：功能性任务事件
 *
 *  @Author Yanran
 */
let player, map, returnmap, time, Mapid;

function init(attachment) {
        let destination;
        [player, destination] = attachment;
        map = event.makeMap(destination);
        switch (destination) {
                case 141010400://救出迷路的学者
                        Mapid = 141010400;
                        returnmap = 141000000;
                        time = 10 * 60 * 1000;
                        break;
                case 141050300:
                        Mapid = 141050300;
                        returnmap = 141050000;
                        time = 10 * 60 * 1000;
                        break;
        }
        player.changeMap(map);
        map.showTimer(time / 1000);
        event.startTimer("kick", time);
        player.setEvent(event);
}

function playerDisconnected(player) {
        event.destroyEvent();
}

function playerChangedMap(player, destination) {
        switch (destination.getId()) {
                case Mapid:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        break;
                default:
                        event.destroyEvent();
        }
}

function deinit() {
        player.setEvent(null);
        event.destroyMap(map);
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 3502000:
                case 3502001:
                        let mobsize = map.getEventMobCount();
                        if (mobsize > 0) {
                                if (mobsize == 10 || mobsize == 6 || mobsize == 2) {
                                        player.scriptProgressMessage("还剩下 " + mobsize + " 个怪物…");
                                }
                        } else {
                                event.setVariable("Clear", true);
                                map.soundEffect("Party1/Clear");
                                map.screenEffect("monsterPark/clear");
                                player.scriptProgressMessage("请与学者诺拉对话吧！");
                        }
                        break;
                case 8240067:
                        break;
        }
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        player.changeMap(returnmap, 0);
                        event.destroyEvent();
                        break;
        }
}