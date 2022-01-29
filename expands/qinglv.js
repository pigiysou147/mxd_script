/* 绝版点卷商店 帽子*/

var status = -1;
var itemList = Array(
Array(1050318, 150000),
Array(1051389, 150000),
Array(1050296, 90000),
Array(1051362, 90000),
Array(1050209, 90000),
Array(1051255, 90000),
Array(1051406, 90000),
Array(1050337, 90000),
Array(1052842, 90000),
Array(1052843, 90000),
Array(1051392, 90000),
Array(1050322, 90000),
Array(1052347, 90000),
Array(1052346, 90000),
Array(1052727, 90000),
Array(1050310, 90000), 
Array(1051382, 90000), 
Array(1051405, 90000), 
Array(1050335, 90000), 
Array(1052728, 90000)
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