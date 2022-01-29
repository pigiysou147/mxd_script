/*  This is mada by Yanran    
 *
 *  功能：[啾啾岛]横亘的神秘河 - 换地图  [啾啾]这个味道是？！剧情动画
 *
 *  @Author Yanran
 */
if (!player.isQuestStarted(34200) && !player.isQuestCompleted(34200)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("啊…飞鱼啊，你突然这么乱扑腾让我怎么办啊？", true);
        npc.sayNextENoEsc("话说，它怎么突然扔下我就走了…？#b飞鱼#k不是来帮助我的吗…？", true);
        npc.sayNextENoEsc("#face3#穆…托…肚…子…饿...", 3003165); //0笑  1怒 2哭 3正常
        //player.setForcedInput(2);
        ////npc.setDelay(25);
        //player.setForcedInput(0);
        npc.sayNextENoEsc("这是什么声音？", true);
        npc.sayNextENoEsc("#face3##face1##fs50#穆！托！肚！子！饿！！！！", 3003165);
        player.showTrembleEffect(true, 1000000); //地图震动函数有问题
        ////npc.setDelay(1000);
        player.showTrembleEffect(false, 500); //地图震动函数有问题	
        npc.setCameraZoom(500, 1000, 3000, 125, 100);
        ////npc.setDelay(1000);
        npc.sayNextENoEsc("#face0#嗬！！那是什么啊？！", true);
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
} else if (player.isQuestStarted(34200)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.setNpcSpecialAction(3003156, "condition2", 9999999, false);
        npc.setCameraZoom(0, 1000, 3000, 125, 100);
        //player.teleportToPos(3, 1, new java.awt.Point(-2238, 59));
        npc.sayNextENoEsc("#face1#原来是#b这家伙#k拦住了河水，所以飞鱼才逃跑的啊…", true);
        npc.sayNextENoEsc("#face1#话说…这大怪物究竟是什么啊…？如果#b这家伙#k不让开，那我无法通过这里了。", true);
        npc.sayNextENoEsc("#face1#那…那个…… 你好啊…我是#b#ho##k…我现在有些急事…所以我必须从这里经过，你能让下路吗…？", true);
        npc.sayNextENoEsc("#face3#不…要…好吃的…好吃的…", 3003165);
        npc.sayNextENoEsc("#face0#啊…？好吃的？你好像还不知道目前情况的严重性…如果我不能从这里通过。世界可能会#r陷入危险#k…", true);
        npc.sayNextENoEsc("#face1##fs22#好!!!吃!!!的!!!", 3003165);
        npc.sayNextENoEsc("#face0#啊!吓我一跳。", true);
        npc.sayNextENoEsc("#face0#那个…如果你要吃的，我这里有三明治。", true);
        npc.sayNextENoEsc("#face0#你…要不要尝尝啊？", true);
        npc.sayNextENoEsc("#face1#拿过来尝尝…快点…！", 3003165);
        npc.sayNextENoEsc("#face0#（我只剩下两块了。）", true);
        npc.sayNextENoEsc("#face0#吧嗒…吧嗒…嗯嗯…", 3003165);
        npc.sayNextENoEsc("#face0#真！好！吃！", 3003165);
        npc.sayNextENoEsc("#face0#我还要…我还要…", 3003165);
        npc.sayNextENoEsc("#face0#那个…很抱歉，现在已经没有了…", true);
        npc.sayNextENoEsc("#face0#请再给我一点。", 3003165);
        npc.sayNextENoEsc("#face0#就算你说请…那也没用…因为我已经没有了啊…", true);
        npc.sayNextENoEsc("#face1##fs32#给！！！我！！！", 3003165);
        //map.setReactorState("rank", 1);
        player.showTrembleEffect(true, 500); //地图震动
        ////npc.setDelay(800);
        player.showTrembleEffect(false, 500); //地图震动
        npc.sayNextENoEsc("#face0#该死…！没办法了，只能用力量来突破了！！", true);
        //player.setForcedInput(2);
        ////npc.setDelay(300);
        //player.setForcedInput(0);
        ////npc.setDelay(500);
        npc.sayNextENoEsc("#face2##fs32#额啊！！！", 3003165);
        player.showTrembleEffect(true, 500); //地图震动
        ////npc.setDelay(800);
        player.showTrembleEffect(false, 500); //地图震动
        ////npc.setDelay(500);
        player.spawnTempNpc(3003167, -439, 149);
        player.setNpcSpecialAction(3003167, "appear", 0, true);
        player.setNpcForceFlip(3003167, 1);
        ////npc.setDelay(900);
        npc.sayNextENoEsc("#face0#帅气的英雄登场！！喵喵！", 3003159);
        ////npc.setDelay(400);
        //player.setForcedInput(3000);
        player.setLayerBlindWhite(true, 255, 50);
        ////npc.setDelay(200);
        //player.setForcedInput(4);
        ////npc.setDelay(1000);
        player.setUserEmotionLocal(7, 9999999);//设置玩家表情
        player.setLayerBlindWhite(false, 255, 800);
        npc.sayNextENoEsc("#face0#该死！一不小心又后颈着地了，撞到人了，我还是不擅长着陆，哈哈！", 3003159);
        npc.sayNextENoEsc("#face1##fs32#你刚刚给我的，再给我点！", 3003165);
        npc.sayNextENoEsc("#face0#穆托啊，这家伙给你的食物很好吃吗？！", 3003159);
        npc.sayNextENoEsc("#face1##fs32#给！！！我！！！", 3003165);
        npc.sayNextENoEsc("#face1#这个人，刚刚给我的再给我点！！！", 3003165);
        npc.sayNextENoEsc("#face0#真是神奇啊！穆托居然有喜欢的食物，已经很久没出现过这种情况了吧？！", 3003159);
        npc.sayNextENoEsc("#face0#嗯…说不定这家伙对我们村庄会很有帮助，先把他带走吧。", 3003159);
        player.setLayerBlind(true, 255, 300);
        ////npc.setDelay(500);
        player.changeMap(450002204, 0);
        player.setInGameDirectionMode(false, false, false, false);
        //player.setStandAloneMode(false);
} else if (player.isQuestStarted(34217)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.setNpcSpecialAction(3003156, "condition2", 9999999, false);

        player.spawnTempNpc(3003167, -282, 150);
        player.setNpcSpecialAction(3003167, "summon", 1, false);
        player.setNpcForceFlip(3003167, 1);

        player.spawnTempNpc(3003168, -166, 150);
        player.setNpcSpecialAction(3003168, "summon", 1, false);
        player.setNpcForceFlip(3003168, 1);

        player.spawnTempNpc(3003160, -25, 150);
        player.setNpcSpecialAction(3003160, "summon", 0, false);

        player.spawnTempNpc(3003162, 50, 150);
        player.setNpcSpecialAction(3003162, "summon", 0, false);

        player.spawnTempNpc(3003163, 110, 150);
        player.setNpcSpecialAction(3003163, "summon", 0, false);

        player.spawnTempNpc(3003164, 170, 150);
        player.setNpcSpecialAction(3003164, "summon", 0, false);

        //player.playBGM("Bgm46/ChewChew MainTheme");
        //player.setForcedInput(0);
        ////npc.setDelay(100);
        player.setInGameCurNodeEventEnd(true);
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("#b族长！主厨！#k 请快点过来！", true);
        npc.sayNextENoEsc("#face3#嗬嗬…！你的那个#b帮手#k，还有你的#b食物#k在哪里呢？", 3003159);
        npc.sayNextENoEsc("请看…！我来为你介绍下我的失误#b三明治#k，还有我的帮助#b猴姐#k吧！", true);
        npc.sayNextENoEsc("#face4#什…什么？！#b猴姐#k？", 3003168);
        npc.sayNextENoEsc("#face0#主厨，你好啊！", 3003160);
        npc.sayNextENoEsc("#face0#你！整个厨房都乱作一团了，我还以为你跑到哪里去了呢...结果你一直在帮助这个笨蛋做料理吗？！哈？！", 3003168);
        npc.sayNextENoEsc("#face3#对不起…我知道厨房很忙，但…反正我也做不了料理了啊，所以我就帮这个旅行者做点我利索能及的事...", 3003160); //0 怒 1哭 2哭 3笑 4正常
        npc.sayNextENoEsc("#face0#就算你做不了料理！你可以帮忙倒垃圾啊！哈！要做的事情可多了！这次的事我绝不会轻易放过你！哈！", 3003168);
        npc.sayNextENoEsc("#face0#搞什么啊！这大舌头的家伙是？", 3003153); //0 怒 1哭 2哭 3笑 4正常	
        npc.sayNextENoEsc("#face0#看他在姐姐面前这么猖狂，应该是那个主厨吧…事情变成这样，真是没劲..", 3003154);
        npc.sayNextENoEsc("#face4#这些小家伙是？！\r\n啊~啊~你们是跟猴姐一样#b口味独特#k的三兄妹啊！哈哈！", 3003168);
        npc.sayNextENoEsc("#face6#喂~就算时间紧迫，你也不能着这些连味道都尝不出来的家伙帮忙做料理吧！真是可怜啊，可怜！哈哈！", 3003168);
        npc.sayNextENoEsc("#face0#不过，那个#b料理的名字#k让我很是满意！嘿嘿！", 3003159);
        npc.sayNextENoEsc("#face0#愚蠢的族长！没有时间了！\r\n快让穆托那家伙挑选食物吧！！", 3003168);
        npc.sayNextENoEsc("#face3#呵呵…这家伙说话真是不中听~我知道了！\r\n穆托！#b古拉#k已经开始攻击了！我们为你准备了#b两种#k美味的食物，你快吃下去，打起精神击退#b古拉#k吧！", 3003159);
        npc.sayNextENoEsc("#face2#穆…托…肚…子…饿...", 3003165); //0笑  1怒 2哭 3正常
        npc.sayNextENoEsc("#face4#喂！#b小胖子#k别再喊你肚子饿了，快挑选出你想吃的食物！不知道你嘴巴这么挑剔，不过这次我制作的食物应该会符合你的口味！哈哈！", 3003168);
        npc.sayNextENoEsc("#face3#主厨... 请不要这么对穆托说话... 是穆托在保护我们，我们应该心怀感激，不是吗？", 3003160);
        npc.sayNextENoEsc("#face0#什…什么？！你竟敢教训我！你私自离开厨房，在外面做料理就算了，现在还敢教训我？哈？！", 3003168);
        npc.sayNextENoEsc("#face0#猴姐！这次事情过后，你永远也别想踏足厨房了！", 3003168);
        npc.sayNextENoEsc("#face3#...", 3003160);
        npc.sayNextENoEsc("#face4#快点选择吧，穆托！你知道我们为了你受了多少苦吗？！\r\n快吃下食物，振作起来击退古拉吧！哈！", 3003168);
        npc.sayNextENoEsc("#face3#呃嗯...嗅嗅...嗅嗅...", 3003165);
        npc.sayNextENoEsc("#face3#噢...穆托正在闻食物的味道！！", 3003159);
        npc.sayNextENoEsc("#face3##fs45#吼？！", 3003165);
        ////npc.setDelay(1000);
        npc.sayNextENoEsc("#face6#哈哈哈！闻起来是不是很赞啊？快吃下食物，振作起来吧！", 3003168); //0 怒 1哭 2哭 3笑 4正常	
        //--所有人头上"!
        player.setLayerOn(2000, "0", 0, 0, -1, "Map/Effect2.img/ArcaneRiver2/eat", 4, true, -1, false, 0, 0);
        player.scriptProgressMessage("穆托开始吃三明治……");
        ////npc.setDelay(2000);
        player.setLayerOff(300, "0");
        player.showNpcEffectPlay(3003160, "Effect/OnUserEff.img/emotion/oh", 900, 0, -30, false, 0);
        player.showNpcEffectPlay(3003162, "Effect/OnUserEff.img/emotion/oh", 900, 0, -30, false, 0);
        player.showNpcEffectPlay(3003163, "Effect/OnUserEff.img/emotion/oh", 900, 0, -30, false, 0);
        player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/emotion/oh", 900, 0, -30, false, 0);
        player.showNpcEffectPlay(3003168, "Effect/OnUserEff.img/emotion/oh", 900, 0, -30, false, 0);
        player.showNpcEffectPlay(3003167, "Effect/OnUserEff.img/emotion/oh", 900, 0, -30, false, 0);
        player.showPlayerEffectPlay("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, true, 0);
        player.setNpcForceFlip(3003160, 1);
        player.setNpcForceFlip(3003162, 1);
        player.setNpcForceFlip(3003163, 1);
        player.setNpcForceFlip(3003164, 1);
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("#face0#穆...穆托选择了我们的#b三明治#k哇哈哈！", 3003155); //0 怒 1哭 2哭 3笑 4正常
        npc.sayNextENoEsc("#face0##fs35#这…这个…很…很好吃…！！", 3003165);
        npc.sayNextENoEsc("#face0#哈？！！你在说什么啊，穆托..！！！你都没吃我做的食物呢！你快尝尝！！呼呼呼！", 3003168);
        npc.sayNextENoEsc("#face1#穆托... 不…不愿意，那东西…还是…你自己吃吧...", 3003165); ////0 怒 1怒 2哭 3笑 4正常	
        npc.sayNextENoEsc("#face0#你这个愚蠢的胖子！！你不吃我做的食物！？", 3003168);
        npc.sayNextENoEsc("主厨！快住手！穆托不是说了不吃嘛！", true);
        npc.sayNextENoEsc("#face0#没错！你的食物散发着#b大猩鸦排泄物#k的味道！", 3003154);
        npc.sayNextENoEsc("#face0#不！！我不相信！！你吃！！你给我立刻吃！！！", 3003168);
        player.showTrembleEffect(true, 500); //地图震动
        ////npc.setDelay(2000);
        player.showTrembleEffect(false, 500); //地图震动	
        npc.sayNextENoEsc("#face1##fs45#我不吃！！！", 3003165);
        npc.sayNextENoEsc("#face3#嗯…是时候轮到我出马了？！顶级大厨舔舔快沉睡吧！嗬~呼！！", 3003159);
        player.setLayerBlindWhite(true, 255, 100);
        ////npc.setDelay(1200);
        player.setLayerBlindWhite(false, 255, 800);
        player.destroyTempNpc(3003168)
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("#face3#我已经把顶级大厨舔舔送到安全的地方！", 3003159);
        npc.sayNextENoEsc("这似曾相似的心情…是什么情况...", true);
        npc.sayNextENoEsc("#face2##fs30#额啊啊！！！我不吃…！！！我不要战斗！！！", 3003165);
        npc.sayNextENoEsc("#face3#穆托啊~我不是给你好吃的了吗？现在赶紧站起来，击退古拉吧！", 3003159);
        npc.sayNextENoEsc("#face3#请等一下...族长...", 3003160); //0 怒 1哭 2哭 3笑 4正常		
        npc.sayNextENoEsc("#face0#穆托，一直以来都是你再守护我们，肯定很辛苦吧…？", 3003160);
        npc.sayNextENoEsc("#face3#也吃不到想吃的食物…你该有多辛苦啊…真是可怜...", 3003160);
        npc.sayNextENoEsc("#face3#如果你不想战斗，那就不要战斗吧。看到你恢复食欲，我已经很开心了...还有，感谢你愿意吃我做的食物。", 3003160);
        npc.sayNextENoEsc("#face4#穆托... 想吃…剩下的食物....", 3003165);
        npc.sayNextENoEsc("#face0#嗯，开始吧，这是#b特意为你#k准备的食物。", 3003160);
        //player.destroyTempNpc(3003160);
        //player.forceTrigger("reactor", 3);
        npc.sayNextENoEsc("#face0##fs35#吧嗒吧嗒…嗯~~~真好吃", 3003165);
        npc.sayNextENoEsc("#face0#噢..!他把顶级打出舔舔的食物也全部吃掉了！", 3003153); //0 怒 1哭 2哭 3笑 4正常	
        player.showTrembleEffect(true, 500); //地图震动
        ////npc.setDelay(1000);
        player.showTrembleEffect(false, 500); //地图震动	
        npc.sayNextENoEsc("#face0#古拉快到…！！啊！", 3003154); //0 怒 1哭 2哭 3笑 4正常	
        npc.sayNextENoEsc("#face0#穆托…现在吃饱了…谢…谢谢你...", 3003165);
        npc.sayNextENoEsc("#face0#那么…现在…去和#r古拉#k…一起玩玩吧…？", 3003165);
        npc.sayNextENoEsc("#face3#穆托…你要去守护我们吗？", 3003160);
        npc.sayNextENoEsc("#face0#恩呢... 穆托…吃了美味的食物…应该守护...  #b朋友们#k...", 3003165);
        npc.sayNextENoEsc("#face0##b朋友#k…没错，穆托…谢谢你，谢谢...", 3003160);
        if (player.isQuestStarted(34217)) {
                player.completeQuest(34217, 0);
        }
        player.changeMap(450002203, 0);
} else if (player.isQuestCompleted(34217) && player.isQuestStarted(34218)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.setNpcSpecialAction(3003156, "condition3", 9999999, true);

        player.spawnTempNpc(3003167, -282, 150);
        player.setNpcSpecialAction(3003167, "summon", 1, false);
        player.setNpcForceFlip(3003167, 1);

        player.spawnTempNpc(3003168, -126, 150);
        player.setNpcSpecialAction(3003168, "summon", 1, false);
        player.setNpcForceFlip(3003168, 1);

        player.spawnTempNpc(3003160, -25, 150);
        player.setNpcSpecialAction(3003160, "summon", 0, false);

        player.spawnTempNpc(3003162, 50, 150);
        player.setNpcSpecialAction(3003162, "summon", 0, false);

        player.spawnTempNpc(3003163, 110, 150);
        player.setNpcSpecialAction(3003163, "summon", 0, false);

        player.spawnTempNpc(3003164, 170, 150);
        player.setNpcSpecialAction(3003164, "summon", 0, false);

        //player.setForcedInput(0);
        ////npc.setDelay(100);
        player.setInGameCurNodeEventEnd(true);
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("#face4#哎哟…我的头…这是怎么回事…？！", 3003168);
        npc.sayNextENoEsc("#face0#哦！你想起来啦？#b穆托#k刚刚生气了，所以攻击了你！哈哈！喵喵！", 3003159);
        npc.sayNextENoEsc("#face0#什么…？！这该死的蠢货！哼！", 3003168);
        npc.sayNextENoEsc("#face0#连我做的食物都不吃！噢？！哈！！\r\n话说... #r古拉#k的进攻怎么样了？！现在是什么情况！？", 3003168);
        npc.sayNextENoEsc("#face0#在你睡觉的时候，穆托已经成功阻拦了古拉！", 3003153);
        npc.sayNextENoEsc("#face4#什…什么？#b这家伙动了#k…？", 3003168);
        npc.sayNextENoEsc("#face0#他阻拦的非常漂亮！哈哈！", 3003159);
        npc.sayNextENoEsc("#face4#对于#b我做的食物#k…连看都不看一眼的家伙...\r\n居然吃完了#b猴姐#k的食物，振作了起来...", 3003168);
        player.destroyTempNpc(3003168);
        player.spawnTempNpc(3003168, -166, 150);
        player.setNpcSpecialAction(3003168, "cry", 99999, false);
        player.setNpcForceFlip(3003168, 1);
        npc.sayNextENoEsc("#face1##fs35#呜呜…呜呜呜…！", 3003168);
        npc.sayNextENoEsc("#face0#什么啊？！你在哭吗？！", 3003153);
        npc.sayNextENoEsc("#face2#呜呜…哇…我的失误... 我#b认真准备的食物#k...\r\n这家伙连看都不看一眼…呜呜...！", 3003168);
        npc.sayNextENoEsc("#face1#我…再也不做料理了...\r\n我也不当#b主厨#k了…呜....", 3003168);
        npc.sayNextENoEsc("#face3#不是的，顶级大厨舔舔... 主厨的料理#b非常出众#k...", 3003160);
        npc.sayNextENoEsc("#face0#请你看一下。#b穆托#k把你做的食物也全部吃完了。", 3003153);
        npc.sayNextENoEsc("#face2#不是的... #b穆托#k不喜欢我做的食物...\r\n他从一开始就很讨厌我的食物...", 3003168);
        npc.sayNextENoEsc("#face0#没想到这个大叔这么感性啊？", 3003154); //0笑  1怒 2哭 3正常
        npc.sayNextENoEsc("#face0#穆托…什么都爱吃....不挑食的孩子…才是好孩子...", 3003165); //0笑  1怒 2哭 3正常
        npc.sayNextENoEsc("#face0#以前就算食物... #b不好吃#k我也会吃... 因为我要守护...#b朋友们#k…但是#b猴姐#k做的食物…真的…很好吃。", 3003165);
        npc.sayNextENoEsc("顶级大厨舔舔…你也看到了，穆托也跟猴姐和哔比三兄妹一样，#r口味独特#k...", true);
        npc.sayNextENoEsc("所以，他才不喜欢你做的食物。", true);
        npc.sayNextENoEsc("请不要太伤心。主厨你依旧是大部分居民们心中#b最棒的主厨#k。", true);
        npc.sayNextENoEsc("#face0#没错，顶级大厨舔舔！我不是就很喜欢你做的料理吗？哈哈！请你不要说你再也不做料理这种可怕的话了！", 3003159);
        npc.sayNextENoEsc("#face2#我…我...", 3003168);
        npc.sayNextENoEsc("#face1##b穆托#k…很抱歉...", 3003168);
        npc.sayNextENoEsc("#face2#我到现在都没有弄清楚你的口味...\r\n你一直要吃我做的食物，应该很痛苦吧...", 3003168);
        npc.sayNextENoEsc("#face0#没…没关系…你做的食物#b分量够多#k所以我也喜欢...", 3003165); //0笑  1怒 2哭 3正常
        npc.sayNextENoEsc("#face3#那么...#b穆托#k一直吃着难吃的食物，还要守护我们？", 3003159);
        npc.sayNextENoEsc("#face3#我的料理实力…远不如顶级大厨舔舔…不过，我之所以接受旅行者的建议，正式因为这一点...", 3003160);
        npc.sayNextENoEsc("#face3#我们…一直在接受穆托的保护... 却从来没有关系过穆托...", 3003160);
        npc.sayNextENoEsc("#face3#我能作的事情并不多…我只想让饿了几天的穆托吃顿好吃的饭...", 3003160);
        npc.sayNextENoEsc("#face3#主厨，现在的问题不是谁做的食物好吃，谁做的不好吃...", 3003160);
        npc.sayNextENoEsc("#face3#只是我们…对穆托太漠不关心了…认为穆托的牺牲...\r\n都是理所当然的...", 3003160);
        npc.sayNextENoEsc("#face3#所以，请你不要生气了，主厨。以后我也会多关心穆托的...", 3003160);
        npc.sayNextENoEsc("#face2##b猴姐#k…我... 一直说你#b口味独特#k，没认可你是一名真正的厨师...", 3003168);
        npc.sayNextENoEsc("#face2#很抱歉，猴姐...看来是我太自满了...", 3003168);
        npc.sayNextENoEsc("#face2#从现在开始，我想白视为跟我一样的主厨...\r\n把穆托的料理全权交给你负责...", 3003168);
        npc.sayNextENoEsc("#face2#很抱歉，猴姐...看来是我太自满了...", 3003168);
        npc.sayNextENoEsc("#face2#你愿意接受吗…？", 3003168);
        npc.sayNextENoEsc("#face3#我是…正式主厨？", 3003160);
        npc.sayNextENoEsc("#face0#猴姐有足够的资格当主厨！", 3003154);
        npc.sayNextENoEsc("#face2#嗯…我会继续为村民们做料理...\r\n你就为穆托和一些口味独特的村民们做料理吧...", 3003168);
        npc.sayNextENoEsc("#face3#我... 是主厨...", 3003160);
        npc.sayNextENoEsc("#face2#果然…我之前的行为太过分了…你肯定不会答应吧...", 3003168);
        npc.sayNextENoEsc("#face0#啊..！不是的顶级大厨舔舔！以后…我会为穆托和其他人努力做料理的！", 3003160);
        npc.sayNextENoEsc("#face3#嗯…听你们这么说，我觉得我这个族长之前好像对此太不关心了...", 3003159);
        npc.sayNextENoEsc("#face0#其实你的责任最大！", 3003153);
        npc.sayNextENoEsc("#face3#我知道啦…以后我会努力关系穆托和你们的...", 3003159);
        npc.sayNextENoEsc("#face0#先不说这个了... 陌生的旅行者！多亏了你，我们的村庄变得更加团结了！真的很感谢你！", 3003159);
        npc.sayNextENoEsc("#face0#我可以满足你一个愿望！你有什么心愿吗？！", 3003159);
        npc.sayNextENoEsc("我…只要从这里过去就行了…我一开始就跟你说过啊...", true);
        npc.sayNextENoEsc("#face2#啊，没错！好像是说过的！你看我这记性…哈哈！", 3003159);
        npc.sayNextENoEsc("#face0#好了！穆托，现在美味的食物也吃了，你能给这个旅行者让让路，让他继续前行吗？", 3003159);
        npc.sayNextENoEsc("#face0#好的…你现在过去吧…我会稍微抬抬我的屁股的...", 3003165); //0笑  1怒 2哭 3正常
        npc.sayNextENoEsc("谢谢你，穆托…！我现在终于可以向着黑魔法师…继续前进了！", true);
        npc.sayNextENoEsc("#face3#不过…你为什么要从这里经过呢？你找#r黑魔法师#k有什么事吗？", 3003159);
        npc.sayNextENoEsc("嗯…我有#b非常重要的#k事情要找他...", true);
        npc.sayNextENoEsc("#face0#等…等一下...", 3003155);
        npc.sayNextENoEsc("#face0#你，收下这#i1712002:#吧。", 3003155);
        npc.sayNextENoEsc("噢？？哔嘟又恢复正常啦？不过这是什么啊？", true);
        npc.sayNextENoEsc("#face0#这是#b你很需要的#k东西。", 3003155);
        npc.sayNextENoEsc("这是…？#b神秘徽章#k啊…？！", true);
        npc.sayNextENoEsc("#face0#从看到你的第一眼开始，我就觉得你跟我们#b有所不同#k...（傻子居然是最机制的。）", 3003155);
        npc.sayNextENoEsc("#face0#我们从一开始就#b失去了根基#k…可是你与我们不同，#b某种力量#k正在#b保护着你#k..", 3003155);
        npc.sayNextENoEsc("#face0#后来我发现，正是你所拥有的#i1712001:##b那个圆圆的东西#k在守护着你。（怪不得几兄妹往死里整，估计在打什么赌。）", 3003155);
        npc.sayNextENoEsc("#face0#还有，为了给你这份#b礼物#k，我一直好好保管着#i1712002:##b这东西#k。", 3003155);
        npc.sayNextENoEsc("果然... 哔嘟！你果然#b知道些什么#k！\r\n不过…你为什么现在才把它给我呢？", true);
        npc.sayNextENoEsc("#face0#那个...", 3003155);
        npc.sayNextENoEsc("#face0#呵呵呵呵呵~ 我也…不知道，转转转！", 3003155);
        npc.sayNextENoEsc("该死…！他又疯了吗？！", true);
        npc.sayNextENoEsc("#face3#嗯…？旅行者，你是第一次见到这东西吗？", 3003160);
        npc.sayNextENoEsc("#face3#这在我们啾啾岛上还算常见。当然，要获得它并不简单，#b在穆托#k和#r古拉#k作战之后#k看到这东西的概率就更高了。", 3003160);
        npc.sayNextENoEsc("这是#b神秘徽章#k。只要拥有它，就能够获得强大的力量。", true);
        npc.sayNextENoEsc("#face3#虽然不知道是什么情况，但即使我们拥有这东西，也不会发生任何变化啊..", 3003160);
        npc.sayNextENoEsc("#face0#也不好吃！", 3003153);
        npc.sayNextENoEsc("其实，这东西和我要去见的#r黑魔法师#k…与你们和这#b啾啾岛诞生#k有密切的关系…你是#b散开的艾尔达#k凝聚后...", true);
        npc.sayNextENoEsc("#face3#旅行者，我们也好奇我们究竟是怎么出现的，为什么不能离开这个地方。", 3003160);
        npc.sayNextENoEsc("#face0#没错！如果我们想到河的那一边，总会#b撞在某个东西上#k，无法离开！", 3003153);
        npc.sayNextENoEsc("#face3#可是我们对这里的生活很满足…同时也很幸福。", 3003160);
        npc.sayNextENoEsc("#face3#如果你所说的话会威胁到我们的幸福，请你不要说出来。", 3003160);
        npc.sayNextENoEsc("嗯…好的，猴姐…我还是不要告诉你们…你们是怎么出现的为好。", true);
        npc.sayNextENoEsc("其实…这个地方最初被创造的原因…我也不是很清楚。", true);
        npc.sayNextENoEsc("#face0#旅行者，你心地善良…我相信你所做的事情肯定是对的。", 3003160);
        npc.sayNextENoEsc("#face0#如果你还需要那东西，可以随时来找我们。只要能帮到你，我们肯定会竭尽全力的。", 3003160);
        npc.sayNextENoEsc("#face0#那…我们现在要分别了吗？你不能再呆段时间吗？", 3003154);
        npc.sayNextENoEsc("是的吧…？我已经停留很久了。如果不抓紧时间…事情可能会变得很糟糕...", true);
        npc.sayNextENoEsc("#face3#旅行者，感谢你对我们啾啾岛的帮助…我会永远记住的...", 3003160);
        npc.sayNextENoEsc("#face3#嗯…多亏了你，我们的村庄又恢复了生机…如果你有什么需要，可以随时来我们村庄..!", 3003159);
        npc.sayNextENoEsc("#face0#谢谢你的#b三明治#k…！呜！", 3003153);
        npc.sayNextENoEsc("#face0#呼呼呼~ 哥哥…在哭，呼呼", 3003155);
        npc.sayNextENoEsc("猴姐、小鸡们、瑞昂族长、顶级大厨舔舔…谢谢大家…如果在我结束旅行的时候…我和这个地方都平安无事...", true);
        npc.sayNextENoEsc("到时候我们一定要一起吃#b三明治#k...", true);
        npc.sayNextENoEsc("#face0#哈哈！你说的就像是一个要去送死的人！", 3003159);
        npc.sayNextENoEsc("#face0#我们很快还会再见面的，你干嘛要这样！哈哈！看你的脚步这么沉重…我就亲自把你送到河水上！！", 3003159);
        npc.sayNextENoEsc("等…！等一下…！", true);
        npc.sayNextENoEsc("#face1#那你走好！呵呵！", 3003159);
        player.setLayerBlindWhite(true, 255, 50);
        ////npc.setDelay(1500);
        player.setLayerBlindWhite(false, 255, 800);
        player.destroyTempNpc(3003168);
        player.destroyTempNpc(3003167);
        player.destroyTempNpc(3003160);
        player.destroyTempNpc(3003162);
        player.destroyTempNpc(3003163);
        player.destroyTempNpc(3003164);
        player.changeMap(450002021, 0);
        if (player.isQuestStarted(34218)) {
                player.startQuest(39365, 0);
                player.startQuest(34218, 0);
                player.completeQuest(34218, 0);
                player.gainItem(1712002, 1);
                player.startQuest(39365, 0);
                player.showProgressMessageFont("和穆托对话就可以继续旅行了。", 3, 20, 20, 0); //绿色的字
        }
        //player.scriptProgressMessage("接下来的内容还未开放。");
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
}