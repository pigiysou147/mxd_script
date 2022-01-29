// Created by Jackson
// Quest ID:17616
// [凯梅尔兹共和国] 失窃的贸易品


npc.sayNext("大事不好了。这可怎么办呢。");
npc.sayNextS("你有什么事情吗?");
npc.sayNext("你还没走啊?别提了。我把这次的交易物品寄放在交易所,结果物品都神不知鬼不觉地消失了!");
npc.sayNextS("神不知鬼不觉地消失了,你是指被偷了?");
npc.sayNext("嗯,没错!是被偷了。但说 '我'是小偷,这太荒唐了...");
npc.sayNextS("我只是说被偷了,什么时候说你是小偷了?你什么意思啊?你是有双胞胎兄弟,还是刚刚出现的是幽灵?");
npc.sayNext("我没有双胞胎兄弟。你说得没错!幽灵!他们说有个跟我长得一样的家伙出现,拿走了交易品。但是我发誓,绝对不是我!但是居然说我拿走了。是幽灵。现在该怎么办?谁会相信我说的话呢。我肯定会被炒鱿鱼的。");
if (npc.askYesNoS("#b(他到底在说什么啊,我怎么一点都不懂。等下... 说不定这是个机会。说不定能趁这次机会进入达尼尔拉商团。再调查一下?)#k")) {// Response is Yes
        npc.startQuest();
        npc.sayNextS("#b(先去交易所,了解下事情的详细经过吧。)#k");
} else {
        // Response is No
        npc.sayS("(现在还不知道。先等等看再说吧。)");
}