/*  This is mada by Yanran    
 *  
 *  功能：[拉克兰]庆典正酣之都 任务对话
 *  
 *  @Author Yanran
 */

if (player.isQuestStarted(34300)) {
        npc.sayNext("吃吧，吃，哈哈哈。你和我，还有大家，一起享受着庆典吧！");
        npc.sayNextS("这个地方的人好奇怪……所有的人都带着面具。", false);
        var data = player.getQuestRecordEx(34300, "NpcSpeech");
        player.updateQuestRecordEx(34300, "NpcSpeech", "30032273/" + data);
        player.startQuest(34300, "1");
} else {
        npc.say("吃吧，吃，哈哈哈。你和我，还有大家，一起享受着庆典吧！");
}

