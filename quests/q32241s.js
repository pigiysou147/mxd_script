// Created by Jackson
// Quest ID:32241
// 巨大古树之岔路


npc.sayNextS("嗯……那么，现在该做什么呢？", true);
let selection = npc.askMenuSNoEsc("#b#L0#吃饭。#l\r\n#L1#去练级。#l\r\n#L2#睡觉。#l\r\n#L3#学习。#l\r\n#L4#找别的事情做。#l", true);
switch (selection) {
        case 0:
                npc.sayS("好吧，我们吃饭吧。先吃了饭再考虑别的。", true);
                break;
        case 1:
                npc.sayS("好吧，先练级吧，现在这个等级还很弱！", true);
                break;
        case 2:
                npc.sayS("好吧，先睡一觉吧。只有睡得好，才会长个儿，脑子也会变聪明。", true);
                break;
        case 3:
                npc.sayS("哈哈哈！我也！相当无聊。", true);
                break;
        case 4:
                npc.sayNextS("好吧，找点别的事情做做！\r\n不过，去哪儿找事情做呢？我总感觉有事情可做，可真正想做的时候又不知道该做什么了。", true);
                if (npc.askAcceptS("先去#b六岔路口#k看看吧？因为那里是金银岛的中心地。先去那里看看，然后再决定要去哪里吧。\r\n\r\n#r(接受后，立即移动到地图。)#k", true)) {
                        npc.startQuest();
                        player.changeMap(910400200, 0);
                } else {
                        npc.sayNextS("嗯，真的想要走出的时候，腿脚却疼痛起来，真是麻烦。要不就这样放弃？", true);
                }
                break;
}

