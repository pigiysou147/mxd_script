/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]寻找艾尔谷的美味&amp;lt;1&gt;
 *  
 *  @Author Yanran
 */

npc.sayNext("天啊~你回来啦？哎呀，你全身都湿了~快把你搜集到的东西给我，你先休息下~", 3003163);
npc.sayNext("嗯~这新鲜的香味！#b都很奇怪啊！现在够了！转转转！三明治#k肯定会成为最棒的料理~", 3003163);
npc.sayNext("嗯！你应该知道还没有结束吧？我会告诉你接下来要搜集的材料，请你立刻出发~（嫣：这只死鸡...）", 3003163);
npc.sayNextS("我休息会再去不行吗...", false);
npc.sayNext("嗯~你想休息就休息吧~ 要不要我帮你#r永远的休息下去#k？哈哈哈！（这只死鸡真的腹黑。）", 3003163);
if (player.isQuestStarted(34211)) {
        player.loseItem(4034950, 20);
        player.loseItem(4034951, 20);
        npc.completeQuest();
        player.gainExp(310000000);
} 