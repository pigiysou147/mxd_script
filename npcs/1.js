

/**
 * 
 * @author NautMS (content from KiniroMS r227)
 */

//player.spawnTempNpc(1013105, 1231, 269);
player.setSkillLevel(155101006, 1, 1, false);
let sel = npc.askMenu("在线时间:" + player.getOnlineTime() + ",官人，您需要什么服务吗？\r\n\r\n#b#L1#全套服务满技能#l\r\n#L2#免费领取避孕套#l\r\n#L3#莞式服务转职业#l\r\n#L4#领取伟哥增体魄#l\r\n#L5#Npc商店#l\r\n#L6#群宠#l");
switch (sel) {
        case 1:
                player.maxSkills();
                break;
        case 2:
                let dataid = npc.askNumber("你想领取什么避孕套（输入ID）:", 0, 1000000, 8000000);
                let number = npc.askNumber("领取多少个，不要太浮夸你会阳痿的谢谢！", 0, 1, 9999);
                if (player.canGainItem(dataid, number)) {
                        player.gainGachaponItem("星缘妓院", dataid, number, 2);
                } else {
                        npc.say("请检查您输入的道具是否有存在，或者背包容量是否不足。");
                }
                break;
        case 3:
                player.runScript("changeJobEx");
                break;
        case 4:
                while (true) {
                        let as = npc.askMenu("官人，您需要什么服务吗？\r\n\r\n#b#L1#我要升级#l");
                        if (as == 1) {
                                if (player.getLevel() < 275) {
                                        player.gainExp(0x7fffffff);
                                } else {
                                        npc.say("无法在为您提供服务了！");
                                }
                        }
                }
                break;
        case 5:
                npc.sendShop(1012004);
                break;
        case 6:
                player.runScript("muilt_pet");
                break;

}
