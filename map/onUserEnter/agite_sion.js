// Created by Jackson
// ID:[865030111]
// MapName:暗杀者据点内部

if (!player.isQuestCompleted(17664)) {
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setForcedInput(0);
        //player.setStandAloneMode(true);
        let OBJECT_0 = player.spawnTempNpc(9390236, 300, 80, 1);
        player.setSessionValue("OBJECT_0", OBJECT_0);
        player.setNpcSpecialAction(OBJECT_0, "summon", 0, false);
        player.updateQuestRecordEx(17664, "reonNpcVal=1097086"); // Quest Name:[凯梅尔兹共和国] 装死的西温
        ////npc.setDelay(2000);
        player.setNpcForceMove(OBJECT_0, -1, 650, 100);
        //player.setForcedInput(1);
        ////npc.setDelay(5000);
        //player.setForcedInput(0);
        ////npc.setDelay(4000);
        npc.sayNextNoEsc("这里就是那些家伙们的据点吗?", 9390236);
        npc.sayNextSNoEsc("看来应该是那样的。", true);
        npc.sayNextNoEsc("但是特来敏小姐好像不在这里。不会是被监禁在什么地方了吧。", 9390236);
        npc.sayNextSNoEsc("说不定就是那样呢。再找找看吧。找特来敏小姐的同时也找找有没有能掌握那些家伙的来历的资料。", true);
        ////npc.setDelay(1500);
        npc.sayNextNoEsc("虽然很简陋,但是这边请。", 9390207);
        npc.sayNextSNoEsc("好像有谁来了!快躲起来!", true);
        ////npc.setDelay(1500);
        player.setNpcForceMove(OBJECT_0, -1, 360, 200);
        //player.setForcedInput(1);
} else {
        let OBJECT_1 = player.spawnTempNpc(9390236, -200, 80, 1);//NpcName:OBJECT_1
        player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
        let OBJECT_2 = player.spawnTempNpc(9390238, -344, 80, 1);//NpcName:OBJECT_2
        player.setNpcSpecialAction(OBJECT_2, "summon", 0, false);
        if (!player.isQuestCompleted(17666)) {
                let OBJECT_3 = player.spawnTempNpc(9390218, -44, 80, 1);//NpcName:OBJECT_2
                player.setNpcSpecialAction(OBJECT_3, "summon", 0, false);
        }
}
