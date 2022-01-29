// Created by Jackson
// Quest ID:17610
// [凯梅尔兹共和国] 贝里的担忧（1）


npc.sayNext("嗯... ");
npc.sayNextS("村长,你有什么苦恼吗?");
npc.sayNext("啊... 是你啊。最近有件事让我很头痛。");
npc.sayNextS("是什么事?如果我能帮到你的话,我很愿意帮忙。");
if (npc.askYesNo("是真的吗?你愿意.. 帮帮我们的村子吗?")) {
        // Response is Yes
        npc.sayNext("不久前,这附近的小偷猫聚集在一起,开始抢夺旅客的东西。");
        npc.sayNext("但是,随着这些家伙的势力逐渐壮大,它们现在开始袭击村子的储鱼仓库。虽然目前还没造成很大的损失,但继续这样下去的话,损害会逐渐变大的。");
        npc.sayNext("请帮我抓住#b#o9390807##k。就先试着抓个100只吧。");
        npc.startQuest();
} else {
        npc.say("如果你忙的话,那也没办法。如果你有时间的话,再来帮我吧。");
}