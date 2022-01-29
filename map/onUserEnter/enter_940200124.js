/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第三个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
player.setVansheeMode(true); //隐身
player.spawnTempNpc(3003270, -180, -49);
player.setNpcSpecialAction(3003270, "mer", 9999999, false);
player.spawnTempNpc(3003280, -102, -49);//洛亚
player.spawnTempNpc(3003281, -47, -45);//迪泰

player.spawnTempNpc(3003275, -354, -45);//迪纳卡
player.setNpcForceFlip(3003275, 1);
player.spawnTempNpc(3003276, -300, -45);//菲利乌斯
player.setNpcForceFlip(3003276, 1);
player.spawnTempNpc(3003277, -248, -49);//阿斯迪拉
player.setNpcForceFlip(3003277, 1);
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(500);
npc.sayNextENoEsc("#face0#美丽的埃欧蕾，我是精灵女王，还有比这个更幸福的事情吗？", 3003270);
npc.sayNextENoEsc("#face0#可爱的百姓，他们总是按照我的一切行事。说说看吧！你有多爱我呢？", 3003270);
npc.sayNextENoEsc("#face0#……", 3003275);
npc.sayNextENoEsc("#face0#……", 3003276);
npc.sayNextENoEsc("#face0#……", 3003280);
npc.sayNextENoEsc("#face0#……", 3003281);
//npc.setDelay(100);
//这里有个纹理处理。
player.destroyTempNpc(3003280);
player.destroyTempNpc(3003281);
player.destroyTempNpc(3003275);
player.destroyTempNpc(3003276);
player.destroyTempNpc(3003277);
//npc.setDelay(2000);
npc.sayNextENoEsc("#face3#……", 3003270);
npc.sayNextENoEsc("#face4#……", 3003270);
//npc.setDelay(1500);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(1500);
player.changeMap(940200125, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);