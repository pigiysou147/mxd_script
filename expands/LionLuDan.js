/* 		
 功能：狮子王城主线任务，主线NPC
 */
let talk = 0,
        map1 = 211060200,
        map2 = 211060400,
        map3 = 211060600,
        map4 = 211060700,
        map5 = 211061100;


if (map.getId() == map1) {
        if (player.isQuestCompleted(3164) && player.isQuestCompleted(3165) && "1".equals(player.getQuestRecordEx(3139, "clear"))) {
                if (player.isQuestStarted(3139) && "1".equals(player.getQuestRecordEx(3139, "clear"))) {
                        npc.sayNext("你击退了红色鳄鱼兵，解开了第一个封印。你好像比我想象的更强。但是后面还需要解开两个这样的封印，才能到达我所在的地方。现在回头还来得及，怎么样？", 2161010, false);
                        npc.sayNextS("听你这么一说，我反而更有斗志了。你等着，我马上过去。");
                        npc.say("……那我就祝你能够获胜。希望你能打败那帮邪恶的家伙。", 2161010, false);
                        player.loseItem(4032832);
                        player.completeQuest(3139, 2161007);
                        player.changeMap(211060300, 2);
                } else {
                        player.changeMap(211060300, 2);
                }
        } else if (!player.isQuestStarted(3139)) {
                npc.sayNext("哦，好久没有人能进到城里来了……冒险家，这里非常危险，你还是赶快离开吧。", 2161010, false);
                npc.sayNextS("……谁……？！是鬼魂吗？？？");
                npc.sayNext("抱歉吓到你了。我是守护城堡的骑士#e#b鲁丹#k#n。很久前就死了。但是却变成了幽灵，在城堡里游荡。", 2161010, false);
                npc.sayNextS("为什么变成了幽灵还留在城堡里？有什么必须守护的东西吗？");
                npc.sayNext("详细的情况我们见面之后再说。首先，你必须穿过这扇门，消灭守护第一座塔楼的#r红色鳄鱼兵#k。解开封印。我曾今在周围见过一个优秀的锁匠，请你让他帮你制作第一座塔楼的钥匙。", 2161010, false);
                player.startQuest(3139, 2161010);
        } else {
                if (player.isQuestStarted(3139)) {
                        if ("1".equals(player.getQuestRecordEx(3139, "clear"))) {
                                npc.say("需要#r#z4032832##k才能通过。", 2161010, false);
                        } else {
                                npc.say("想要穿过这扇门，必须把第一座塔的#r红色鳄鱼兵#k消灭掉。", 2161010, false);
                        }
                }
        }
} else if (map.getId() == map2) {
        if (player.isQuestCompleted(3166) && "1".equals(player.getQuestRecordEx(3140, "clear"))) {
                if (player.isQuestStarted(3140) && "1".equals(player.getQuestRecordEx(3140, "clear"))) {
                        npc.sayNext("看守波尔也消灭掉啦。虽然要想解开最后的封印，还需要克服更危险的难关，但是我相信你一定可以做到。", 2161010, false);
                        npc.sayNextS("是的，我马上就去找你，请你等着我。");
                        npc.say("那我就在第三个封印那边等着你。请一定要注意安全……", 2161010, false);
                        player.loseItem(4032833);
                        player.completeQuest(3140, 2161007);
                        player.changeMap(211060500, 1);
                } else {
                        player.changeMap(211060500, 1);
                }
        } else if (player.isQuestStarted(3140) && !"1".equals(player.getQuestRecordEx(3140, "clear"))) {
                npc.say("想要穿过这扇门，必须消灭第二座塔里的#r看守波尔#k。", 2161010, false);
        } else {
                if (player.isQuestCompleted(3165) && player.isQuestCompleted(3139)) {
                        npc.sayNext("这么快就到达第二个关卡啦。我就长话短说了，必须消灭第二座塔楼里的#r看守波尔#k，第二个封印才会解开#k。", 2161010, false);
                        npc.sayNextS("看守波尔……名字的意思好象是野猪吧？");
                        npc.say("没错。就像名字一样，他是个像野猪一样凶残、可怕的怪物。先去找到之前的那个锁匠，他就会为你制作第二座塔楼的钥匙。请你快去找他吧。", 2161010, false);
                        player.startQuest(3140, 2161010);
                } else {
                        npc.say("未知的错误。", 2161010, false);
                }
        }
} else if (map.getId() == map3) {
        if (player.isQuestCompleted(3167) && "1".equals(player.getQuestRecordEx(3141, "clear"))) {
                if (player.isQuestStarted(3141) && "1".equals(player.getQuestRecordEx(3141, "clear"))) {
                        npc.sayNext("看守波尔也消灭掉啦。虽然要想解开最后的封印，还需要克服更危险的难关，但是我相信你一定可以做到。", 2161010, false);
                        npc.sayNextS("是的，我马上就去找你，请你等着我。");
                        npc.say("那我就在第三个封印那边等着你。请一定要注意安全……", 2161010, false);
                        player.loseItem(4032834);
                        player.completeQuest(3141, 2161007);
                        player.changeMap(211060700, 1);
                } else {
                        player.changeMap(211060700, 1);
                }
        } else if (player.isQuestStarted(3167) && !"1".equals(player.getQuestRecordEx(3141, "clear"))) {
                npc.sayNextS("鲁丹，要想获得第三座塔的钥匙，必须消灭#r贝尔武夫#k。但是却找不到它，该怎么办呢？");
                npc.say("嗯……贝尔武夫是在穿过门之后下一张地图#b#m211060700##k中的怪物。没办法，我会暂时削弱封印的力量。你趁这个机会去搜集钥匙的材料。", 2161010, false);
                player.changeMap(211060700, 1);
        } else if (player.isQuestStarted(3141) && !"1".equals(player.getQuestRecordEx(3141, "clear"))) {
                npc.say("想要穿过这扇门，必须消灭掉第三座塔楼中的#r看守莱诺#k。", 2161010, false);
        } else {
                if (player.isQuestCompleted(3166) && player.isQuestCompleted(3140)) {
                        npc.sayNext("终于到了最后一关。守护第三座塔楼的#r看守莱诺#k是比在城内徘徊的其他怪物更凶的家伙。#k", 2161010, false);
                        npc.sayNextS("把它们全部消灭掉，就能解开封印吗？");
                        npc.sayNext("是的，虽然你之前一直做得很好，但这次决不能放松警惕。", 2161010, false);
                        npc.sayNextS("别担心。我去锁匠杰恩那里拿到钥匙，解开第三个封印。");
                        player.startQuest(3141, 2161010);
                } else {
                        npc.say("未知的错误。", 2161010, false);
                }
        }
} else if (map.getId() == map4) {
        if (player.isQuestStarted(3167)) {
                npc.say("我所提供的力量也仅仅只能把你送到这里而已。", 2161010, false);
        } else {
                npc.say("未经允许不得入内。", 2161010, false)
        }
}	