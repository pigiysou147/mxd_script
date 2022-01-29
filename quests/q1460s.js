npc.sayNext("经过漫长的旅程，你已经到达力量的巅峰…你在追求力量的同时，有没有迷失前进的方向呢？");
if (npc.askYesNo("说不定你不仅能活用你的力量，还能趁此机会变得更强。\r\n如果你有意向，请来时间神殿找我吧。\r\n\r\n#b(如果接受的话，将移动到时间神殿进行#e5次转职#n。)#k")) {
        var text = "好可惜，你还没有获得女神的许可，不能探索时间神殿的深处。请具备资格后再来找我吧？\r\n\r\n#b(在5次转职之前，必须完成下列#r时间神殿#k任务)#r";
        var ok = true;
        if (!player.isQuestCompleted(3500)) {
                text += "\r\n过去之路（探索时间神殿）";
                ok = false;
        }
        if (!player.isQuestCompleted(3505)) {
                text += "\r\n通过追忆之路（探索时间神殿）";
                ok = false;
        }
        if (!player.isQuestCompleted(3512)) {
                text += "\r\n通过后悔之路（探索时间神殿）";
                ok = false;
        }
        if (!player.isQuestCompleted(3519)) {
                text += "\r\n通过忘却之路（探索时间神殿）";
                ok = false;
        }
        if (!player.isQuestCompleted(3556)) {
                text += "\r\n迷路的神官（神官剧情故事）";
                ok = false;
        }
        ok = true;//调试模式开关
        if (!ok) {
                npc.say(text);
        } else {

                if (map.getId() != 270010111) {
                        npc.startQuest();
                        player.changeMap(270010111);

                } else {
                        npc.startQuest();
                }

        }

} else {
        npc.say("考虑好后再来找我吧。");

}
