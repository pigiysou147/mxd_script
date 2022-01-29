/**
* 箱子选择道具 CC 835456564 
**/

//送的物品
let items = Array(
 1152174, 
 1152176, 
 1152177, 
 1152178, 
 1152179, 
 1004422, 
 1004423, 
 1004424, 
 1004425, 
 1004426, 
 1102775, 
 1102794, 
 1102795, 
 1102796, 
 1102797, 
 1082636, 
 1082637, 
 1082638, 
 1082639, 
 1082640, 
 1052882, 
 1052887, 
 1052888, 
 1052889, 
 1052890, 
 1073030, 
 1073032, 
 1073033, 
 1073034, 
 1073035
);

let boxId = 2437537;//箱子ID


let ss = "#b消耗#v"+boxId+"#,可选择获得道具:\r\n#n"
for(let i = 0 ; i < items.length;i++){
	ss += "#L"+i +"##r #v"+items[i]+"# #z"+items[i]+"# x 1 #l\r\n"
}

let selected = npc.askMenu(ss);

ss = "您是否确定获取#v"+items[selected]+"# x 1";
let YN = npc.askYesNo(ss);
if(YN == 1){
	if(player.canGainItem(items[selected],1)){
		if(player.hasItem(boxId,1)){
			player.gainItem(items[selected],1);
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