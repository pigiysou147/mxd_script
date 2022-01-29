/**
* 箱子選擇道具 QQ:739977676
**/

//送的物品
let itemList = Array(
		1352975,
		1352206,
		1352216,
		1352226,
		1352935,
		1099012,
		1099011,
		1353405,
		1352506,
		1352807,
		1352256,
		1352236,
		1352246,
		1352945,
		1352406,
		1352957,
		1552084,
		1352815,
		1353205,
		1353505,
		1352266,
		1352276,
		1352009,
		1352967,
		1352296,
		1352286,
		1342095,
		1352109,
		1353006,
		1353306,
		1352906,
		1352916,
		1352928,
		1353105,
		1352707,
		1352606,
		1353707,
		1353606
		);

let boxId = 2433028;//箱子ID


let text = "#b消耗#v"+boxId+"#,可選擇獲得道具:\r\n#n"
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
			player.gainItem(itemid,1);
			player.loseItem(boxId,1);
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