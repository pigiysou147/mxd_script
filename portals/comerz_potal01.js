// Created by Jackson
// ID:[865030300]
// MapName:怪异森林独径
// 怪异森林独径


if (player.isQuestCompleted(17670) || player.isQuestStarted(17670)) {
        portal.playPortalSE();
        player.changeMap(865030400, 2);
} else {
        portal.abortWarp();
        player.showSystemMessage("我见到了可疑的结界,但是无法进去。");
}
