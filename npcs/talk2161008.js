/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 还有希望吗
 *
 *  @Author Yanran
 */
if (map.getId() == 921140001 && player.isQuestStarted(3178)) {
        if ("1".equals(player.getQuestRecordEx(3178))) {
                npc.sayNextNoEsc("你…是怎么知道这条路的？这条路只有王族、我和伊帕娅知道的啊…你还要撒谎说见过伊帕娅了吗？");
                npc.sayNextSNoEsc("我真的见到伊帕娅了，而且这次我带着伊帕娅一起来了。你亲自和伊帕娅说说吧。", false);
                npc.sayNextNoEsc("雷昂，你看不见我吗？你听不见我说话吗？", 2161001, false);
                npc.sayNextNoEsc("你在胡说什么……伊帕娅在哪里啊？你要耍我吗？");
                npc.sayNextSNoEsc("你听不见伊帕娅的声音吗？为什么…？为什么她的声音无法传递给你？", false);
                npc.sayNextNoEsc("说得好像真的一样……不…也许你说得是真的。说不定伊帕娅真的在说话。但那又有什么用呢？我的手已经不再干净了…");
                npc.sayNextNoEsc("为什么说这么悲伤的话语…", 2161001, false);
                npc.sayNextNoEsc("啊啊…也许是因为那件事。是因为我把灵魂出卖给了黑魔法师…由于我杀了太多的人，才听不见她的声音…这就是我所犯下罪孽的代价吗…");
                let selection = npc.askAccept("认识伊帕娅的人啊，请收下这个。");
                if (selection == 1) {
                        if (player.canGainItem(4032839, 1)) {
                                if (!player.hasItem(4032839, 1)) {
                                        player.gainItem(4032839, 1);
                                }
                                npc.sayNextNoEsc("出卖灵魂以满足复仇之心…最后什么都没有剩下。这样我没有资格回忆她。");
                                npc.sayNextNoEsc("如果能再回到当时，我会不会再做出这样的决定？想过数万遍，但是还是不知道答案。愤怒和虚无…选择哪一方，最终也不会有改变。");
                                npc.sayNoEsc("你还是回去吧，现在我不想打架…");
                                player.changeMap(211061001, 0);
                                player.updateQuestRecordEx(3178, "2");
                        }
                }
        } else {
                if (!player.hasItem(4032839, 1)) {
                        player.gainItem(4032839, 1);
                }
                player.changeMap(211061001, 0);
                player.updateQuestRecordEx(3178, "2");
        }
} else {
        npc.sayOk("？");
}