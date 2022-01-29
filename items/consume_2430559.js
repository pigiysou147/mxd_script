/*  This is mada by Yanran    
 *
 *  功能：鲁丹能手册 30
 *
 *  @Author Yanran
 */

let job = 0;
let text = "";
let item = new Array();

item = Array(2431935, 2431936);
if (!player.isQuestStarted(3148)) {
        npc.say("再和鲁丹对话吧。");
} else {
        //job = player.getJob();
        for (let i = 0; i < item.length; i++) {
                text += "\r\n#b #L" + i + "# 领取 : #b#v" + item[i] + "##z" + item[i] + "##k#l";
        }
        let selection = npc.askMenu("请选择一本，收下我的礼物吧，勇士。" + text);
        let sel = npc.askYesNo("#k确认#k领取 #v" + item[selection] + "##z" + item[selection] + "#？");
        if (sel == 1) {
                if (player.canGainItem(item[selection], 1)) {
                        player.loseItem(npc.getItemId(), 1);
                        if (player.isQuestStarted(3148)) {
                                player.updateQuestRecordEx(3152, "use", "1");
                        }
                        //player.gainItem(item[selection], 1);
                        let newItem = player.makeItemWithId(item[selection]);
                        player.gainItem(newItem);
                        npc.broadcastGachaponMsgEx("[任务公告] : 恭喜 " + player.getName() + " 完成了【狮子王之城主题任务】获得了" + newItem.getItemName(), newItem);
                        npc.say("永远的忠。\r\n\r\n#fUI/UIWindow2.npcg/QuestIcon/4/0#\r\n#v" + item[selection] + "##z" + item[selection] + "#1个。");
                }
        }
}