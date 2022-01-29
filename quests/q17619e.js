// Created by Jackson
// Quest ID:17619
// [凯梅尔兹共和国] 不许逃


npc.sayNext("幽灵.. 我的交易品.. 幽灵.. 我的交易品.. ");
npc.sayNextS("啊,原来你在这里啊。 ");
npc.sayNext("幽灵.. 我的交易品.. 幽灵..");
npc.sayNextS(" ... 他的魂好像丢了一半...");
npc.sayNextS("喂。我把丢失的贸易品重新找回来了。");
npc.sayNext("幽... 什么!?找回来了!?在哪呢... 哦!!是真的呢!!这是怎么回事?你在哪找到的?");
npc.sayNextS("那个,就是.. 我抓到了幽灵。");
npc.sayNext("是真的吗?我之前还没发现,你真是了不起的冒险家啊!!");
let OBJECT_1 = player.spawnTempNpc(9010000, 2369, 526, 1);
let OBJECT_2 = player.spawnTempNpc(9010010, 2911, 526, 1);
let OBJECT_3 = player.spawnTempNpc(9390251, 4126, 526, 1);
let OBJECT_4 = player.spawnTempNpc(9390234, 5489, 526, 1);
let OBJECT_5 = player.spawnTempNpc(9000086, 1122, 104, 1);
npc.sayNextS("(你之前是怎么看我的...)");
npc.sayNext("十分感谢!!你是我的救命恩人。你有什么愿望就告诉我吧!只要我能做到,我一定会帮你的!");
npc.sayNextS("是真的吗?");
npc.sayNext("当然啦!这是海上男子汉的约定。也是以信任为本的达尼尔拉商团的商人的约定!");
npc.completeQuest();
player.gainExp(530255);