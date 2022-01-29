/* 绝版点卷商店 帽子*/

var status = -1;
var itemList;
var selectedItem = -1;
var selectedCost = 3000;

itemList = player.customSqlResult("select petid from n_pet");
var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
for(var i = 0; i < itemList.size(); i++) {
	selStr += "\r\n#L" + i + "##i" + itemList.get(i).get("petid") + ":# #b#t" + itemList.get(i).get("petid") + "##k   #r" ;
	if(itemList.get(i).get("petid")==5000870 ||itemList.get(i).get("petid")==5000871 ||itemList.get(i).get("petid")==5000872 ){
		selStr += 100000 ;
	}else{
		selStr += 3000 ;
		
	}
	selStr+= "#k点卷#l";
}
let selection = npc.askMenuS(selStr);

var item = itemList.get(selection);
selectedItem = item.get("petid");
if(selectedItem==5000870 ||selectedItem==5000871 ||selectedItem==5000872 ){
	
	selectedCost=100000;
}
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