// Created by Jackson
// Quest ID:17672
// [凯梅尔兹共和国] 洗脱嫌疑


npc.sayNextE("您好吗。首领。我有话对您说。", true);
npc.sayNextE("你这些家伙还有什么脸面到这地方来啊!", 9390206);
npc.sayNextE("你有什么想说的?");
npc.sayNextE("吉尔伯特首领,没有必要听他的。还不赶紧逮捕他们,干嘛呢。", 9390206);
if (npc.askYesNoE("就算该抓的时候就抓,先听听他们说什么有何不妥。你说说什么事情?")) {
        npc.sayNextE("西温一开始实际上并没死，他是在装死。", true);
        npc.sayNextE("他是装死？");
        npc.sayNextE("是的，这都是为了孤立凯梅尔兹共和国而计划的阴谋。", true);
        npc.sayNextE("孤立的阴谋？");
        npc.sayNextE("是的，对外说海本王国提出了和约，但是凯梅尔兹反对，还杀死了使节团。最终，凯梅尔兹共和国就会被冒险岛世界的各个地方责难和孤立。", true);
        npc.sayNextE("那是什么荒唐的阴谋论啊!", 9390206);
        npc.sayNextE("呃嗯...那叫西温的人现在在哪?");
        npc.sayNextE("虽已成功抓捕.. 但最终又被海本的暗杀者杀死了。", true);
        npc.sayNextE("那么你的意思是现在是真的死了吗?");
        npc.sayNextE("是的,是那样的。", true);
        npc.sayNextE("这种谎话王!毫无证据空口无凭来骗我", 9390206);
        npc.startQuest();
} else {
        npc.sayE("再无话可说的话我就只能把你抓起来..?");
}