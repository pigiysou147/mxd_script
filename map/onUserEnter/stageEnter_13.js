var event = npc.getEvent();
if (event != null) {
        var time = player.getIntQuestRecordEx(42011, "time");
        var totalTime = player.getIntQuestRecordEx(42011, "totalTime");
        if (player.isGm()) {
                player.dropMessage(6, "剩余时间：" + time / 1000 + "秒");
        }
        player.screenEffect("event/start");
        player.showLobbyTimer(2, time, totalTime, 42011);
        player.updateQuestRecordEx(42011, "start", String(new Date().getTime()));
        map.blowWeatherEffectNotice("请在怪物撞击到魔力石之前，将他们全部消灭。注意不要远离魔力石。", 147, 15000);
        event.startTimer("spawnMob", 3000);
        player.teleportToPortalId(1);
}