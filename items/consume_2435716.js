/**
* 箱子抽取道具 CC 835456564 
**/

//抽的物品
let items = Array(
	Array(1132174,1),
	Array(1132175,1),
	Array(1132176,1),
	Array(1132177,1),
	Array(1132178,1),
	Array(1102481,1),
	Array(1102482,1),
	Array(1102483,1),
	Array(1102484,1),
	Array(1102485,1),
	Array(1082543,1),
	Array(1082544,1),
	Array(1082545,1),
	Array(1082546,1),
	Array(1082547,1),
	Array(1072743,1),
	Array(1072744,1),
	Array(1072745,1),
	Array(1072746,1),
	Array(1072747,1)
);

let boxId = 2435716;//箱子ID


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