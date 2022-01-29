 
var Icon = [
    ["三角", "#fUI/StatusBar.img/base/iconMemo#"],
    ["奖杯", "#fUI/UIAchievement.img/achievement/pages/main/achievementForm/basic/difficultyIcon/unique#"],
    ["王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"],
    ["大锤", "#fEffect/CharacterEff.img/MeisterEff/Equipment/10#"],
    ["翅膀", "#fEffect/ItemEff.img/1102982/effect/proneStab/1#"],
    ["奔跑", "#fEffect/ItemEff.img/1103020/effect/move/1#"],
    ["翅膀", "#fEffect/ItemEff.img/1102982/effect/default/4#"],
    ["方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"],
    ["方框", "#fUI/UIWindow.img/Item/New/inventory/0#"],
    ['确认', "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"],
    ['确认', '#fUI/CashShop.img/CSCoupon/BtOK/normal/0#'],
    ["黄椒", "#fUI/piggyBarMinigame/crunch/5#"],
    ["王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"]
]
 
var sel;

var title = ['#b魔魂等级追加', '#b装备品质提升（普+10,良品+20,上品+30,精品+40）', '#b魔魂材料合成', '#b品质材料合成'];

var crystal = [4033442, 4033443, 4033444, 4033445, 4033446, 4033447, 4033448, 4033449, 4033450];
RuinStat();

function RuinStat() {
    txt = Icon[2][1] + " #d属性是完美装备的标志,任何不起眼的东西,只要到了我手中,就可以媲美艺术品的效果!!\r\n\r\n";
    for (var i in title) {
        txt += "#L" + i + "#" + Series(parseInt(i) + 1) + " " + title[i] + "#l\r\n";
    }
    sel = npc.askMenu(txt);

    switch (sel) {
        case 0:
            player.runScript("分布式_魔魂追加");
            break;
        case 1:
            player.runScript("分布式_品质提升");
            break;
        //case 2:
         npc.say("毕业装备强化才能获得%100属性 ，毕业装备为：\r\n\r\n创世系列全部 武器：#v1292022##v1292022##v1292022##v1292022#  \r\n\r\n神秘系列全部 武器：#v1432218##v1432218##v1432218##v1432218#  \r\n\r\n神秘系列全部 防具：#v1004808##v1102940##v1082695##v1053063##v1073158# \r\n\r\n以及毕业饰品： \r\n\r\n #v1004075#  #v1012632#	#v1022278#  #v1132308#  #v1190302#   #v1182285#  #v1122430#  #v1122296#  #v1113211#  #v1113302#   #v1672069#");     
            break;
       case 3:
            player.runScript("11111");
            break;

        case 2:
            txt = " " + Icon[2][1] + " #b属性是完美装备的标志,任何不起眼的东西,只要到了我手中,就可以媲美艺术品的效果!\r\n";
            txt += "#b持有 #i4009357# ×10 可以随机获得一下强化石头:\r\n";
            for (var i in crystal) {
                txt += "#i" + crystal[i] + "# ";
            }
            txt += "\r\n";
            txt += "#r每种颜色的强化石对应强化等级!9种石头9个强化级别!\r\n";
            txt += "#L0#" + Series(1) + " #b随机获取任意强化石#l\r\n";
            //txt += "#L1#" + Series(2) + " #b消耗 5 余额制定获取强化石#l\r\n";
            var key = npc.askMenu(txt);
            switch (key) {
                case 0:
                    if (!player.hasItem(4009357, 10)) {
                        player.dropAlertNotice("抱歉..你石头数量不足");
                        return;
                    }
                    var index = crystal[Math.floor((Math.random() * crystal.length))];
                    player.gainItem(index, 1);
                    player.loseItem(4009357, 10);
                    player.dropAlertNotice("恭喜 你随机获取到了一个石头");
                    break;

                case 1:
                    if (getHyPay(1) < 5) {
                        player.dropAlertNotice("抱歉..你没有 5 余额");
                        return;
                    }else{
                        txt = "\t\t\t请在下列选择你想获取的强化石\r\n\r\n";
                        for (var i in crystal) {
                            txt += "#L" + i + "##i" + crystal[i] + "##l\r\n";
                        }
                        var PonT = npc.askMenu(txt);
    
                        gainHyPay(-5);
                        player.gainItem(crystal[PonT], 1);
                        player.dropAlertNotice("恭喜");
                    }
                    
                    break;
            }
            break;
    }
}


function Series(int) {
    return "#fUI/Basic/LevelNo/" + int + "#";
}

function getHyPay(x) {
    Money = 0;
    rs = player.customSqlResult("SELECT * FROM `hypay` WHERE `accname` = '" + AcName() + "' LIMIT 0, 1;");
    if (rs.size() > 0) {
        switch (x) {
            case 1:
                Money = rs.get(0).get('pay');
                break;
            case 2:
                Money = rs.get(0).get('payUsed');
                break;
            case 3:
                Money = rs.get(0).get('payReward');
                break;
            case 4:
                Money = rs.get(0).get('leiji');
                break;
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `pay`, `name`) VALUES ('" + AcName() + "', '0', '" + player.getName() + "')");
    }
    return Money;
}

function AcName() {
    rs = player.customSqlResult("SELECT `name` FROM `accounts` WHERE `id` = '" + player.getAccountId() + "' LIMIT 0, 1;");
    return rs.get(0).get('name');
}

function gainHyPay(x) {
    return player.customSqlUpdate("UPDATE `hypay` SET `pay`=pay+'" + x + "' WHERE (`accname`='" + AcName() + "') LIMIT 1;");
}