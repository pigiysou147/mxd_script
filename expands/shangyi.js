/* 绝版点卷商店 帽子*/

var status = -1;
var itemList = Array(
Array(1041195, 15000),
Array(1061007, 15000),
Array(1051491, 15000),
Array(1051440, 15000),
Array(1050371, 15000),
Array(1052014, 15000),
Array(1042120, 15000),
Array(1051070, 15000),
Array(1053035, 15000),
Array(1053085, 15000),
Array(1053084, 15000),
Array(1053083, 15000),
Array(1042121, 15000),
Array(1042036, 15000),
Array(1042037, 15000),
Array(1042212, 15000),
Array(1042213, 15000),
Array(1042116, 15000),
Array(1052852, 90000),
Array(1042346, 15000),
Array(1052846, 15000),
Array(5800000, 15000),
Array(5800001, 15000),
Array(5800002, 15000),
Array(1052626, 15000),
Array(1051414, 15000),
Array(1051385, 15000),
Array(1050314, 15000),
Array(1042330, 15000),
Array(1052605, 15000),
Array(1042314, 15000),
Array(1042320, 15000),
Array(1041114, 15000),
Array(1042278, 15000),
Array(1052709, 15000),
Array(1052657, 15000),
Array(1051366, 15000),
Array(1052727, 15000),
Array(1050310, 15000),
Array(1042159, 15000),
Array(1042285, 15000),
Array(1042275, 15000),
Array(1052656, 15000),
Array(1051366, 15000),
Array(1052550, 15000),
Array(1042240, 15000),
Array(1042315, 15000),
Array(1050319, 15000),
Array(1042316, 15000),
Array(1051390, 15000),
Array(1051392, 15000),
Array(1050299, 15000),
Array(1052782, 15000),
Array(1052781, 15000),
Array(1042214, 15000),
Array(1042311, 15000),
Array(1042321, 15000),
Array(1042312, 15000),
Array(1042313, 15000),
Array(1050152, 15000), //水兵服(男)
Array(1051180, 15000), //水兵服(女)
Array(1042104, 15000), //小绿叶T恤
Array(1042105, 15000), //小红叶T恤
Array(1052224, 15000), //草莓baby装
Array(1042142, 15000), //彩虹条背心
Array(1041142, 15000), //巨星蛋糕吊带
Array(1052200, 15000), //罗丽粉色娃娃套服
Array(1052061, 15000), //巴西足球服No.9
Array(1052059, 15000), //法国足球服No.14
Array(1051131, 15000), //圣诞女孩子服
Array(1051152, 15000), //玫瑰红晚宴裙
Array(1050210, 15000),
Array(1051280, 15000),
Array(1052426, 15000),
Array(1051278, 15000),
Array(1050229, 15000),
Array(1050227, 15000),
Array(1051235, 15000),
Array(1052201, 15000),
Array(1050232, 15000),
Array(1051282, 15000),
Array(1052425, 15000),
Array(1052412, 15000),
Array(1052455, 15000),
Array(1052503, 15000),
Array(1051261, 15000),
Array(1050230, 15000),
Array(1050231, 15000),
Array(1051149, 15000),
Array(1051192, 15000),
Array(1051255, 15000),
Array(1051256, 15000),
Array(1042238, 15000),
Array(1040192, 15000),
Array(1041194, 15000),
Array(1042265, 15000),
Array(1042241, 15000),
Array(1052593, 15000),
Array(1052536, 15000),
Array(1050312, 15000),
Array(1042236, 15000),
Array(1042240, 15000),
Array(1052661, 15000),
Array(1042277, 15000),
Array(1042204, 15000),
Array(1042198, 15000),
Array(1041130, 15000),
Array(1040126, 15000),
Array(1040154, 15000),
Array(1041156, 15000),
Array(1042162, 15000),
Array(1052912, 15000),
Array(1051134, 15000),
Array(1052077, 15000),
Array(1051407, 15000),
Array(1053110, 15000),
Array(1053109, 15000),
Array(1053028, 15000),
Array(1042109, 15000),
Array(1052284, 15000),
Array(1042145, 15000),
Array(1042158, 15000),
Array(1042085, 15000),
Array(1042152, 15000),
Array(1042093, 15000),
Array(1050366, 15000),
Array(1042181, 15000),
Array(1040001, 15000),
Array(1052773, 15000),
Array(1052774, 15000),
Array(1042361, 15000),
Array(1042358, 15000),
Array(1042349, 15000),
Array(1042350, 15000),
Array(1042352, 15000),
Array(1042357, 15000),
Array(1049002, 15000),
Array(1049004, 15000),
Array(1049003, 15000),
Array(1042311, 15000),
Array(1042314, 15000),
Array(1042315, 15000),
Array(1042316, 15000),
Array(1042319, 15000),
Array(1042320, 15000),
Array(1042321, 15000),
Array(1042329, 15000),
Array(1042330, 15000),
Array(1042332, 15000),
Array(1042334, 15000),
Array(1042333, 15000),
Array(1042335, 15000),
Array(1042336, 15000),
Array(1042338, 15000),
Array(1042337, 15000),
Array(1042339, 15000),
Array(1042340, 15000),
Array(1042343, 15000),
Array(1042344, 15000),
Array(1042345, 15000),
Array(1042347, 15000),
Array(1042260, 15000),
Array(1042262, 15000),
Array(1042264, 15000),
Array(1042265, 15000),
Array(1042267, 15000),
Array(1042268, 15000),
Array(1042269, 15000),
Array(1042238, 15000),
Array(1042271, 15000),
Array(1042287, 15000),
Array(1042290, 15000),
Array(1042292, 15000),
Array(1042236, 15000),
Array(1042238, 15000),
Array(1042241, 15000),
Array(1042242, 15000),
Array(1042250, 15000),
Array(1042198, 15000),
Array(1042204, 15000),
Array(1042208, 15000),
Array(1042209, 15000),
Array(1042210, 15000),
Array(1042213, 15000),
Array(1042215, 15000),
Array(1042218, 15000),
Array(1042219, 15000),
Array(1042154, 15000),
Array(1042157, 15000),
Array(1042165, 15000),
Array(1042170, 15000),
Array(1042172, 15000),
Array(1042176, 15000),
Array(1042183, 15000),
Array(1042120, 15000),
Array(1042142, 15000),
Array(1042149, 15000),
Array(1042083, 15000),
Array(1042086, 15000),
Array(1042088, 15000),
Array(1042090, 15000),
Array(1042091, 15000),
Array(1042092, 15000),
Array(1042094, 15000),
Array(1042095, 15000),
Array(1042097, 15000),
Array(1042098, 15000),
Array(1042104, 15000),
Array(1042105, 15000),
Array(1042108, 15000),
Array(1042110, 15000),
Array(1042052, 15000),
Array(1042053, 15000),
Array(1042054, 15000),
Array(1042055, 15000),
Array(1042057, 15000),
Array(1042058, 15000),
Array(1042059, 15000),
Array(1042060, 15000),
Array(1042063, 15000),
Array(1042067, 15000),
Array(1042242, 15000),
Array(1042080, 15000),
Array(1042082, 15000),
Array(1042023, 15000),
Array(1042024, 15000),
Array(1042029, 15000),
Array(1042030, 15000),
Array(1042031, 15000),
Array(1042037, 15000),
Array(1042036, 15000),
Array(1041194, 15000),
Array(1041195, 15000),
Array(1041196, 15000),
Array(1041197, 15000),
Array(1041198, 15000),
Array(1041132, 15000),
Array(1041142, 15000),
Array(1040193, 15000),
Array(1040194, 15000),
Array(1040195, 15000),
Array(1040195, 15000),
Array(1040192, 15000),
Array(1050119, 15000),
Array(1042263, 15000)
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