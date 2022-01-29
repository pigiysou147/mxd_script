/* 绝版点卷商店 帽子*/

var status = -1;
var itemList = Array(
Array(1082581, 5000),
Array(1082555, 5000),
Array(1082549, 1500),
Array(1082694, 1500),
Array(1082642, 1500),
Array(1082716, 1500),
Array(1082169, 1500),
Array(1082592, 1500),
Array(1082692, 1500),
Array(1082689, 1500),
Array(1082685, 1500),
Array(1082672, 1500),
Array(1082618, 1500),
Array(1082620, 1500),
Array(1082631, 1500),
Array(1082634, 1500),
Array(1082657, 1500),
Array(1082565, 1500),
Array(1082588, 1500),
Array(1082520, 1500),
Array(1082517, 1500),
Array(1082533, 1500),
Array(1082548, 1500),
Array(1082495, 1500),
Array(1082502, 1500),
Array(1082505, 1500),
Array(1082431, 1500),
Array(1082224, 1500),
Array(1082225, 1500),
Array(1080008, 1500),
Array(1081014, 1500),
Array(1081015, 1500),
Array(1082548, 1500)
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