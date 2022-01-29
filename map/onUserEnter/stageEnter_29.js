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
        //ms.forceTrigger("aquaris29_2", parseInt(Math.random() * 7) + 1);不知道是什么
        var rnd = parseInt(Math.random() * 7) + 1;
        event.setVariable("stage29_Value", String(rnd));
        map.setReactorState("aquaris29_2", rnd, 0);
        map.blowWeatherEffectNotice("请获得7个沙晶，然后1~7个掉落在右侧树下！", 147, 15000);
}
