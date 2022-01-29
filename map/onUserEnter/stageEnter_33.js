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
        map.blowWeatherEffectNotice("找到正确的路通往传送口吧，可以使用钥匙对传送口的方向进行转换哦。", 147, 15000);
        player.gainItem(2432459, 2);
        player.gainItem(2432460, 2);
        //重置地图所有箭头
        //00 — 04
        //|     |
        //04 — 44
        for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                        var stat = parseInt(Math.random() * 3) + 1;
                        map.setReactorState(String(x * 10 + y), stat, 0);
                }
        }
}
