/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 完全变了的国王
 *
 *  @Author Yanran
 */

let selection = npc.askYesNo("我在玫瑰花园里找到了含有雷昂和我的记忆的花谱。我们俩的手艺都不怎么好，做得不是很好看，不过做这个的时候我们真的很开心……好的，请你帮我把它交给雷昂。");
if (selection == 1) {
        if (!player.hasItem(4032837, 1)) {
                player.gainItem(4032837, 1);
        }
        player.changeMap(211070200, 1);
        npc.startQuest();
}
