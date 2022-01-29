// var event = npc.getEvent();
// if (event != null) {
//         var rData = player.getQuestRecordEx(42011, "time");
//         var tData = player.getQuestRecordEx(42011, "totalTime");
//         var startData = player.getQuestRecordEx(42011, "start");
//         if (rData == null || tData == null || startData == null) {
//                 rData = "600000";
//                 tData = "600000";
//                 startData = String(new Date().getTime());
//                 player.updateQuestRecordEx(42011, "time", rData);
//                 player.updateQuestRecordEx(42011, "totalTime", tData);
//                 player.updateQuestRecordEx(42011, "start", startData);
//         }
//         var time = parseInt(rData);
//         var totalTime = parseInt(tData);
//         if (player.isGm()) {
//                 player.dropMessage(6, "剩余时间：" + time / 1000 + "秒");
//         }
//         player.screenEffect("event/start");
//         player.showLobbyTimer(2, time, totalTime, 42011);
//         player.updateQuestRecordEx(42011, "start", String(new Date().getTime()));
//         map.blowWeatherEffectNotice("你如果将桃乐丝消灭，就真的胜利了，这将是一场激烈的战斗，加油！", 147, 15000);
//         if (!"1".equals(event.getVariable("Boss_S50"))) {
//                 //召唤Boss
//                 event.setVariable("Boss_S50", "1");
//                 let boss = map.makeMob(9309207);
//                 boss.changeBaseHp(boss.getHp() * 1000);
//                 map.spawnMob(boss, 19, 185);
//         }
// }
