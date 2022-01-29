/*  This is mada by Yanran    
 *  
 *  功能：[拉克兰]庆典正酣之都 任务对话
 *  
 *  @Author Yanran
 */

if (player.isQuestStarted(34300)) {
        npc.sayNext("飞舞的烟花，流淌的河水，我好开心。");
        var data = player.getIntQuestRecordEx(34300, "NpcSpeech");
        player.updateQuestRecordEx(34300, "NpcSpeech", "30032262/" + data);
} else {
        npc.say("飞舞的烟花，流淌的河水，我好开心。");
}

