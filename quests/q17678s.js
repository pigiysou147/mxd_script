// Created by Jackson
// Quest ID:17678
// [凯梅尔兹共和国] 到普赛依的舰船上去


npc.sayNext("怎,怎么回事。瞬间消失了。去哪儿啦?");
npc.sayNextS("莱文看那里!");
npc.sayNext("不知何时已经回到了自己的舰船上去了嘛。岂有此理!到嘴的鸭子飞了!!");
npc.sayNextS("怎么办呢?就这么放弃太可惜了,但是对方可是被称为海盗王的男人啊。随便进入敌人的根据地会...");
npc.sayNext("我也知道。可是到目前为止见过无数的普赛依远征队。但一次也没有成功过。现在这是我们走运。如果现在放弃的话说不定就再也没可能了。");
if (npc.askYesNo("这也许是普赛依布下的陷阱。你不和我一起去也没关系。但是我要去。为了我,为了我们的商团,为了凯梅尔兹!")) {
        npc.sayNextS("嗯...那么好吧。我也和你一块去。");
        npc.sayNext("真的吗?也许可能就像你说的那样是陷阱呢。");
        npc.sayNextS("啊哎,没关系。我自己会想办法逃出来的。");
        npc.sayNext("我也一起去吧?", 9390204);
        npc.sayNext("你就别去了。你留下来守好这条船。");
        npc.sayNext("好了,#h0#走吧!我来开条活路!");
        npc.sayNextS("等会,你在这儿等着。那地方我要一个人去。");
        npc.sayNext("你说什么呢。你一个人去置身死地,让我装作视而不见吗?");
        npc.sayNextS("我说莱文。你现在是这船的舰长。舰长如果离开了这船万一发生什么事的话可怎么办。我们必须得顾虑到万一若是发生不测的情况啊。");
        npc.sayNext("虽说是那样..可是也..");
        npc.sayNextS("作为舰长你必须守住船。");
        npc.sayNext("...拜托你了。");
        map.portalEffect("PuPotal");
        npc.startQuest();
} else {
        npc.say("对的。你还是留在这里比较好。");
}