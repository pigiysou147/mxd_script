/**
* 箱子選擇道具 QQ:739977676
**/

//送的物品
let itemList = Array(
		1592019, //埃苏莱布斯大斧
		1412177, //埃苏莱布斯大斧
		1312199, //埃苏莱布斯战斧
		1302333, //埃苏莱布斯军刀
		1542108, //埃苏莱布斯武士刀
		1442268, //埃苏莱布斯巨灵开山斧
		1322250, //埃苏莱布斯战锤
		1422184, //埃苏莱布斯大锤
		1432214, //埃苏莱布斯穿透矛
		1232109, //埃苏莱布斯亡命剑
		1402251, //埃苏莱布斯宽大刀
		1582017, //埃苏莱布斯雷神
		1262017, //埃苏莱布斯ESP限制器
		1212115, //埃苏莱布斯双头杖
		1552110, //埃苏莱布斯扇子
		1252093, //埃苏莱布斯魔法棒
		1382259, //埃苏莱布斯长杖
		1372222, //埃苏莱布斯短杖
		1522138, //埃苏莱布斯双弩枪
		1452252, //埃苏莱布斯弓
		1462239, //埃苏莱布斯弩
		1242116, //埃苏莱布斯能量剑
		1242120, //埃苏莱布斯能量剑
		1362135, //埃苏莱布斯折叠手杖
		1472261, //埃苏莱布斯复仇斗拳
		1332274, //埃苏莱布斯屠龙斩
		1342101, //埃苏莱布斯之刃
		1482216, //埃苏莱布斯拳甲
		1492231, //埃苏莱布斯枪
		1222109, //埃苏莱布斯灵魂手铳
		1532144, //埃苏莱布斯大炮
		1272016, //埃苏莱布斯锁链
		1282016//埃苏莱布斯魔力手套
		);

let boxId = 2437535;//箱子ID
let addAp = 100;//增加的属性

let text = "#b消耗#v"+boxId+"#,可選擇你要的全屬性+100武器:\r\n#n"
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
			npc.broadcastPlayerNotice(15,"『航海武器箱』 : 恭喜 " + player.getName() + " 領取了全屬性+100的自選航海武器.");
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