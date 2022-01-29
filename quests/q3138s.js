/*  This is mada by Yanran    
 *  
 *  功能：主题副本 - 寂静的城堡深处
 *  
 *  @Author Yanran
 */

if (map.getId() == 180000001) {
        npc.say("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
} else {
        let selection = npc.askYesNoS("是谁给我写的信呢？没有发件人……要看一看吗？", false);
        if (selection == 1) {
                npc.sayNext("致阅读这封信的冒险家：\r\n\r\n我是十字猎人的工作员，名叫#b#p2161012##k。我就长话短说了。我们十字猎人的工作员们在冒险岛世界各地走动，执行消灭邪恶怪物的任务。");
                npc.sayNext("但是我现在所在的地方——#r狮子王之城#k，正散发出之前我从没见到的强烈黑暗气息。我感觉到了比冰峰雪域的寒风更摄人心肺的恐怖。");
                let selection = npc.askYesNo("为了完成我的任务，需要像你这样优秀的冒险家的帮助。愿意帮助我的话，请继续往下看。");
                if (selection == 1) {
                        npc.sayNext("谢谢。如果你读到了这一段，说明你已经决定帮我了。由于时间紧迫，所以我在信上设置了一个小魔法。读完信之后，你就会移动到我所在的地方。那么，一会儿见。");
                        npc.say("如果没有像你这么优秀的人帮我的话，我就不可能对这里进行调查。你能再考虑一下吗？");
                        npc.startQuest();
                        if (map.getId() != 211060000) {
                                player.changeMap(211060000);
                        }
                } else {
                        npc.say("如果没有像你这么优秀的人帮我的话，我就不可能对这里进行调查。你能再考虑一下吗？");
                }
        } else {
                npc.say("如果没有像你这么优秀的人帮我的话，我就不可能对这里进行调查。你能再考虑一下吗？");
        }
}