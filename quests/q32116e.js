/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]妖精学院搜索完成
 *  
 */

let selection = npc.askAccept("我了向你表示道歉，所有发生的一切都是我们的错。我希望你能继续帮助我们找到孩子。");
if (selection == 1) {
        npc.sayNext("怎么帮助那些失踪的孩子，理一下思路吧。");
        npc.completeQuest();
} else {
        npc.sayNextS("妈妈叫我不要跟大笨蛋玩。");
}
