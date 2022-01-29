/* 抵用卷商店 - 洗能力
Array(2702001,1,2000,""),
Array(2702001,10,20000,""),
 */

var itemList = Array(
	//Array(2436274, 1, 3000, "200经验药水"),//金锤子
	//Array(2432205, 1, 3000, "250经验药水"),//金锤子
	//Array(2430230, 1, 3000, "275经验药水"),//金锤子
	Array(5133000, 1, 1000, ""),//超级复活药水
	Array(5062801, 1, 1000, ""),//神奇还原器
	Array(2702001, 1, 1000, ""),//神奇还原器
	Array(5062026, 1, 3000, ""),//神奇还原器
	Array(5510000, 1, 10000, ""),//神奇还原器
	Array(5570000, 1, 3000, "")//金锤子
	
	
);
var selectedItem = -1;
var selequantity = -1;
var selectedCost = -1;
var epp1 = "#fEffect/ItemEff.img/2022109/1#"; //彩光
var epp2 = "#fEffect/ItemEff.img/2022109/2#"; //彩光
var selStr = "       #v3801199#\r\n请选择您希望购买的道具：";
for(var i = 0; i < itemList.length; i++) {
	selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x " + itemList[i][1] + "  #r" + itemList[i][2] + "#k抵用卷 #r " + itemList[i][3] + "#l";
}
let selection = npc.askMenuS(selStr);

var item = itemList[selection];

	selectedItem = item[0];
	selequantity = item[1];
	selectedCost = item[2];

	let sel = npc.askNumberS("你选择的商品为#b#v" + selectedItem + "#售价为：" + selectedCost + "抵用卷/张\r\n请输入你购买的数量", 1, 1, 3000);
	//cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 抵用卷？");


if(player.getCashShopCurrency(2) >= (sel * selectedCost)) {
	if(player.canGainItem(selectedItem, sel)) {
		
		var flag =player.gainGachaponItem("抵用卷商城",selectedItem, sel,1);
		if(flag){
			player.modifyCashShopCurrency(2, -(selectedCost * sel));
			npc.say("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + sel + ") 。");
		}else{
			npc.say("请清理背包哦~");
		}
		
		//npc.broadcastGachaponMsgEx("『抵用卷商城』 " + player.getName() + " 玩家在抵用卷商城购买道具： #v" + selectedItem + "# x " + selection);
		
	} else {
		npc.say("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
	}
} else {
	npc.say("您没有那么多抵用卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 抵用卷。");
}