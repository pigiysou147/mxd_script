


let itemList = Array(
        //自行添加兑换的道具    Array(道具ID, 货币数量), 0 表示金币  可以自定义他的 但是需要自行处理
        Array(0, 100),
        Array(2614011, 1000)
        );



let text = "在我这裡你可以用货币来兑换许多东西！\r\n#e#r持有货币：#i4034849#";
text += getCoin();
text += "\r\n存储的货币：";
text += getSaveCoin();
text += " #n\r\n";

text += "\r\n#e#L999##b我要离开这裡#k#n#l\r\n";
let sel = npc.askMenu(text);

if (sel == 999) {
        let [mapId, spawnPoint] = npc.resetRememberedMap("RETURN_MAP");
        if (mapId == 999999999) {
						
                mapId = 224000000;
                spawnPoint = 0;
        }
        player.changeMap(mapId, spawnPoint);
} else {
        let itemId = itemList[sel][0];
        let ret = npc.askYesNo("是否要使用#r" + itemList[sel][1] + "#k个#z4034849#货币兑换" + (itemId == 0 ? "#v4033570##e1000000金币#n" : "一个#r#v" + itemList[sel][0] + "##z" + itemList[sel][0] + "#") + "#k!");
        if (ret === 1) {
                if (getSaveCoin() >= itemList[sel][1]) {
                        if (itemId == 0) {
                                modifyCoin(itemList[sel][1]);
                                player.gainMesos(1000000);
                                npc.say("兑换了#v4033570##e1000000金币#n!");
                        } else {
                                if (player.gainItem(itemId, 1)) {
                                        modifyCoin(itemList[sel][1]);
                                        npc.say("兑换了#v" + itemList[sel][0] + "##z" + itemList[sel][0] + "#!");
                                } else {
                                        npc.say("背包空间不足，请清理后重试!");
                                }
                        }
                } else {
                        npc.say("你好像没有足够的货币呀！兑换" + (itemId == 0 ? "#v4033570##e1000000金币#n" : "一个#r#v" + itemList[sel][0] + "##z" + itemList[sel][0] + "#") + "#k!需要#r" + itemList[sel][1] + "#n个#z4034849##k货币！");
                }
        }
}





function modifyCoin(number) {
        var rCount = number;
        if (getCoin() + getSaveCoin() >= number) {
                if (getSaveCoin() >= number) {
                        rCount -= number;
                        player.updateQuestRecordEx(15324, "scount", String(Math.max(0, getSaveCoin() - number)));
                } else if (number > getSaveCoin()) {
                        rCount -= getSaveCoin();
                        player.updateQuestRecordEx(15324, "scount", "0");
                }
                if (rCount > 0) {
                        player.updateQuestRecordEx(15324, "count", String(Math.max(0, getCoin() - rCount)));
                }
                return true;
        }
        return false;
}

function getCoin() {
        var ret = 0;
        var data = player.getQuestRecordEx(15324, "count");
        if (data != null) {
                ret = Number(data);
        }
        return ret;
}

function getSaveCoin() {
        var ret = 0;
        var data = player.getQuestRecordEx(15324, "scount");
        if (data != null) {
                ret = Number(data);
        }
        return ret;
}



