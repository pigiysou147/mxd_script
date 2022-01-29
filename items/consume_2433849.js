/**
* X捲自選 QQ:739977676
**/

//送的物品
let itemList = Array(
2615032,
2615031,
2616062,
2616061,
2612062,
2612061,
2613051,
2613050,
2048818,
2048817
		);

let boxId = 2433849;//箱子ID


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