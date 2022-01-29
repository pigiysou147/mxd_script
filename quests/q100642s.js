// Created by Jackson
// Quest ID:100642
// [AWAKE] 宾果

if (npc.askAcceptNoEsc("#e[ 百人宾果！]#n\r\n\r\n百人宾果游戏即将开启，要来体验下乐趣吗？\r\n\r\n#b（同意后将切换#r频道#k前往等待地图）。")) {
        player.updateQuestRecordEx(100642, "rMap", String(map.getId()));
        if (player.getChannel() == 1) {
                player.changeMap(922290000);
        } else {
                player.changeMapAndChannel(922290000, 1);
        }
} else {
        /* Response is No */
        npc.say("嗯……好的, 你去看看其他游戏吧。真是遗憾……");
}