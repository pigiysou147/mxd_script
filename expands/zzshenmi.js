var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = 0;
var weaponList = Array(
	1214018, //神秘之影龙息臂箭
	1403018, //神秘之影拳炮
	1213018, //神秘之影调谐器
	1212120, //神秘之影双头杖
	1222113, //神秘之影灵魂手铳
	1232113, //神秘之影亡命剑
	1242121, //神秘之影能量剑
	1242122, //神秘之影能量剑
	1252098, //神秘之影魔法槌
	1262039, //神秘之影ESP限制器
	1272017, //神秘之影锁链
	1282017, //神秘之影魔力手套
	1302343, //神秘之影单手剑
	1312203, //神秘之影斧
	1322255, //神秘之影锤
	1332279, //神秘之影匕首
	1342104, //神秘之影刃
	1362140, //神秘之影手杖
	1372228, //神秘之影短杖
	1382265, //神秘之影长杖
	1402259, //神秘之影双手剑
	1412181, //神秘之影双手战斧
	1422189, //神秘之影双手锤
	1432218, //神秘之影长枪
	1442274, //神秘之影矛
	1452257, //神秘之影弓
	1462243, //神秘之影弩
	1472265, //神秘之影拳套
	1482221, //神秘之影指节
	1492235, //神秘之影短枪
	1522143, //神秘之影双弩枪
	1532150, //神秘之影攻城炮
	1542117, //神秘之影武士刀
	1552119, //神秘之影折扇 
	1582023, //神秘之影机甲枪
	
	1592020 //神秘远古弓
);
var as = Array(
	1214017, //埃苏莱布斯龙息臂箭
	1403017, //埃苏莱布斯拳炮
	1213017, //埃苏莱布斯调谐器
	1212115, //埃苏莱布斯双头杖
	1222109, //埃苏莱布斯灵魂手铳
	1232109, //埃苏莱布斯亡命剑
	1242116, //埃苏莱布斯能量剑
	1242120, //埃苏莱布斯能量剑
	1252093, //埃苏莱布斯魔法棒
	1262017, //埃苏莱布斯ESP限制器
	1272016, //埃苏莱布斯锁链
	1282016, //埃苏莱布斯魔力手套
	1302333, //埃苏莱布斯军刀
	1312199, //埃苏莱布斯战斧
	1322250, //埃苏莱布斯战锤
	1332274, //埃苏莱布斯屠龙斩
	1342101, //埃苏莱布斯之刃
	1362135, //埃苏莱布斯折叠手杖
	1372222, //埃苏莱布斯短杖
	1382259, //埃苏莱布斯长杖
	1402251, //埃苏莱布斯宽大刀
	1412177, //埃苏莱布斯大斧
	1422184, //埃苏莱布斯大锤
	1432214, //埃苏莱布斯穿透矛
	1442268, //埃苏莱布斯巨灵开山斧
	1452252, //埃苏莱布斯弓
	1462239, //埃苏莱布斯弩
	1472261, //埃苏莱布斯复仇斗拳
	1482216, //埃苏莱布斯拳甲
	1492231, //埃苏莱布斯枪
	1522138, //埃苏莱布斯双弩枪
	1532144, //埃苏莱布斯大炮
	1542108, //埃苏莱布斯武士刀
	1552110, //埃苏莱布斯扇子
	1582017, //埃苏莱布斯雷神
	1592019	//埃苏莱布斯远古
);
var ffn = Array(
	1214016,//法芙娜午夜追赶
	1403036,//法弗纳拳炮
	1213016, //法弗纳原谅
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
	Array(4000672, 1500, '火石头'),
	Array(3992025, 10, '圣诞大星'),
	Array(4000133, 1500, '发动机'),
	Array(4000645, 1500, '猪头肉'),
	Array(4000627, 1500, '锤子'),
	Array(4310143, 500, 'BOSS币'),
	Array(4023025, 3, '金火'),
	Array(4023026, 10, '紫火')
);
var ffnCount = 0;
var asCount = 0;
var huoli = 0;
var need = 150000;
var meso = 3000000000;

huoli = player.getPQLog("活力");
var selStr = "#d我这里可以制作200级神秘之影武器武器 \r\n";
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
ffnCount = player.getAmountOfItem(ffn[weaponId]);
asCount = player.getAmountOfItem(as[weaponId]);
if(asCount < 1) {
	text += "#v" + as[weaponId] + "##z" + as[weaponId] + "#    #r" + asCount + " / 1 个#b\r\n";
} else {
	text += "#v" + as[weaponId] + "##z" + as[weaponId] + "#    #g" + asCount + " / 1 个#b\r\n";
}

if(ffnCount < 2) {
	text += "#v" + ffn[weaponId] + "##z" + ffn[weaponId] + "#    #r" + ffnCount + " / 2 个#b\r\n";
} else {
	text += "#v" + ffn[weaponId] + "##z" + ffn[weaponId] + "#    #g" + ffnCount + " / 2 个#b\r\n";
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
	if(player.getAmountOfItem(as[weaponId])<1){
		flag=0;
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
			player.loseItem(ffn[weaponId], 2);
			player.loseItem(as[weaponId], 1);
			player.addPQLog("活力", -need, 365);
			player.gainGachaponItem("制作中心", weaponList[weaponId], 1, 1);
			npc.say("恭喜您合成#z" + weaponList[weaponId] + "#一把.");
		}

	} else {
		npc.say("材料不足，无法完成制作！");
	}
} else {
	player.changeMap(sel);
}