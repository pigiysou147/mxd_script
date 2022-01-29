// Created by Jackson
// Quest ID:17618
// [凯梅尔兹共和国] 初次见面


npc.sayNextENoEsc("怎么可能。我花了那么多钱雇来的佣兵竟然这模样..", 9390204);
npc.sayNextENoEsc("怎么样,我看你现在还是乖乖交出交易品吧。", true);
npc.sayNextENoEsc("额... 你是什么人,为什么要妨碍我的好事。");
npc.sayNextENoEsc("你不用知道我是谁。我有我的理由。再说,你偷了东西,我不能就这么放过你。", true);
npc.sayNextENoEsc("好了,你要怎么做。是乖乖交出交易品,还是要让我教训你一下才行。", true);
npc.sayNextENoEsc("切。现在状况不妙。我们今天就此作别吧。");
let OBJECT_1 = player.getSessionValue("npc1");
player.setNpcViewOrHide(OBJECT_1, false, false);
npc.sayNextENoEsc("一下子就逃得没影了。那,我现在还是回村子吧。", true);
npc.sayNextENoEsc("那人是叫提皮斯吗?把东西还给那个船员就可以了吧。", true);
npc.completeQuest();
player.startQuest(17619, 0);//Quest Name:[凯梅尔兹共和国] 不许逃
player.gainExp(5530255);