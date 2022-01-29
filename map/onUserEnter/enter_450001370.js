/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]剧情对话
 *
 *  @Author Yanran
 */
player.setInGameCurNodeEventEnd(true);
player.spawnTempNpc(3003113, 48, 221);
player.setNpcForceFlip(3003113, 1);
player.spawnTempNpc(3003112, 152, 221);
player.setNpcForceFlip(3003112, 1);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
////npc.setDelay(1000);
npc.sayNextENoEsc("如果用力吹者坚硬的皮...", 3003112);
////npc.setDelay(100);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/fireBird");
////npc.setDelay(2000);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/fireBird2");
player.spawnTempNpc(3003124, 840, 94);
player.setNpcForceMove(3003124, -1, 300, 100);
npc.sayNextENoEsc("火焰鸟听到声音，赶来了。坐火烈鸟去的话，不一会就能到达消亡旅途的尽头。", 3003112);
npc.sayNextENoEsc("啊，卡奥说要回到原来的地方吗？", 3003112);
npc.sayNextENoEsc("火焰鸟有个习性，它一旦出发，就会一直往前飞一定的距离，所以到中途为止，你要和我们一同前行。", 3003112);
npc.sayNextENoEsc("那么请准备好硬实的螯和粘稠的油，然后坐上火焰鸟吧。", 3003112);
////npc.setDelay(1000);
player.useSkillEffect(80002202, 1);
player.changeMap(450001330, 0);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);