/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]妖精学院搜索作战2
 *  
 */

let selection = npc.askAccept("如果这张纸条是准确的，他们正在做的秘密事情将在宿舍周围。男生大厅延伸到二楼的大部分。我们去那里试试。");
if (selection == 1) {
        npc.say("我，呃，我要在这里一直呆到你说完。我需要四处看看……\r\n#b(检查二楼两端的宿舍。)");
        npc.startQuest();
} else {
        npc.say("好的，那么你先到处看下。");
}
