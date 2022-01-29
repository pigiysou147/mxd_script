// Created by Jackson
// ID:[865030101]
// MapName:暗杀者据点入口
// 暗杀者据点入口

if (player.isQuestStarted(17666)) {
        portal.playPortalSE();
        portal.makeEvent("berry_quest", false, [player, [865030121]]);
} else if (player.isQuestStarted(17664) || !player.isQuestCompleted(17666) && player.isQuestCompleted(17664) || !player.isQuestStarted(17664) && player.isQuestCompleted(17663)) {
        portal.makeEvent("berry_quest", false, [player, [865030111]]);
} else if (player.isQuestCompleted(17667)) {
        portal.playPortalSE();
        player.changeMap(865030111);
} else {
        player.showSystemMessage("貌似不干掉守卫们将无法进入。");
        portal.abortWarp();
}
