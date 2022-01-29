/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]忘却之湖-湖畔
 *
 *  @Author Yanran
 */
if (map.getId() == 450001005) {
        let selection = npc.askYesNo("…我正好要去死亡火焰地带... 如果你也要去的话，我可以载你一程...\r\n\r\n#b（接受时坐船，移动到忘却之湖）", 3003123);
        if (selection == 1) {
                npc.sayNext("…那么，出发…", 3003123);
                player.changeMap(450001007, 1);
        }
} else {
        let selection = npc.askYesNo("…我正好回无名村庄... 你也想回去吗？\r\n\r\n#b（接受时坐船，移动到忘却之湖）", 3003123);
        if (selection == 1) {
                npc.sayNext("…那么，我带你回无名村庄…", 3003123);
                player.changeMap(450001007, 2);
        }
}