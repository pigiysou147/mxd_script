if (map.getId() == 992000000) {
        var tData = 600000;
        var used = false;
        for (var i = 1; i <= 5; i++) {
                var sData = player.getQuestRecordEx(42000, "slot" + i);
                if (sData != null && "0".equals(sData)) {
                        player.loseItem(npc.getItemId(), 1);
                        used = true;
                        player.updateQuestRecordEx(42000, "slot" + i, "2");
                        break;
                }
        }
        if (used) {
                var addTime = 0;
                for (var i = 1; i <= 5; i++) {
                        var sData = player.getQuestRecordEx(42000, "slot" + i);
                        if (sData != null && !"-1".equals(sData) && !"0".equals(sData)) {
                                var type = parseInt(sData);
                                if (type == 1) {
                                        var typeTime = 3;
                                } else if (type == 2) {
                                        var typeTime = 6;
                                } else if (type == 3) {
                                        var typeTime = 9;
                                } else if (type == 4) {
                                        var typeTime = 14;
                                } else if (type == 5) {
                                        var typeTime = 17;
                                } else {
                                        var typeTime = 1;
                                }
                                addTime += typeTime;
                        }
                }
                tData += addTime * 60 * 1000;
                player.updateQuestRecordEx(42011, "time", String(tData));
                player.updateQuestRecordEx(42011, "totalTime", String(tData));
                player.showLobbyTimer(0, tData, tData, 42011);
        } else {
                player.showSystemMessage("已经没有可以使用的栏位了！");
        }
} else {
        player.showSystemMessage("在起源之塔 - 大厅中才能使用！");
}