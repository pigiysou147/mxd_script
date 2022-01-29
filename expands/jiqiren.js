/* 点卷商店 - 洗能力
Array(2702001,1,2000,""),
Array(2702001,10,20000,""),
 */

var itemList = Array(

    Array(2892000, 1, 100000, "机器人去耳朵"),//星星
	Array(1802655, 1, 1000000, ""),//金锤子
	Array(1802656, 1, 1000000, ""),//金锤子
	Array(1802657, 1, 1000000, ""),//金锤子
	Array(1802715, 1, 1000000, ""),//金锤子
	Array(1802716, 1, 1000000, ""),//金锤子
	Array(1662102, 1, 500000, ""),//金锤子
	Array(1662103, 1, 500000, ""),//防爆卷轴
	Array(1662125, 1, 800000, ""),//神奇铁砧
	Array(1662126, 1, 800000, ""),//神奇铁砧

	
	Array(1662156, 1, 800000, ""),//机器人
	Array(1662166, 1, 800000, ""),//机器人
	Array(1662167, 1, 800000, ""),//机器人
	Array(1662168, 1, 800000, ""),//机器人
	Array(1662117, 1, 800000, ""),//机器人
	Array(1662118, 1, 800000, ""),//机器人
	Array(1662119, 1, 800000, ""),//机器人
	Array(1662120, 1, 800000, ""),//机器人
	Array(1662121, 1, 800000, ""),//机器人
	Array(1662122, 1, 800000, ""),//机器人
	Array(1662123, 1, 800000, ""),//机器人
	Array(1662124, 1, 800000, ""),//机器人

	Array(1662157, 1, 800000, ""),//机器人
	Array(1662158, 1, 800000, ""),//机器人
	Array(1662159, 1, 800000, ""),//机器人
	Array(1662160, 1, 800000, ""),//机器人
	Array(1662161, 1, 800000, ""),//机器人
	Array(1662162, 1, 800000, ""),//机器人
	Array(1662163, 1, 800000, ""),//机器人



	Array(2430893, 1, 380000, "银河副手自选"),
	Array(2350006, 1, 888888, ""),
	Array(2350007, 1, 50000, ""),
	Array(2350004, 1, 50000, ""),
	Array(2350005, 1, 50000, ""),
	
	Array(1672027, 1, 1000000, "次次等毕业心脏")
);
var selectedItem = -1;2430893
var selequantity = -1;
var selectedCost = -1;
var epp1 = "#fEffect/ItemEff.img/2022109/1#"; //彩光
var epp2 = "#fEffect/ItemEff.img/2022109/2#"; //彩光
var selStr = "       #v3801199#\r\n请选择您希望购买的道具：";
for(var i = 0; i < itemList.length; i++) {
	selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x " + itemList[i][1] + "  #r" + itemList[i][2] + "#k点卷 #r " + itemList[i][3] + "#l";
}
let selection = npc.askMenuS(selStr);

var item = itemList[selection];

	selectedItem = item[0];
	selequantity = item[1];
	selectedCost = item[2];

	let sel = npc.askNumberS("你选择的商品为#b#v" + selectedItem + "#售价为：" + selectedCost + "点卷/张\r\n请输入你购买的数量", 1, 1, 100);
	//cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷？");


if(player.getCashShopCurrency(1) >= (sel * selectedCost)) {
	if(player.canGainItem(selectedItem, sel)) {
		
		var flag =player.gainGachaponItem("机器人商店",selectedItem, sel,1);
		if(flag){
			player.modifyCashShopCurrency(1, -(selectedCost * sel));
			npc.say("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + sel + ") 。");
		}else{
			npc.say("请清理背包哦~");
		}
		
		//npc.broadcastGachaponMsgEx("『点卷商城』 " + player.getName() + " 玩家在点卷商城购买道具： #v" + selectedItem + "# x " + selection);
		
	} else {
		npc.say("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
	}
} else {
	npc.say("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷。");
}