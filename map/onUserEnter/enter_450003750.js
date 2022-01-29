/*  This is mada by Yanran    
 *
 *  [拉克兰]舞会面具
 *
 *  @Author Yanran
 */
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.removeAdditionalEffect();
player.spawnTempNpc(3003212, 1426, 32);
player.setNpcSpecialAction(3003212, "summon", 0, false);
player.setInGameCurNodeEventEnd(true);
//player.setForcedInput(1);
////npc.setDelay(1);
//player.setForcedInput(0);
////npc.setDelay(1);
npc.sayNextENoEsc("#face3#呃呃呃…心情好奇怪…", 3003224);
npc.sayNextENoEsc("#face3#难道这就是幸福吗？我………曾感觉幸福吗？我不知道，不知道…", 3003224);
player.destroyTempNpc(3003212);
player.setNpcSpecialAction(3003258, "remove", 0, false);
////npc.setDelay(100);
player.destroyTempNpc(3003258);
player.playExclSoundWithDownBGM("SoundEff.img/kreasePQ_appear");
map.spawnMob(8643013, 1426, 32);
////npc.setDelay(1000);
npc.sayNextENoEsc("#face0#原来她是音乐盒啊，在清道夫出现之前………", 3003251);
map.spawnMob(9833094, 1767, 32);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(300);
map.spawnMob(9833094, 1867, 32);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(200);
map.spawnMob(9833094, 1967, 32);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(100);
map.spawnMob(9833094, 2067, 78);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(70);
map.spawnMob(9833094, 2167, 78);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/regen");
////npc.setDelay(50);
npc.sayNextENoEsc("#face0#该死，太晚了。", 3003251);
npc.sayNextENoEsc("#face0#请快点摧毁音乐盒，#ho#。", 3003251);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);