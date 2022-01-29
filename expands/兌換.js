/**
* 箱子選擇道具 QQ:739977676
**/

//送的物品
let itemList = Array(
		5000870, //精靈王歐碧拉
		5000871, //精靈女王泰坦尼亞
		5000872  //精靈小匹克
		);

let itemId = 4034836;//箱子ID


let text = "#b消耗#v"+itemId+"#,可選擇獲得道具:\r\n#n"
for (var i = 0; i < itemList.length; i++) {
			text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
		}
let selected = npc.askMenu(text);

text = "您是否確定獲取#v"+itemList[selected]+"";
let YN = npc.askYesNo(text);
if(YN == 1){
	if(player.canGainItem(itemList[selected],1)){
		if(player.hasItem(itemId,1)){
		var itemid = itemList[selected];
			player.gainItem(itemid,1);
			player.loseItem(itemId,1);
			npc.say("兌換成功");
		}else{
			npc.say("你沒有#v"+itemId+"#");
		}
	}else{
		npc.say("請清理背包！");
	}
}else{
	npc.say("不想兌換嗎？下次再見。");
}