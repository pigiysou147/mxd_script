/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 第一座塔楼
 *
 *  @Author Yanran
 */

let map1 = 921140100, map2 = 211060401, map3 = 211060601;
if (map.getId() == map1) {
        if (player.hasItem(4032831, 1)) {
                npc.say("#b(救出了#t4032831#,该走了！)");
        } else if (!player.isQuestStarted(3164)) {
                npc.say("#b(操你妈的，你怎么进来的？给我滚出去！)");
        } else if (player.hasItem(4032831, 1)) {
                npc.sayNext("请把杰恩的弟弟交给杰恩吧。");
        } else if (player.isQuestActive(3164) && (!player.hasItem(4032831, 1))) {
                npc.sayNext("抽泣……我，我想回家。");
                npc.sayNext("嗯？你，你是谁？是来帮我的吗？请你一定让我离开这里。");
                let mobkill = map.getEventMobCount();
                //npc.sayNext(""+ mobkill +"。");
                if (mobkill <= 0) {
                        player.loseItem(4032858, 1);
                        if (!player.hasItem(4032831, 1)) {
                                player.gainItem(4032831, 1);
                        }
                        player.changeMap(211060200, 0);
                        //player.scriptProgressMessage("你已经解开了第一个封印。");
                        //player.startQuest(3165, 2161007);			
                } else {
                        npc.say("消灭鳄鱼兵。");
                }
        } else {
                npc.say("?");
        }
}