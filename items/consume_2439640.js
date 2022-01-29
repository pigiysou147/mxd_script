/**
* 福利箱子 CC 835456564 
**/

//送的装备
let newerEquips = Array(
    Array(1122296, "白白冒险岛", 100, 100, 0, 0, 0)
);

//送的物品
let newerItems = Array(
    Array(2614074, 1),//破功     
    Array(2432206, 20),//X自选     
    Array(2435824, 20),//V自选     
    Array(2435443, 5),//黑卷 
    Array(2049389, 1),//20 X    
    Array(2048749, 30)//火花     
);

let Dq = 500000;//点券数量
let Dy = 500000;//抵用数量
let YE = 0;//余额数量
let Meso = 0;//金币数量
let boxId = 2439640;//箱子ID


let ss = "\r\n#e礼物清单:\r\n"
if (newerEquips.length > 0) {
    ss += "#e#b属性装备（全属性100）:\r\n#n"
    for (let i = 0; i < newerEquips.length; i++) {
        ss += "#v" + newerEquips[i][0] + "# "
    }
}
if (newerItems.length > 0) {
    ss += "\r\n#e#b其他道具:\r\n#n"
    for (let i = 0; i < newerItems.length; i++) {
        ss += "#r#v" + newerItems[i][0] + "# x " + newerItems[i][1] + " "
    }
}

let YN = npc.askYesNo("是否开启礼包？" + ss);
if (YN == 1) {
    let needSlot = newerItems.length + newerEquips.length;
    if (player.getFreeSlots(1) < needSlot || player.getFreeSlots(2) < needSlot || player.getFreeSlots(3) < needSlot || player.getFreeSlots(4) < needSlot || player.getFreeSlots(5) < needSlot) {
        npc.say("请清理背包哦！需要 " + needSlot + " 个空位");
    } else {
        player.loseItem(boxId, 1);
        for (let i = 0; i < newerItems.length; i++) {
            player.gainItem(newerItems[i][0], newerItems[i][1]);
        }
        for (let i = 0; i < newerEquips.length; i++) {
            let newItem = player.makeItemWithId(newerEquips[i][0]);
            newItem.setStr(newerEquips[i][2]); //装备力量
            newItem.setDex(newerEquips[i][2]); //装备敏捷
            newItem.setInt(newerEquips[i][2]); //装备智力
            newItem.setLuk(newerEquips[i][2]); //装备运气
            newItem.setMad(newerEquips[i][3]);
            newItem.setPad(newerEquips[i][3]);
            newItem.setStatR(newerEquips[i][5]);// 所有属性
            newItem.setTitle(newerEquips[i][1]);// 所有属性
            newItem.setBossDamageR(newerEquips[i][4]);// BOSS伤 
            newItem.setIgnorePDR(newerEquips[i][6]);// 无视防御
            newItem.setAttribute(0);
            player.gainItem(newItem);
        }
        player.gainMesos(Meso);
        player.modifyCashShopCurrency(1, Dq);
        player.modifyCashShopCurrency(2, Dy);
        npc.say("恭喜你收到管理员赠送的礼物！");
    }
} else {
    npc.say("记着打开你的礼物盒哦！");
}


