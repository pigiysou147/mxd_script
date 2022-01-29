// Created by Jackson
// Quest ID:17641
// [凯梅尔兹共和国] 远征队起航


npc.sayNextE("你在这儿干嘛呢?");
npc.sayNextE("..............", true);
npc.sayNextE("啊,你说过是要讨伐海盗还是什么的对吧。");
npc.sayNextE("..............", true);
npc.sayNextE("可是你能做到吗?看上去佣兵人数也不多,而且没个能值得信赖的人...");
npc.sayNextE("......走吧。", true);
npc.sayNextE("哎?走吧?走去哪儿?");
npc.sayNextE("都到这时候了你就直接说吧。想一起去。", true);
npc.sayNextE("......虽然我是个大忙人,但是你坚持需要帮助的话,我就答应你吧。走吧。");
npc.sayNextE("......这女孩到底干嘛的呀。可是..我随便接收下来没问题吗。让她跟莱文说一声他会看着办的吧。", true);
npc.completeQuest();
player.gainExp(953667);
npc.makeEvent("berry_quest", false, [player, [865010001]]);