/*  This is mada by Yanran    
 *
 *  功能：[妖精学院艾利涅]妖精学院的和平
 *
 *  @Author Yanran
 */

let selection = npc.askAccept("不错。你真的觉得自己像个仙女。让我们回到女校长那里。\r\n#b(如果你接受的话，你将被移到艾利涅)");
if (selection == 1) {
        npc.sayNext("太好了。现在所有的孩子都回来了，对吗？");
        player.changeMap(101072001, 0);
        player.gainExp(15190);
        npc.startQuest();
} else {
        npc.say("好的，那么你先到处看下。");
}
