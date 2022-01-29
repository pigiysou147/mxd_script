// Created by Jackson
// Quest ID:17647
// [凯梅尔兹共和国] 被击毙的普赛依


npc.sayNext("话说回来,那海盗该怎么办呢?");
npc.sayNextS("海盗?啊..普赛依!!");
npc.sayNext("普赛依那家伙在哪?因为深海巨妖的出现我都没心思顾及他了。", 9390235);
npc.sayNext("像老鼠一样悄悄地逃跑了,往那边去了。");
npc.sayNext("怎么搞的,什么时候跑那么远去了!!赶紧去追吧!!", 9390235);
npc.sayNextS("那是不太可能。用商船追海盗船那是不可能的。");
npc.sayNext("就这样失之交臂了吗..几乎就要抓到他了。切。", 9390235);
if (npc.askYesNo("好像该轮到我登场的时候了吧。怎么样..要我帮忙吗?")) {
        npc.startQuest();
        npc.sayNextE("你打算怎么办呢?你不会是打算游泳追过去吧", true);
        npc.sayNextE("怎么会有这么低俗的人啊。");
        npc.sayNextE("什么,你说什么..(这女人做什么都说是低俗...)", true);
        npc.sayNextE("怎么办呢?要不要我出马。当然你得给我适当的报酬。");
        npc.sayNextE("呃嗯...好吧,就拜托你了。", 9390235);
} else {
        npc.say("真的不要吗?你不会后悔吧。");
}