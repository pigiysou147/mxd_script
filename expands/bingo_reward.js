let rewarditem = Array(//注意：最后一行括号后面不要加逗号。 奖励可以自己重写
        //括号里数字依次代表(道具ID，道具数量)
        Array(5062503, 10), //前5名 奖励
        Array(5062024, 8), //6-10 名奖励
        //Array(4001839, 1000),
        //Array(4001832, 1000),
        Array(5062024, 6),
        Array(5062009, 4),
        //Array(4001839, 700),
        //Array(4001832, 700),
        Array(5062009, 2),
        Array(5062010, 2),
        Array(4001839, 500),
        Array(4001832, 500),
        Array(5062010, 1),
        Array(4001839, 500),
        Array(4001832, 500),
        Array(4001832, 500),
        Array(4001839, 500)
        //注意：最后一行括号后面不要加逗号。
);
let best = 999;


let event = npc.getEvent("event_bingo");
if (event != null) {
        let selStr = "#r#e[主题活动 - 宾果游戏]#k#n  \r\n\r\n#e#b我的排名：#k#n\r\n\r\n";
        for (let i = 1; i <= 3; i++) {
                selStr += "#e第" + i + "轮：#n";
                let table1 = event.getVariable("Rank_" + i + "_0_" + player.getName());
                let table2 = event.getVariable("Rank_" + i + "_1_" + player.getName());
                if (table1 != null) {
                        best = Math.min(best, Number(table1));
                        selStr += "#b第" + table1 + "名#k ";
                }
                if (table2 != null) {
                        best = Math.min(best, Number(table2));
                        selStr += "#b第" + table2 + "名#k";
                }
                if (table1 == null && table2 == null) {
                        selStr += "#b无排名#k";
                }
                selStr += "\r\n\r\n";
        }
        npc.sayNextS(selStr);
        if (best <= 30) {
                let gain = event.getVariable(player.getName);
                if ("1".equals(gain)) {
                        npc.sayNextS("已经领取过奖励了！");
                        let rMap = player.getIntQuestRecordEx(100642, "rMap");
                        player.changeMap(rMap);
                } else {
                        let msg = "\t\t#b最好成绩 #r第" + best + "名#k 奖励如下#k\r\n\r\n";
                        let rIdx = parseInt((best - 1) / 5);
                        let itemId = rewarditem[rIdx][0];
                        let itemCount = rewarditem[rIdx][1];
                        msg += "物品:#v" + itemId + "# 数量：#r" + itemCount + "#k\r\n\r\n";
                        msg += "是否领取奖励，并离开这里？"
                        if (npc.askYesNoS(msg)) {
                                if (player.gainItem(itemId, itemCount)) {
                                        event.setVariable(player.getName(), "1");
                                        let rMap = player.getIntQuestRecordEx(100642, "rMap");
                                        player.changeMap(rMap);
                                } else {
                                        npc.sayNextS("背包空间不足请清理后继续。");
                                }
                        } else {
                                npc.sayNextS("还有其他事情要做吗。");
                        }
                }
        } else {
                npc.sayNextS("没有成绩是没有奖励的！！！");
        }
} else {
        player.changeMap(100000000);
}