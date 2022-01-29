player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, true, false, false);
//player.setStandAloneMode(true);//设置单人模式
player.setVansheeMode(true);
player.setLayerBlind(true, 255, 0);
////npc.setDelay(50);//延迟

npc.setCameraZoom(0, 2500, 0, 0, 0);

npc.sayNextNoEsc("你能听到吗…听到了吗？", 1540940);

npc.sayNextSNoEsc("这个声音是…？");

//player.setLayerBlind(false, 0, 6000);

npc.setCameraZoom(8000, 1000, 8000, 0, 0);

map.soundEffect("Sound/SoundEff.img/blackHeaven/toaird");
////npc.setDelay(5400);

npc.sayNextNoEsc("啊，真是太好了。你能听到我们的声音啊。", 1540940);
let loop = true;
do {
        let selection = npc.askMenuNoEsc("啊…我们剩下的时间已经不多了。你还有什么问题要问我们吗？\r\n\r\n#L0# #b黑魔法师为什么要把你们带走？#l\r\n#L1# 所谓的艾尔达是？#l\r\n#L2# 为了得到你们的力量，我该怎么做呢？#l\r\n#L3# 我没有其他问题了。#l", 1540940);
        if (selection == 0) {
                npc.sayNextNoEsc("黑魔法师打算利用我们，创造#r新世界#k。不知道从何时开始，我们艾尔达就被未知的力量牵引，像江水一样流入更高的次元…如果继续这样下去，我们会逐渐消失，最终#b这个世界将会消亡#k。", 1540940);
        } else if (selection == 1) {
                npc.sayNextNoEsc("从远古时期开始，我们就是构成这个世界的最纯粹的能量…所有生命和物质都从艾尔达中诞生，并返回到艾尔达。如果没有我们，这个世界会逐渐变得面目全非。", 1540940);
        } else if (selection == 2) {
                npc.sayNextNoEsc("你已经足够强大，做好了接受我们力量的准备。现在你只要获得#b女神#k的一点帮助就行了。", 1540940);
        } else if (selection == 3) {
                npc.sayNextNoEsc("我们现在又要分散，流入某个未知的地方了... 那是我们的宿命。", 1540940);
                loop = false;
        }
} while (loop)

npc.sayNextNoEsc("请记住，这个世界的命运就掌握在你的手中...", 1540940);

player.setLayerBlind(true, 255, 500);
////npc.setDelay(500);

npc.sayNextSNoEsc("刚刚我看到的究竟是什么呢？再次和#b旁观者#k对话吧。");

////npc.setDelay(500);

player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.setVansheeMode(false);
player.changeMap(270010111);
player.startQuest(1460, 2140001, "1");
player.updateQuestRecordEx(1460, "1460", "1");