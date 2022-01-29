/**
* 箱子選擇道具 QQ:739977676
**/

//送的物品
let itemList = Array(
		3064452, // -星岩 (道具掉率20%)
		3064431, // -星岩 (首领怪伤害35%)
		3064341, // -星岩 (异常状态抗性10%)
		3064331, // -星岩 (属性抗性10%)
		3064311, // -星岩 (全属性 +6%)
		3064291, // -星岩 (所有伤害总伤害 : +8%)
		3064261, // -星岩 (爆击率 +10%)
		3064231, // -星岩 (魔法力 +6%)
		3064221, // -星岩 (攻击力 +6%)
		3064211, // -星岩 (回避值 +6%)
		3064171, // -星岩 (幸运 +6%)
		3064161, // -星岩 (智力 +6%)
		3064141, // -星岩 (力量 +6%)
		3064151, // -星岩 (敏捷 +6%)
		3064350 // -星岩 (无视防御21%)
		);

let boxId = 2435718;//箱子ID


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