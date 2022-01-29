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
        map.blowWeatherEffectNotice("请击败巨型蜘蛛。", 147, 15000);
        if (!"1".equals(event.getVariable("Boss_S10"))) {
                //召唤Boss
                event.setVariable("Boss_S10", "1");
                let boss = map.makeMob(9309201);
                boss.changeBaseHp(boss.getHp() * 1000);
                map.spawnMob(boss, 1073, 155);
        }
}
