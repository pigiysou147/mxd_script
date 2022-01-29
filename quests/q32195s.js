/*  This is mada by Yanran    
 *
 *  功能：[列娜海峡]称号 - 见习航海士
 *
 *  @Author Yanran
 */
npc.sayNext("我听说了你的出色表现，便来见见你。你在这地方立了大功呢？");
npc.sayNext("你对这地方有什么感想？....企鹅族、阿拉斯加犬族、海象族它们曾经彼此憎恨。尽管现在它们已经一笑泯恩仇，可要是它们从一开始就没有互相争斗，维持着合作关系，也许就可以阻止今天这样的事情发生。");
let selection = npc.askYesNo("大家没必要非得思想一致，可如果在共同的敌人面前，有想要守护的东西的话，至少就应该齐心协力来和敌人对抗。作为冒险岛世界的一员，希望你要牢牢记住这句话。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n #i1142629# #b#t1142629##k\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 108805 exp\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# #v5062024# x 1");
if (selection == 1) {
        if (player.getFreeSlots(4) <= 0) {
                npc.say("请保证现金栏位至少有1个空格。");
        } else if (player.getFreeSlots(5) <= 0) {
                npc.say("请保证现金栏位至少有1个空格。");
        } else {
                npc.startQuest();
                player.gainItem(1142629, 1);
                player.gainExp(108805);
                let newItem = player.makeItemWithId(5062024);
                player.gainItem(newItem);
                npc.broadcastGachaponMsgEx("[任务公告] 恭喜 " + player.getName() + " 完成了【列娜海峡主题副本】获得了" + newItem.getItemName(), newItem);
        }
}