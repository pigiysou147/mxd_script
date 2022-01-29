 

var Icon = [
    ['王冠', '#fUI/GuildMark/Mark/Etc/00009023/11#'],
    ['王冠', '#fUI/GuildMark/Mark/Etc/00009023/10#'],
    ['方框', '#fUI/UIWindow.img/Item/activeExpChairIcon#'],
    ['确认', '#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#'],
    ['确认', '#fUI/CashShop.img/CSCoupon/BtOK/normal/0#']
]

var sel, judge = [false, true];

var aute = [null, null];

var crystal = [4033442, 4033443, 4033444, 4033445, 4033446, 4033447, 4033448, 4033449, 4033450];

var Equipgroup = [];

RuinStat();

function RuinStat() {
    txt = "#b┏　　　　　　　　" + Icon[0][1] + "  #r#e魔魂追加#b#n  " + Icon[0][1] + "　　　　　　　　┓#k\r\n\r\n";
    if (aute[0] == null)
        txt += "　　　　　　　　　　#L0#" + Icon[2][1] + "#l  ";
    else
        txt += "　　　　　　　　　　#L0##v" + aute[0] + "##l  ";
    txt += "\r\n\r\n";
    txt += "#b┗　　　　　　　　　　　　　　　　　　　　　　　　　┛#k\r\n\r\n";
    txt += Icon[1][1] + " #d魔魂追加材料主要来源BOSS,魔魂最高强化等级为+9\r\n";
    for (var i in crystal) {
        txt += "#i" + crystal[i] + "# ";
    }
    txt += "\r\n";
    txt += Icon[1][1] + " #d非毕业装备,品质提升时获得强化属性会大大折扣#k\r\n";
     if (aute[0] != null) {
        var Equip = player.getInventorySlot(1, aute[1]);

        if (Equip.getArc() == 9 || Equip.getArc() == 19) {
            player.dropAlertNotice("请提升魔魂品质才能继续附魔 ");
            return;
        }

        var group = Equipaute(parseInt(Equip.getArc()) + 1);
        txt += "#g\r\n#e┌\t\t    ─ 已经选择的装备信息 ─    \t\t┐#n\r\n\r\n";
        txt += "\t\t" + Series(1) + " #b- 魔魂提升 - " + "#r " + group[3] + "\r\n";
        txt += "\t\t" + Series(2) + " #b- 道具信息 - " + "#d #z" + aute[0] + "#\r\n";
        txt += "\t\t" + Series(3) + " #b- 成 功 率 - " + "#r#e " + group[0] + "%#k#n\r\n";
        txt += "\t\t" + Series(4) + " #b- 消耗物品 - " + "#r#z " + group[2] + "#\r\n";
        txt += "#g#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n\r\n\r\n#k";
        if (!player.hasItem(group[2], 1)) { judge[1] = false };
        if (!judge[1])
            txt += "\t\t\t\t#L2#" + Icon[3][1] + "#l\r\n";
        else
            txt += "\t\t\t\t#L1#" + Icon[4][1] + "#l\r\n";
    }
    txt += "\r\n　#b┏　　　　　　 " + Icon[0][1] + "  #r#e详细说明#b#n  " + Icon[0][1] + "　　　　　　　┓#k\r\n";
    txt += "\t" + Series(1) + " #b每次强化需要消耗2E金币成功时魔魂等级+1,失败时魔魂等级-1\r\n";
    txt += "\t" + Series(2) + " #r成功为装备全属性增加\r\n";
    txt += "\t" + Series(3) + " #g失败则装备全属性减少\r\n";
    txt += "\t" + Series(4) + " #r魔魂等级达到+9后可以进行装备品质提升\r\n";
    txt += "\t" + Series(5) + " #r装备品质提升后魔魂等级重置为+0\r\n";

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
                Equipgroup[i] = Equip['dataId'];
            }
            for (var key in Equipgroup) {
                txt += "#L" + key + "#" + Icon[1][1] + "#d 位置 [ #r" + RuinString(" ", 3, key.toString()) + "#d ]　#z" + Equipgroup[key] + "# #i" + Equipgroup[key] + "##l\r\n";
                judge[0] = true;
            }
            if (!judge[0]) {
                player.dropAlertNotice("抱歉..你没有符合魔魂的物品");
                return;
            }
            pon = npc.askMenu(txt);
            aute[0] = Equipgroup[pon];
            aute[1] = pon;
            RuinStat();
            break;

        case 1:
            if(player.hasMesos(200000000)){
                player.loseMesos(200000000);
                var Equip = player.getInventorySlot(1, aute[1]);
                var group = Equipaute(parseInt(Equip.getArc()) + 1);
                var chance = Math.floor(Math.random() * 100);
                player.loseItem(group[2], 1);
                switch (true) {
                    case chance <= group[0]:
                        Equip['str'] += group[1];
                        Equip['dex'] += group[1];
                        Equip['int'] += group[1];
                        Equip['luk'] += group[1];
                        Equip['pad'] += group[1];
                        Equip['mad'] += group[1];
                        Equip['arc'] += 1;
                        Equip['title'] = group[3];
                        player.dropAlertNotice("恭喜..魔魂提升成功");
                        break;

                    default:
                        var group = Equipaute(parseInt(Equip.getArc()) - 1);
                        Equip['str'] -= group[1];
                        Equip['dex'] -= group[1];
                        Equip['int'] -= group[1];
                        Equip['luk'] -= group[1];
                        Equip['pad'] -= group[1];
                        Equip['mad'] -= group[1];
                        Equip['arc'] -= 1;
                        Equip['title'] = group[3];
                        player.dropAlertNotice("可惜..魔魂提升失败 下降了 ");
                        break;
                }
                player.updateItem(aute[1], Equip);

            }else{
                npc.say("你需要2E万金币");
            }
            
            break;

        case 2:
            player.dropAlertNotice("抱歉..你的魔晶石数量没有达标")
            break;
    }
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

function Equipaute(title) {
    switch (title) {
        case 1:
            return [100, 1, 4033442, 'lv.1'];
        case 2:
            return [100, 1, 4033443, 'lv.2'];
        case 3:
            return [80, 1, 4033444, 'lv.3'];
        case 4:
            return [70, 1, 4033445, 'lv.4'];
        case 5:
            return [60, 1, 4033446, 'lv.5'];
        case 6:
            return [60, 1, 4033447, 'lv.6'];
        case 7:
            return [60, 1, 4033448, 'lv.7'];
        case 8:
            return [60, 1, 4033449, 'lv.8'];
        case 9:
            return [60, 1, 4033450, 'lv.9'];
        case 11:
            return [100, 1, 4033442, '普通lv.1'];
        case 12:
            return [100, 1, 4033443, '普通lv.2'];
        case 13:
            return [60, 1, 4033444, '普通lv.3'];
        case 14:
            return [50, 1, 4033445, '普通lv.4'];
        case 15:
            return [50, 1, 4033446, '普通lv.5'];
        case 16:
            return [50, 1, 4033447, '普通lv.6'];
        case 17:
            return [50, 1, 4033448, '普通lv.7'];
        case 18:
            return [50, 1, 4033449, '普通lv.8'];
        case 19:
            return [50, 1, 4033450, '普通lv.9'];
        case 21:
            return [100, 1, 4033442, '良品lv.1'];
        case 22:
            return [100, 1, 4033443, '良品lv.2'];
        case 23:
            return [60, 1, 4033444, '良品lv.3'];
        case 24:
            return [50, 1, 4033445, '良品lv.4'];
        case 25:
            return [50, 1, 4033446, '良品lv.5'];
        case 26:
            return [40, 1, 4033447, '良品lv.6'];
        case 27:
            return [40, 1, 4033448, '良品lv.7'];
        case 28:
            return [40, 1, 4033449, '良品lv.8'];
        case 29:
            return [40, 1, 4033450, '良品lv.9'];
	    case 31:
            return [100, 1, 4033442, '上品lv.1'];
        case 32:
            return [100, 1, 4033443, '上品lv.2'];
        case 33:
            return [40, 1, 4033444, '上品lv.3'];
        case 34:
            return [40, 1, 4033445, '上品lv.4'];
        case 35:
            return [40, 1, 4033446, '上品lv.5'];
        case 36:
            return [30, 1, 4033447, '上品lv.6'];
        case 37:
            return [30, 1, 4033448, '上品lv.7'];
        case 38:
            return [30, 1, 4033449, '上品lv.8'];
        case 39:
            return [30, 1, 4033450, '上品lv.9'];
		 case 41:
            return [100, 1, 4033442, '精品lv.1'];
        case 42:
            return [100, 1, 4033443, '精品lv.2'];
        case 43:
            return [30, 1, 4033444, '精品lv.3'];
        case 44:
            return [20, 1, 4033445, '精品lv.4'];
        case 45:
            return [18, 1, 4033446, '精品lv.5'];
        case 46:
            return [15, 1, 4033447, '精品lv.6'];
        case 47:
            return [10, 1, 4033448, '精品lv.7'];
        case 48:
            return [5, 1, 4033449, '精品lv.8'];
        case 49:
            return [5, 1, 4033450, '精品lv.9'];


    }
}
function Series(int) {
    return "#fUI/Basic/LevelNo/" + int + "#";
}
