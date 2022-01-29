// Created by Jackson
// Quest ID:17003
// [凯梅尔兹交易所]成为富翁的方法

npc.sayNext("你好，欢迎来到充满黄金和机遇的商业城市--凯梅尔兹。在这里，人人都能成为富人。");
npc.sayNext("方法很简单。只要在我给你的合同中签名,就能开始贸易了。");
if (npc.askYesNo("来自冒险岛的勇士也有兴趣知道成为有钱人的方法啊?")) {
        npc.sayNextNoEsc("果然,你还是做了明智的选择。 #h0#,你不会后悔的。稍等... 我把合同放哪了呢... ");
        npc.completeQuest();
} else {
        npc.sayNext("唉.. 机会之门时刻为你敞开,如果你改变心意的话,可以随时再来找我。");
        npc.startQuest();
}