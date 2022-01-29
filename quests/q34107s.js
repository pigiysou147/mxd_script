/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]渡过忘却之湖的纸船
 *
 *  @Author Yanran
 */

let selection = npc.askYesNoS("（船夫在招手，似是招呼我们上船。）");
if (selection == 1) {
        npc.startQuest();
} else {
        npc.say("……（像是愿意等待。）");
}