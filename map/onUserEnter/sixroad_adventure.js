// Created by Jackson
// ID:[910400200]
// MapName:六岔路口

if (player.isQuestStarted(32241)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setTemporarySkillSet(0);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setForcedInput(2);
        //npc.setDelay(300);
        //player.setForcedInput(0);
        let OBJECT_4 = player.spawnTempNpc(1520000, -135, -350, 1);
        player.setNpcSpecialAction(OBJECT_4, "summon", 0, false);
        npc.setCameraMove(false, 200, false, -140, -350);
        //npc.setDelay(2857);
        npc.setCameraMove(true, 300, false, 0, 0);
        //npc.setDelay(1813);
        //npc.setDelay(900);
        player.startNavigation(910400200, 1, "1520000", 32241);
        // Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00
        //player.setTemporarySkillSet(0);
        player.setInGameDirectionMode(false, true, false, false);
}
