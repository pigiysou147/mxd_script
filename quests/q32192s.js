/*  This is mada by Yanran    
 *  
 *  功能：[列娜海峡]列娜海峡的勇士
 *  
 *  @Author Yanran  
 */

let selection = npc.askYesNo("看来咱们得到魔女芭芭拉的家去一趟。嗯……希望勇士你也可以一起去。\r\n\r\n#b#e(接受时，将自动移动。)#n#k");
if (selection == 1) {
        npc.startQuest();
        player.changeMap(141040001, 0);
}

