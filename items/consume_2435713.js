/**
* 箱子選擇道具 QQ:739977676
**/

//送的物品
let itemList = Array(
		1004425, //埃苏莱布斯飞侠帽	
		1004426, //埃苏莱布斯海盗帽	
		1004423, //埃苏莱布斯法师帽	
		1004424, //埃苏莱布斯弓箭手帽	
		1004422, //埃苏莱布斯骑士头盔	
		
		1052890, //埃苏莱布斯海盗套装	
		1052888, //埃苏莱布斯弓箭手套装	
		1052889, //埃苏莱布斯飞侠套装	
		1052887, //埃苏莱布斯魔法师套装	
		1052882, //埃苏莱布斯骑士套装
		
		1073030, //埃苏莱布斯骑士鞋	
		1073032, //埃苏莱布斯法师鞋	
		1073033, //埃苏莱布斯弓箭手鞋	
		1073034, //埃苏莱布斯飞侠鞋	
		1073035, //埃苏莱布斯海盗鞋		
		
		1082638, //埃苏莱布斯弓箭手手套	
		1082639, //埃苏莱布斯飞侠手套	
		1082636, //埃苏莱布斯骑士手套	
		1082637, //埃苏莱布斯法师手套	
		1082640, //埃苏莱布斯海盗手套	
		
		1102796, //埃苏莱布斯飞侠披风	
		1102797, //埃苏莱布斯海盗披风	
		1102794, //埃苏莱布斯魔法师披风	
		1102795, //埃苏莱布斯弓箭手披风	
		1102775, //埃苏莱布斯骑士披风
		
		
		1152174, //埃苏莱布斯骑士护肩	
		1152176, //埃苏莱布斯法师护肩	
		1152178, //埃苏莱布斯飞侠护肩	
		1152177, //埃苏莱布斯弓箭手护肩	
		1152179  //埃苏莱布斯海盗护肩
		);

let boxId = 2435713;//箱子ID


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
			npc.broadcastPlayerNotice(5,"『航海防具自選箱』 : 恭喜 " + player.getName() + " 領取了160级航海防具.");
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