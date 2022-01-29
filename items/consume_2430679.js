/**
* V捲自選
**/

//送的物品
let itemList = Array(
		2048823,
		2048824,
		2612078,
		2612079,
		2613066,
		2613067,
		2615049,
		2615050,
		2616214,
		2616215
		);

let boxId = 2430679;//箱子ID


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