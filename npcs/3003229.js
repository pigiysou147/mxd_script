/*  This is mada by Yanran    
 *  
 *  [拉克兰]谁是“清醒者”？
 *  
 *  @Author Yanran
 */

if (player.isQuestStarted(34307)) {
        npc.sayNext("吃是幸福的事，不停地吃代表着无尽的幸福，我在幸福中不停的吃。那是我的幸福，无尽的幸福。", 3003228);
        player.updateQuestRecordEx(34307, "NpcSpeech", "30032281");
        npc.sayNext("舞动吧，世界。舞动吧，人生。那就是幸福，没有烦恼和忧虑的世界，就是幸福的世界。", 3003229);
        let data = player.getQuestRecordEx(34307, "NpcSpeech");
        player.updateQuestRecordEx(34307, "NpcSpeech", "30032292/" + data);
        npc.sayNext("（咳！）我很幸福，因为我可以吃的饱饱的。", 3003215);
        data = player.getQuestRecordEx(34307, "NpcSpeech");
        player.updateQuestRecordEx(34307, "NpcSpeech", "30032153/" + data);
} else {
        npc.say("舞动吧，世界。舞动吧，人生。那就是幸福，没有烦恼和忧虑的世界，就是幸福的世界。");
}

