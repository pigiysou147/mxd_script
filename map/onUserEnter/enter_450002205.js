/*  This is mada by Yanran    
 *
 *  功能：[啾啾]循着美味而来
 *
 *  @Author Yanran
 */
        if (player.isQuestStarted(34206)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.spawnTempNpc(3003160, 678, -76);
        player.setNpcSpecialAction(3003160, "summon", 0, true);

        player.spawnTempNpc(3003162, 758, -76);
        player.setNpcSpecialAction(3003162, "summon", 0, true);

        player.spawnTempNpc(3003163, 818, -76);
        player.setNpcSpecialAction(3003163, "summon", 0, true);

        player.spawnTempNpc(3003164, 878, -76);
        player.setNpcSpecialAction(3003164, "summon", 0, true);
        //player.playBGM("Bgm46/ChewChew MainTheme");
        //player.setForcedInput(0);
        point = 0;
        ////npc.setDelay(100);
        player.setInGameCurNodeEventEnd(true);
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("那…那个…", true);
        npc.sayNextENoEsc("#face0#什…什么啊！是妨碍我们吃饭的#b小偷#k吗？！！。", 3003153);
        npc.sayNextENoEsc("#face0#怎么可能~猴姐的食物#b只有我们才能吃下去#k啊~如果你是来偷东西的~#r我不会放过你的#k...（怕不怕头跟老三一样...）", 3003154);
        npc.sayNextENoEsc("不是这样的…我只是路过的旅行者而已...我闻到了美食的味道，所以想过来看看能不能蹭点吃的...", true);
        npc.sayNextENoEsc("#face0#我们的…食…物应该#b不合你口味#k…你肯定吃不下的…吧？呵呵？", 3003155);
        npc.sayNextENoEsc("不会的啦..这食物味道#b这么香#k，怎么可能不好吃...", true);
        npc.sayNextENoEsc("#face0#我拒绝！！！", 3003153);
        npc.sayNextENoEsc("#face3#哔比啊~难得有客人来，你不能这么无礼~", 3003160);
        npc.sayNextENoEsc("#face3#看你好像不是这里的人…就像小鸡们所说的，我做的食物应该#b不合你的口味#k~", 3003160);
        npc.sayNextENoEsc("就…就一口...", true);
        npc.sayNextENoEsc("#face3#嗯~你好像很饿，你先尝尝吧。", 3003160);
        npc.sayNextENoEsc("谢…谢谢...", true);
        player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/emotion/oh", 0, 0, -30, true, 0, false, 0);
        npc.sayNextENoEsc("啊…这...", true);
        npc.sayNextENoEsc("#face3#你瞧吧~我们和其他村民的口味完全不同。我们的食物你是吃不下去的~", 3003160);
        npc.sayNextENoEsc("你在说什么啊？！我还是第一次吃到#b这么好吃的食物#k！", true);
        npc.sayNextENoEsc("#face0#你撒谎！！", 3003153);
        npc.sayNextENoEsc("我没有撒谎...这味道真的很赞！比我刚刚吃的#b顶级大厨舔舔#k做的食物要好吃太多！不，#b简直是没法比较嘛#k！", true);
        npc.sayNextENoEsc("#face0#你怎么对我们说话这么随便？", 3003154);
        npc.sayNextENoEsc("#face3#哔比，哔美！你们不要这么对待客人~不过，你认识我们#b主厨#k吗？", 3003160);
        npc.sayNextENoEsc("嗯…其实发生了这样的事情...", true);
        player.scriptProgressMessage("讲述刚才发生的事情...");
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("#face3#啊哈…你经历了这样的事啊...", 3003160);
        npc.sayNextENoEsc("#face3##b穆托#k不吃东西，这真是太糟糕了…旅行者你好像也要尽快离开这里，前往其他地方你肯定很为难吧...", 3003160);
        npc.sayNextENoEsc("#face3#不过，你说穆托很喜欢你带来的食物，这是真的吗？", 3003160);
        npc.sayNextENoEsc("嗯！没错！虽然只有一点，但他说我的#b三明治#k很好吃！！", true);
        npc.sayNextENoEsc("#face3#你能把那个三明治给我们尝尝吗？", 3003160);
        npc.sayNextENoEsc("嗯…我这里还有一点其他村民吃剩下的....", true);
        npc.sayNextENoEsc("#face0#啊！这些足够了~\r\n我们的小鸡三兄妹在#b品尝味道方面#k可是高手！", 3003160);
        npc.sayNextENoEsc("#face0#还有，虽然我只是#b厨房助手#k，但怎么说我也在餐厅工作！！", 3003160);
        npc.sayNextENoEsc("#face0#好了~孩子们！我们一起尝尝这食物吧~", 3003160);
        npc.sayNextENoEsc("#face0#嗯…这味道真是…太棒了！", 3003153);
        npc.sayNextENoEsc("#face0#哇！除了猴姐做的食物之外，我还是第一次吃到这么好吃的东西呢！", 3003154);
        npc.sayNextENoEsc("#face0#（转了起来！）真好吃！", 3003155);
        npc.sayNextENoEsc("#face0#真的很好吃耶！我还是第一次尝到这种味道！", 3003160);
        npc.sayNextENoEsc("#face3#我知道了，旅行者！你也跟我们一样#b口味独特#k！", 3003160);
        npc.sayNextENoEsc("嗯…我口味算不上独特吧...", true);
        npc.sayNextENoEsc("#face3#不！觉得这种食物好吃的人，肯定是#r口味独特#k的人！", 3003160);
        npc.sayNextENoEsc("#face0#很高兴遇到你，同志。", 3003153);
        npc.sayNextENoEsc("#face3#啊哈，你看看我这脑袋。\r\n我们还没有自我介绍吧？我叫#b猴姐#k，我在顶级大厨舔舔的厨房中担任#b厨房助手#k。他们是小鸡三兄妹，和我生活在一起。", 3003160);
        npc.sayNextENoEsc("#face3#我们四个和旅行者你一样，#r口味独特#k。所以，我们要跟村里的人吃不同的食物。", 3003160);
        npc.sayNextENoEsc("#face0#为此....我…我们被…赶出来了…现在单独生活…呵呵呵", 3003155);
        npc.sayNextENoEsc("#face3#其他村民跟我们吃#b不同的食物#k…所以觉得我们#b很奇怪#k，不想和我们生活在一起... 所以，我就带着这些孩子到村子外面生活。", 3003160);
        npc.sayNextENoEsc("果然…村民们果然有着奇怪的味觉…！", true);
        npc.sayNextENoEsc("#face3#口味奇怪的人是#b我们#k…所以，虽然我想成为一名#b厨师#k，但只能当个#b厨房助手#k...", 3003160);
        npc.sayNextENoEsc("奇怪的人…不是你，而是其他村民…你的食物就算直接拿到#bLSLMapleStory世界#k也会有很高的人气的！", true);
        npc.sayNextENoEsc("#face3#哈哈…虽然不知道那是什么地方，但听你到你这么说，我觉得很开心。不过，我现在没那么悲伤了。因为有这些#b喜欢吃我做的食物的小鸡们#k在我身边~", 3003160);
        npc.sayNextENoEsc("#face0#没错~姐姐做的食物是最棒的！", 3003154);
        npc.sayNextENoEsc("嗯…居然就因为口味不同，而被赶出村庄...", true);
        npc.sayNextENoEsc("#face3#并不是厨师就要做出#b所有人都爱吃的#k食物啊？\r\n所有活着的生命都会肚子饿…肚子饿就要吃东西，每个人都可以选择自己觉得#b好吃~的食物#k。", 3003160);
        npc.sayNextENoEsc("#face0#有这些孩子喜欢吃我做的食物，我就已经够幸福了。", 3003160);
        npc.sayNextENoEsc("#face0#虽然量有点少，但是味道没的说！", 3003153);
        npc.sayNextENoEsc("嗯…我现在终于大致了解情况了...穆托为什么会喜欢我的食物，不喜欢村民们给他的食物...", true);
        npc.sayNextENoEsc("穆托肯定和我们一样#r口味独特#k（？）...", true);
        npc.sayNextENoEsc("你叫做猴姐？请你帮帮我！据说3天后#r古拉#k会发起进攻，在此之前，你能和我一起制作#b穆托爱吃的食物#k吗？", true);
        npc.sayNextENoEsc("#face3#你说穆托... #b口味独特#k，这真让我意外... 穆托一直在吃顶级大厨舔舔做的食物啊？", 3003160);
        npc.sayNextENoEsc("不是的... 穆托确实#b口味独特#k！从他喜欢我的食物这一点就能看出来！", true);
        npc.sayNextENoEsc("#face3#不过，我不是#b正式厨师#k…如果我擅自做料理，肯定会被#b顶级大厨舔舔#k骂的...", 3003160);
        npc.sayNextENoEsc("你是不是正式出事并不重要…如果是在我来的世界，#b猴姐#k你会成为比#b顶级大厨舔舔#k更优秀的主厨。", true);
        npc.sayNextENoEsc("还有，如果是真正的#b厨师#k没看到穆托饿了这么多天，肯定会为他做点食物的吧…？就算穆托#b不爱吃#k...", true);
        npc.sayNextENoEsc("#face3#...", 3003160);
        npc.sayNextENoEsc("#face3#旅行者，你说的好像没错...", 3003160);
        npc.sayNextENoEsc("#face3#就算穆托不喜欢我的料理…我也要试着为#b饿了好几天的穆托#k制作食物...", 3003160);
        npc.sayNextENoEsc("#face0#没错！穆托那家伙肯定也会喜欢姐姐你做的料理的！", 3003153);
        npc.sayNextENoEsc("谢谢你！猴姐！你的选择是对的！", true);
        npc.sayNextENoEsc("#face0#不过，要做#b什么料理#k呢？", 3003154);
        npc.sayNextENoEsc("嗯... #b三明治#k！我们就做三明治吧！反正，穆托也#b喜欢吃三明治#k。", true);
        npc.sayNextENoEsc("#face0#呵呵呵~三... 三明治... 如果做的大一些…嗯嗯…应该很好吃！", 3003155);
        npc.sayNextENoEsc("#face0#好的，那我们就试着做那个#b三明治#k吧！\r\n为了让穆托吃饱，一定要做得#b非常~大#k才行！", 3003160);
        npc.sayNextENoEsc("#face3#小鸡们对#b食物的味道#k非常敏感，所以你们快告诉我们刚刚那个三…明治和哪些材料的味道相似！", 3003160);
        npc.sayNextENoEsc("#face0#好的！", true);
        npc.sayNextENoEsc("#face0#哇~ 我们要给穆托做食物了！我真的好期待啊，姐姐！", 3003154);
        npc.sayNextENoEsc("#face0#转转转转转（肯定很好吃！）", 3003155);
        player.destroyTempNpc(3003160);
        player.destroyTempNpc(3003162);
        player.destroyTempNpc(3003163);
        player.destroyTempNpc(3003164);
        //player.forceStartQuest(39365);
        //player.scriptProgressMessage("现在，在啾啾岛打猎可以获取神秘徽章了。");
        if (player.isQuestStarted(34206)) {
                player.startQuest(34206, 0);
                player.completeQuest(34206, 0);
                player.gainExp(280000000);
        }
        player.changeMap(450002023, 0);
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);

} else if (player.isQuestCompleted(34215)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.spawnTempNpc(3003160, 678, -76);
        player.setNpcSpecialAction(3003160, "summon", 0, false);

        player.spawnTempNpc(3003162, 758, -76);
        player.setNpcSpecialAction(3003162, "summon", 0, true);

        player.spawnTempNpc(3003163, 818, -76);
        player.setNpcSpecialAction(3003163, "summon", 0, true);

        player.spawnTempNpc(3003164, 878, -76);
        player.setNpcSpecialAction(3003164, "summon", 0, true);
        //player.setForcedInput(0);
        ////npc.setDelay(100);
        player.setInGameCurNodeEventEnd(true);
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("#face0#旅行者！你这么快就搜集到#b#z4034958##k啦！！", 3003160); //0 怒 1哭 2哭 3笑 4正常	
        npc.sayNextENoEsc("#face3#那让我们来尝尝加入呲溜果后#b三明治#k的味道吧？", 3003160);
        npc.sayNextENoEsc("#face0#我…我先吃…我先吃~呵呵呵", 3003155);
        npc.sayNextENoEsc("#face0#嗯嗯...吧嗒吧嗒...", 3003155);
        //--感叹号
        npc.setCameraZoom(800, 1500, 0, 878, -76);
        player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/emotion/oh", 900, 0, 0, false, 0, false, 0);
        npc.sayNextENoEsc("#face0##fs42#！！！", 3003155);
        player.setNpcForceFlip(3003160, 1);
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("#face3#哔嘟啊~你怎么拉！", 3003160);
        npc.sayNextENoEsc("#face0#啊…这味道真的是…已经到了我无法用语言形容的…地步... 它的香味令人沉醉... 口感酥脆，同时又不缺乏嚼劲…它出动着我的味蕾，让我有一种飘飘然的感觉…啊…！此味只应天上有，人间难得几回尝！", 3003155);
        //npc.setCameraZoom(800, 1000, 0, 878, -76);
        npc.sayNextENoEsc("#face0#哔嘟啊！你恢复理智啦！", 3003154);
        npc.sayNextENoEsc("#face0#嗯嗯嗯？？什..什么？呵呵！", 3003155);
        npc.sayNextENoEsc("#face3#希望穆托会喜欢我们做的#b三明治#k。", 3003160);
        //--震动
        player.showTrembleEffect(true, 500); //地图震动
        player.scriptProgressMessage("大地开始震动……");
        ////npc.setDelay(2000);
        player.showTrembleEffect(true, 500); //地图震动	
        npc.sayNextENoEsc("#face0#怎么回事…！我怎么这么紧张！", 3003155);
        npc.sayNextENoEsc("#face0#哥哥…！看来#r古拉#k已经开始行动了！", 3003154);
        ////npc.setDelay(1000);
        npc.sayNextENoEsc("#face3#看来古拉已经开始攻击了，旅行者！你快去找#b瑞昂#k长老吧！我和孩子们先带着食物去找穆托！", 3003160);
        player.destroyTempNpc(3003160);
        player.destroyTempNpc(3003162);
        player.destroyTempNpc(3003163);
        player.destroyTempNpc(3003164);
        player.changeMap(450002023, 0);
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
}