/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]剧情对话
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
player.spawnTempNpc(3003113, 150, -400);
player.setNpcSpecialAction(3003113, "fireBird", 9999999, false);
player.setNpcForceFlip(3003113, 1);
player.spawnTempNpc(3003112, -163, 94);//fireBird
player.setNpcSpecialAction(3003112, "fireBird", 9999999, false);
player.setNpcForceFlip(3003112, 1);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
////npc.setDelay(1000);
npc.sayNextENoEsc("卡奥说要回到原来的地方？那么，你只要绕过那边的那座山峰就可以了。", 3003112);
npc.sayNextENoEsc("……", 3003113);
npc.sayNextENoEsc("...卡奥？", 3003112);
player.setNpcForceFlip(3003113, -1);
player.setNpcForceMove(3003113, -1, 300, 25);
////npc.setDelay(2500);
player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/fall2");
//--这里有个改变音乐的节点
//player.changeBGM("Bgm46/Lake Of Oblivion");
player.setLayerOn(500, "11", 0, 0, -1, "Map/Effect2.img/BlackOut", 4, true, -1, false, 0, 0);
////npc.setDelay(1000);
player.setLayerOn(300, "0", 0, -80, -1, "Map/Effect2.img/ArcaneRiver1/fall", 4, true, -1, false, 0, 0);
////npc.setDelay(1000);
npc.sayNextENoEsc("啊，不行，你不能坐让火焰鸟突然掉头那么危险的事……", 3003112);
npc.sayNextENoEsc("拜托了，停下来，这样下去，我们都会掉下去的！你到底为什么要这样啊！", 3003112);
npc.sayNextENoEsc("……", 3003113);
npc.sayNextENoEsc("可以映出记忆的泉水… 我一定要去看看。", 3003113);
npc.sayNextENoEsc("想看看我的过去…还有… 你的过去… #ho#… ", 3003113);
npc.sayNextENoEsc("那是什么声音！？", true);
npc.sayNextENoEsc("……", 3003113);
npc.sayNextENoEsc("#r……一样的灵魂，一定要两个吗？", 3003113);
npc.sayNextENoEsc("咔啊啊！！！", 3003112);
player.setLayerOff(300, "0");
////npc.setDelay(300);
player.setLayerOff(300, "11");
player.cancelSkillEffect(80002202);
player.changeMap(450001200, 0);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);