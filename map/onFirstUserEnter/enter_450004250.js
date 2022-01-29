/**
 * Lucid
 * @author NautMS
 */

let eventName;
let bossId;
let bossHp;
switch (map.getId()) {
    case 450004250:
        eventName = "boss_lucid";
        bossId = 8880150;
        bossHp = 4000000000000;
        break;
    case 450004550:
        eventName = "boss_lucid_hard";
        bossId = 8880151;
        bossHp = 40000000000000;
        break;
}
let event = npc.getEvent(eventName);
if (event != null && event.getVariable("boss2") == null) {
    event.startTimer("ButterflyPhase2", 5000);
    event.setVariable("boss2", false);
    let boss = map.makeMob(bossId);
    boss.changeBaseHp(bossHp);
    map.spawnMob(boss, 636, -491);

}