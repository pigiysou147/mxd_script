// Created by Jackson
// Quest ID:17675
// [凯梅尔兹共和国] 他的委托


npc.sayNextE("....那么我先告辞了。", 9390240);
player.setNpcViewOrHide(9390237, false, false);
npc.sayNextE("莱文。", true);
npc.sayNextE("嗯?啊,你来啦。我听首领说了。准备好的话..");
npc.sayNextE("怎么回事。两人是什么关系啊。", true);
npc.sayNextE("嗯?啊..你是说克莱尔小姐吧?");
npc.sayNextE("怎么回事...怎么回事怎么回事..称呼从#r特来敏小姐#k变成了#b克莱尔小姐#k了呢。这是怎么回事。两人究竟发生了什么事。", true);
npc.sayNextE("啊...哈哈..不就是更亲近了一些而已嘛。");
npc.sayNextE("就算是那样眼神也非比寻常啊。好好把握吧。", true);
npc.sayNextE("少来了。我现在还有好多事要做好多东西要学呢。我知道我自己在很多方面都非常不足以至于还不能够对另一个人的人生负责。");
npc.sayNextE("(结婚...我还没说到结婚呢..)", true);
if (npc.askYesNoE("啊,对了,离出航貌似还有一些时间。不忙的话能拜托你件事吗?")) {
        npc.startQuest();
        npc.sayNextE("这种情况下有事拜托我。说吧什么事。", true);
        npc.sayNextE("呃,呃嗯。其实刚刚我想把这封信给克莱尔小姐的,但是丢了魂了结果没把信给她。你替我转交给她吧。可能又马上要去海本王国了,你得赶紧了。");
        npc.sayNextE("你亲手交给她去岂不更好?现在被拖去海本王国的话,就不知道什么时候能再见了。", true);
        npc.sayNextE("我当然也想亲手交给她啦。刚刚分手我就已经开始想她了。");
        npc.sayNextE("(呃哦...)", true);
        npc.sayNextE("但是现在还不是时候。我要变成更帅的男人再出现在她面前。还有,两人各在远方思念对方也很浪漫不是吗?哈哈");
        npc.sayNextE("啊啊,好吧,我知道了。我会支持你的,你这家伙。", true);
} else {
        npc.sayE("现在离出航还早着呢。如果改变心意再来找我。");
}