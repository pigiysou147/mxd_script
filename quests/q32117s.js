/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]寻找毕业生
 *  
 */

let selection = npc.askAccept("你认识魔法密林的妖精艾温或妖精罗雯吗？其实他们是艾利涅学院的毕业生。要不要向他们寻求帮助啊？也许他们更了解孩子们。\r\n\r\n #b#e(如果你接受的话，你将被移到魔法密林。)");
if (selection == 1) {
        npc.sayNext("拜托了。请返回魔法密林，去找妖精艾温。");
        npc.startQuest();
        player.changeMap(101000000, 0);
} else {
        npc.sayNextS("不了，我考虑下。");
}
