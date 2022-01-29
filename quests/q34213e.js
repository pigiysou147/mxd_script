/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]寻找天宇鲸山之味&amp;lt;1&gt;
 *  
 *  @Author Yanran
 */

npc.sayNext("呜…哇... 你这么快就把羽毛拿回来啦。", 3003164);
npc.sayNextS("好了~ 哔嘟，现在可以了吧？快点完成你的蛋饼吧~", false);
npc.sayNext("哼，你怎么会任务我的任务只有一项呢？在你眼里我就那么傻呀？！", 3003164);
npc.sayNextS("噢！哔嘟你！", false);
npc.sayNext("啊，呵呵呵，我不管…我还需要更多~ 哼，再去搜集吧…哼", 3003164);
if (player.isQuestStarted(34213)) {
        player.loseItem(4034954, 20);
        player.loseItem(4034955, 20);
        npc.completeQuest();
        player.gainExp(310000000);
}