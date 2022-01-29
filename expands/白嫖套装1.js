//玩家标识

var itemId = 0;
var itemList = Array(
	1003976,//,//漩涡帽子
	1102623,//	,//漩涡披风
	1082556,//	,//漩涡手套
	1052669,//	,//漩涡皇家外套
	1072870//	,//漩涡鞋

)
var wuqi = Array(
	1212089	,//漩涡双头杖	
	1222084	,//漩涡灵魂手铳	
	1232084	,//漩涡恶魔剑	
	1242090	,//漩涡锁链剑	
	1302297	,//漩涡剑	
	1312173	,//漩涡斧	
	1322223	,//漩涡锤	
	1332247	,//漩涡匕首	
	1342090	,//漩涡刀	
	1362109	,//漩涡手杖
	1372195	,//漩涡短杖	
	1382231	,//漩涡长杖	
	1402220	,//漩涡双手剑	
	1412152	,//漩涡双手战斧	
	1422158	,//漩涡巨锤	
	1432187	,//漩涡矛	
	1442242	,//漩涡戟	
	1452226	,//漩涡弓	
	1462213	,//漩涡弩	
	1472235	,//漩涡拳甲
	1482189	,//漩涡冲拳	
	1492199	,//漩涡手铳	
	1522113	,//漩涡双翼弩	
	1532118	,//漩涡手炮	
	1252033	,//漩涡虎梳魔法棒	
	1542072	,//漩涡武士之剑	
	1552072	,//漩涡之风	
	1582025	,//漩涡拳炮	
	1262029	,//漩涡ESP限制器	
	1272028	,//漩涡锁链
	1282028	,//漩涡魔力手套	
	1592032	,//漩涡古弓	
	1292035	,//漩涡扇子	
	1213032	,//漩涡调谐器	
	1403032	,//漩涡拳封	
	1403037	//漩涡拳封
)
var ch = 0;
var flag = 0;

var str = "你好 我这里你可以进行#r旋涡装备进化#b 允许强化的有:\r\n";
var item = player.getInventorySlot(1, 1);
if(item != null) {
	str += "#L" + item.getDataId() + "##v" + item.getDataId() + "##t" + item.getDataId() + "# 强化该物品#l\r\n";
} else {
	str += "#r你没有可以强化的物品#b\r\n";
}
str += "#L4#点击这里换新手套装#l  \r\n\r\n";



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
	var str = "在这里你可以使用#v4310060# 来换取白嫖旋涡\r\n";
	//str += "#L100##r材料地图点此传送#k#l  \r\n\r\n";
	ch = 1;
	for(var i = 0; i < itemList.length; i++) {
		str += "#L" + i + "##v" + itemList[i] + "##t" + itemList[i] + "# 换取该物品#l\r\n";
	}
	let sel = npc.askMenuS(str);
	if(sel == 100) {
		player.changeMap(100010100);
	} else {
		if(player.hasItem(4310060, 100) && player.getFreeSlots(1) > 1) {
			player.loseItem(4310060, 100);
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
		npc.say("只能强化漩涡武器和防具哦~");
	} else {
		var str = "需要消耗的物品 \r\n";
		str += "所需物品:\r\n";
		str += "#v4310060##t4310060# X#r100#b 可以在组队任务中获得 \r\n";
		str += "#r防具强化效果：（白嫖旋涡套装）#k\r\n";
		str += "潜在属性： 三条所有属性9 %\r\n";
		str += "附加潜能： 三条所有属性4 %\r\n\r\n";
		str += "#r武器强化效果：（白嫖旋涡武器）#k\r\n";
		str += "攻击力 12% 1 条!\r\n";
		str += "攻击力 9% 5 条!\r\n";
		str += "自带 1亿突破\r\n";
		str += "#r请注意：把需要强化的装备放在物品栏的第一格 \r\n";
		str += "自动开启6条属性 不需要提前开潜能~\r\n";
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
				var siwei=(item.getRUC()+2)*8;
				//设置升级次数为0
				item.setRUC(0);
				//设置锤子次数为2
				item.setViciousHammer(2);
				item.setCHUC(25);
				item.setStr(item.getStr()+siwei);
				item.setDex(item.getDex()+siwei);
				item.setLuk(item.getLuk()+siwei);
				item.setInt(item.getInt()+siwei);
				item.setPad(item.getPad()+siwei);
				item.setMad(item.getMad()+siwei);

				//现在给玩家选择潜能  9%所有属性 42087
				if(player.getAmountOfItem(4310060) >= 100) {
					 //如果装备没有潜能 必须先设置装备的潜能属性的等级  0x11:B 0x12:A 0x13:S 0x14:SS 
					//item.addFlag(1);
					item.setGrade(0x14);
					
					item.setOption(1, 40051, false);
					item.setOption(2, 30051, false);
					item.setOption(3, 30051, false);
					item.setOption(1, 30051, true);
					item.setOption(2, 30051, true);
					item.setOption(3, 30051, true);
					item.setTitle("白嫖套装");
					player.updateItem(1,item);
					player.loseItem(4310060,100);
					
					npc.broadcastGachaponMsgEx("[白嫖套装] : 玩家 " + player.getName() + " 使用 进化币 强化了自己的白嫖套装,变成了终极白嫖玩家 ~！！！", item);
					npc.say("你成功的强化了你的白嫖旋涡~ ~");
				} else {
					npc.say("你的材料不足");
				}

			} else if(flag == 2) {
				if(player.getAmountOfItem(4310060) >= 100 ) {
					var siwei=(item.getRUC()+2)*8;
					//设置升级次数为0
					item.setRUC(0);
					//设置锤子次数为2
					item.setViciousHammer(2);
					item.setCHUC(25);
					item.setStr(item.getStr()+siwei);
					item.setDex(item.getDex()+siwei);
					item.setLuk(item.getLuk()+siwei);
					item.setInt(item.getInt()+siwei);
					item.setPad(item.getPad()+siwei);
					item.setMad(item.getMad()+siwei);
					//现在给玩家选择潜能  9%所有属性 42087
					//item.addFlag(1);
					item.setGrade(0x14); //如果装备没有潜能 必须先设置装备的潜能属性的等级  0x11:B 0x12:A 0x13:S 0x14:SS 
					item.setOption(1, 40051, false);
					item.setOption(2, 30051, false);
					item.setOption(3, 30051, false);
					item.setOption(1, 30051, true);
					item.setOption(2, 30051, true);
					item.setOption(3, 30051, true);
					item.setLimitBreak(100000000);
					item.setTitle("白嫖套装");
					player.updateItem(1,item);
					player.loseItem(4310060,100);
					npc.broadcastGachaponMsgEx("[白嫖套装] : 玩家 " + player.getName() + " 使用 进化币 强化了自己的白嫖套装,变成了终极白嫖玩家 ~！！！", item);
					npc.say("你成功的强化了你的白嫖旋涡~ ~");
					
				} else {
					npc.say("你的材料不足");

				}
			}
		}
	}
}