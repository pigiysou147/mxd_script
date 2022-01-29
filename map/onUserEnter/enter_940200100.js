/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第一个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
player.spawnTempNpc(3003274, 44, -5);
player.spawnTempNpc(3003270, 118, -5);
player.spawnTempNpc(3003275, -121, -5);
player.setNpcForceFlip(3003275, 1);
player.setVansheeMode(true); //隐身
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#很好，今天也幸苦了！你们…实力日渐提升，如果看见小精灵们都这么热心相信双弩精灵一定会很高兴的。", 3003275);
npc.sayNextENoEsc("#face1#嘻嘻，不过就是该练习的份量吧！那个…迪纳卡，跟你说！", 3003274);
npc.sayNextENoEsc("#face1#我还要把我们这段期间修炼的成果展现给双弩精灵看！我听说她很快就会回来埃欧蕾处…", 3003274);
//这里有个纹理处理。
npc.setCameraZoom(0, 1700, 500, -121, -5);
//npc.setDelay(1000);
npc.setCameraMove(false, 50, 1, -10);
//npc.setDelay(10);
npc.sayNextENoEsc("#face0#刚好她也听说想顺道去修炼场看看，他还有听说这段期间没有照顾你们觉得惋惜。", 3003275);
npc.sayNextENoEsc("#face1#惊呼！真的吗？那真的要更加努力的练习呢！现在开始该做些什么好呢？增加射箭？还有…什么呢？", 3003274);
npc.sayNextENoEsc("#face0#赫丽娜也真是的，虽然说充满决心是很好的啦！但也不能太勉强吧？", 3003275);
npc.sayNextENoEsc("#face1#别担心，迪纳卡姐姐。我精力充沛，那么就明天见？！走吧，露西德！", 3003274);
npc.sayNextENoEsc("#face0#好吧明天见！", 3003275);
npc.sayNextENoEsc("#face0#拜拜！", 3003270);
player.setNpcForceFlip(3003270, 1);
player.setNpcForceMove(3003270, 1, 325, 200);
player.setNpcForceFlip(3003274, 1);
player.setNpcForceMove(3003274, 1, 325, 200);
npc.setCameraMove(false, 200, 568, -10);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face1#光想想就觉得好期待哦！终于可以展现这段时间的练习成果，而且还是在双弩精灵面前！", 3003274);
//npc.setDelay(1000);
player.setNpcForceMove(3003274, 1, 200, 200);
//npc.setDelay(2000);
player.setNpcForceFlip(3003274, -1);
npc.sayNextENoEsc("#face0#很好，从明天开始进入高强度训练！你也会加入吧，嗯？", 3003274);
npc.sayNextENoEsc("#face0#好，明天开始呢…", 3003270);
npc.sayNextENoEsc("#face1#那今天要好好休息一下！嘻嘻，拜拜。露西德！", 3003274);
npc.sayNextENoEsc("#face0#嗯…拜拜，赫丽娜。", 3003270);
//npc.setDelay(800);
player.setNpcForceFlip(3003274, 1);
player.setNpcForceMove(3003274, 1, 400, 200);
//npc.setCameraMove(false, 50, 600, -10);
//npc.setDelay(3000);
player.setGrayScale(0, true);//设置灰度
player.setNpcForceMove(3003270, 1, 50, 200);
//npc.setDelay(2000);
npc.sayNextENoEsc("#face0#……", 3003270);
//npc.setDelay(1000);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(1000);
player.changeMap(940200101, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);