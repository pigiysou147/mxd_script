// Created by Jackson
// ID:[865010001]
// MapName:达尼尔拉战船
// 达尼尔拉战船

if (player.isQuestStarted(17678) || player.isQuestCompleted(17678) && !player.isQuestCompleted(17680)) {
        portal.playPortalSE();
        portal.makeEvent("berry_quest", false, [player, [865010011]]);
} else {
        portal.abortWarp();
}
