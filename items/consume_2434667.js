/**
* 箱子抽取道具 QQ:739977676
**/

//抽的物品
let items = Array(
		3994611,
		3994612,
		3994613,
		3994614,
		3994615,
		3994617
);

let boxId = 2434667;//箱子ID


let ss = "#b消耗#v"+boxId+"#,可抽取隨機蠟筆"
ss += "\r\n是否使用？";
let YN = npc.askYesNo(ss);
if(YN == 1){
		if(player.hasItem(boxId,1)){
			
			let ran = Math.floor(Math.random() * items.length);
			if(player.canGainItem(items[ran],1)){
				player.gainItem(items[ran],1);
				player.loseItem(boxId,1);
				npc.broadcastPlayerNotice(1,"『蠟筆隨機箱』 : 恭喜 " + player.getName() + " 抽取了某種顏色的蠟筆.");
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