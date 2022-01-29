var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = 0;
var weaponList = Array(
	1202107, //	斯坦的美味便当图腾	
	1202116, //	拉尼亚的美味便当图腾	
	1202149, //斯坦的美味便当图腾	
	1202158, //拉尼亚的美味便当图腾
	1202120, //被面纱遮住的公主之图腾
	1202116, //拉尼亚的美味便当图腾
	1202173, //骑马像图腾
	1202174, //玉壶图腾
	1202175 //青铜香炉图腾
);
var needItemList = Array(
	Array(4310030, 3000, '运动会币'),
	Array(4310036, 5000, '征服者币'),
	Array(4033356, 50, '正义火种1'),
	Array(4021012, 30, '强烈灵魂的净水'),
	Array(4021011, 30, '纯洁灵魂的火花'),
	Array(4021010, 30, '时间之石'),
	Array(4000082, 400, '僵尸丢失的金齿'),
	Array(4000124, 10, '战甲吹泡泡鱼的内存卡'),
	Array(4310015, 5, '斗神证物'),
	Array(4021019, 2, '梦之石')
);
var huoli = 0;
var need = 3000;

huoli = player.getPQLog("活力");
var selStr = "#d我这里可以制作各种灵魂结晶 \r\n请选择想要制作的装备：#n#k\r\n";
selStr += "#r还需要" + need + "活力值哦~活力值来源是挂机打怪等：#n#k\r\n";
selStr += "请选择想要制作的装备：#n#k\r\n";
for(var i = 0; i < weaponList.length; i++) {
	var item = weaponList[i];
	selStr += "#r#L" + i + "# #b#v" + item + "##z" + item + "# \r\n";
}
let selection = npc.askMenuS(selStr);

weaponId = selection;
var text = "- #e#d#z" + weaponList[weaponId] + "#需要的材料：#n#k\r\n\r\n#b";

if(huoli < need) {
	text += " #r活力值：   " + huoli + "/" + need + "#b\r\n";
} else {
	text += " #g活力值：   " + huoli + "/" + need + "#b\r\n";
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

		} else {
			for(var i = 0; i < needItemList.length; i++) {
				var itemId = needItemList[i][0];
				var getItemQuantity = needItemList[i][1];
				player.loseItem(itemId, getItemQuantity);
			}
			player.addPQLog("活力", -need, 365);
			var item = player.gainGachaponItem("制作中心", weaponList[weaponId], 1, 1);
			npc.say("恭喜您合成#z" + weaponList[weaponId] + "#一把.");
		}

	} else {
		npc.say("材料不足，无法完成制作！");
	}
} else {
	player.changeMap(selection);
}