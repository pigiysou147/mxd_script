// Created by Jackson
// ID:[865030111]
// MapName:暗杀者据点内部
// 暗杀者据点内部

if (player.isQuestStarted(17668)) {
        portal.playPortalSE();
        player.changeMap(865030101, 2);
} else {
        player.showSystemMessage("出去之前仍有任务未完成。");
        portal.abortWarp();

}

