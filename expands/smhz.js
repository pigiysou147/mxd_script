var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = 0;
var weaponList = Array(
1712001, // 
1712002, // 
1712003, // 
1712004, //
1712005, // 
1712006 // 鲨齿女王意志之剑, // (无描述)
);
var needItemList = Array(
	Array(4000835, 250,"古代石块"),
	Array(4000836, 250,"黑色古代石块")
);
var huoli = 0;
var need = 3000;

huoli = player.getPQLog("活力");
var selStr = "#d我这里可以制作神秘徽章 \r\n";
selStr += "请选择想要制作的神秘徽章：#n#k\r\n";
for(var i = 0; i < weaponList.length; i++) {
	var item = weaponList[i];
	selStr += "#r#L" + i + "# #b#v" + item + "##z" + item + "# \r\n";
}
let selection = npc.askMenuS(selStr);

weaponId = selection;
var text = "- #e#d#z" + weaponList[weaponId] + "#需要的材料：#n#k\r\n\r\n#b";



for(var i = 0; i < needItemList.length; i++) {
	var itemName = needItemList[i][2];

	text += itemName;

	var currentItemQuantity = player.getAmountOfItem(needItemList[i][0]);
	var color = "#g";
	if(currentItemQuantity < needItemList[i][1])
		color = "#r";

		text += color + currentItemQuantity + " / " + needItemList[i][1] + " 个#b   \r\n";
}
text += "#k\r\n\r\n- #e#d管理提示：#n#b#L111##r点这里制作#k#l.#k\r\n\r\n ";
let sel = npc.askMenuS(text);

if(sel == 111) {
	var flag = 1;

	for(var i = 0; i < needItemList.length; i++) {
		var itemId = needItemList[i][0];
		var getItemQuantity = needItemList[i][1];
		if(!player.hasItem(itemId, getItemQuantity)) {
			flag = 0;
			break;
		}
	}
	if(flag == 1) {
		if(!player.canGainItem(1003797, 1)) {
			npc.say("装备栏空间不足，请整理后重新制作！");
			
		} else {
			for(var i = 0; i < needItemList.length; i++) {
				var itemId = needItemList[i][0];
				var getItemQuantity = needItemList[i][1];
				player.loseItem(itemId, getItemQuantity);
			}
			//player.addPQLog("活力", need, 365);
			var item = player.gainGachaponItem("制作中心", weaponList[weaponId], 1, 1);
			npc.say("恭喜您合成#z" + weaponList[weaponId] + "#一把.");
		}

	} else {
		npc.say("材料不足，无法完成制作！");
	}
} else {
	player.changeMap(selection);
}