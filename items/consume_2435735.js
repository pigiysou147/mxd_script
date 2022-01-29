
item_2435734();

function item_2435734() {
        if (player.isQuestStarted(1475)) {
                var time = 60 - player.getOnlineTime();
                if (time > 0) {
                        npc.sayS("#r该神秘石激活中！剩余时间：#e" + time + "#n分钟");
                } else {
                        player.completeQuest(1475, 2140001);
                        npc.sayS("已经成功激活格兰蒂斯的神秘石");
                }

                return;
        }

        if (player.isQuestCompleted(1475)) {
                npc.sayS("#r该神秘石已激活完毕。。");
                return;
        }

        if (player.isQuestStarted(1474) || player.isQuestStarted(1476)) {
                npc.sayS("已激活其他神秘石。。");
                return;
        }

        if (npc.askYesNoS("你要立刻激活神秘石吗？\r\n\r\n#b(如果点击确认，接下来1小时内的狩猎经验值将会被记录。)#k")) {
                player.startQuest(1475, 2140001);

        }
}