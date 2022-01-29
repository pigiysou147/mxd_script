let event = npc.getEvent("boss_will");
if (event == null) {
    event = npc.getEvent("boss_will_hard");
}
if (event != null && event.getVariable("boss2") != null) {
    let peras = [500, 3];
    map.showWillHpBar(peras);
}