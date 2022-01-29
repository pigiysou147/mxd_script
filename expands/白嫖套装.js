var text = "玩幸运不充钱，轻松玩转超高伤害，收集材料#v4310060#打造毕业级白嫖装备！！\r\n";

text += "#b#L2# #v4310060#进化币的来源 - 其他来源正在添加#l \r\n\r\n";

text += "#L1#兑换白嫖装备 #v1082556##v1072870##v1113073##v1122265##v1032221##v1012478##v1162025##v1152170##l  \r\n";

text += "#L101# #r#v2049702#强化装备第一步：（漩涡手套,粉色圣杯除外）装备开启潜能变为SS开启后才能进行第二步 #l\r\n";
text += "#L102# #r#v5530360#强化装备第二步：（中级贝勒德戒指,中级贝勒德刻印吊坠,粉色圣杯除外）一键赋予潜能6% 6% 6% 6% 6% 6% #l\r\n";
text += "#L103# #r#v2615050#强化装备第三步：（中级贝勒德耳环,凝聚之力结晶石,粉色圣杯除外）强化装备每次增加攻击 法攻+4四维+2 #l\r\n";
//text += "#L104# #r#v2049389#强化装备第四步：（皇家黑色金属护肩,粉色圣杯除外）装备上星（装备会上锁，最好先上火花） #l\r\n";
text += "#L105# #v5570000# 强化装备辅助功能-进行金锤子，只有进行金锤子才能继续上星（中级贝勒德戒指,粉色圣杯除外） #l\r\n";
 
var sel = npc.askMenuA(text);
 
switch (sel) {
    case 1:
        player.runScript("兑换白嫖装备");
        break;
    case 2:
        //player.runScript("进化币查询");
        npc.sendShop(506);
        break;
    case 101:
        player.runScript("白嫖装备/第一步");
        break;
    case 102:
        player.runScript("白嫖装备/第二步");
        break;
    case 103:
        player.runScript("白嫖装备/第三步");
        break;
    case 104:
        player.runScript("白嫖装备/第四步");
        break;
    case 105:
        player.runScript("白嫖装备/金锤子");
        break;
}
