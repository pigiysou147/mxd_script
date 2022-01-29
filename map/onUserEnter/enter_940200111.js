/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第二个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
player.spawnTempNpc(3003278, -103, -133);//双弩精灵
player.setNpcForceMove(3003278, 1, 0, -133);
player.spawnTempNpc(3003275, -213, -133);
player.setNpcSpecialAction(3003275, "smile", 9999999, false);
player.setNpcForceFlip(3003275, 1);
player.spawnTempNpc(3003274, 48, -143);
player.spawnTempNpc(3003270, 110, -133);
player.spawnTempNpc(3003277, -289, -132);
player.setNpcSpecialAction(3003277, "smile", 9999999, false);
player.setNpcForceFlip(3003277, 1);
player.spawnTempNpc(3003276, -367, -133);
player.setNpcSpecialAction(3003276, "smile", 9999999, false);
player.setNpcForceFlip(3003276, 1);
player.spawnTempNpc(3003280, -205, -304);
player.setNpcSpecialAction(3003280, "smile", 9999999, false);
player.setNpcForceFlip(3003280, 1);
player.spawnTempNpc(3003281, -271, -304);
player.setNpcSpecialAction(3003281, "smile", 9999999, false);
player.setNpcForceFlip(3003281, 1);
player.spawnTempNpc(3003279, 34, -305);
player.setNpcSpecialAction(3003279, "smile", 9999999, false);
player.spawnTempNpc(3003282, 94, -296);
player.setNpcSpecialAction(3003282, "smile", 9999999, false);
player.setVansheeMode(true); //隐身
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#那么，希望你一路平安。", 3003276);
//npc.setDelay(100);
npc.sayNextENoEsc("#face0#谢谢，菲利乌斯还有大家…", 3003278);
//npc.setDelay(100);
npc.sayNextENoEsc("#face0#这将会是一场激战。不管是双弩精灵或者其他伙伴，或者是关于精灵的所有人。", 3003276);
//npc.setDelay(100);
npc.sayNextENoEsc("#face0#双弩精灵。", 3003281);
//npc.setDelay(100);
npc.sayNextENoEsc("#face0#……", 3003274);
//npc.setDelay(100);
player.setGrayScale(0, true);//设置灰度
//npc.setDelay(1500);
npc.sayNextENoEsc("#face2#（…我有种不详的预感也许我们永远也无法再次见面！或许这将成为最后一次！）", 3003270);
npc.sayNextENoEsc("#face2#（…必须要一起去！我也要一起战斗，在那之前…）", 3003270);
player.setGrayScale(0, false);//设置灰度
//npc.setDelay(500);
npc.sayNextENoEsc("#face0#我也要一起去，请带我去战场！", 3003274);
player.setNpcForceMove(3003274, -1, 30, 100);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#我也要尽自己的一点心意帮助大家，请允许我加入！", 3003274);
player.showNpcEffectPlay(3003270, "Effect/OnUserEff.img/emotion/oh", 0, 0, 0, true, 0, false, 0);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#我也要加入一起战斗。", 3003281);
npc.sayNextENoEsc("#face0#迪泰，那可不行，双弩精灵…", 3003275);
npc.sayNextENoEsc("#face0#我明白你的意思，但必须要慎重行事，守护所有人是王的责任。请各位务必相信我并守护自己的位置。", 3003278);
npc.sayNextENoEsc("#face0#……", 3003274);
npc.sayNextENoEsc("#face3#（双弩精灵…）", 3003270);
//npc.setDelay(2000);
player.setLayerBlind(true, 255, 2000);
player.changeMap(940200112, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);