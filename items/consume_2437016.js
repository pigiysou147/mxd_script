/**
* 箱子选择道具 CC 835456564 
**/

//送的物品
let items = Array(
1272029,
1282029,
1212080,
1222075,
1232075,
1242081,
1262030,
1302290,
1312166,
1322216,
1332239,
1342086,
1362102,
1372189,
1382223,
1402211,
1412148,
1422153,
1432179,
1442235,
1452217,
1462205,
1472227,
1482180,
1492191,
1522106,
1532110,
1252066,
1542068,
1552068,
1582026    
);

let boxId = 2437016;//箱子ID


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