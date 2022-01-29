/**
* 箱子選擇道具 QQ:739977676
**/

//送的物品
let itemList = Array(
		1592020, //- 神秘之影双头杖 等级要求：200
		1212120, //- 神秘之影双头杖 等级要求：200
		1222113, //- 神秘之影灵魂手铳 等级要求：200
		1232113, //- 神秘之影亡命剑 等级要求：200
		1242121, //- 神秘之影能量剑 等级要求：200
		1242122, //- 神秘之影能量剑 等级要求：200
		1252098, //- 神秘之影魔法槌 等级要求：200
		1262039, //- 神秘之影ESP限制器 等级要求：200
		1302343, //- 神秘之影单手剑 等级要求：200
		1312203, //- 神秘之影斧 等级要求：200
		1322255, //- 神秘之影锤 等级要求：200
		1332279, //- 神秘之影匕首 等级要求：200
		1342104, //- 神秘之影刃 等级要求：200
		1362140, //- 神秘之影手杖 等级要求：200
		1372228, //- 神秘之影短杖 等级要求：200
		1382265, //- 神秘之影长杖 等级要求：200
		1402259, //- 神秘之影双手剑 等级要求：200
		1412181, //- 神秘之影双手战斧 等级要求：200
		1422189, //- 神秘之影双手锤 等级要求：200
		1432218, //- 神秘之影长枪 等级要求：200
		1442274, //- 神秘之影矛 等级要求：200
		1452257, //- 神秘之影弓 等级要求：200
		1462243, //- 神秘之影弩 等级要求：200
		1472265, //- 神秘之影拳套 等级要求：200
		1482221, //- 神秘之影指节 等级要求：200
		1492235, //- 神秘之影短枪 等级要求：200
		1522143, //- 神秘之影双弩枪 等级要求：200
		1532150, //- 神秘之影攻城炮 等级要求：200
		1542117, //- 神秘之影武士刀 等级要求：200
		1552119, //-  神秘之影折扇  等级要求：200
		1582023, //- 神秘之影机甲枪 等级要求：200
		1272017, //- 神秘之影锁链 等级要求：200
		1282017  //- 神秘之影魔力手套 等级要求：200
		);

let boxId = 2433445;//箱子ID
let addAp = 300;//增加的属性

let text = "#b消耗#v"+boxId+"#,可選擇你要的全屬性+200武器:\r\n#n"
for (var i = 0; i < itemList.length; i++) {
			text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
		}
let selected = npc.askMenu(text);

text = "您是否確定獲取#v"+itemList[selected]+"";
let YN = npc.askYesNo(text);
if(YN == 1){
	if(player.canGainItem(itemList[selected],1)){
		if(player.hasItem(boxId,1)){
		var itemid = itemList[selected];
		var toDrop = player.makeItemWithId(itemid); // 帽子   
			toDrop.setStr(toDrop.getStr() + addAp); //装备力量
			toDrop.setDex(toDrop.getDex() + addAp); //装备敏捷
			toDrop.setInt(toDrop.getInt() + addAp); //装备智力
			toDrop.setLuk(toDrop.getLuk() + addAp); //装备运气
			toDrop.setMad(toDrop.getMad() + addAp);
			toDrop.setPad(toDrop.getPad() + addAp);
			player.gainItem(toDrop);
			player.loseItem(boxId,1);
			npc.broadcastPlayerNotice(15,"『神秘武器箱』 : 恭喜 " + player.getName() + " 領取了全屬性+200的自選神秘武器.");
			npc.say("兌換成功");
		}else{
			npc.say("你沒有#v"+boxId+"#");
		}
	}else{
		npc.say("請清理背包！");
	}
}else{
	npc.say("不想兌換嗎？下次再見。");
}