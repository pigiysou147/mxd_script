// Created by Jackson
// Quest ID:17658
// [凯梅尔兹共和国] 克莱尔的故事


npc.sayNextE("我需要谢谢你肯听我说吗?你们还记得我是救过你们的恩人吗?");
npc.sayNextE("关于那点是要谢谢你。但是知道你是班·特来敏的女儿之后不得不与你划清界线也是事实。", true);
if (npc.askYesNoE("也对。那也不是不能理解的。那我就说明一下吧。现在要听吗?")) {
        npc.startQuest();
        npc.sayNextE("刚才也说了我是班·特来敏的独生女。母亲呢在生我的时候就去世了。所以父亲非常宝贝地养育了我。");
        npc.sayNextE("你生得金贵,为什么这么遮头盖脸地过日子?", true);
        npc.sayNextE("嗯.. 该从哪说起呢..");
} else {
        npc.sayE("你们不是想听我的故事吗?");
}