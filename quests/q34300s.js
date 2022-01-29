/*  This is mada by Yanran    
 *  
 *  功能：[拉克兰]庆典正酣之都
 *  
 *  @Author Yanran
 */
if (!player.isQuestCompleted(34300) && !player.isQuestStarted(34300)) {
        npc.sayNextSNoEsc("神秘河畔河居然有人？？先和他们对话吧？", false);
        npc.startQuest();
        npc.sayNextNoEsc("幸福啊！好性福！", 3003225);
        player.updateQuestRecordEx(34300, "NpcSpeech", "30032251/");
        npc.sayNextNoEsc("飞舞的烟花，流淌的河水，我好开心。", 3003226);
        let data = player.getQuestRecordEx(34300, "NpcSpeech");
        player.updateQuestRecordEx(34300, "NpcSpeech", "30032262/" + data);
        npc.sayNextNoEsc("吃吧，吃，哈哈哈。你和我，还有大家，一起享受着庆典吧！", 3003227);
        npc.sayNextSNoEsc("这个地方的人好奇怪……所有的人都带着面具。", false);
        data = player.getQuestRecordEx(34300, "NpcSpeech");
        player.updateQuestRecordEx(34300, "NpcSpeech", "30032273/" + data);
}