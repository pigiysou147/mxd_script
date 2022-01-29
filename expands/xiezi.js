/* 绝版点卷商店 帽子*/

var status = -1;
var itemList = Array(

Array(1072920, 50000),
Array(1072924, 50000),
Array(1072926, 50000),
Array(1072931, 50000),
Array(1072941, 50000),
Array(1072951, 50000),
Array(1072866, 50000),
Array(1072867, 50000),
Array(1072841, 50000),
Array(1072842, 50000),
Array(1072791, 50000),
Array(1072803, 50000),
Array(1072756, 50000),
Array(1072658, 50000),
Array(1072417, 50000),
Array(1072324, 50000),
Array(1072278, 50000),
Array(1071079, 50000),
Array(1071081, 50000),
Array(1071085, 50000),
Array(1071089, 50000),
Array(1071090, 50000),
Array(1071096, 50000),
Array(1070063, 50000),
Array(1070065, 50000),
Array(1072820, 10000)
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