/*  This is mada by Yanran    
 *
 *  [拉克兰]路西德寻找的噩梦 对话
 *
 *  @Author Yanran
 */
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
//player.setLayerBlind(false, 255, 1000);
player.spawnTempNpc(3003250, 178, 37);
player.setNpcSpecialAction(3003250, "stand2", 9999999, true);
npc.setCameraZoom(0, 1400, 0, 118, 17);
//////npc.setDelay(1000);
player.setInGameCurNodeEventEnd(true);
////npc.setDelay(2000);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q4/0");
npc.sayNextENoEsc("#face6#最终你还是来到了这里。", 3003250);
npc.sayNextENoEsc("你不要再折磨大家了！在你创造的世界里，没有人是幸福的！", true);
npc.sayNextENoEsc("你片面地认为只要吃饱喝好，可以享受就是幸福，人们在你创造的世界里只是像鹦鹉一样，不断地重复说自己很幸福！！", true);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q4/2");
npc.sayNextENoEsc("#face5#只要伟大的他可以回心转意，这些都无所谓。", 3003250);
npc.sayNextENoEsc("！！你这是什么意思？？你不是在为黑魔法师做事？", true);
npc.sayNextENoEsc("黑魔法师究竟有什么诡计啊？！", true);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q4/4");
npc.sayNextENoEsc("#face5#你不会有一天可以明白他的心思呢？\r\n不，不会有那一天的。", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q4/6");
npc.sayNextENoEsc("#face5#好了，那现在开始吧？", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q4/7");
npc.sayNextENoEsc("#face6#那我跟你说件以前的事吧。", 3003250);
//player.setOverlapDetail(0, 200, 200, true);
//player.removeOverlapDetail(2000);
player.spawnTempNpc(3003251, -133, 37);
player.setNpcSpecialAction(3003251, "summon", 0, false);
player.setNpcForceFlip(3003251, 1);
npc.sayNextENoEsc("#face0#请小心。", 3003251);
npc.sayNextENoEsc("防毒面具？！", true);
npc.sayNextENoEsc("#face0#梦的媒介物是她撒的蝴蝶粉末！\r\n如果你吸进去………！！", 3003251);
////npc.setDelay(1000);
npc.sayNextENoEsc("#face5#真是可怜，可惜已经太晚了。", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/Q4/5");
player.setNpcSpecialAction(3003250, "special", 9999999, true);
////npc.setDelay(3000);
player.showSpineScreen(0, "Map/Effect3.img/BossLucid/fog2/mist_003", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/butterfly0");
player.setLayerBlind(true, 255, 2000);
////npc.setDelay(4000);
player.showSpineScreen(0, "Map/Effect3.img/BossLucid/fog/002", "animation", "intro");
npc.sayNextENoEsc("现在该怎么办？！", true);
npc.sayNextENoEsc("#face0#请打起精神，仔细听好，#ho#。\r\n我之所以不会被她的梦境迷惑，是因为我的面具是防毒面具。", 3003251);
npc.sayNextENoEsc("#face0#我说她的噩梦，我存在的理由就是为了妨碍她。", 3003251);
npc.sayNextENoEsc("#face0#虽然你已经陷入梦境，但如果你帮助我，就能毁掉在这个梦。请按照我的指示去做。", 3003251);
npc.sayNextENoEsc("（和防毒面具对话，去击退路西德吧。）", true);
//player.setOverlapDetail(0, 200, 200, true);
////npc.setDelay(1);
player.changeMap(450004000, 0);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.setLayerBlind(false, 255, 500);
player.destroyTempNpc(3003250);
player.destroyTempNpc(3003251);
//player.removeOverlapDetail(1500);