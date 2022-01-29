// Created by Jackson
// Quest ID:17620
// [凯梅尔兹共和国] 礼尚往来


npc.sayNextS("那个,你是吉尔伯特·达尼尔拉吗?");
npc.sayNext("是的。但我好像没见过你,你是谁?");
npc.sayNextS("你好。吉尔伯特,我是...");
npc.sayNext("嗯。如果你没有提前预约的话,我没时间接待你。你还是回去吧。");
npc.completeQuest();
// Unhandled Stat Changed [CS_EXP] Packet: 00 00 00 00 01 00 00 00 00 00 91 6C 19 03 00 00 00 00 FF 00 00 00 00 
player.gainExp(530255);