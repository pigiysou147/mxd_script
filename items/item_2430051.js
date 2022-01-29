/**
* 箱子抽取道具 CC 835456564 
**/

//抽的物品
let items = Array(
1302355,
1402268,
1312213,
1412189,
1322264,
1422197,
1432227,
1442285,
1232122,
1382274,
1372237,
1452266,
1462252,

1332289,
1472275,
1492245,
1482232,
1532157,
1362149,
1272040,
1552130,
1542128,
1252106,
1212129,
1522152,
1242139,
1262051,
1282040,
1222122,
1582044//创世武
);

let boxId = 2430051 ;//箱子ID


let ss = "#b消耗#v"+boxId+"#,可抽取道具"
ss += "\r\n是否使用？";
let YN = npc.askYesNo(ss);
if(YN == 1){
		if(player.hasItem(boxId,1)){
			
			let ran = Math.floor(Math.random() * items.length);
			if(player.canGainItem(items[ran],1)){
				player.gainItem(items[ran],1);
				player.loseItem(boxId,1);
				npc.say("抽取成功");
			}else{
				npc.say("请清理背包");
			}
		}else{
			npc.say("你没有#v"+boxId+"#");
		}
}else{
	npc.say("不想使用吗？下次再见。");
}