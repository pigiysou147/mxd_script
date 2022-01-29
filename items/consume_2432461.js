var event = npc.getEvent();
var mapRoot = parseInt(map.getId() / 1000);
if (mapRoot >= 992001 && mapRoot <= 992050 && event != null) {
        let str = "你有什么事? 只要是我力所能及的, 我都愿意帮忙。#b\r\n\r\n"
                + "#L0#我想离开这里了。#l\r\n\r\n"
                + (map.getId() == 992023000 ? "#L1#我掉下去了。#l\r\n" : "")
                + (map.getId() == 992033000 ? "#L2#钥匙全部用完了。#l\r\n" : "");
        if (player.isGm()) {
                if (map.getId() < 992041000) {
                        str += "#L9998#(测试专用)跳过10个阶段。#l\r\n";
                }
                if (map.getId() < 992046000) {
                        str += "#L9999#(测试专用)跳过5个阶段。#l\r\n";
                }
                if (map.getId() < 992050000) {
                        str += "#L10000#(测试专用)跳过1个阶段。#l\r\n";
                }
        }
        var sel = npc.askMenu(str);
        switch (sel) {
                case 0:
                        npc.sayNext("你一刻也不想在这里待下去了？那就送你回去吧！");
                        player.changeMap(992000000, 0);
                        break;
                case 1:
                        npc.sayNext("哎呀呀，你怎么那么笨呢！那我送你回到原来的地方吧！");
                        var s23_try = parseInt(event.getVariable("stage23_Value"));
                        s23_try += 1;
                        event.setVariable("stage23_Value", String(s23_try));
                        player.teleportToPortalId(3, 1);
                        break;
                case 2:
                        npc.sayNext("钥匙都已经用完了，还没能走到最后吗？");
                        npc.sayNext("哎呀。看来这次要么是你运气不好，要么是你没动脑筋。你要慎重使用钥匙。如果你支付#b33起源点数#k的话，我就让你重新进入第33层。那么你想重新进入吗？");
                        if (getQuestPoint(42003) < 33) {
                                npc.say("起源点数好像不够了呢~！");
                        } else {
                                        player.loseItem(2432459);
                                        player.loseItem(2432460);
                                        modifyQuestPoint(42003, -33);
                                        player.changeMap(event.getVariable("map" + event.getVariable("stage")));
                        }
                        break;
                case 9998:
                        if (player.isGm()) {
                                warpStage(10);
                        } else {
                                npc.logSuspicious("Player used gm option whithout gm!");
                        }
                        break;
                case 9999:
                        if (player.isGm()) {
                                warpStage(5);
                        } else {
                                npc.logSuspicious("Player used gm option whithout gm!");
                        }
                        break;
                case 10000:
                        if (player.isGm()) {
                                warpStage(1);
                        } else {
                                npc.logSuspicious("Player used gm option whithout gm!");
                        }
                        break;
                default:
                        break;
        }
} else if (map.getId() == 992000000) {
        npc.say("不就在这里吗？有什么事情不能当面说的！！");
}

function warpStage(count) {
        let stage = parseInt(event.getVariable("stage")); //获取当前阶段
        let nextStage = stage + count; //下个阶段
        for (let i = stage; i < stage + count; i++) {
                event.setVariable("stage" + i, "clear"); //设置事件阶段已完成
        }
        updateTime(); //更新计时器时间
        event.setVariable("stage", String(nextStage)); //设置事件新阶段记录
        if (stage % 10 == 5) {//处于休息阶段
                event.startTimer("kick", player.getIntQuestRecordEx(42011, "time")); //启动事件计时器
        }
        if (nextStage % 10 == 5) {//新的阶段处于休息阶段
                event.stopTimer("kick"); //停止计时器
        }
        switch (stage) {
                case 7:
                        event.stopTimer("s7_time");
                        break;
                case 13:
                        event.stopTimer("spawnMob");
                        break;
                case 38:
                        event.stopTimer("changeMobS38");
                        break;
                case 40:
                        event.stopTimer("S40_bosscheck");
                        break;
        }
        player.changeMap(event.getVariable("map" + event.getVariable("stage"))); //传送到新阶段
}


function updateTime() {
        var rData = player.getQuestRecordEx(42011, "time");
        var tData = player.getQuestRecordEx(42011, "totalTime");
        var startData = player.getQuestRecordEx(42011, "start");
        var remainTime = parseInt(rData); //剩余时长
        var totalTime = parseInt(tData); //初始总时长
        var startTime = parseInt(startData); //阶段开始的时间
        var nStageTime = (totalTime - remainTime) / 1000; //从开始到当前阶段所花费时间

        var diffTime = new Date().getTime() - startTime; //当前阶段消耗的时间（毫秒）
        remainTime -= diffTime; //剩余时间 计算

        player.updateQuestRecordEx(42011, "time", String(remainTime)); //更新剩余时间
}


function getQuestPoint(questId) {
        return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
        player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
        player.showSystemMessage((num < 0 ? "消耗了 " : "增加了 ") + Math.abs(num) + " 起源点数，剩余起源点数：" + getQuestPoint(questId));
}