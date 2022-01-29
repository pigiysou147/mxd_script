/*  This is mada by Yanran    
 *
 *  功能：NPC 进入 第二次救出
 *
 *  @Author Yanran
 */

let sel = npc.askYesNo("为救#b妖精耶波尼#k与#b妖精帕伊尼#k.\r\n\r\n#b(必须 1 人) / 等级： 大于 30)", 1500024);
if (sel == 1) {
        npc.makeEvent("QuestEvent_02", false, [player, 101073110]);
} else {
        npc.say("你准备好要去消灭怪物的话，再和我说话吧。", 1500024);
}