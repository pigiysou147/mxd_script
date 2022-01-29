if (player.getPQLog("aquaris_tower") >= 200) {
        portal.abortWarp();
        player.showSystemMessage("今天已经突破了200层，无法再次进入了！");
} else if (!player.hasItem(2432461, 1)) {
        portal.abortWarp();
        player.showSystemMessage("你没有灵魂链接器，请通过阿丽莎的思念体获取。");
} else {
        if (portal.makeEvent("aquaris_tower", false, player) == null) {
                portal.abortWarp();
                player.dropAlertNotice("发生未知错误，请联系管理员。");
        }
}

function getQuestPoint(questId) {
        return player.getIntQuestRecordEx(questId, "point");
}

function gainQuestPoint(QuestId, Number) {
        player.updateQuestRecordEx(QuestId, "point", String(getQuestPoint(QuestId) + Number));
        if (Number < 0) {
                player.showSystemMessage("消耗了 " + Math.abs(Number) + " 起源点数，剩余起源点数：" + getQuestPoint(QuestId));
        } else {
                player.showSystemMessage("增加了 " + Math.abs(Number) + " 起源点数，剩余起源点数：" + getQuestPoint(QuestId));
        }
}