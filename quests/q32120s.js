/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]巴缇博士的对策
 *  
 */

npc.sayNext("我研究了学院周围的魔法森林很多。导航很难，但我创造了一个工具，至少可以帮助你识别声音来自哪个方向。\r\n\r\n#i4033830# #b#t4033830#");
let selection = npc.askAccept("我不知道会有多大帮助，但总比没有好。现在，我必须在实验室爆炸前离开。\r\n\r\n#b(如果你接受的话，你回到艾利涅学院。)");
if (selection == 1) {
        if (player.canGainItem(4033830, 1)) {
                if (!player.hasItem(4033830, 1)) {
                        player.gainItem(4033830, 1);
                }
                player.changeMap(101071300, 0);
                npc.startQuest();
        } else {
                npc.say("请确保你的其他栏有足够的空间。");
        }
} else {
        npc.sayNextS("不了，我考虑下。");
}