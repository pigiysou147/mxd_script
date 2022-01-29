/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 莫特的信【非主线】
 *
 *  @Author Yanran
 */
if (player.canGainItem(4032859, 1)) {
        let sel = npc.askAccept("要是……有谁听到了我的话……请过来跟我说会话……只要一小会就行！");
        if (sel == 1) {
                npc.startQuest();
        }
        //player.changeMap(211000000);
} else {
        npc.say("请确保你有足够的其它栏。");
}

