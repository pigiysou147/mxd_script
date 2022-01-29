/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]再见，卡奥
 *
 *  @Author Yanran
 */
player.setInGameCurNodeEventEnd(true);
player.spawnTempNpc(3003113, -293, 38);
player.setNpcSpecialAction(3003113, "lying", 999999, false);
player.setNpcForceFlip(3003113, -1);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
npc.setCameraZoom(0, 2000, 0, -355, 130);
////npc.setDelay(1);
npc.setCameraMove(false, 200, true, -768, 120);
////npc.setDelay(2000);
npc.sayNextENoEsc("卡奥，卡奥！", true);
//player.setOverlapDetail(0, 50, 50, true);//纹理，未修函数
////npc.setDelay(1);
//player.removeOverlapDetail(1000);
player.setNpcSpecialAction(3003113, "stand2", 9999999, true);
////npc.setDelay(1000);
npc.sayNextENoEsc("#face0#咳额..咳..", 3003113);
npc.sayNextENoEsc("#face0#…我还没有消失啊，真是太好了。我还有一句重要的话对你说。", 3003113);
npc.sayNextENoEsc("#face0#卡奥。", true);
npc.sayNextENoEsc("#face0#也许传达了这句话，我就要消失了。", 3003113);
npc.sayNextENoEsc("#face0#……", 3003113);
npc.sayNextENoEsc("#face0#你不要太伤心。", 3003113);
npc.sayNextENoEsc("#face0#这是我必须要做的事。", 3003113);
npc.sayNextENoEsc("#face0#你一定要记下我接下来所说的每一句话。", 3003113);
npc.sayNextENoEsc("#face0#你用你的力量从阿勒玛手中守护了大家。和我不同，你可以完全接受神秘徽章的力量。", 3003113);
npc.sayNextENoEsc("#face0#你沿着河走，会遇上很多形态不同的艾尔达，与此同时，你要不断收集神秘徽章，增强力量。", 3003113);
npc.sayNextENoEsc("#face0#应该会有很多威胁等着你，不过你要记住。也许会有同样多的人帮助你。", 3003113);
npc.sayNextENoEsc("#face0#我消失后，你拿着神秘徽章跳入瀑布中。那之后……", 3003113);
npc.sayNextENoEsc("#face0#呼……", 3003113);
////npc.setDelay(500);
npc.sayNextENoEsc("#face0#那么，拜托了。再见…#ho#，请一定要消灭黑魔法师，守护好这个美丽的世界……", 3003113);
player.setNpcSpecialAction(3003113, "bye", -1, true);
player.setUserEmotionLocal(4, 50000);//设置玩家表情
////npc.setDelay(2500);
npc.setCameraMove(false, 30, -20, 42);
////npc.setDelay(1500);
player.setLayerBlindWhite(true, 255, 1000);
player.destroyTempNpc(3003113);
////npc.setDelay(2000);
npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);
npc.setCameraMove(true, 0, 0, 0);
////npc.setDelay(1000);
//npc.setOverlapDetail(0, 50, 50, true);
////npc.setDelay(1);
player.changeMap(450001250, 1);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
//player.removeOverlapDetail(1000);