/*  This is mada by Yanran    
 *  
 *  功能：[拉克兰]庆典正酣之都 任务对话
 *  
 *  @Author Yanran
 */

if (player.isQuestStarted(34300)) {
        npc.sayNext("幸福啊！好性福！");
        player.updateQuestRecordEx(34300, "NpcSpeech", "30032251/");
} else {
        npc.say("幸福啊！好性福！");
}

