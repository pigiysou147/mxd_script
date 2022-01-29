/*  This is mada by Yanran    
 *
 *  功能：NPC 进入 第二救出 对话
 *
 *  @Author Yanran
 */


if (map.getPlayerCount() == 1) {
        npc.sayNext("万岁！得救啦……之前我被怪物围住，所以一动都不敢动。", 1500020);
        npc.sayNext("你是谁？难道你是来拯救我们的英雄吗？", 1500020);
        npc.sayNextS("#b（失踪的孩子一共五名。那其他孩子在哪里呢？）");
        npc.sayNext("啊，对了，请救救乌尼和特勒西巴！乌尼和特勒西巴都是女孩子……有个骑着战车的奇怪影子嗖的一下把他们劫走了！", 1500019);
        npc.sayNextS("#b奇怪的影子……？");
        if (player.isQuestStarted(32126)) {
                player.startQuest(32135, 1500020, "1");
        }
        player.changeMap(101073201, 0);
        player.startQuest(32135, 1500020, "0");
        player.completeQuest(32126, 1500020);
        player.gainExp(7500);
} else {
        npc.sayNext("呜呜呜……请快想办法对付这些怪物吧！\r\n\r\n#b（请消灭怪物后，再进行对话吧。） ", 1500020);
}

