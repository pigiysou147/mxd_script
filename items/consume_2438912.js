/**
* 箱子选择道具 CC 835456564 
**/

//送的物品
let items = Array(
    1098008,
    1099014,
    1353305,
    1342103,
    1353804,
    1353705,
    1353506,
    1352828,
    1353406,
    1353206,
    1353107,
    1353008,
    1352980,
    1352977,
    1352969,
    1352959,
    1352947,
    1352937,
    1352918,
    1352908,
    1352830,
    1352818,
    1352709,
    1352608,
    1352508,
    1352408,
    1352298,
    1352288,
    1352278,
    1352268,
    1352258,
    1352248,
    1352238,
    1352228,
    1352218,
    1352208,
    1352111,
    1352011
);

let boxId = 2438912;//箱子ID


let ss = "#b消耗#v" + boxId + "#,可选择获得道具:\r\n#n"
for (let i = 0; i < items.length; i++) {
    ss += "#L" + i + "##r #v" + items[i] + "# #z" + items[i] + "# x 1 #l\r\n"
}

let selected = npc.askMenu(ss);

ss = "您是否确定获取#v" + items[selected] + "# x 1";
let YN = npc.askYesNo(ss);
if (YN == 1) {
    if (player.canGainItem(items[selected], 1)) {
        if (player.hasItem(boxId, 1)) {
            player.gainItem(items[selected], 1);
            player.loseItem(boxId, 1);
            npc.say("兑换成功");
        } else {
            npc.say("你没有#v" + boxId + "#");
        }
    } else {
        npc.say("请清理背包！");
    }
} else {
    npc.say("不想兑换吗？下次再见。");
}