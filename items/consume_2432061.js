/**
* 箱子选择道具 CC 835456564 
**/

//送的物品
let items = Array( 
1102471,
1102472,
1102473,
1102474,
1102475,
1132164,
1132165,
1132166,
1132167,
1132168,
1072732,
1072733,
1072734,
1072735,
1072736 
);

let boxId = 2432061;//箱子ID


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