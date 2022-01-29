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

        player.updateQuestRecordEx(42006, "y=0;yc=0;b=0;bc=0;g=0;gc=0;r=0;rc=0");
        map.blowWeatherEffectNotice("必须捕捉怪物获得数字高于结界的卡片后，才能欺骗结界。", 147, 15000);
}



