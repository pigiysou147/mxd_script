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
npc.setCameraMove(false, 2000, 710, 0);
player.setVansheeMode(true); //隐身
player.spawnTempNpc(3003279, 770, -95);//克雷斯
player.spawnTempNpc(3003280, 861, 0);//洛亚
player.spawnTempNpc(3003281, 585, 0);//迪泰
player.setNpcForceFlip(3003281, 1);
player.spawnTempNpc(3003282, 710, 0);//缪奈
player.setNpcForceFlip(3003282, 1);

player.spawnTempNpc(3003275, -211, -304);//迪纳卡
player.spawnTempNpc(3003276, -104, -305);//菲利乌斯
player.spawnTempNpc(3003277, -14, -305);//阿斯迪拉
//npc.setDelay(500);
//player.setLayerBlind(false, 255, 1000);
//npc.setDelay(500);
npc.sayNextENoEsc("#face0#我好害怕…", 3003280);
npc.sayNextENoEsc("#face0#一切都会好的…我们一定要再相见。", 3003281);
//npc.setDelay(100);
//这里有个纹理处理。
player.destroyTempNpc(3003279);
player.spawnTempNpc(3003295, 770, -95);//冰冻克雷斯
player.destroyTempNpc(3003281);
player.spawnTempNpc(3003297, 585, 0);//冰冻迪泰
player.setNpcForceFlip(3003297, 1);
player.destroyTempNpc(3003280);
player.spawnTempNpc(3003296, 861, 0);//冰冻洛亚
player.destroyTempNpc(3003282);
player.spawnTempNpc(3003298, 710, 0);//冰冻缪奈
player.setNpcForceFlip(3003298, 1);
//npc.setDelay(1500);
npc.setCameraMove(false, 300, -103, -133);
//npc.setDelay(3000);
npc.sayNextENoEsc("#face0#约定好，我们再次相见。", 3003275);
npc.sayNextENoEsc("#face0#历经长久岁月，即使再强大的诅咒也会消失的吧？", 3003276);
//npc.setDelay(500);
//这里有个纹理处理。
player.destroyTempNpc(3003275);
player.destroyTempNpc(3003276);
player.destroyTempNpc(3003277);
player.spawnTempNpc(3003292, -211, -304);//冰冻迪纳卡
player.spawnTempNpc(3003293, -104, -305);//冰冻菲利乌斯
player.spawnTempNpc(3003294, -14, -305);//冰冻阿斯迪拉
//npc.setDelay(1000);
npc.setCameraMove(false, 300, -1406, 0);
//npc.setDelay(3500);
player.setLayerBlind(true, 255, 2000);
//npc.setDelay(1500);
player.changeMap(940200123, 0);
player.setVansheeMode(false); //隐身
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);