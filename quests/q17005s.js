// Created by Jackson
// Quest ID:17005
// [凯梅尔兹交易所]首次航行
npc.sayNextIllusNoEsc("好了,那我现在告诉你一些有关正式贸易的情况吧。开始贸易之后,可以先设定目的地。 ", 9390220, 9390220, 1, true);
if (!"1".equals(player.getQuestRecordEx(17009, "step"))) {
        player.updateQuestRecordEx(17009, "step", "1");
}
player.openUI(554);
npc.sayNextIllusNoEsc("有蓝色标记的地区是可以进行贸易的地区。 ", 9390220, 9390220, 1, true);
npc.sayNextIllusNoEsc("虽然现在还只能去 [多尔切]地区,但是随着贸易次数的增多,能去的地区也会变多的。", 9390220, 9390220, 1, true);
npc.sayIllusNoEsc("只要将鼠标放在贸易区上方, 就能看到贸易区信息了。先试着移动到[多尔切]地区吧？", 9390220, 9390220, 1, true);
