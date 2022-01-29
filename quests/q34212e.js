/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]寻找艾尔谷的美味&amp;lt;2&gt;
 *  
 *  @Author Yanran
 */

npc.sayNext("噢！你躲过了#b犀牛龟#k犄角的攻击啊？哈哈~", 3003163);
npc.sayNext("好了~现在海鲜饼已经完成了~你快看，看起来是不是很美味啊？", 3003163);
npc.sayNext("穆托肯定会非常~非常喜欢#b三明治#k的，哈哈哈`", 3003163);
npc.sayNext("我..... 我也…想…帮忙…姐…姐姐…呵呵呵", 3003164);
npc.sayNext("天啊~我们善良的哔嘟！好的，好的，你也快点帮助旅行者吧~", 3003163);
npc.sayNextS("怎么觉得要加的东西越来多了....", false);
if (player.isQuestStarted(34212)) {
        player.loseItem(4034952, 30);
        player.loseItem(4034953, 30);
        npc.completeQuest();
        player.gainExp(310000000);
}