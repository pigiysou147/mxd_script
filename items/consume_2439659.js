/**
* 箱子抽取道具 CC 835456564 
**/

//抽的物品
let items = Array(
	Array(1212120,1),
	Array(1222113,1),
	Array(1232113,1),
	Array(1242121,1),
	Array(1242122,1),
	Array(1262039,1),
	Array(1302343,1),
	Array(1312203,1),
	Array(1322255,1),
	Array(1332279,1),
	Array(1342104,1),
	Array(1362140,1),
	Array(1372228,1),
	Array(1382265,1),
	Array(1402259,1),
	Array(1412181,1),
	Array(1422189,1),
	Array(1432218,1),
	Array(1442274,1),
	Array(1452257,1),
	Array(1462243,1),
	Array(1472265,1),
	Array(1482221,1),
	Array(1492235,1),
	Array(1522143,1),
	Array(1532150,1),
	Array(1582023,1),
	Array(1542117,1),
	Array(1552119,1),
	Array(1252098,1),
	Array(1282017,1),
	Array(1272017,1)
);

let boxId = 2439659;//箱子ID


let ss = "#b消耗#v"+boxId+"#,可抽取道具"
ss += "\r\n是否使用？";
let YN = npc.askYesNo(ss);
if(YN == 1){
		if(player.hasItem(boxId,1)){
			
			let ran = Math.floor(Math.random() * items.length);
			if(player.canGainItem(items[ran][0],items[ran][1])){
				player.gainItem(items[ran][0],items[ran][1]);
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