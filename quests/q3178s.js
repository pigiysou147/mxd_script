/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 还有希望吗
 *
 *  @Author Yanran
 */

        let selection = npc.askYesNo("你找到了解过去发生在这座城里的事件的人了吗？嗯？#p2161002#？他原本是国王的近卫骑士团长。他还留在这里吗……是吗，#p2161002#是怎么说的呢？他知道雷昂为什么会变成这个样子吗？");
if (selection == 1) {
        npc.sayNextS("#b(转述从#p2161002#那里听到的话。)#k", false);
        npc.sayNext("没错……是的，是的。在黑色的乌云遮住天空的那一天，原本看上去很普通的士兵们突然变了，开始攻击我们。城墙倒塌，房屋全都着了火……我，我被塔里的烟雾……原来是这样啊。");
        npc.sayNextS("#b(从#p2161001#的反应来看，#p2161002#的话好像是事实。)#k", false);
        npc.sayNext("雷昂是因为这个才会变成这样的啊。我光在这里抱怨雷昂，没想到这段时间他一直生活在悲伤和愤怒之中……我不能再让他这样下去了。");
        npc.sayNextS("#b你有什么办法吗？", false);
        npc.sayNext("城里有#p2161002#都不知道的国王和王妃专用的通道。本来是不应该告诉别人的……但是这次就破例一次。请你和我一起到接见室去见见他。");
        let sel = npc.askYesNo("我要亲自去见见他。因为那里太难跳上了，我一直不能到接见室去……不过如果你能帮我，我就应该可以过去。请一定要让我到接见室去！拜托你了！");
        if (sel == 1) {
                var tomap = 921140000;
                npc.startQuest();
                npc.makeEvent("QuestEvent_01", false, [player, tomap]);
                //player.changeMap(tomap, 1);
        }
} 