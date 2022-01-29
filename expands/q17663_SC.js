// Created by Jackson
// ID:[865030111]
// MapName:暗杀者据点内部
// 暗杀者据点内部


//player.setForcedInput(0);
//npc.setDelay(5000);
player.startQuest(17664, 0);//Quest Name:[凯梅尔兹共和国] 装死的西温
let OBJECT_1 = player.spawnTempNpc(9390237, 300, 80, 1);
player.setSessionValue("OBJECT_1", OBJECT_1);
player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
let OBJECT_2 = player.spawnTempNpc(9390238, 400, 80, 1);
player.setSessionValue("OBJECT_2", OBJECT_2);
player.setNpcSpecialAction(OBJECT_2, "summon", 0, false);
let OBJECT_3 = player.spawnTempNpc(9390218, 500, 80, 1);
player.setSessionValue("OBJECT_3", OBJECT_3);
player.setNpcSpecialAction(OBJECT_3, "summon", 0, false);
player.setNpcForceMove(OBJECT_1, -1, 650, 100);
player.setNpcForceMove(OBJECT_2, -1, 650, 100);
player.setNpcForceMove(OBJECT_3, -1, 650, 100);
npc.setCameraMove(false, 100, false, -350, 100);
//npc.setDelay(9000);
npc.sayNextENoEsc("(特来敏小姐!!)", 9390236);
npc.sayNextENoEsc("嘘!!", true);
npc.sayNextENoEsc("克莱尔你好吗。我离开海本王国之前在那见过你,没想到在这儿又碰见你了啊。", 9390207);
npc.sayNextENoEsc("就是说啊。我也没想到。在这种地方又见到你西温。", 9390205);
npc.sayNextENoEsc("克莱尔,你父亲班·特来敏知道你在这里吗?", 9390207);
npc.sayNextENoEsc("......你现在是在要挟我克莱尔·特来敏吗?", 9390205);
npc.sayNextENoEsc("请别太担心。我也不是不能理解克莱尔你想摆脱你这年龄段的生活环境的心情。我不会告诉你父亲的", 9390207);
npc.sayNextENoEsc("难道要我谢谢你吗?", 9390205);
npc.sayNextENoEsc("这可怎么说呢。我会为你做好明早回海本的准备的。", 9390207);
npc.sayNextENoEsc("我是…!", 9390205);
npc.sayNextENoEsc("啊,我们会保护精锐要员们确保他们人身安全的,请勿挂念。", 9390207);
npc.sayNextENoEsc("切.....", 9390205);
// Unhandled Stat Changed [CS_MP] Packet: 00 00 00 10 00 00 00 00 00 00 CB 04 00 00 FF 00 00 00 00 
//npc.setDelay(2000);
npc.sayNextENoEsc("(喂, #h0#,听得见说什么吗。)", 9390236);
npc.sayNextENoEsc("(不,听不清。)", true);
npc.sayNextENoEsc("(哎,就这么冲进去吧?特来敏小姐的表情不太好。)", 9390236);
npc.sayNextENoEsc("(等等。)", true);
npc.sayNextENoEsc("(你看他们不像是在逼迫特来敏小姐吗?)", 9390236);
npc.sayNextENoEsc("(说逼迫的话,我倒觉得克莱尔和那使节团是旧相识的关系)", true);
npc.sayNextENoEsc("(我再也看不下去了。)", 9390236);
npc.sayNextENoEsc("(喂,喂!!)", true);
player.startQuest(17665, 0);//Quest Name:[凯梅尔兹共和国] 忍耐性为零
npc.sayNextENoEsc("在那里的是谁。", 9390207);
let OBJECT_0 = player.getSessionValue("OBJECT_0");
player.setNpcForceMove(OBJECT_0, 1, 200, 100);
npc.setCameraMove(false, 100, false, -450, 100);
npc.sayNextENoEsc("还记得我吗,西温!", 9390236);
npc.sayNextENoEsc("竟然有这种事。我还以为是谁呢,竟然是凯梅尔兹首领的儿子啊。您怎么会到这么偏僻的地方来的呢?", 9390207);
npc.sayNextENoEsc("吵死了!赶紧给我从特来敏小姐身边滚开!", 9390236);
npc.sayNextENoEsc("嗯? 吼哦,看来您和克莱尔小姐相互认识啊。我也是和莱文大人你一样和克莱尔小姐有一点点交情。希望你不要产生不必要的误会。", 9390207);
npc.sayNextENoEsc("像你这样装死的家伙如何能信。你为什么要装死?你在策划什么阴谋。", true);
npc.sayNextENoEsc("原来是那时的那位佣兵啊。是啊。会是什么事情呢。你要先和我的部下们先聊聊吗?", 9390207);
npc.setCameraMove(true, 100, false, 0, 0);
// Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00 
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(false, true, false, false);
//player.setStandAloneMode(false);
player.completeQuest(17664, 0);//Quest Name:[凯梅尔兹共和国] 装死的西温
player.gainExp(1058907);