// Created by Jackson
// ID:[865000100]
// MapName:航行中

let shipType = player.getIntQuestRecordEx(17008, "T");
map.setReactorState("wkraken", shipType, 0);
map.setReactorState("sail", 3 + shipType, 0);
map.setReactorState("cannon", shipType, 0);
map.setReactorState("ship", shipType, 0);
let event = npc.getEvent();
if (event != null) {
        if (player.isQuestCompleted(17005) && player.isQuestCompleted(17006) && player.isQuestCompleted(17007)) {
                player.startSailEventTimer();
        }
        player.setActionBar(100 + shipType);
        player.showDeathCount();
}