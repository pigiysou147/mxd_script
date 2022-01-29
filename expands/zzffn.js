var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = 0;
var weaponList = Array(
	1214016,
1403036,//法弗纳拳炮
1213016,//
1212063, //法弗纳魔力源泉杖
	1222058, //法弗纳天使手铳
	1232057, //法弗纳死亡使者
	1242060, //法弗纳精神之刃
	1242061, //法弗纳精神之刃
	1252015, //法弗纳北极星魔法棒
	1262016, //法弗纳ESP限制器
	1272015, //法弗纳锁链
	1282015, //法弗纳魔力手套
	1302275, //法弗纳银槲之剑
	1312153, //法弗纳双刃切肉斧
	1322203, //法弗纳戈耳迪锤
	1332225, //法弗纳大马士革剑
	1342082, //法弗纳急速之刃
	1362090, //法弗纳洞察手杖
	1372177, //法弗纳魔力夺取者
	1382208, //法弗纳魔冠之杖
	1402196, //法弗纳忏悔之剑
	1412135, //法弗纳战斗切肉斧
	1422140, //法弗纳闪电锤
	1432167, //法弗纳贯雷枪
	1442223, //法弗纳半月宽刃斧
	1452205, //法弗纳追风者
	1462193, //法弗纳风翼弩
	1472214, //法弗纳危险之手
	1482168, //法弗纳巨狼之爪
	1492179, //法弗纳左轮枪
	1522094, //法弗纳双风翼弩
	1532098, //法弗纳荣耀炮
	1542063, //法弗纳皇刀正宗
	1552063, //法弗纳煌扇蓝姬
	1582016, //法弗纳巨山
	1592018  //法弗纳远古弓
);
var needItemList = Array(
	Array(4000133, 588, '色情发动机', 220060201),
	Array(4000082, 888,"僵尸的金牙",211041700),
	Array(4000645, 400, '渣男脖子肉', 271010400),
	Array(4000627, 450, '王大锤的锤子', 211060700),
	Array(4000672, 150, '徐锦江的火石头', 100040300),
	Array(3992025, 2, '圣诞大星'),
	Array(4310028, 120, '传说枫叶币')
);
var huoli = 0;
var need = 3000;

huoli = player.getPQLog("活力");
var selStr = "#d我这里可以制作150级FFN武器武器 \r\n";
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


	var currentItemQuantity = player.getAmountOfItem(needItemList[i][0]);
	var color = "#g";
	if(currentItemQuantity < needItemList[i][1])
		color = "#r";

	if(i < 5) {
		text += "#L" + needItemList[i][3] + "#"+itemName+color + currentItemQuantity + " / " + needItemList[i][1] + " 个#b   地图传送#l\r\n";
	} else {
		text +="\r\n" +itemName+color + currentItemQuantity + " / " + needItemList[i][1] + " 个#b   \r\n";
	}

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
	player.changeMap(sel);
}