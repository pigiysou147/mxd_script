/*  This is mada by Yanran    
 *
 *  [主题副本]列娜海峡，传送门
 *
 *  @Author Yanran
 */
var status = -1;
var P;
var Txt = Array(
        "给我点儿小费嘛，航海士！跟你开玩笑的，哈哈哈！",
        "好的，那我这就停船。停船后，我想喝碗热汤！",
        "好的！我最喜欢陆地了。",
        "好的，那我这就停船。停船后，我想喝碗热汤！"
        );

if (map.getId() == 141000000) {
        let selection = npc.askYesNo("航海士，现在要起航吗？", 1510006);
        if (selection == 1) {
                player.changeMap(141060000, 1);
        }
} else if (map.getId() == 141010000) {
        let selection = npc.askYesNo("航海士，现在要起航吗？", 1510006);
        if (selection == 1) {
                player.changeMap(141060000, 2);
        }
} else if (map.getId() == 141010400) {
        let selection = npc.askYesNo("航海士，现在要起航吗？", 1510006);
        if (selection == 1) {
                player.changeMap(141060000, 7);
        }
} else if (map.getId() == 141020000) {
        let selection = npc.askYesNo("航海士，现在要起航吗？", 1510006);
        if (selection == 1) {
                player.changeMap(141060000, 3);
        }
} else if (map.getId() == 141040000) {
        let selection = npc.askYesNo("航海士，现在要起航吗？？", 1510006);
        if (selection == 1) {
                player.changeMap(141060000, "pt_04");
        }
} else if (map.getId() == 141030000) {
        let selection = npc.askYesNo("航海士，现在要起航吗？？", 1510006);
        if (selection == 1) {
                player.changeMap(141060000, "pt_03");
        }
} else if (map.getId() == 141050000) {
        let selection = npc.askYesNo("航海士，现在要起航吗？？", 1510006);
        if (selection == 1) {
                player.changeMap(141060000, "pt_05");
        }
} else if (map.getId() == 141050300) {
        let selection = npc.askYesNo("航海士，离开这里吗？", 1510006);
        if (selection == 1) {
                player.changeMap(141050200, 0);
        }
} else if (map.getId() == 141050200 && (player.isQuestStarted(32190) || player.isQuestCompleted(32190))) {
        let selection = npc.askYesNo("向#b冰川运输船#k移动。\r\n\r\n#b（单人进入）入场等级：50以上#k", 1510007);
        if (selection == 1) {
                if (player.getLevel() >= 50) {
                        player.cancelSkillEffect(80001298);
                        npc.makeEvent("QuestEvent_02", false, [player, 141050300]);
                } else {
                        npc.say("等级不够，无法进入。", 1510007);
                }
        }
} else if (map.getId() == 141060000 && player.checkNearby(new java.awt.Point(-1294, 81))) {
        let selection = npc.askYesNo("航海士，你要停靠在#b冰川观测总部#k吗？", 1510006);
        if (selection == 1) {
                var txit = Math.floor(Math.random() * Txt.length);
                npc.sayNextNoEsc(Txt[txit], 1510006);
                player.changeMap(141000000, 1);
                player.cancelSkillEffect(80001298);
        }
} else if (map.getId() == 141060000 && player.checkNearby(new java.awt.Point(-898, -285)) && (player.isQuestStarted(32167) || player.isQuestCompleted(32167))) {
        let selection = npc.askYesNo("航海士，你要停靠在#b第1观测站#k吗？", 1510006);
        if (selection == 1) {
                var txit = Math.floor(Math.random() * Txt.length);
                npc.sayNextNoEsc(Txt[txit], 1510006);
                player.changeMap(141010000, 0);
                player.cancelSkillEffect(80001298);
        }
} else if (map.getId() == 141060000 && player.checkNearby(new java.awt.Point(-1323, -296)) && (player.isQuestStarted(32170) || player.isQuestCompleted(32170))) {
        let selection = npc.askYesNo("航海士，这个地方看起来有点古怪。要停船吗？\r\n\r\n#b（单人进入）入场等级：50以上）", 1510006);
        if (selection == 1) {
                if (player.getLevel() >= 50) {
                        npc.makeEvent("QuestEvent_02", false, [player, 141010400]);
                        player.cancelSkillEffect(80001298);
                } else {
                        npc.say("等级不够，无法进入。", 1510006);
                }
        }
} else if (map.getId() == 141060000 && player.checkNearby(new java.awt.Point(-854, 490)) && (player.isQuestStarted(32173) || player.isQuestCompleted(32173))) {
        let selection = npc.askYesNo("航海士，你要停靠在#b第2观测站#k吗？", 1510006);
        if (selection == 1) {
                var txit = Math.floor(Math.random() * Txt.length);
                npc.sayNextNoEsc(Txt[txit], 1510006);
                player.changeMap(141020000, 2);
                player.cancelSkillEffect(80001298);
        }
} else if (map.getId() == 141060000 && player.checkNearby(new java.awt.Point(758, 694)) && (player.isQuestStarted(32177) || player.isQuestCompleted(32177))) {
        let selection = npc.askYesNo("航海士，你要停靠在#b魔女芭芭拉的家#k吗？", 1510006);
        if (selection == 1) {
                var txit = Math.floor(Math.random() * Txt.length);
                npc.sayNextNoEsc(Txt[txit], 1510006);
                player.changeMap(141040000, 2);
                player.cancelSkillEffect(80001298);
        }
} else if (map.getId() == 141060000 && player.checkNearby(new java.awt.Point(88, -233)) && (player.isQuestStarted(32182) || player.isQuestCompleted(32182))) {
        let selection = npc.askYesNo("航海士，你要停靠在#b第3观测站#k吗？", 1510006);
        if (selection == 1) {
                var txit = Math.floor(Math.random() * Txt.length);
                npc.sayNextNoEsc(Txt[txit], 1510006);
                player.changeMap(141030000, 2);
                player.cancelSkillEffect(80001298);
        }
} else if (map.getId() == 141060000 && player.checkNearby(new java.awt.Point(722, -278)) && (player.isQuestStarted(32187) || player.isQuestCompleted(32187))) {
        let selection = npc.askYesNo("航海士，你要停靠在#b冰川破坏者的巢穴#k吗？", 1510006);
        if (selection == 1) {
                var txit = Math.floor(Math.random() * Txt.length);
                npc.sayNextNoEsc(Txt[txit], 1510006);
                player.changeMap(141050000, 3);
                player.cancelSkillEffect(80001298);
        }
} else {
        npc.sayNext("航海士，现在还不能进入这里耶。", 1510006);

}