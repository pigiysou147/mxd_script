/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]寻找五色东山的美味&amp;lt;2&gt;
 *  
 *  @Author Yanran
 */

npc.sayNext("#b#ho#！#k\r\n你已经集齐材料啦？面包已经做好了…现在只要像这样混合，然后像这样放上去...", 3003160);
npc.say("好啦！现在#b都很奇怪啊！现在够了！转转转！三明治#k已经基本完成了！接下来试着制作肉…肉饼吧？请在我们#b哔比#k的帮助下，获得第一块肉饼吧！", 3003160);
if (player.isQuestStarted(34208)) {
        player.loseItem(4034944, 30);
        player.loseItem(4034945, 30);
        npc.completeQuest();
        player.gainExp(320000000);
}