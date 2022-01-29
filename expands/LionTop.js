/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 第一座塔楼
 *
 *  @Author Yanran
 */
let map1 = 211060200;
let map2 = 211060400;
let map3 = 211060600;
let map4 = 211061000;
if (map.getId() == map1 && player.hasItem(4032858, 1)) {
        if (player.hasItem(4032831, 1)) {
                player.showSystemMessage("请把杰恩的弟弟交给杰恩吧。");
        } else {
                npc.makeEvent("QuestEvent_01", false, [player, 921140100]);
        }
} else if (map.getId() == map1 && player.isQuestCompleted(3164)) {
        let sel = npc.askYesNo("现在前往解除第一座塔楼的封印吗？", 2161003);
        if (sel == 1) {
                npc.makeEvent("QuestEvent_01", false, [player, 211060201]);
        }
} else if (map.getId() == map2) {
        npc.makeEvent("QuestEvent_01", false, [player, 211060401]);
} else if (map.getId() == map3) {
        npc.makeEvent("QuestEvent_01", false, [player, 211060601]);
} else if (map.getId() == map4) {
        if (player.getQuestStatus(3142) != 0) {
                player.openNpc(2161010, "LionAni")
        } else {
                npc.sayNext("这里是邪恶的看门人#r看守阿尼#k所在的#b阿尼的牢房#k。现在还不是你到这里来的时候。 ");
        }
}