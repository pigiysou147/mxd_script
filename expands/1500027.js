/*  This is mada by Yanran    
 *
 *  功能：[妖精学院艾利涅]最后一次救出
 *
 *  @Author Yanran
 */

let sel = npc.askYesNo("移动到野外演出舞台。\r\n\r\n#b(必须 1 人) / 等级： 大于 30", 1500024);
if (sel == 1) {
        npc.makeEvent("QuestEvent_01", false, [player, 101073300]);
} else {
        npc.say("你准备好要去消灭怪物的话，再和我说话吧。", 1500024);
}