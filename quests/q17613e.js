// Created by Jackson
// Quest ID:17613
// [凯梅尔兹共和国] 统帅的儿子


if (map.getId() == 865090001) {
        npc.sayNextNoEsc("额…这些强盗一样的猫...");
        npc.sayNextSNoEsc("喂。你还好吧?");
        //player.setStandAloneMode(false);
        player.changeMap(865010200, 1);
} else {
        npc.sayNextE("你是谁?", 9390241);
        npc.sayNextE("#b(第一次见面语气就这么随意...)#k\r\n我叫做#h #。你是莱文·达尼尔拉吧?你没受伤吧?", true);
        npc.sayNextE("就那些强盗猫而已,我自己就能对付他们。 总之,谢谢你。你的身手还不错嘛!但你是怎么知道我的?我们见过吗?", 9390241);
        npc.sayNextE("啊，那是不可能的。我是从很远的地方来的……而且还是在不久前刚来的……", true);
        npc.sayNextE("但是，你知道我的名字啊？", 9390241);
        npc.sayNextE("是的，我其实是来见你的。我们是第一次见面，你的名字我是从村长那里听说的。而且，在那个强盗猫和你战斗的时候，我听见了你的名字，所以我知道我要找的人就是你。", true);
        npc.sayNextE("是吗？你要找我，那你就是贸易商咯？\r\n既然你是远道而来，那看来你对这附近并不熟悉啊。作为刚才你帮助我的回报，我告诉你个简单的情报吧。这里是个偏僻的小渔村，所以不适合作为远距离交易的据点。如果你想进行大笔的交易，你还是去#b桑凯梅尔兹#k吧。", 9390241);
        npc.sayNextE("不不，我不是贸易商。当然，我确实是打算去桑凯梅尔兹。", true);
        npc.sayNextE("你远道而来，却又不是贸易商，而且还来见我……那你为什么要到这么偏僻的小村子来找我呢？", 9390241);
        npc.sayNextE("我不是特地到这个偏僻的村子来找你，#e而是来到了这个偏僻的村子，你正好在这里#n。我，嗯……我是转达和凯梅尔兹友好合作的信息而来，你应该能理解吧？我听说正好你和达尼尔拉商团在这里停留，所以才回来见你。", true);
        npc.sayNextE("友好的信息？你这家伙是从#e#b海本#k#n来的吗？你们又有什么事？", 9390241);
        npc.sayNextE("(……啊！我是不是太快揭开身份了？而且，#e#b海本#k#n？虽然不知道他在说哪里，不过从这么敌对的态度来看，凯梅尔兹和海本的关系应该不好吧……我一定不能让他们产生误会。)", true);
        npc.sayNextE("海本？我是第一次听说这个名字啊？我是作为冒险岛世界希纳斯女皇的和平使者来的。我不知道你所说的海本在哪里，但是那里和我们没关系。", true);
        npc.sayNextE("嗯……是吗？你不是来自海本，却跑到凯梅尔兹来做和平使者……算了，只要不是海本的人就行。\r\n但是,你!你怎么对我说话这么随便?", 9390241);
        npc.sayNextE("是你先开始用这样的语气说话的吧?", true);
        npc.sayNextE("啊... 是吗?你啊。虽然有点傲慢,但我喜欢。你叫什么？", 9390241);
        npc.sayNextE("你叫我#h0#就行。", true);
        npc.sayNextE("#h0#？原来如此。我们做朋友吧?可不是什么人都能和我莱文·达尼尔拉做朋友的!但是,我们做了朋友,就一辈子不能变。信任是商人的原则!", 9390241);
        npc.sayNextE("#b(哈!虽然他有点奇怪,但不是坏人。我喜欢)#k\r\n好的。我还蛮喜欢你的。我们做朋友吧。", true);
        npc.completeQuest();
        player.gainExp(630724);
}