// Created by Jackson
// [村长贝里]  |  [9390201]
// MapName:贝里


let selection = npc.askMenu("什么事?\r\n#b\r\n#L0# 说关于捕鱼的事情。#l\r\n#L1# 说关于凯梅尔兹共和国的事情。#l");
if (selection == 0) {
        if (!"1".equals(player.getQuestEntryData(17910))) {
                player.setQuestData(17910, "1"); //Quest Name:[任务]跟村长贝里谈起抓鱼的事
        }
        npc.sayNext("虽然这里只是偏僻的小渔村,但我们村子里的人捕到的鱼都是最好的。你面前的都是纯收益呢。");
} else if (selection == 1) {
        npc.sayNext("这里就是凯梅尔兹共和国。从这里沿着东南海岸下去,就能看到首都 #e#b桑凯梅尔兹#k#n了。");
        npc.say("桑凯梅尔兹是凯梅尔兹全境首屈一指的城市。从一个小小的渔村成长为现在这么一个大城市，这都是多亏了吉尔伯特·达尼尔拉首领。多亏了他，像我这样的渔夫也能高价出售鱼肉，我真是感激不尽啊。");
}