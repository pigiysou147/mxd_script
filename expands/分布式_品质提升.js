 

var Icon = [
    ['王冠', '#fUI/GuildMark/Mark/Etc/00009023/11#'],
    ['王冠', '#fUI/GuildMark/Mark/Etc/00009023/10#'],
    ['方框', '#fUI/UIWindow.img/Item/activeExpChairIcon#'],
    ['确认', '#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#'],
    ['确认', '#fUI/CashShop.img/CSCoupon/BtOK/normal/0#']
]


var sel, judge = [false, true];

var aute = [null, null];

var crystal = ["lv.9", "普通lv.9", "良品lv.9", "上品lv.9", "精品lv.9"];

var Equipgroup = [];

var grouptitle = [1004680, 1004681]//毕业装填写到这里面

RuinStat();

function RuinStat() {
    txt = "#b┏　　　　　　　　" + Icon[0][1] + "  #r#e品质提升#b#n  " + Icon[0][1] + "　　　　　　　　┓#k\r\n\r\n";
    if (aute[0] == null)
        txt += "　　　　　　　　　　#L0#" + Icon[2][1] + "#l  ";
    else
        txt += "　　　　　　　　　　#L0##v" + aute[0] + "##l  ";
    txt += "\r\n\r\n";
    txt += "#b┗　　　　　　　　　　　　　　　　　　　　　　　　　┛#k\r\n\r\n";

    if (aute[0] != null) {
        var Equip = player.getInventorySlot(1, aute[1]);
        var group = Equipaute(crystal.indexOf(Equip['title']));
        txt += "#g\r\n#e┌\t\t    ─ 已经选择的装备信息 ─    \t\t┐#n\r\n\r\n";
        txt += "\t\t" + Series(1) + " #b- 品质提升 - " + "#r " + group[4] + "\r\n";
        txt += "\t\t" + Series(2) + " #b- 道具信息 - " + "#d #z" + aute[0] + "#\r\n";
        txt += "\t\t" + Series(3) + " #b- 成 功 率 - " + "#r#e " + group[0] + "%#k#n\r\n";
        txt += "\t\t" + Series(4) + " #b- 消耗物品 - " + "#r#z " + group[2] + "#　#gx #d" + group[3] + "\r\n";
        txt += "#g#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n\r\n\r\n#k";
        if (!player.hasItem(group[2], group[3])) { judge[1] = false };
        if (!judge[1])
            txt += "\t\t\t\t#L2#" + Icon[3][1] + "#l\r\n";
        else
            txt += "\t\t\t\t#L1#" + Icon[4][1] + "#l\r\n";
    }
    txt += "\r\n　#b┏　　　　　　 " + Icon[0][1] + "  #r#e详细说明#b#n  " + Icon[0][1] + "　　　　　　　┓#k\r\n";
    txt += "\t" + Series(1) + " #b等级分为 : 普通 良品 上品 精品 极品\r\n";
    txt += "\t" + Series(2) + " #r品级提升时增加装备属性\r\n";
    txt += "\t" + Series(3) + " #g品级提升时魔魂等级重置\r\n";
    txt += "\t" + Series(4) + " #r毕业级别装备品质升级获得100%属性提升\r\n";
    txt += "\t" + Series(5) + " #r非毕业装备品质升级获得50%属性提升\r\n";

    txt += "　#b┗　　　　　　　　　　　　　　　　　　　　　　 ┛#k\r\n\r\n";
    sel = npc.askMenu(txt);
    switch (sel) {
        case 0:
            Equipgroup = [];
            txt = "#b┏　　　　　　　　" + Icon[0][1] + "  #r#e魔魂追加#b#n  " + Icon[0][1] + "　　　　　　　　┓#k\r\n\r\n";
            txt += "\t\t\t#r请从下列选择魔魂附属的物品#k\r\n\r\n";
            for (var i = 1; i <= 128; i++) {
                var Equip = player.getInventorySlot(1, i);
                if (Equip == null) continue;
                if (Equip['sn'] > -1) continue;
                if (crystal.indexOf(Equip['title']) <= -1) continue;
                Equipgroup[i] = Equip['dataId'];
            }
            for (var key in Equipgroup) {
                txt += "#L" + key + "#" + Icon[1][1] + "#d 位置 [ #r" + RuinString(" ", 3, key.toString()) + "#d ]　#z" + Equipgroup[key] + "# #i" + Equipgroup[key] + "##l\r\n";
                judge[0] = true;
            }
            if (!judge[0]) {
                player.dropAlertNotice("抱歉..你没有符合是魔魂的物品");
                return;
            }
            pon = npc.askMenu(txt);
            aute[0] = Equipgroup[pon];
            aute[1] = pon;
            RuinStat();
            break;

        case 1:
            var Equip = player.getInventorySlot(1, aute[1]);
            var group = Equipaute(crystal.indexOf(String(Equip['title'])));
            var chance = Math.floor(Math.random() * 100);
            player.loseItem(group[2], group[3]);
            switch (true) {
                case chance <= group[0]:
                    if (Equipgroup.indexOf(Equip['dataId']) > -1)
                        var Property = 2;
                    else
                        var Property = 1;

                    Equip['str'] += group[1] * Property;
                    Equip['dex'] += group[1] * Property;
                    Equip['int'] += group[1] * Property;
                    Equip['luk'] += group[1] * Property;
                    Equip['pad'] += group[1] * Property;
                    Equip['mad'] += group[1] * Property;
                    Equip['arc'] += 1;
                    Equip['title'] = group[4];
                    player.updateItem(aute[1], Equip);
                    player.dropAlertNotice("恭喜..品质提升成功");
                    break;

                default:
                    player.dropAlertNotice("抱歉..品质提升失败 材料已丢失");
                    break;
            }
            break;

        case 2:
            player.dropAlertNotice("抱歉..你的魔晶石数量没有达标");
            break;
    }
}


function Equipaute(title) {
    switch (title) {
        case 0:
            return [100, 10, 4000000, 1, '普通lv.0']
        case 1:
            return [100, 10, 4000000, 1, '良品lv.0']
        case 2:
            return [100, 10, 4000000, 1, '上品lv.0']
        case 3:
            return [100, 10, 4000000, 1, '精品lv.0']
        case 4:
            return [100, 10, 4000000, 1, '极品lv.0']
    }
}

function Series(int) {
    return "#fUI/Basic/LevelNo/" + int + "#";
}

function RuinString(A, B, C) {
    T = "";
    F = "";
    if (C.length > B) {
        T = C;
    } else {
        for (let i = 0; i < B - String(C).replace(/[\u0391-\uFFE5]/g, "aa").length; i++) {
            F = F + A;
        }
    }
    T = C + F;
    return T;
}
