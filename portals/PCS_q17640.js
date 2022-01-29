// Created by Jackson
// ID:[865000000]
// MapName:桑凯梅尔兹
// 桑凯梅尔兹

if (!player.isInGameDirectionMode() && player.isQuestStarted(17639)) {
        player.setInGameDirectionMode(false, true, false, true);
        player.runScript("q17640_SC");
}
portal.abortWarp();