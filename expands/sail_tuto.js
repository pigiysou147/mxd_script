if ("1".equals(player.getQuestRecordEx(17009, "step")) && !player.isQuestCompleted(17005)) {
        npc.sayNextNoEsc("你好, #h0# 。我先介绍下我自己吧。我是提皮斯,我以后会帮助你们进行航海。", 9390225);
        npc.sayNextNoEsc("啊哈哈,一想要和勇士你一起航海了,我的心情就好激动啊!", 9390225);
        npc.sayNextNoEsc("我好像在哪见过你.. 额.. 肯定是我搞错了吧。 ", 9390225);
        let event = npc.getEvent();
        if (event != null) {
                event.startTimer("tuto_done", 10000);
        }
} else if ("2".equals(player.getQuestRecordEx(17009, "step")) && !player.isQuestCompleted(17006)) {
        npc.sayNextNoEsc("很高兴能再次见到你。", 9390225);
        npc.sayNextNoEsc("好久没这么安静的航海了。哈哈哈,看来幸运女神时常陪伴着你啊", 9390225);
        let event = npc.getEvent();
        if (event != null) {
                event.startTimer("tuto_done", 10000);
        }
} else if ("3".equals(player.getQuestRecordEx(17009, "step")) && !player.isQuestCompleted(17007)) {
        if (!"done".equals(player.getQuestRecordEx(17007))) {
                map.spawnMob(9390823, 200, 235);
                npc.sayNextNoEsc("船长!那边远处出现了怪物。", 9390225);
                npc.sayNextNoEsc("如果出现怪物的话,请按舰船技能击退怪物!", 9390225);
        } else {
                player.updateQuestRecordEx(17932, "Near=3"); // Quest Name:Unknown
                npc.sayNextIllusNoEsc("舰船的等级越高就越强。通过多次航海升级舰船之后,就能使用更好的舰船技能了。 ", 9390220, 9390220, 1, true);
                npc.sayNextIllusNoEsc("或者,可以向交易所的商人购买强化舰船的道具,进行装备。 ", 9390220, 9390220, 1, true);
                npc.sayNextIllusNoEsc("为首次进行贸易的人准备的日程就到此为止了。", 9390220, 9390220, 1, true);
                let event = npc.getEvent();
                if (event != null) {
                        event.startTimer("tuto_done", 5000);
                }
        }
}
