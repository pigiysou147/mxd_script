/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 世界树的危机
 *
 *  @Author Yanran
 */
npc.sayNext("怎么回事？你突然消失了，吓了我一跳。");
npc.sayNextS("他们召唤了我。", false);
npc.sayNext("他们？是说把我封印起来的那帮坏家伙吗？");
npc.sayNextS("嗯，他们威胁我说如果继续留在这里，就绝不会放过我。差点就没命了。", false);
npc.sayNext("你该不会……因为他们的威胁就害怕了吧？你答应过要帮我的，你不会说话不算数吧？");
npc.sayNextS("那当然。既然现在已经无法和他们协商，就只能战斗了。不过，我一个人的话，可能会有点困难。", false);
npc.sayNext("那该怎么办？我被封印了起来，而且又受到黑暗力量的影响，一点力气也用不出来。");
npc.sayNextS("必须把这件事告诉冒险岛联盟。如果能得到冒险岛联盟的帮助，一定可以找到解开封印的办法。", false);
npc.sayNextS("我现在马上到圣地去，向冒险岛联盟的谋士南哈特报告鲁塔比斯发生的事情，商量一下解除封印的方法。", false);
npc.sayNext("好的。但是你一定要尽快回来哦。黑暗的力量让我越来越喘不过气来。现在剩下的时间不多了……");
npc.sayNextS("别担心，我很快就回来。好了，我要到圣地去了。", false);
player.changeMap(130000000, 0);
npc.startQuest();

function end(mode, type, selection) {
        if (mode == 1)
                status++;
        else
                status--;
        if (status == 0) {
                npc.sayNext("新地区的探索结束了吗？一直联系不上你，我还担心会不会出什么事了呢。");
        } else if (status == 1) {
                npc.sayNextS("这段时间发生了很多事情。", false);
        } else if (status == 2) {
                npc.sayNextS("(向南哈特讲述在鲁塔比斯发生的事情。)", false);
        } else if (status == 3) {
                npc.sayNext("……真让人吃惊。如果这一切都是真的，那就是非常大的事件。很久以前消失了的世界树又重新出现，是件好事。但是你说有一群来历不明的人正在觊觎世界树的力量，这是个非常严重的问题。");
        } else if (status == 4) {
                npc.sayNextS("鲁塔比斯现在充满了黑暗力量，世界树好像很难受。必须尽快把世界树救出来才行。", false);
        } else if (status == 5) {
                npc.sayNext("知道了。我会把这件事告诉冒险岛联盟，尽快制定对策。你能稍等一下再来找我吗？");
        } else {
                npc.forceCompleteQuest();
                npc.dispose();
        }

}
