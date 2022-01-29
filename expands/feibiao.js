/* 金币商店 - 洗能力
Array(2702001,1,2000,""),
Array(2702001,10,20000,""),
 */

var itemList = Array(
	
	
	Array(2070006, 1, 150000000, ""),
	Array(2070007, 1, 300000000, ""),
	Array(2070016, 1, 500000000, ""),
	Array(2070026, 1, 300000000, ""),
	Array(2070020, 1, 200000000, ""),
	Array(5021011, 1, 500000000, ""),//金锤子
	Array(5021002, 1, 500000000, ""),//金锤子
	Array(5021023, 1, 500000000, ""),//金锤子
	Array(5021025, 1, 500000000, ""),//金锤子
	Array(5021004, 1, 500000000, ""),//金锤子
	Array(5021013, 1, 500000000, ""),//金锤子
	Array(5021005, 1, 500000000, ""),//金锤子
	Array(5021003, 1, 500000000, ""),//金锤子
	Array(5021008, 1, 500000000, ""),//金锤子
	Array(5021009, 1, 500000000, ""),//金锤子
	Array(5021026, 1, 500000000, ""),//金锤子
	Array(5021024, 1, 500000000, ""),//金锤子
	Array(5021017, 1, 500000000, ""),//金锤子
	Array(5021010, 1, 500000000, ""),//金锤子
	Array(5021014, 1, 500000000, ""),//金锤子
	Array(5021012, 1, 500000000, "")//金锤子
);
var selectedItem = -1;
var selequantity = -1;
var selectedCost = -1;
var epp1 = "#fEffect/ItemEff.img/2022109/1#"; //彩光
var epp2 = "#fEffect/ItemEff.img/2022109/2#"; //彩光
var selStr = "       #v3801199#\r\n请选择您希望购买的道具：";
for(var i = 0; i < itemList.length; i++) {
	selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x " + itemList[i][1] + "  #r" + itemList[i][2] + "#k金币 #r " + itemList[i][3] + "#l";
}
let selection = npc.askMenuS(selStr);

var item = itemList[selection];

	selectedItem = item[0];
	selequantity = item[1];
	selectedCost = item[2];

	let sel = npc.askNumberS("你选择的商品为#b#v" + selectedItem + "#售价为：" + selectedCost + "金币/个\r\n请输入你购买的数量", 1, 1, 1);
	//cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 金币？");


if(player.hasMesos(sel * selectedCost)) {
	if(player.canGainItem(selectedItem, sel)) {
		
		player.gainItem(selectedItem, sel*9999);
		
			player.loseMesos((selectedCost * sel));
			npc.say("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + sel + ") 。");
		
		
	} else {
		npc.say("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
	}
} else {
	npc.say("您没有那么多金币。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 金币。");
}