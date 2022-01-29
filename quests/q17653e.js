// Created by Jackson
// Quest ID:17653
// [凯梅尔兹共和国] 别来拜托我


npc.sayNext("来啦。见到班·特来敏了吗?");
npc.sayNextS("是的,见到了。可是...");
npc.sayNext("可是?");
npc.sayNextS("那个...虽然我不知道书信的内容,但是其中的议事被断然地拒绝了。说全部都是首领的责任让您自己看着办...");
npc.sayNext("什么?那是我为了自己好才那样做的吗!!");
npc.sayNextS("说商团的事务繁忙所以没法帮忙。");
npc.sayNext("他的意思是商团的事情比国家的事情更重要吗?呵呵,没看出来啊,真是可耻的人啊!其实那人一直盯着我的位子呢。果然拒绝帮忙。");
npc.sayNext("反正我知道了。辛苦你了。赶紧去休息吧。");
npc.completeQuest();
player.completeQuest(17740, 0);//Quest Name:第1章.不速之客
player.gainExp(953667);