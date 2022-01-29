/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]寻找呲溜森林的美味&amp;lt;1&gt;
 *  
 *  @Author Yanran
 */

npc.sayNext("你这家伙真是迅速！这么快就集齐材料啦？！", 3003162);
npc.sayNext("不过，我的口味非常非常讲究，就这几种肉食满足不了我的！", 3003162);
npc.sayNext("好了！为了#b都很奇怪啊！现在够了！转转转！三明治#k的完成，以及#b填饱我的肚子#k，去搜集更多的肉吧！", 3003162);
npc.sayNextS("你怎么总打算制作#b你要吃#k的食物…你不要忘了，我是在为#b穆托#k准备食物！", false);
npc.say("都一样的啦！！别废话了，快去搜集肉吧！", 3003162);
if (player.isQuestStarted(34209)) {
        player.loseItem(4034946, 20);
        player.loseItem(4034947, 20);
        npc.completeQuest();
        player.gainExp(310000000);
}            	