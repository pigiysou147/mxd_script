// Created by Jackson
// Quest ID:17647
// [凯梅尔兹共和国] 被击毙的普赛依


npc.sayNextE("你到时候可不能反悔哦。好吧,那就退后吧。不想一起被卷走的话。");
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, true, false, false);
//player.setForcedInput(0);
//player.setStandAloneMode(true);
player.showScreenAutoLetterBox("Map/EffectBT.img/dawnveil1/Cut3_1", 0);
//npc.setDelay(2000);
player.showScreenAutoLetterBox("Map/EffectBT.img/dawnveil1/Cut3_2", 0);
player.soundEffect("Sound/SoundEff.img/thunder3");
//npc.setDelay(2000);
player.setInGameDirectionMode(false, true, false, false);
//player.setStandAloneMode(false);
npc.sayNextENoEsc("..........", true);
npc.sayNextENoEsc("..........", 9390235);
npc.sayNextENoEsc("还活着吗...", true);
npc.sayNextENoEsc("可,可能...恐怕不行了吧。", 9390235);
npc.sayNextENoEsc("不知怎么的有些同情他。", true);
npc.sayNextENoEsc("你,报酬可不能少了我的啊。");
npc.completeQuest();
player.gainExp(953667);
