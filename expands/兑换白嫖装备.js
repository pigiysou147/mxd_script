 
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";


var weaponId = null;
 
var weaponList = Array(
 

		1003976,
		1102623,
		1082556,
		1072870,
		1113073,
		1132244,
		1032221,
		1122265,
		1012478,
		1022277,
		1162025,
		1152170,

 
	
	
 
);
var dage = Array("           ",
"",
"",
"",
"",
"",
"",
"",
"" 
);
//需要的材料
var needItemList = Array(
	Array(4310060, 35) 
);

var text = "#d我这里可以兑换装备哦，请选择你要兑换的东西#n#k\r\n";    
for(var key in weaponList) {
	var item = weaponList[key];
	 
	text += "#r#L"+key+"##r#v"+item+"##z"+item+"#"+dage+"#r价格#v4310060# x 35\r\n";
}

weaponId = npc.askMenuA(text);
 

var text = "- #e#d#z"+weaponList[weaponId]+"#需要的材料：#n#k\r\n\r\n#b";
for(var key in needItemList) {
	var itemName = player.makeItemWithId(needItemList[key][0]).getItemName();
	text+=itemName + "#v"+needItemList[key][0]+"#";
	for(var i=0; i<=25-itemName.length; i++)
	{
		text+=" ";
	}
	var currentItemQuantity = player.getAmountOfItem(needItemList[key][0]);
	var color="#g";
	if (currentItemQuantity<needItemList[key][1])
		color="#r";
	text+=color+currentItemQuantity+" / "+needItemList[key][1]+" 个#b\r\n";
}
text+="#k\r\n请输入兑换数量.#k";
var number = npc.askNumber(text, 1, 1, 1);
var flag=true;
for(var key in needItemList) {
	var itemId = needItemList[key][0];
	var itemQuantity = needItemList[key][1];
	if (!player.hasItem(itemId, itemQuantity*number))
	{
		flag=false;
		break;
	}
}
 if (flag) {
	if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
		npc.say("空间不足，请整理后重新制作！");
	}else{
		for(var key in needItemList) {
			var itemId = needItemList[key][0];
			var itemQuantity = needItemList[key][1];
			player.loseItem(itemId, itemQuantity*number);
		}
		player.gainItem(weaponList[weaponId], number);
		npc.say("恭喜您兑换了#z"+weaponList[weaponId]+"# x "+number+". ");
	}
} else {
	npc.say("材料不足，无法完成制作！");

}