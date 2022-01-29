// Created by Jackson
// ID:[865000004]
// MapName:None


player.setInGameCurNodeEventEnd(true);
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
//npc.setDelay(2000);
npc.sayNextENoEsc("没有睡意。因为是在他乡所以才这样的吗?", true);
npc.sayNextENoEsc("既然睡不着,要不要出去散散步呢?", true);
//player.setForcedInput(2);
//npc.setDelay(1500);
//player.setForcedInput(0);
npc.sayNextENoEsc("嗯?好像楼下有人在谈话。是莱文吗?", true);
//npc.setDelay(2000);
npc.sayNextENoEsc("他不是那种人,爸爸。", 9390202);
npc.sayNextENoEsc("哼。那个谁知道。", 9390203);
npc.sayNextENoEsc("刚刚我听船员说,他不是还帮了我们商团嘛。", 9390202);
npc.sayNextENoEsc("这是有目的的帮助。居然这样来利用别人。\r\n没用的家伙。", 9390203);
npc.sayNextENoEsc("爸爸……", 9390202);
npc.sayNextENoEsc("你听好了。即将成为商团主人的人不能随便怀疑别人,但也不能轻信别人。", 9390203);
npc.sayNextENoEsc("…我知道了。", 9390202);
npc.sayNextENoEsc("(难怪白天我觉得有点奇怪，原来是吉尔伯特还在怀疑我。我得寻找让他完全信任我的契机.. 现在这种状况，我还是不要出去散步比较好。)", true);
player.completeQuest(17623, 0);//Quest Name:[凯梅尔兹共和国] 我只是个异邦人
player.completeQuest(17712, 0);//Quest Name:第3章.贸易共和国凯梅尔兹
player.startQuest(17720, 0);//Quest Name:第1章.运河之战
player.gainExp(5530255);
// Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(false, true, false, false);
//player.setStandAloneMode(false);
player.changeMap(865000002, 2);
