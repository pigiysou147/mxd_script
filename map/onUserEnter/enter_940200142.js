/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]第五个潜意识碎片
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 0);
player.setVansheeMode(true); //隐身
player.spawnTempNpc(3003273, -410, -146);
npc.setCameraZoom(0, 1500, 0, -730, -630);
//npc.setDelay(2000);
//player.setLayerBlind(false, 255, 2000);
//npc.setDelay(6000);
//这里有个纹理处理。
npc.setCameraZoom(0, 1000, 0, 60, -155);
//npc.setDelay(100);
npc.setCameraMove(false, 100, -500, -105);
//npc.setDelay(4500);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E3/0");
npc.sayNextENoEsc("#face0#这里是没有悲伤与痛苦的都市。", 3003250);
//npc.setDelay(1000);
//这里有个纹理处理。
npc.setCameraZoom(0, 2000, 0, -410, -146);
//npc.setDelay(1000);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E3/1");
npc.sayNextENoEsc("#face0#一场好梦指的就是跨越神秘河畔支配整个世界。", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E3/2");
npc.sayNextENoEsc("#face2#…我要守护，虽然这样可能会与他对立。", 3003250);
player.playExclSoundWithDownBGM("Voice3.img/Lucid/E3/3");
npc.sayNextENoEsc("#face6#黑魔法师，你看看！这是路西德所描绘出的新世界！", 3003250);
//npc.setDelay(1000);
npc.setCameraMove(false, 50, -800, -95);
//npc.setDelay(2000);
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