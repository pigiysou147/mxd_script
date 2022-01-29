/**
 * Lucid
 * @author NautMS
 */

let eventName;
let bossId;
let flowerId;
let bossHp;
switch (map.getId()) {
    case 450004150:
        eventName = "boss_lucid";
        bossId = 8880140;
        flowerId = 8880166;
        bossHp = 2000000000000;
        break;
    case 450004450:
        eventName = "boss_lucid_hard";
        bossId = 8880141;
        flowerId = 8880176;
        bossHp = 20000000000000;
        break;
}
let event = npc.getEvent(eventName);
if (event != null && event.getVariable("boss1") == null) {
    event.setVariable("boss1", false);
    event.startTimer("ButterflyPhase1", 5000);
    let boss = map.makeMob(bossId);
    boss.changeBaseHp(bossHp);
    map.spawnMob(boss, 1000, 48);

    let flower = map.makeMob(flowerId);
    flower.changeBaseHp(bossHp);
    map.spawnMob(flower, 1000, 48);
}