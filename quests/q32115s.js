/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]第二个线索
 *  
 */

let selection = npc.askYesNo("总是觉得有地方可疑，要去调查一下吗？");
if (selection == 1) {
        npc.sayNextS("#v4033829#\r\n\r\n找到了一堆衣服。看起来不像平时穿的衣服……要展开看看吗？", false);
        npc.sayNextS("#v1052195##v1050168##v1052495#\r\n\r\n果真如此……这些衣服看上去就是为了演出而特别制作的。把衣服拿给库迪，看看它怎么说。", false);
        if (player.canGainItem(4033829, 1)) {
                if (!player.hasItem(4033829, 1)) {
                        player.gainItem(4033829, 1);
                }
                npc.startQuest();
        } else {
                npc.say("请确保你的其他栏有足够的空间。");
        }

        npc.startQuest();
} else {
        npc.sayNextS("先四处看下。");
}
