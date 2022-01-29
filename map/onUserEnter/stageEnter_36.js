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
        map.blowWeatherEffectNotice("跟希克莱塔对话，根据他的提示的组合攻击相应顺序的怪物！。", 147, 15000);
}
