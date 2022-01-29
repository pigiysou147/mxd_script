/*  This is mada by Yanran    
 *  
 *  [拉克兰]谁是“清醒者”？
 *  
 *  @Author Yanran
 */

if (player.isQuestStarted(34307)) {
        npc.sayNext("吃是幸福的事，不停地吃代表着无尽的幸福，我在幸福中不停的吃。那是我的幸福，无尽的幸福。");
        player.updateQuestRecordEx(34307, "NpcSpeech", "30032281");
        player.startQuest(34340, 3003228, "1");
} else {
        npc.say("吃是幸福的事，不停地吃代表着无尽的幸福，我在幸福中不停的吃。那是我的幸福，无尽的幸福。");
}