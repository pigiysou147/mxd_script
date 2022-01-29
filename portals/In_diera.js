// Created by Jackson
// ID:[865000000]
// MapName:桑凯梅尔兹
// 桑凯梅尔兹

if (player.isQuestStarted(17648) || player.isQuestCompleted(17648) && !player.isQuestCompleted(17650) && !player.isQuestStarted(17650)) {
        player.runScript("q17650_SC");
        portal.abortWarp();
} else {
        portal.playPortalSE();
        player.changeMap(865000002, 1);
}
