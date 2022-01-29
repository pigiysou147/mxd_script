/*  This is mada by Yanran    
 *
 *  功能：[列娜海峡]钓鱼
 *
 *  @Author Yanran
 */
        if (player.hasItem(4030028, 5)) {
        npc.sayNext("航海士，钓到的鱼数量差不多够了。返回#b魔女芭芭拉#k那里吧。", 1510006);
} else if (!player.checkNearby(new java.awt.Point(1249, 360))) {
        npc.sayNext("航海士，看样子这地方是钓不到鱼了。去其他地方看看吧。应该有#b鱼群多得肉眼可见的地方#k。", 1510006);
} else {
        if (player.canGainItem(4030028, 1)) {
                npc.sayNextNoEsc("……", 1510006);
                npc.sayNextNoEsc("……（扑嗵扑嗵）", 1510007);
                npc.sayNextSNoEsc("…………嗯？有信号传来。", true);
                let chance = Math.floor(Math.random() * 10);
                if (chance == 0) {
                        npc.sayNextNoEsc("什么也没钓到，再试一次吧。", 1510007);
                        player.showSystemMessage("什么也没钓到。");
                } else if (chance == 1) {
                        npc.sayNextNoEsc("白费劲了……再试一次吧。", 1510007);
                        player.showSystemMessage("什么也没钓到。");
                } else if (chance == 2) {
                        npc.sayNextNoEsc("#i4030027##b#t4030027#\r\n\r\n#k航海士，这点儿鱼都不够塞牙缝的啊！你再试一次吧。", 1510007);
                        player.showSystemMessage("放生了列娜野生米诺鱼。");
                } else if (chance == 3) {
                        npc.sayNextNoEsc("#i4030027##b#t4030027#\r\n\r\n#k这鱼太小，我不忍心吃它……放了它，你重新钓吧。", 1510007);
                        player.showSystemMessage("放生了列娜野生米诺鱼。");
                } else if (chance == 4) {
                        npc.sayNextNoEsc("#i1522143:##b#t1522143:#\r\n\r\n#k这不是鱼吧！没什么用，把它丢到河里。", 1510007);
                        player.showSystemMessage("丢弃了神秘之影双弩枪。");
                } else if (chance == 5) {
                        npc.sayNextNoEsc("#i4031639:##b#t4031639:#\r\n\r\n#k这鱼虽然很大，但是肉质不好，你重新钓吧。", 1510007);
                        player.showSystemMessage("放生了鲤鱼。");
                } else if (chance == 6) {
                        npc.sayNextNoEsc("#i4031634:##b#t4031634:#\r\n\r\n#k这鱼营养价值不错，但是还小，放生了吧。", 1510007);
                        player.showSystemMessage("放生了青鱼(5cm)。");
                } else {
                        npc.sayNextNoEsc("#i4030028##b#t4030028#\r\n\r\n航海士，是条大鱼！", 1510007);
                        npc.sayNextNoEsc("太好了！有了这个，就不愁饿肚子啦。", 1510006);
                        player.gainItem(4030028, 1);
                        player.showScreenDelayedEffect("Yut/goal", 0);
                }
        } else {
                npc.sayNext("召唤师，你的其他栏不够了。", 1510007);
        }
}