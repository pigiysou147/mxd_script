/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第六个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
player.setVansheeMode(true); //隐身
player.spawnTempNpc(3003272, 1150, 4);
npc.setCameraZoom(0, 1000, 0, 1150, -120);
//npc.setDelay(1000);
//player.setLayerBlind(false, 255, 2000);
//npc.setDelay(1000);
player.setNpcForceMove(3003272, 1, 50, 150);
//npc.setDelay(1500);
npc.setCameraZoom(1, 1500, 30, 1150, -4);
//npc.setDelay(100);
npc.setCameraMove(false, 400, 2400, 0);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face2#…这是我的梦幻空间…怎么会突然在这里…", 3003250);
player.setNpcForceMove(3003272, -1, 0, 150);
//npc.setDelay(2000);
npc.sayNextENoEsc("#face2#…总觉得有不好的预感，得快点逃出这里…", 3003250);
//npc.setDelay(500);
player.setNpcForceMove(3003272, -1, 200, 150);
npc.setCameraMove(false, 100, 2200, 0);
//npc.setDelay(2000);
npc.sayNextENoEsc("#face0#你要去哪儿？主人？虽然是我们你是创造的，但是呵呵。", 3003284);
//npc.setDelay(500);
player.showNpcEffectPlay(3003272, "Effect/OnUserEff.img/emotion/oh", 900, 0, 0, false, 0, false, 0);
//npc.setDelay(500);
player.setNpcForceMove(3003272, 1, 50, 150);
npc.setCameraMove(false, 100, 2400, 0);
//npc.setDelay(1000);
player.spawnTempNpc(3003284, 1288, 4);
player.setNpcSpecialAction(3003284, "summon", 9999999, false);
//npc.setDelay(500);
npc.sayNextENoEsc("#face3#你们是我梦里创造的东西，快消失吧!快!", 3003250);
npc.sayNextENoEsc("#face0#这样可行不通？主人已经被关起来了。主人被困在你所创造的世界，呵呵。", 3003284);
//npc.setDelay(500);
player.setNpcForceMove(3003284, -1, 40, 150);
//npc.setDelay(500);
npc.sayNextENoEsc("#face0#你以后要与我们一起在这里生活，永远在一起。", 3003284);
player.showNpcEffectPlay(3003272, "Effect/OnUserEff.img/emotion/oh", 900, 0, 0, false, 0, false, 0);
//npc.setDelay(500);
player.setNpcForceMove(3003272, -1, 0, 150);
//npc.setDelay(200);
player.spawnTempNpc(3003257, 936, 4);
player.setNpcSpecialAction(3003257, "summon", 9999999, false)
player.setNpcForceMove(3003257, 1, 0, 150);
npc.setCameraMove(false, 100, 2250, 0);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#啊，你好啊！你每分每秒都不会感到无聊，因为对于刺激的噩梦永远不会结束。", 3003257);
npc.sayNextENoEsc("#face0#哇，在干嘛，还快点服侍主人。", 3003284);
//npc.setDelay(500);
npc.sayNextENoEsc("#face0#来，快去吧！", 3003284);
player.spawnTempNpc(3003252, 801, 4);
player.setNpcSpecialAction(3003252, "special", 99999999, true);
player.setNpcForceFlip(3003252, 1);
player.spawnTempNpc(3003256, 1335, 4);
player.setNpcSpecialAction(3003256, "special", 99999999, false);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face2#不，不可以这样！不能这样，必须要快点离开梦幻空间。", 3003250);
player.spawnTempNpc(3003254, 698, 4);
player.setNpcSpecialAction(3003254, "special", 99999999, true);
player.setNpcForceFlip(3003254, 1);
player.spawnTempNpc(3003255, 1443, 4);
player.setNpcSpecialAction(3003255, "special", 99999999, false);
npc.sayNextENoEsc("#face2#听我的命令，快给我消失！", 3003250);
npc.sayNextENoEsc("#face0#可能没办法按你的意思走咯，不管什么东西都一样。", 3003257);
player.setNpcForceMove(3003257, 1, 10, 150);
//npc.setDelay(400);
player.setNpcForceMove(3003284, -1, 10, 150);
npc.sayNextENoEsc("#face0#你被关在噩梦里面，永远永远。", 3003257);
player.destroyTempNpc(3003272);
player.spawnTempNpc(3003273, 1082, 4);
player.setNpcSpecialAction(3003273, "awake", 0, true);
//npc.setDelay(1200);
player.setNpcSpecialAction(3003273, "sleep2", 99999999, true);
//npc.setDelay(3000);
player.setLayerBlind(true, 255, 500);
//npc.setDelay(1000);
player.changeMap(940200152, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);