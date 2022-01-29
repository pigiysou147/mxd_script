//玩家标识

var itemId = 0;
var itemList = Array(
	2431941,
	1082647,
	1052929,
	1073057,
	1102828,
	1004492,
	1132287,
	1122306,
	1152187
)
var wuqi = Array(
	1572001,
	1572002,
1214020,
1403020,
1213023,
1222111,
1232111,
1242118,
1282020,
1252097,
1262037,
1302336,
1312201,
1212117,
1322253,
1332277,
1342103,
1362137,
1372225,
1382263,
1402253,
1412180,
1292015,
1422187,
1432216,
1442270,
1452255,
1462241,
1472263,
1482218,
1492233,
1522140,
1532146,
1542116,
1552118,
1582028,
1592012,
1272011
)
var ch = 0;
var flag = 0;

var str = "你好 我这里你可以进行#r新手装备进化#b\r\n";
var item = player.getInventorySlot(1, 1);
if(item != null) {
	str += "#L" + item.getDataId() + "##v" + item.getDataId() + "##t" + item.getDataId() + "# 强化该物品#l\r\n";
} else {
	str += "#r你没有可以强化的物品#b\r\n";
}
str += "#L4#点击这里换新手套装#l  \r\n\r\n";
str += "所需物品:\r\n";
str += "#L1##v4000008##t4000008# X#r80#b      #r材料地图传送#k#l \r\n";
str += "#L2##v4000006##t4000006# X#r200#b      #r材料地图传送#k#l \r\n";
str += "#L3##v4000017##t4000017# X#r60#b      #r材料地图传送#k#l \r\n\r\n";

str += "#r防具强化效果：（新手寻宝套装）#k\r\n";
str += "潜在属性： 三条所有属性9 %\r\n";
str += "附加潜能： 三条所有属性4 %\r\n\r\n";
str += "#r武器强化效果：（新手寻宝武器）#k\r\n";
str += "BOSS伤害20 % 4 条\r\n";
str += "无视 防御40 % 2 条\r\n";
str += "自带 1亿突破\r\n";
str += "#r请注意：把需要强化的装备放在物品栏的第一格 \r\n";
str += "自动开启6条属性 不需要提前开潜能~\r\n";


let selection = npc.askMenuS(str);
if(selection == 1) {
	//奶酪

	player.changeMap(105010301);
} else if(selection == 2) {
	//冰淇淋

	player.changeMap(103010000);
} else if(selection == 3) {
	//雪花

	player.changeMap(120000400);
} else if(selection == 4) {
	var str = "在这里你可以使用#v4000001# 来换取新手装备\r\n";
	str += "#L100##r材料地图点此传送#k#l  \r\n\r\n";
	ch = 1;
	for(var i = 0; i < itemList.length; i++) {
		str += "#L" + i + "##v" + itemList[i] + "##t" + itemList[i] + "# 换取该物品#l\r\n";
	}
	let sel = npc.askMenuS(str);
	if(sel == 100) {
		player.changeMap(100010100);
	} else {
		if(player.hasItem(4000001, 100) && player.getFreeSlots(1) > 1) {
			player.loseItem(4000001, 100);
			player.gainItem(itemList[sel], 1);
			npc.say("换取成功");
		} else {
			npc.say("材料不足，或者身上空间不足");
		}
	}
} else {
	var itemId = item.getDataId();
	for(var i = 0; i < itemList.length; i++) {
		if(itemId==itemList[i]) {
			flag = 1;
			break;
		}
	}
	for(var i = 0; i < wuqi.length; i++) {
		if(itemId==wuqi[i]) {
			flag = 2;
			break;
		}
	}

	if(flag == 0) {
		npc.say("只能强化寻宝系列武器和防具哦~");
	} else {
		var str = "需要消耗的物品 \r\n";
		str += "#L1##v4000008##t4000008# X#r80#b      #r材料地图传送#k#l \r\n";
		str += "#L2##v4000006##t4000006# X#r200#b      #r材料地图传送#k#l \r\n";
		str += "#L3##v4000017##t4000017# X#r60#b      #r材料地图传送#k#l \r\n\r\n";
		str += "\r\n#L4# #r#e我要强化#k#l \r\n";
		let sel = npc.askMenu(str);

		if(sel == 1) {
			player.changeMap(105010301);
		} else if(sel == 2) {
			player.changeMap(103010000);
		} else if(sel == 3) {
			player.changeMap(120000400);
		} else {
			if(flag == 1) {
				//现在给玩家选择潜能  9%所有属性 42087
				if(player.getAmountOfItem(4000008) >= 80 && player.getAmountOfItem(4000017) >= 60 && player.getAmountOfItem(4000006) >= 200) {
					 //如果装备没有潜能 必须先设置装备的潜能属性的等级  0x11:B 0x12:A 0x13:S 0x14:SS 
					item.setGrade(0x14);
					item.setOption(1, 60005, false);
					item.setOption(2, 60005, false);
					item.setOption(3, 60005, false);
					item.setOption(1, 60038, true);
					item.setOption(2, 60038, true);
					item.setOption(3, 60038, true);

					item.setTitle("新手强化");
					player.updateItem(1,item);
					player.loseItem(4000008, 80);
					player.loseItem(4000006, 200);
					player.loseItem(4000017, 60);
					
					npc.broadcastGachaponMsgEx("[新手强化] : 玩家 " + player.getName() + " 通过新手强化NPC 强化了自己的新手套装,变得更强了 ~！！！", item);
					npc.say("你成功的强化了你的新手装备~ ~");
				} else {
					npc.say("你的材料不足");
				}

			} else if(flag == 2) {
				if(player.getAmountOfItem(4000008) >= 80 && player.getAmountOfItem(4000017) >= 60 && player.getAmountOfItem(4000006) >= 200) {
					//现在给玩家选择潜能  9%所有属性 42087

					item.setGrade(0x14); //如果装备没有潜能 必须先设置装备的潜能属性的等级  0x11:B 0x12:A 0x13:S 0x14:SS 
					item.setOption(1, 40601, false);
					item.setOption(2, 40601, false);
					item.setOption(3, 40601, false);
					item.setOption(1, 40601, true);
					item.setOption(2, 40292, true);
					item.setOption(3, 40292, true);
					var total =0;
					if(item.getLimitBreak()<100000000)
					total=100000000;
					item.setLimitBreak(item.getLimitBreak()+total);
					item.setTitle("新手强化");
					item.setAttribute(8);
					player.updateItem(1,item);
					player.loseItem(4000008, 80);
					player.loseItem(4000006, 200);
					player.loseItem(4000017, 60);
					npc.broadcastGachaponMsgEx("[新手强化] : 玩家 " + player.getName() + " 通过新手强化NPC 强化了自己的新手套装,变得更强了 ~！！！", item);
					npc.say("你成功的强化了你的新手装备~ ~");
					
				} else {
					npc.say("你的材料不足");

				}
			}
		}
	}
}