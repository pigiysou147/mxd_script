/*  This is mada by Yanran   
 *
 *  功能：[消亡旅途]每日任务
 *
 *  @Author Yanran
 */

if (player.canGainItem(1712001, 1)) {
        npc.completeQuest();
        player.gainItem(1712001, 1);
        var count = Number(player.getIntQuestRecordEx(34127, "count"));
        count = Math.min(count + 1, 5);
        player.updateQuestRecordEx(34127, "count", String(count));
} else {
        player.dropAlertNotice("装备栏至少有1格空位。");
}