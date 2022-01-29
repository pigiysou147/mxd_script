// Created by Jackson
// ID:[865000000]
// MapName:桑凯梅尔兹
// 桑凯梅尔兹


npc.sayNextNoEsc("快请进!", 9390211);
npc.sayNextSNoEsc("我是达尼尔拉商团的。听说这有莱文预定的东西。", true);
npc.sayNextNoEsc("啊是的,你说的是这些吧。这个和这个还有这个...", 9390211);
npc.sayNextSNoEsc("(呃,比预想的要多呢,) 那个,你能帮我把这些东西送到码头吗?", true);
npc.sayNextNoEsc("当然可以。马上帮你送过去。", 9390211);
npc.sayNextSNoEsc("那,谢谢了。(可以叫人送的东西,莱文干嘛让我来呢。)", true);
npc.sayNextENoEsc("嗯?你是..!!", true);
npc.sayNextENoEsc("哎呀,又是那个人呢。", 9390204);
npc.sayNextENoEsc("到这儿有何贵干啊?你还没有忘记自己是个罪犯吧?", true);
npc.sayNextENoEsc("哎呀,那天要不是我的话你就不在这儿了,你没忘吧?", 9390204);
npc.sayNextENoEsc("呃...好吧。今天就当我们没碰见过。那么我就告辞了..", true);
npc.sayNextENoEsc("看来你这是要乘船远行啊?", 9390204);
npc.sayNextENoEsc("海盗们惹事,我这就要去讨伐他们。你这是什么意思?", true);
npc.sayNextENoEsc("啊没什么,只是..没什么特别的意思。那我就告辞了。", 9390204);
npc.sayNextENoEsc("那女孩干嘛的。先回莱文那里吧。", true);
player.completeQuest(17639, 0);//Quest Name:[凯梅尔兹共和国] 组织远征队（2）
player.gainExp(953667);
player.setInGameDirectionMode(false, true, false, false);