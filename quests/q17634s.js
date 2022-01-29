// Created by Jackson
// Quest ID:17634
// [凯梅尔兹共和国] 向吉尔伯特报告


npc.sayNext("嗯。事情怎么样了。");
npc.sayNextS("嗯,顺利地赶走了阿库旁多。我想一段时间内,它们应该不会来袭击了。");
if (npc.askYesNo("那么简单就处理好了?嗯,中间没有别的问题了?")) {
        // Response is Yes
        npc.startQuest();
        npc.sayNextE("是的,统帅.. 实际上...", 9390202);
        npc.sayNextE("嗯,多亏了莱文出众的领导力,没有遇到什么大问题。", true);
        npc.sayNextE("(喂,你干嘛说谎啊?)", 9390202);
        npc.sayNextE("那真是个好消息。没有遇到什么困难?");
        npc.sayNextE("(那些不愉快的事情,没有必要说出来。)", true);
        npc.sayNextE("嗯.. 也许是我低估了莱文。");
        npc.sayNextE("啊,还有,我们在回来的路上发现了奇怪的结界。", true);
        npc.sayNextE("结界?是什么结界?");
        npc.sayNextE("我们那时太疲惫,而且不知道会不会遇到什么危险,我们就没进入结界内部。", true);
        npc.sayNextE("嗯.. 我知道了。我会另外派人去调查结界的。辛苦你了。你和莱文一起去休息吧。");
} else {
        npc.say("你还没做好报告的准备啊?");
}