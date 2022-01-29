if (player.isQuestStarted(1464) && !player.isQuestCompleted(1464) && map.getId() == 105300301) {
        npc.saySNoEsc("这个传送口有着奇妙的能量流动。通过这个传送口，应该能到达其他地方。\r\n\r\n#b(请按下向上按钮，进入传送口。)#k");
        player.updateQuestRecordEx(1464, "find=1;r=0");
        player.changeMap(450000120, 0);
}