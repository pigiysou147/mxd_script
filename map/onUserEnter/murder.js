// Created by Jackson
// ID:[865020071]
// MapName:运河1


player.setInGameCurNodeEventEnd(true);
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(true, true, false, false);
//player.setStandAloneMode(true);
//player.setForcedInput(2);
//npc.setDelay(5000);
//player.setForcedInput(0);
npc.sayNextSNoEsc("不对,那人!!", true);
player.showScreenAutoLetterBox("Map/EffectBT.img/dawnveil1/Cut4_1", 0);
//npc.setDelay(2000);
npc.sayNextSNoEsc("你们在干什么!", true);
npc.sayNextNoEsc("有目击者。干掉他。", 9390227);
// Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00
for (let i = 0; i < 4; i++) {
        map.spawnMob(9390833, 586, 350);
}
for (let i = 0; i < 4; i++) {
        map.spawnMob(9390834, 903, 350);
}
player.setInGameDirectionMode(false, true, false, false);
//player.setStandAloneMode(false);
