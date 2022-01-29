// Created by Jackson
// Quest ID:17630
// [凯梅尔兹共和国] 击退阿库旁多（5）


npc.sayNextE("那是... 什么?");
npc.sayNextE("嗯?这些该死的阿库旁多们!", true);
npc.sayNextE("数量真是惊人。那后面又是什么啊。");
npc.sayNextE("就是说,是些见都没见过,听都没听过的家伙。虽然看模样好像很普通。", true);
npc.sayNextE("这些家伙。欺负我们种族的家伙们。", 9390208);
npc.sayNextE("你是谁?欺负这词用得很奇怪!是你们一直在袭击我们商团啊。", true);
npc.sayNextE("我是江河之子。袭击你们是对你们恶行的惩罚。", 9390208);
npc.sayNextE("你说恶行?我们做了什么,为什么你要这么说?", true);
if (npc.askYesNoE("你应该很清楚。我应该不用再跟你浪费口舌了吧。", 9390208)) {
        // Response is Yes
        npc.startQuest();
        npc.makeEvent("berry_quest", false, [player, [865020051]]);
} else {
        // Response is No
        npc.sayE("这是在干嘛。反正现在已经没有退路了。");
}
