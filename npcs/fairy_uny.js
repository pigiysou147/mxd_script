/*  This is mada by Yanran    
 *
 *  功能：[妖精学院艾利涅]最后一次救出
 *
 *  @Author Yanran
 */


if (map.getPlayerCount() == 1) {
        npc.sayNext("你来救我们……真是太感谢了。", 1500016);
        npc.sayNext("这辈子不会忘记你的大恩大德！", 1500018);
        if (player.isQuestStarted(32128)) {
                player.startQuest(32135, 1500016, "1");
        }
        player.changeMap(101073200, 0);
        player.startQuest(32135, 1500020, "0");
        player.completeQuest(32128, 1500016);
        player.gainExp(10000);
} else {
        npc.sayNext("请消灭那个凶恶的土地鼠！\r\n#b（请消灭怪物后，再进行对话吧。）", 1500016);
}
