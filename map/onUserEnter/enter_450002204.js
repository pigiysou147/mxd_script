/*  This is mada by Yanran    
 *
 *  功能：[啾啾岛]横亘的神秘河 - 换地图
 *
 *  @Author Yanran
 */
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.spawnTempNpc(3003167, 743, 138,1);
player.setNpcSpecialAction(3003167, "move", 99999, true);

player.setInGameCurNodeEventEnd(true);

player.setInGameDirectionMode(false, true, false, false);
npc.setCameraReleaseFromUserPoint();//定住玩家镜头
npc.sayNextENoEsc("#face3#吼吼！！", 3003159);
npc.sayNextENoEsc("#face3#……", true);
npc.sayNextENoEsc("#face3#快醒醒！！喵喵！", 3003159);
//player.showReservedEffect("Effect/Direction8.img/lightningTutorial2/Scene0");
npc.sayNextENoEsc("#face3#啊…我怎么总不自觉的喊…喵喵!", 3003159);
npc.sayNextENoEsc("#face3#总之，如果要让这家伙清醒过来，我需要给他#b强力一击#k！", 3003159);
npc.sayNextENoEsc("#face3##fs42#嗬嗬！！", 3003159);

npc.sayNextENoEsc("#face0#你起来了啊，怎么样？清醒了吗？哈哈！", 3003159);
npc.sayNextENoEsc("#face3#怎么回事，刚刚我正准备打算过河……", true);
npc.sayNextENoEsc("#face1#噢，你清醒过来了啊。没错！这里到处都是#b河水#k！哈哈！", 3003159);
npc.sayNextENoEsc("#face3#好像不是这条河……", true);
npc.sayNextENoEsc("#face3#话…说…你是谁…啊？", true);
npc.sayNextENoEsc("#face3#啊，我就是啾啾岛最棒的英雄，同时也是族长。我兼具无人能及的#b智慧#k与#b力量#k，村民们都很#b敬重#k我…", 3003159);
npc.sayNextENoEsc("#face0#我就是#b瑞昂#k，#b喵喵#k！", 3003159);
npc.sayNextENoEsc("#face3#喵喵？", true);
npc.sayNextENoEsc("#face3#啊…！这只是我的口头禅！你不要在意…！", 3003159);
npc.sayNextENoEsc("啊…我还在想，你明明长得像#b狮子#k，为什么会喵喵，喵喵~的叫呢…", true);
npc.sayNextENoEsc("嗬…你不是长的像#b狮子#k，你明明就是狮子啊！", true);

npc.sayNextENoEsc("#face0#狮子？是什么东西，是吃的东西吗？听起来就很美味啊。", 3003159);
npc.sayNextENoEsc("#face0#不过你为什么离我那么远啊？快靠近点！#b让我看看穆托那家伙给你造成的伤口#k。", 3003159);
npc.sayNextENoEsc("快走开，我操！", true);

npc.sayNextENoEsc("#face0#看来你被穆托打坏了脑袋…！哈哈，好吧。你先和我一起去村庄吧。你在村庄好好休养下，应该就能恢复精神了！", 3003159);
npc.sayNextENoEsc("村…村庄！这里有村庄吗？", true);
npc.sayNextENoEsc("#face3#这还用说？#b啾啾村庄#k非常美丽的说！好了！随我走吧！", 3003159);
npc.sayNextENoEsc("怎…怎么…回事…", true);

player.changeMap(450002000, 0);
if (player.isQuestStarted(34200)) {
        player.completeQuest(34200, 0);
        player.gainExp(260000000);
}
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);