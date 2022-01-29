/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第三个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
//player.playAmbientSound("SoundEff.img/ArcaneRiver/night", 500, 100);
player.setLayerBlind(true, 255, 0);
player.spawnTempNpc(3003270, 0, 166);
player.setNpcSpecialAction(3003270, "ice", 9999999, false);
player.setVansheeMode(true); //隐身
npc.setCameraZoom(1, 2000, 0, 10, 150);
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(500);
npc.sayNextENoEsc("#face3#所谓的梦…就是想要忘也忘不了。", 3003270);
//npc.setDelay(100);
npc.sayNextENoEsc("#face3#真实的是梦醒时发现自己在寒冷的冰块中…", 3003270);
//npc.setDelay(100);
npc.sayNextENoEsc("#face4#别这样下去了…我领悟到现实实在太痛苦了…", 3003270);
//npc.setDelay(100);
npc.sayNextENoEsc("#face4#不过，过不了多久就会又继续描述这美丽的梦境了吧…啊啊…好痛苦…结束一切吧…不要再让我这样继续下去了…", 3003270);
//npc.setDelay(1000);
player.showSpineScreen(1, "Map/Effect3.img/BossLucid/butterfly/005", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/butterfly0");
//npc.setDelay(2000);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(6000)
player.changeMap(450003000, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);