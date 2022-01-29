// Created by Jackson
// ID:[865090001]
// MapName:贝里

if (!"1".equals(player.getQuestRecordEx(17613, "enter"))) {
        player.setInGameCurNodeEventEnd(true);
        //player.setTemporarySkillSet(0);
        player.setInGameDirectionMode(true, true, false, false);
        //player.setStandAloneMode(true);
        npc.sayNextNoEsc("什么啊!你们!", 9390241);
        npc.sayNextNoEsc("鱼全部是我们的,喵~~~嗡!", 9390242);
        npc.sayNextNoEsc("厚颜无耻的小偷!我不会给你一条鱼的!居然想偷我 #e#b莱文·达尼尔拉#k#n的鱼?想都别想!", 9390241);
        npc.sayNextNoEsc("哈哈哈哈!就凭你自己,就想对付我们吗~~喵?还有,我还知道你受伤了~喵!抓住那家伙~~喵", 9390242);
        player.setNpcSpecialAction(9390241, "q17613", 0, false);
        npc.sayNextNoEsc("居然这么卑鄙!!", 9390241);
        npc.sayNextSNoEsc("#b(啊!危险!我得帮助他!)#k\r\n你们这些小偷猫!我来对付你们吧!", true);
        // Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00
        //player.setTemporarySkillSet(0);
        player.setInGameDirectionMode(false, true, false, false);
        player.updateQuestRecordEx(17613, "enter=1"); // Quest Name:[凯梅尔兹共和国] 统帅的儿子
}
player.scriptProgressMessage("击退所有的猫咪!");
for (let i = 0; i < 12; i++) {
        map.spawnMob(9390847, -30 + i * 70, 120);
}