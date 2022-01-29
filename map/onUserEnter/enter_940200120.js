/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第三个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.playAmbientSound("SoundEff.img/ArcaneRiver/night", 500, 100);
player.setLayerBlind(true, 255, 0);
player.spawnTempNpc(3003270, -728, 166);
player.setNpcForceMove(3003270, 1, 710, 200);
player.setVansheeMode(true); //隐身
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(5000);
//这里有个纹理处理。
npc.setCameraZoom(0, 2000, 0, 20, -50);
//npc.setDelay(1000);
npc.setCameraMove(false, 70, 20, 330);
//npc.setDelay(3000);
player.setNpcForceMove(3003270, -1, 10, 200);
//npc.setDelay(500);
npc.sayNextENoEsc("#face3#现在不再被认可，双弩精灵不再需要我。", 3003270);
npc.sayNextENoEsc("#face2#既然挣扎努力也得不到想要的东西，那不如抛下一切吧！我会在双弩精灵与所有人的记忆里。你们所有人都再也找不到我。", 3003270);
npc.sayNextENoEsc("#face4#我会在没个深夜梦境的最深处，好好躲藏起来。", 3003270);
//npc.setDelay(1000);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(2000);
npc.setMonologue("已使用支配梦的能力将自己的模样藏在所有人的梦里。\r\n", false);
npc.setMonologue("你将埋头于你所创造的梦境世界。\r\n", false);
npc.setMonologue("…不知道时间的流逝。\r\n", false);
npc.setMonologue("虽然在那段期间对抗黑魔法师的战争以英雄的胜利划下句号。\r\n", false);
npc.setMonologue("…但他们却被黑魔法师下了诅咒。\r\n", false);
npc.setMonologue("英雄、双弩精灵与命运相关联的人都被那女人下了诅咒。\r\n", true);
//npc.setDelay(1000);
player.changeMap(940200122, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);