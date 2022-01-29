/*  This is mada by Yanran    
 *
 *  功能：NPC 进入 第一次救出 对话
 *
 *  @Author Yanran
 */

let mobsize = map.getEventMobCount();
if (mobsize <= 0) {
        npc.sayNext("" + mobsize + "呜呜，呜呜……真是吓死我了。", 1500017);
        npc.sayNext("我正和哥哥姐姐们一起排练演出时遭到了曼德拉草的袭击。由于我非常害怕，所以一直紧闭双眼，等缓过来后，发现自己在这个地方了……呜呜，呜呜。", 1500017);
        npc.sayNextS("#b（能找到一个孩子也算幸运了。把这个孩子送回艾利涅吧。）");
        if (player.isQuestStarted(32123)) {
                player.startQuest(32135, 1500017, "1");
        }
        player.changeMap(101073000, 0);
        player.startQuest(32135, 1500017, "0");
        player.completeQuest(32123, 1500017);
        player.gainExp(7500);
} else {
        npc.sayNext("救命啊……那些怪物吓的我不敢动！\r\n\r\n#b（请消灭怪物后，再进行对话吧。） ", 1500017);
}