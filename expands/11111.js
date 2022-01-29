//十字戒指 jili

var items = [4033442, 4033443, 4033444, 4033445, 4033446, 4033447, 4033448, 4033449, 4033450, 4001013]

var equip = 4001886; //装备ID

var text = "#d                  品质材料合成系统\r\n#b1.您好欢迎使用品质材料合成系统#v" + equip + "#\r\n2.本系统可以强化装备提高品质\r\n3.收集下列材料 兑换品质材料\r\n\r\n        #v4033442# #v4033443# #v4033444# #v4033445# #v4033446#\r\n         #v4033447# #v4033448# #v4033449# #v4033450# #v4001013#\r\n\r\n";
text += "#L1#领取品质材料#l\r\n"


var sel = npc.askMenu(text)

if (sel == 1) {
    text = "是否使用:\r\n"
    for (var i = 0; i < items.length; i++) {
        text += "#v" + items[i] + "#"
    }
    text += "\r\n兑换一个#r#v" + equip + "#"
    if (npc.askYesNo(text) == 1) {
        var Pd = true;

        for (var i = 0; i < items.length; i++) {
            if (!player.hasItem(items[i], 1)) Pd = false;
        }

        if (Pd) {
            if (player.canGainItem(equip, 1)) {
                for (var i = 0; i < items.length; i++) {
                    player.loseItem(items[i], 1)
                }
                let newItem = player.makeItemWithId(equip);

                player.gainItem(newItem);

                npc.say("兑换成功")
            } else {
                npc.say("背包不足，或你已经有了")
            }
        } else {
            npc.say("材料不足")
        }
    }
}