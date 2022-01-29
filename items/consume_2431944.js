/**
* 箱子选择道具 QQ:739977676
**/

//送的物品
let itemList = Array(
		1592015,
		1212014,
		1222014,
		1232014,
		1242014,
		1242042,
		1252014,
		1302152,
		1312065,
		1322096,
		1332130,
		1342036,
		1362019,
		1372084,
		1382104,
		1402095,
		1412065,
		1422066,
		1432086,
		1442116,
		1452111,
		1462099,
		1472122,
		1482084,
		1492085,
		1522018,
		1532018,
		1542015,
		1552015,
		1262015,
		1272014,
		1282014,
		1582015
		);

let boxId = 2431944;//箱子ID


let text = "#b消耗#v"+boxId+"#,可选择获得道具:\r\n#n"
for (var i = 0; i < itemList.length; i++) {
			text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
		}
let selected = npc.askMenu(text);

text = "您是否确定获取#v"+itemList[selected]+"";
let YN = npc.askYesNo(text);
if(YN == 1){
	if(player.canGainItem(itemList[selected],1)){
		if(player.hasItem(boxId,1)){
		var itemid = itemList[selected];
			player.gainItem(itemid,1);
			player.loseItem(boxId,1);
			npc.say("兑换成功");
		}else{
			npc.say("你没有#v"+boxId+"#");
		}
	}else{
		npc.say("请清理背包！");
	}
}else{
	npc.say("不想兑换吗？下次再见。");
}