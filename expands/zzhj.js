var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = 0;
var weaponList = Array(
	1152196, //	神秘之影战士护肩
	1152199, //	神秘之影飞侠护肩
	1152198, //	神秘之影弓箭手护肩
	1152200, //	神秘之影海盗护肩
	1152197 //	神秘之影法师护肩
);
var as = Array(
	1152155, //zh
	1152155, //zh
	1152155, //zh
	1152155, //zh
	1152155 //zh
);
var needItemList = Array(
	Array(4000672, 1000, '火石头'),
	Array(3992025, 8, '圣诞大星'),
	Array(4000133, 500, '发动机'),
	Array(4000645, 500, '猪头肉'),
	Array(4000627, 500, '锤子'),
	Array(4310143, 300, 'BOSS币'),
	Array(4023025, 3, '金火'),
	Array(4023026, 10, '紫火')
);
var ffnCount = 0;
var asCount = 0;
var huoli = 0;
var need = 150000;
var meso = 2000000000;

huoli = player.getPQLog("活力");
var selStr = "#d我这里可以制作200级神秘之影护肩，\r\n请选择想要制作的装备：#n#k\r\n";
selStr += "#r还需要" + need + "活力值哦~活力值来源是挂机打怪等：#n#k\r\n";
selStr += "请选择想要制作的装备：#n#k\r\n";
for(var i = 0; i < weaponList.length; i++) {
	var item = weaponList[i];
	selStr += "#r#L" + i + "# #b#v" + item + "##z" + item + "# \r\n";
}
let selection = npc.askMenuS(selStr);

weaponId = selection;
var text = "- #e#d#z" + weaponList[weaponId] + "#需要的材料：#n#k\r\n\r\n#b";
text += "- #r#d金币:"+meso+"#k\r\n\r\n#b";

if(huoli < need) {
	text += " #r活力值：   " + huoli + "/" + need + "#b\r\n";
} else {
	text += " #g活力值：   " + huoli + "/" + need + "#b\r\n";
}
asCount = player.getAmountOfItem(as[weaponId]);
if(asCount < 2) {
	text += "#v" + as[weaponId] + "##z" + as[weaponId] + "#    #r" + asCount + " / 2 个#b\r\n";
} else {
	text += "#v" + as[weaponId] + "##z" + as[weaponId] + "#    #g" + asCount + " / 2个#b\r\n";
}

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
		if(huoli < need) {
			npc.say("你的活力值需要:" + need);

		} else if(!player.canGainItem(1003797, 1)) {
			npc.say("装备栏空间不足，请整理后重新制作！");

		}else if(!player.hasMesos(meso)){
			npc.say("金币不够，需要金币"+meso);
		} else {
			for(var i = 0; i < needItemList.length; i++) {
				var itemId = needItemList[i][0];
				var getItemQuantity = needItemList[i][1];
				player.loseItem(itemId, getItemQuantity);
			}
			player.loseMesos(meso);
			player.loseItem(as[weaponId], 2);
			player.addPQLog("活力", -need, 365);
			player.gainGachaponItem("制作中心", weaponList[weaponId], 1, 1);
			npc.say("恭喜您合成#z" + weaponList[weaponId] + "#一个.");
		}

	} else {
		npc.say("材料不足，无法完成制作！");
	}
} else {
	player.changeMap(sel);
}