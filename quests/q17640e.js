// Created by Jackson
// Quest ID:17640
// [凯梅尔兹共和国] 组织远征队（3）


npc.sayNextE("好了,我也现在就去码头吧。", true);
npc.sayNextE("哎呀,又遇见了呢。");
npc.sayNextE("呃啊!吓了我一大跳!!干嘛呀,在别人背后干嘛呢!", true);
npc.sayNextE("就是路过的时候看见了而已。");
npc.sayNextE("原来如此。那么就请继续路过吧。我很忙失陪..", true);
npc.sayNextE("你要去讨伐海盗吗?");
npc.sayNextE("是的,是那样的。怎么了?你感兴趣吗?", true);
npc.sayNextE("哦呵呵,怎么会呢。我怎么会对那种低俗又野蛮的事情感兴趣呢。那我就告辞了");
npc.sayNextE(".....低俗?野蛮?这人真是...算了。赶紧去码头吧。", true);
npc.completeQuest();
player.completeQuest(17730, 0);//Quest Name:第1章.危险的人
player.gainExp(953667);
