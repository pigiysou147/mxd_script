/**
* 箱子选择道具 几里 315342975 
**/

//送的物品
let items = Array(
    Array(1232122,1),
	Array(1402268,1),
	Array(1372237,1),
	Array(1252106,1),
	Array(1422197,1),
	Array(1242141,1),
	Array(1312213,1),
	Array(1322264,1),
	Array(1212129,1),
	Array(1362149,1),
	Array(1522152,1),
	Array(1482232,1),
	Array(1442285,1),
	Array(1532157,1),
	Array(1282040,1),
	Array(1302355,1),
	Array(1242139,1),
	Array(1402268,1),
	Array(1552130,1),
	Array(1272040,1),
	Array(1452266,1),
	Array(1582044,1),
	Array(1432227,1),
	Array(1302355,1),
	Array(1382274,1),
	Array(1222122,1),
	Array(1462252,1),
	Array(1472275,1),
	Array(1332289,1),
	Array(1412189,1),
	Array(1542128,1),
	Array(1262051,1)
);

let boxId = 2431994;//箱子ID


let ss = "#b消耗#v"+boxId+"#,可选择获得道具:\r\n#n"
for(let i = 0 ; i < items.length;i++){
	ss += "#L"+i +"##r#v"+items[i][0]+"# x "+items[i][1]+"   #e#z"+items[i][0]+"# #l\r\n"
}

let selected = npc.askMenu(ss,9063154);

ss = "您是否确定获取#v"+items[selected][0]+"# x "+items[selected][1];
let YN = npc.askYesNo(ss,9063154);
if(YN == 1){
	if(player.canGainItem(items[selected][0],items[selected][1])){
		if(player.hasItem(boxId,1)){
			player.gainItem(items[selected][0],items[selected][1]);
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