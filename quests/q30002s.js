/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 奇怪的少女
 *
 *  @Author Yanran
 */

npc.sayNext("我想离开这里。");
npc.sayNextS("你说什么。", false);
npc.sayNext("我想从这里出去。");
npc.sayNextS("你到底在说什么啊？这是什么地方？你是谁？", false);
npc.sayNext("这里？这里是鲁塔比斯。我想离开这里。请你帮帮我。");
npc.sayNextS("(唉……一直在自言自语。真费劲。)", false);
let selection = npc.askYesNoS("(看来她好像是迷路了，要帮帮她吗？)", false);
if (selection == 1) {
        npc.sayNextS("知道了。我来看看有没有办法离开这里。", false);
        npc.sayNext("你真的愿意帮我吗？不许骗我哦！");
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        //npc.setDelay(500);
        npc.sayNextNoEsc("嗯，肯定在某处有出去的路……");
        npc.setCameraMove(false, 400, 600, 215);
        //npc.setDelay(2494);
        npc.setCameraMove(false, 400, -600, 215);
        //npc.setDelay(3997);
        npc.setCameraMove(true, 0, 0, 0);
        player.setInGameDirectionMode(false, false, false, false);
        //player.setStandAloneMode(false);
        npc.startQuest();
} else {
        npc.say("那么等你想来了，再跟我说。");
}
