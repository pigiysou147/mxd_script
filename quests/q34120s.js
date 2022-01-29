/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]获取神秘徽章
 *
 *  @Author Yanran
 */

npc.sayNextS("#b（拾取了卡奥离开时留下的神秘徽章：消亡旅途。）");
if (player.getFreeSlots(1) > 0) {
        player.startQuest(39364, 3003113);
        npc.startQuest();
        npc.completeQuest();
        let newItem = player.makeItemWithId(1712001);
        player.gainItem(newItem);
        player.showProgressMessageFont("现在你可以在神秘河打猎获取神秘徽章了，怪物公园公关也可以获取神秘徽章了。", 3, 20, 20, 0);//绿色的字
        npc.broadcastGachaponMsgEx("[任务公告] 恭喜 " + player.getName() + " 完成了【神秘河-消亡旅途】获得了" + newItem.getItemName(), newItem);
} else {
        npc.sayNext("请保证装备栏有足够的空格。");
}