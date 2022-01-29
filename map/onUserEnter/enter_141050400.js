/*  This is mada by Yanran   
 *
 *  功能：[列娜海峡]海岸的聚集
 *
 *  @Author Yanran
 */
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
player.setVansheeMode(true); //隐身
for (let i = 0; i < 4; i++) {
        let mobid = 1514007;
        player.spawnTempNpc(mobid, -1077 - i * 75, 125);
        player.setNpcSpecialAction(mobid, "summon", 1, false);
}
for (let i = 0; i < 4; i++) {
        let mobid = 1514008;
        player.spawnTempNpc(mobid, -777 - i * 75, 125);
        player.setNpcSpecialAction(mobid, "summon", 1, false);
}
player.spawnTempNpc(1514000, -323, 125);
for (let i = 0; i < 3; i++) {
        let mobid = 1514001;
        player.spawnTempNpc(mobid, 125 - i * 75, 125);
        player.setNpcSpecialAction(mobid, "summon", 1, false);
}
////npc.setDelay(1500);
npc.setCameraMove(false, 300, -300, 125);
////npc.setDelay(3500);
npc.sayNextNoEsc("提督大人，捣乱者越来越靠近了。", 1514001);
npc.sayNextNoEsc("……", 1514000);
npc.sayNextNoEsc("提督大人，你得快点做决定了。", 1514001);
npc.sayNextNoEsc("各位，你们有没有见过生命即将消逝那一瞬间的情景？", 1514000);
npc.sayNextNoEsc("……呃？", 1514001);
npc.sayNextNoEsc("我是见过无数遍了。我曾经见过许多战友在我的臂弯里死去。", 1514000);
npc.sayNextNoEsc("在濒死的瞬间，人类和动物是一样的。在断气之前，他们的身体簌簌发抖，望着映入眼中的最后景象，仿佛要抓住最后一丝生命的希望。", 1514000);
npc.sayNextNoEsc("可是最终，那恳切的眼神会逐渐黯去，曾经温暖的身体也会变得冰冷。讽刺的是，在临终的那一瞬间，却带有某种崇高的美感，即使在那之后，只剩下沉寂。", 1514000);
npc.sayNextNoEsc("……看来是时候离开这里了。", 1514000);
npc.sayNextNoEsc("我们已经向敌人泄漏了很多信息了。不能再让敌人打探到任何重要信息。航海士，我给你10分钟。你去把证物全部销毁，然后离开这里。听明白了吗？", 1514000);
npc.sayNextNoEsc("是，提督大人！", 1514001);
player.destroyTempNpc(1514007);
player.destroyTempNpc(1514007);
player.destroyTempNpc(1514007);
player.destroyTempNpc(1514007);
player.destroyTempNpc(1514008);
////npc.setDelay(200);
player.destroyTempNpc(1514008);
////npc.setDelay(200);
player.destroyTempNpc(1514008);
////npc.setDelay(200);
player.destroyTempNpc(1514008);
////npc.setDelay(700);
npc.sayNextNoEsc("我们已经获取了足够的资源。你去给那帮家伙留个深刻印象吧。", 1514000);
npc.sayNextNoEsc("就交给我去办吧。那帮家伙会迎来#r盖奥勒克#k的。#r盖奥勒克#k能毁坏的东西可不只有冰川。", 1514001);
player.destroyTempNpc(1514001);
////npc.setDelay(200);
player.destroyTempNpc(1514001);
////npc.setDelay(200);
player.destroyTempNpc(1514001);
////npc.setDelay(200);
npc.sayNextNoEsc("一帮蠢货。他们再怎么顽抗也是没用的。他们的末日就要到了。", 1514000);
npc.setCameraMove(true, 300, 300, -200);
////npc.setDelay(3500);
player.changeMap(141050000, 0);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.setVansheeMode(false); //隐身