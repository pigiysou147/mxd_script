/* 绝版点卷商店 帽子*/

var status = -1;
var itemList = Array(
Array(1062211, 15000),
Array(1051441, 15000),
Array(1050342, 15000),
Array(1062203, 15000),
Array(1062210, 15000),
Array(1061113, 15000),
Array(1062204, 15000),
Array(1052782, 15000),
Array(1062093, 15000), //嫩绿休闲短裤
Array(1061148, 15000), //巨星粉色短裙
Array(1061207, 15000),
Array(1062156, 15000),
Array(1062157, 15000),
Array(1060181, 15000),
Array(1062174, 15000),
Array(1062126, 15000),
Array(1062112, 15000),
Array(1062083, 15000),
Array(1061199, 15000),
Array(1060001, 15000),
Array(1062228, 15000),
Array(1062227, 15000),
Array(1062226, 15000),
Array(1062236, 15000),
Array(1062235, 15000),
Array(1062212, 15000),
Array(1062213, 15000),
Array(1062214, 15000),
Array(1062216, 15000),
Array(1062217, 15000),
Array(1062218, 15000),
Array(1062219, 15000),
Array(1062220, 15000),
Array(1062221, 15000),
Array(1062222, 15000),
Array(1062224, 15000),
Array(1062223, 15000),
Array(1062225, 15000),
Array(1062229, 15000),
Array(1062231, 15000),
Array(1062233, 15000),
Array(1062171, 15000),
Array(1062172, 15000),
Array(1062173, 15000),
Array(1062174, 15000),
Array(1062175, 15000),
Array(1062209, 15000),
Array(1062179, 15000),
Array(1062183, 15000),
Array(1062189, 15000),
Array(1062207, 15000),
Array(1062143, 15000),
Array(1062093, 15000),
Array(1062114, 15000),
Array(1061211, 15000),
Array(1061212, 15000),
Array(1060188, 15000),
Array(1061213, 15000),
Array(1060189, 15000),
Array(1060180, 15000),
Array(1061203, 15000),
Array(1061204, 15000),
Array(1061205, 15000),
Array(1061148, 15000),
Array(1061170, 15000),
Array(1060181, 15000),
Array(1060182, 15000),
Array(1060179, 15000),
Array(1060187, 15000),
Array(1060188, 15000),
Array(1060189, 15000),
Array(1061001, 15000),
Array(1061007, 15000),
Array(1062072, 15000),
Array(1062173, 15000)
);
var selectedItem = -1;
var selectedCost = -1;

var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
for(var i = 0; i < itemList.length; i++) {
	selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k点卷#l";
}
let selection = npc.askMenuS(selStr);

var item = itemList[selection];
selectedItem = item[0];
selectedCost = item[1];
let sel = npc.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷？");

if(sel == 1) {

	if(player.getCashShopCurrency(1) >= selectedCost) {
		var item = player.gainGachaponItem("点卷商店",selectedItem, 1,  3);
		if(item != -1) {
			player.modifyCashShopCurrency(1, -selectedCost);
			npc.say("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
		} else {
			npc.say("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
		}
	} else {
		npc.say("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
	}

}