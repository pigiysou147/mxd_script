// Created by Jackson
// Quest ID:100642
// [AWAKE] 剪刀石头布

if (npc.askAcceptNoEsc("#e[ 剪刀石头布！]#n\r\n\r\n百人剪刀石头布游戏即将开启，要来体验下乐趣吗？\r\n\r\n#b（同意后将切换#r频道#k前往等待地图）。")) {
        player.updateQuestRecordEx(100641, "rMap", String(map.getId()));
        if (player.getChannel() == 1) {
                player.changeMap(993030000);
        } else {
                player.changeMapAndChannel(993030000, 1);
        }
} else {
        /* Response is No */
        npc.say("嗯……好的, 你去看看其他游戏吧。真是遗憾……");
}