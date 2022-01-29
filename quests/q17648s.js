// Created by Jackson
// Quest ID:17648
// [凯梅尔兹共和国] 重返桑凯梅尔兹


if (npc.askYesNo("好了,海盗王也剿灭了,现在可以回程了吧。得赶紧跟爸..首领大人报告这好消息才行。")) {
        npc.sayNextNoEsc("调转船头!目的地桑凯梅尔兹!!");
        npc.sayNextNoEsc("是,遵命!!", 9390217);
        npc.startQuest();
        
        player.changeMap(865000000, 5);
} else {
        npc.say("怎么了?你在这茫茫大海上还有事要办吗?");
}
