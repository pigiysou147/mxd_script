/**
 * Lucid
 * @author NautMS
 */

let eventName;
let bossId;
switch (map.getId()) {
    case 450004300:
        eventName = "boss_lucid";
        bossId = 8880167;
        break;
    case 450004600:
        eventName = "boss_lucid_hard";
        bossId = 8880177;
        break;
}
let event = npc.getEvent(eventName);
if (event != null && event.getVariable("boss3") == null) {
    event.setVariable("boss3", false);
    map.spawnMob(bossId, 93, 36);

}