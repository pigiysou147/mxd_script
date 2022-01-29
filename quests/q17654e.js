// Created by Jackson
// Quest ID:17654
// [凯梅尔兹共和国] 从某处传来的惨叫声


npc.sayNextENoEsc("这家伙是受过训练的暗杀者!", true);
npc.sayNextENoEsc("这里发生了什么事啊!!", 9390206);
npc.sayNextENoEsc("好像是那边!", 9390202);
npc.sayNextENoEsc("麻烦了。先撤退。", 9390227);
//player.setNpcViewOrHide(OBJECT_2, false, false);
//player.setNpcViewOrHide(OBJECT_3, false, false);
let OBJECT_1 = player.spawnTempNpc(9390203, 160, 343, 0);//NpcName:OBJECT_1
player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
let OBJECT_2 = player.spawnTempNpc(9390236, 300, 343, 0);//NpcName:OBJECT_2
player.setNpcSpecialAction(OBJECT_2, "summon", 0, false);
let OBJECT_3 = player.spawnTempNpc(9390206, 430, 343, 0);//NpcName:OBJECT_3
player.setNpcSpecialAction(OBJECT_3, "summon", 0, false);
npc.completeQuest();
player.gainExp(6058907);
