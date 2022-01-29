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
                case 120041900://船长黑迪波
                        Mapid = 120041900;
                        returnmap = 120041800;
                        time = 13 * 60 * 1000;
                        break;
                case 101073300://地鼠王
                        Mapid = 101073300;
                        returnmap = 101073200;
                        time = 10 * 60 * 1000;
                        break;
                case 101073010://ailinie第一次救出
                        Mapid = 101073010;
                        returnmap = 101073000;
                        time = 10 * 60 * 1000;
                        break;
                case 101073110://ailinie第二次救出
                        Mapid = 101073110;
                        returnmap = 101073100;
                        time = 10 * 60 * 1000;
                        break;
                case 921140100://杰恩德弟弟	
                        Mapid = 921140100;
                        returnmap = 211060200;
                        time = 10 * 60 * 1000;
                        break;
                case 211060201://第一座塔楼封印
                        Mapid = 211060201;
                        returnmap = 211060200;
                        time = 10 * 60 * 1000;
                        break;
                case 211060401://第二座塔楼封印
                        Mapid = 211060401;
                        returnmap = 211060400;
                        time = 10 * 60 * 1000;
                        break;
                case 211060601://第三座塔楼封印
                        Mapid = 211060601;
                        returnmap = 211060600;
                        time = 10 * 60 * 1000;
                        break;
                case 921140000://还有希望吗141010400
                        Mapid = 921140000;
                        returnmap = 211061001;
                        time = 10 * 60 * 1000;
                        break;
                case 141010400://救出迷路的学者
                        Mapid = 141010400;
                        returnmap = 141000000;
                        time = 10 * 60 * 1000;
                        break;
                case 450001340:
                        Mapid = 450001340;
                        returnmap = 450001219;
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
                case 3501006:
                case 9480121:
                case 3501007:
                        if (event.getVariable("mobkill") == null) {
                                event.setVariable("mobkill", 12);
                        }
                        if (parseInt(event.getVariable("mobkill")) > 1) {
                                event.setVariable("mobkill", Number(event.getVariable("mobkill")) - 1);
                                player.scriptProgressMessage("还剩下 " + parseInt(event.getVariable("mobkill")) + " 个怪物…");
                        } else {
                                map.soundEffect("Party1/Clear");
                                map.screenEffect("monsterPark/clear");
                        }
                        break;
                case 9300297:
                        if (event.getVariable("mobkill") == null) {
                                event.setVariable("mobkill", 4);
                        }
                        if (parseInt(event.getVariable("mobkill")) > 1) {
                                event.setVariable("mobkill", Number(event.getVariable("mobkill")) - 1);
                                player.scriptProgressMessage("还剩下 " + parseInt(event.getVariable("mobkill")) + " 个怪物…");
                        } else {
                                map.soundEffect("Party1/Clear");
                                map.screenEffect("monsterPark/clear");
                                if (player.isQuestStarted(3139)) {//如果“第一个封印任务”为正在执行时救杰恩的弟弟，就直接完成“第一个封印”，否则没有动作
                                        player.updateQuestRecordEx(3139, "clear", "1");
                                        player.scriptProgressMessage("狮子王之城的第一个封印解开了。");
                                }
                        }
                        break;
                case 8840002:
                        if (event.getVariable("mobkill") == null) {
                                event.setVariable("mobkill", 5);
                        }
                        if (parseInt(event.getVariable("mobkill")) > 1) {
                                event.setVariable("mobkill", Number(event.getVariable("mobkill")) - 1);
                                player.scriptProgressMessage("还剩下 " + parseInt(event.getVariable("mobkill")) + " 个怪物…");
                        } else {
                                map.soundEffect("Party1/Clear");
                                map.screenEffect("monsterPark/clear");
                                if (player.isQuestStarted(3139)) {//如果“第一个封印任务”为正在执行时救杰恩的弟弟，就直接完成“第一个封印”，否则没有动作
                                        player.updateQuestRecordEx(3139, "clear", "1");
                                        player.scriptProgressMessage("狮子王之城的第一个封印解开了。");
                                }
                        }
                        break;
                case 8210006:
                        if (event.getVariable("mobkill") == null) {
                                event.setVariable("mobkill", 6);
                        }
                        if (parseInt(event.getVariable("mobkill")) > 1) {
                                event.setVariable("mobkill", Number(event.getVariable("mobkill")) - 1);
                                player.scriptProgressMessage("还剩下 " + parseInt(event.getVariable("mobkill")) + " 个怪物…");
                        } else {
                                map.soundEffect("Party1/Clear");
                                map.screenEffect("monsterPark/clear");
                                if (!player.isQuestStarted(3140)) {
                                        player.startQuest(3140, 2161003);
                                }
                                player.updateQuestRecordEx(3140, "clear", "1");
                                player.scriptProgressMessage("狮子王之城的第二个封印解开了。");
                        }
                        break;
                case 8210007:
                        if (event.getVariable("mobkill") == null) {
                                event.setVariable("mobkill", 7);
                        }
                        if (parseInt(event.getVariable("mobkill")) > 1) {
                                event.setVariable("mobkill", Number(event.getVariable("mobkill")) - 1);
                                player.scriptProgressMessage("还剩下 " + parseInt(event.getVariable("mobkill")) + " 个怪物…");
                        } else {
                                map.soundEffect("Party1/Clear");
                                map.screenEffect("monsterPark/clear");
                                if (!player.isQuestStarted(3141)) {
                                        player.startQuest(3141, 2161003);
                                }
                                player.updateQuestRecordEx(3141, "clear", "1");
                                player.scriptProgressMessage("狮子王之城的第三个封印解开了。");
                        }
                        break;
                case 9300296:
                        if (event.getVariable("mobkill") == null) {
                                event.setVariable("mobkill", 3);
                        }
                        if (parseInt(event.getVariable("mobkill")) > 1) {
                                event.setVariable("mobkill", Number(event.getVariable("mobkill")) - 1);
                                player.scriptProgressMessage("还剩下 " + parseInt(event.getVariable("mobkill")) + " 个怪物…");
                        } else {
                                map.soundEffect("Party1/Clear");
                                map.screenEffect("monsterPark/clear");
                                if (player.isQuestStarted(3178)) {
                                        player.updateQuestRecordEx(3178, "1");
                                }
                                player.scriptProgressMessage("现在可以安全带王妃进入接见室了。");
                        }
                        break;
                case 3502000:
                case 3502001:
                        let mobsize = map.getEventMobCount();
                        if (mobsize > 0) {
                                player.scriptProgressMessage("还剩下 " + mobsize + " 个怪物…");
                        } else {
                                event.setVariable("Clear", true);
                                map.soundEffect("Party1/Clear");
                                map.screenEffect("monsterPark/clear");
                        }
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