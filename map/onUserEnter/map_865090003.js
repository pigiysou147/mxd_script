// Created by Jackson
// ID:[865090003]
// MapName:None


player.setInGameCurNodeEventEnd(true);
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.setVansheeMode(true);
player.showTextEffect("#fn哥德 ExtraBold##fs26#当天晚上", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, "", 0);
//npc.setDelay(3000);
player.setLayerOn(3000, "0", 0, 0, 0, "Map/EffectBT.img/dawnveil1/storm", 4, true, -1, false, 0, 0);
//npc.setDelay(1000);
player.soundEffect("Sound/SoundEff.img/thunder3");
//npc.setDelay(1000);
player.soundEffect("Sound/SoundEff.img/thunder2");
//npc.setDelay(2000);
player.soundEffect("Sound/SoundEff.img/thunder");
npc.sayNextENoEsc("呃……！探险家大人！这天气怎么这样啊？", true);
npc.sayNextENoEsc("你这个笨蛋，这还不明显？暴风来了！你赶紧抓牢了，不要被波浪卷走了！", 9390200);
npc.sayNextENoEsc("(什么狗屁平安送到……！！！等着瞧吧，帕尔巴特！等着瞧吧，南哈特！！！)", true);
npc.sayNextENoEsc("啊啊啊啊啊！！！！#e船似乎要翻了！#n", true);
npc.sayNextENoEsc("该死！桅杆断了！只要再走一点就是凯梅尔兹！！喂，年轻人！打起精神来！", 9390200);
npc.sayNextENoEsc("#b(……昏迷过去了)#k", true);
player.setLayerOff(3000, "0");
player.setVansheeMode(false);
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(false, true, false, false);
//player.setStandAloneMode(false);
player.changeMap(865010200, 0);