/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]厉诺的欺骗
 *
 *  @Author Yanran
 */

//这里有个更换背景音乐处理
//player.changeBGM("Bgm00/Silence");
//这里有个地图名称处理

player.spawnTempNpc(3003112, -80, 210);
player.setNpcSpecialAction(3003112, "stand", 9999999, false);
player.setNpcForceFlip(3003112, 1);
player.spawnTempNpc(3003113, 78, 210);
player.setNpcSpecialAction(3003113, "stand", 9999999, false);
player.setNpcForceFlip(3003113, -1);
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setVansheeMode(true);
npc.setCameraZoom(0, 1950, 0, 0, 210);
//player.setForcedInput(0);
////npc.setDelay(2000);
npc.sayNextENoEsc("好了，就是这里，请静静看着泉水。", 3003112);
player.showTrembleEffect(true, 500);//抖动效果似乎无效
npc.setCameraZoom(0, 2500, 0, 0, 210);
//纹理处理--缺失这个函数
////npc.setDelay(1000);
npc.setCameraZoom(0, 1950, 0, 0, 210);
npc.sayNextENoEsc("啊... 哦... 我的头好像要炸开来了。", 3003113);
player.setLayerBlind(true, 150, 1000);
player.changeBGM("Bgm26/DarkMage");
player.setLayerOn(1000, "0", 0, -80, -1, "Map/Effect2.img/ArcaneRiver1/past", 4, true, -1, false, 0, 0);
////npc.setDelay(1000);
npc.sayNextENoEsc("...黑魔法师？神秘河的尽头... 决定性的力量... 未来...", 3003113);
npc.sayNextENoEsc("我现在知道了。我…", 3003113);
npc.sayNextENoEsc("未来的——#ho#…正在神秘河畔的尽头和黑魔法师进行战斗……并且战败了…", 3003113);
npc.sayNextENoEsc("由于缺乏战胜黑魔法师的决定性力量…", 3003113);
npc.sayNextENoEsc("…第一个环节就出了错…那就是我被阿勒玛的部下厉诺给欺骗了！", 3003113);
npc.sayNextENoEsc("我用尽最后的力气，一定要回到过去。就是要让——#ho#，不要因为过去的我而做出错误的选择…", 3003113);
player.setLayerOff(300, "0");
//player.setLayerBlind(false, 255, 0);
//player.teleportToPos(3, 1, new java.awt.Point(78, 208));
player.setForcedFlip(-1);
player.setNpcSpecialAction(3003113, "quest", 9999999, false);
npc.sayNextENoEsc("历诺… 阿勒玛… 对于——#ho#结局不会改变！", 3003113);
npc.sayNextENoEsc("…我不会让你们所愿的…！", 3003113);
player.setNpcSpecialAction(3003112, "smile2", 9999999, false);
npc.sayNextENoEsc("#face0#怪不得我有不好的感觉.. 你在失去记忆之前，已经被阿勒玛吸收了所有的能量。", 3003112);
npc.sayNextENoEsc("…咳…咳…", 3003113);
player.showTrembleEffect(true, -1);//抖动效果似乎无效
npc.setCameraZoom(0, 2500, 0, 0, 210);
//纹理处理
////npc.setDelay(1500);
npc.setCameraZoom(0, 1950, 0, 0, 210);
npc.sayNextENoEsc("#face0#呼呼，抛开那些没用的想法。现在的你连你的身体都控制不了。", 3003112);
npc.sayNextENoEsc("#face0#你朋友会被阿勒玛吸收吗，变成很好的营养成分。而你… 现在已经没用了。留着你也没有什么好处，你就消失吧。", 3003112);
npc.sayNextENoEsc("#face0#嗯…如果被别人怀疑就不好了，我要弄个假的出来…你现在喊同伴的话，好像太晚了吧。", 3003112);
player.destroyTempNpc(3003112);
player.spawnTempNpc(3003112, -80, 210);
player.setNpcForceFlip(3003112, 1);
player.setNpcSpecialAction(3003112, "change", 1800, true);
////npc.setDelay(1200);
player.showNpcEffectPlay(3003112, "Effect/Direction19.img/effect/rino/0", 600, 50, 0, true, 0, false, 0);
////npc.setDelay(600);
//player.showReservedEffect("Effect/Direction19.img/effect/rino/0");
player.setNpcSpecialAction(3003112, "stand2", 9999999, true);
player.spawnTempNpc(3003132, -80, 210);
player.setNpcSpecialAction(3003132, "stand", 9999999, false);
player.setNpcForceFlip(3003132, 1);
////npc.setDelay(2000);
npc.sayNextENoEsc("#face0#走好，从现在开始我的分身将会替代你。", 3003112);
player.setLayerBlind(true, 150, 1000);
player.setLayerOn(1000, "1", 0, 0, -1, "Map/Effect2.img/ArcaneRiver1/fall2", 4, true, -1, false, 0, 0);
////npc.setDelay(2000);
//player.setLayerBlind(false, 255, 0);
player.changeMap(450001380, 0);
player.setLayerOff(300, "1");
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.setVansheeMode(false);
/*
 npc.sayNextENoEsc("好，这边...", 3003112);
 //player.setForcedInput(2);
 ////npc.setDelay(200);
 //player.setForcedInput(0);
 ////npc.setDelay(1500);
 npc.sayNextENoEsc("…停下。", 3003113);
 player.spawnTempNpc(3003113, -250, 176);
 //player.setForcedInput(1);
 ////npc.setDelay(150);
 //player.setForcedInput(0);
 player.setNpcForceFlip(3003113, 1);
 player.setNpcSpecialAction(3003113, "damaged", 999999, false);
 npc.setCameraZoom(2000, 1000, 0, -150, 117);
 ////npc.setDelay(1000);
 player.setForcedFlip(-1);
 ////npc.setDelay(1000);
 //--这里有一个纹理处理
 npc.setCameraZoom(0, 1650, 0, -50, 177);
 ////npc.setDelay(1000);
 npc.sayNextENoEsc("#ho#，相信我，这是陷阱，不能跟着厉诺走。", 3003113);
 npc.setCameraMove(false, 50, 0, 355);
 npc.sayNextENoEsc("找回记忆的泉水…我在那里找我了我失去的记忆，以及厉诺有关的一切事情。", 3003113);
 npc.sayNextENoEsc("我终于知道为什么我一直想找回记忆。", 3003113);
 ////npc.setDelay(500);
 //--切换地图
 player.setInGameDirectionMode(false, false, false, false);
 //player.setStandAloneMode(false);
 player.changeMap(450001300, 0);
 player.scriptProgressMessage("快将卡奥带到安全的地方。");
 /*player.setLayerOn(2000, "0", 0, 0, -1, "Map/Effect2.img/ArcaneRiver1/past", 4);
 npc.sayNextENoEsc("未来的——#ho#…正在神秘河畔的尽头和黑魔法师进行战斗……并且战败了…", 3003113);
 player.setLayerOff(300, "0");
 npc.sayNextENoEsc("由于缺乏战胜黑魔法师的决定性力量…", 3003113);
 player.setLayerOn(2000, "1", 0, 0, -1, "Map/Effect2.img/ArcaneRiver1/fall2", 4);
 npc.sayNextENoEsc("…第一个环节就出了错…那就是我被阿勒玛的部下厉诺给欺骗了！", 3003113);
 npc.sayNextENoEsc("我用尽最后的力气，一定要回到过去。就是要让——#ho#，不要因为过去的我而做出错误的选择…", 3003113);
 npc.sayNextENoEsc("历诺… 阿勒玛… 对于——#ho#结局不会改变！", 3003113);
 player.setLayerOff(300, "1");
 npc.sayNextENoEsc("历诺… 用她的分身替代了我！", 3003113);
 player.setForcedFlip(1);
 player.setNpcSpecialAction(3003112, "smile", 999999, false);
 npc.sayNextENoEsc("#face0#你还活着回来了…那个时候应该把你彻底铲除掉的。不过，没关系。", 3003112);
 npc.sayNextENoEsc("#face0#现在反正你们都是要死的人了…咳咳……", 3003112);
 npc.sayNextENoEsc("#face0#阿勒玛，好了，快吸收能量吧！", 3003112);
 npc.setCameraZoom(1000, 1000, 0, -100, 117);
 //////npc.setDelay(30);		    
 ////npc.setDelay(500);
 npc.sayNextENoEsc("啊，不可以…——#ho#！", 3003113);
 player.spawnTempNpc(3003144, 736, 177);
 player.setNpcSpecialAction(3003144, "attack", 999999, false);
 npc.setCameraMove(false, 180, 300, 177);
 ////npc.setDelay(1000);
 player.setLayerOn(2000, "2", 0, 0, -1, "Map/Effect2.img/ArcaneRiver1/arma", 4);
 npc.sayNextENoEsc("——#ho#！", 3003113);
 player.setNpcSpecialAction(3003113, "lying", 999999, false);
 player.setLayerOff(300, "2");
 ////npc.setDelay(500);
 if (!player.isQuestStarted(34119) && player.isQuestCompleted(34118)) {
 player.startQuest(34119, 0);
 }
 player.destroyTempNpc(3003112);
 npc.setCameraMove(true, 0, 0, 0);
 player.setInGameDirectionMode(false, false, false, false);
 //player.setStandAloneMode(false);
 player.changeMap(450001219, 0);
 player.scriptProgressMessage("快将卡奥带到安全的地方。");*/