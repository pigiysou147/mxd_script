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
        let boss = map.makeMob(9309124);
        map.spawnMob(boss, -848, 2318);
        event.startTimer("s7_time", 60 * 2 * 1000);
        player.teleportToPortalId(1);
        map.setFastSpawn(true);
        map.blowWeatherEffectNotice("请你守护好那名被狂暴的猴子伤害的探险家。", 147, 15000);
}
