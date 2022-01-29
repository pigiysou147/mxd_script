// Created by Jackson
// Quest ID:17667
// [凯梅尔兹共和国] 什么关系


npc.sayNextE("该死……！");
npc.sayNextE("你为什么要装死？你的目的是什么！", true);
npc.sayNextE("我应该没有义务回答你的问题吧？而且，你们应该没有权利抓住我不放吧？");
if (npc.askYesNoE("(这家伙，嘴巴还挺紧！#h0#，你能让这家伙开口吗？)", 9390202)) {
        npc.startQuest();
        npc.sayNextE("喂，莱文，人质没必要有头发吧？还有这个难看的胡子。", true);
        npc.sayNextE("是啊，完全没必要啊。其实衣服也没必要吧？", 9390202);
        npc.sayNextE("是啊，把头发和胡子全部剃掉，衣服也脱下来，那他估计就不能逃跑了，这个主意不错啊。让我看看，拔胡子应该用镊子吧……", true);
        npc.sayNextE("其实那些像要暗杀我的人是我的手下。", 9390207);
        npc.sayNextE("看来你现在才想说啊。", true);
} else {
        npc.sayE("再想想。只有让那家伙开口，才能证明我们的清白。", 9390202);
}