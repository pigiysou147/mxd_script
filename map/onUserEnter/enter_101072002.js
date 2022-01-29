/*  This is mada by Yanran    
 *  
 *  功能：艾利涅最后
 *  
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
npc.sayNextNoEsc("啊？让我做艾利涅的实习老师？", 1500000);
////npc.setDelay(500);
npc.sayNextNoEsc("校，校长先生？您是要任命人类为实习老师吗？", 1500002);
npc.sayNextNoEsc("我觉得，借这次机会，艾利涅里也需要一些改变。正是因为我们过度排斥人类文明，才找来了这样的结果。因此，我们艾利涅也需要和外部进行沟通。", 1500001);
npc.sayNextNoEsc("曾几何时，黑魔法师将绿水灵冒险岛世界笼罩在恐怖之下……很多势力为了将其复活，而在大陆各处活动着。在这种情况下，我们妖精不能再袖手旁观下去了。\r\n要想合力，那就先要同心。你说对不对？", 1500001);
npc.sayNextNoEsc("呵呵，既然校长先生这样的话……呵呵", 1500002);
npc.sayNextNoEsc("谢谢！这多亏了你啊，#b#ho##k！", 1500000);
npc.sayNextSNoEsc("那么，孩子们现在又可以继续演出了吧。");
npc.sayNextNoEsc("啊，孩子们好像已经修改了剧本正在排练呢。看来这次事件让他们收获了很多感动啊。", 1500001);
npc.sayNextS("……？");
npc.setCameraMove(false, 500, -600, 298);
////npc.setDelay(3000);
npc.sayNextNoEsc("来呀，你这个恶党地鼠王！我#b#ho##k，要以正义的名义消灭你，让我送你回地下世界去吧！", 1500006);
npc.sayNextNoEsc("啊，可恶的家伙！我要履行#b#ho##k的职责！", 1500005);
npc.sayNextNoEsc("我也是，我也是！", 1500007);
npc.setCameraMove(true, 0, 0, 0);
npc.sayNextNoEsc("演出的题目是#b邪恶的恶党地鼠王和正义的守护者#ho##k。", 1500001);
npc.sayNextSNoEsc("……");
npc.sayNextNoEsc("哈哈哈，演出一定会非常有趣的。", 1500000);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.changeMap(101072000, 0);