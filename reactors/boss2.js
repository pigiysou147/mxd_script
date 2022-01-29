/*
 时间塔的本源:帕普拉斯[闹钟]
 */

let event = reactor.getEvent("Populatus");
if (event != null && event.getVariable("boss") == null) {
        event.setVariable("boss", true);
        map.broadcastEventNotice("时间裂缝已经被<裂缝碎块>填充了");
        let boss = map.makeMob(8500000);
        map.spawnMob(boss,-410,-400);
		map.changeBGM("Bgm09/TimeAttack");
}
