/*  This is mada by Jackson    
 *
 *  功能：NPC 进入 仲夏夜森林
 *
 *  @Author Yanran
 */
if (map.getId() == 101030000) {
        if ((player.isQuestStarted(32101) || player.isQuestCompleted(32101)) || (player.isQuestStarted(32156) || player.isQuestCompleted(32156))) {
                let selection = npc.askYesNo("你要进入#b#e[主题副本：妖精学院艾利涅]#n#k吗，喵？", 1500010);
                if (selection == 1) {
                        player.changeMap(101074000);
                } else {
                        npc.say("那需要进去的时候再来找我哦！", 1500010);
                }
        } else {
                npc.say("现在进不去，喵！你应该还有事情要找我吧，喵？\r\n\#b（和潘喜对话并接受任务，才能入场。）", 1500010);
        }
} else if (map.getId() == 101070000 || map.getId() == 101070010) {
        let selection = npc.askYesNo("你要返回森林：巨大的树吗，喵？", 1500010);
        if (selection == 1) {
                player.changeMap(101074001);
        } else {
                npc.say("那需要离开的时候再来找我哦！", 1500010);
        }
}