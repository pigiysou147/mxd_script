/**
* 箱子选择道具 CC 835456564 
**/

//送的物品
let items = Array(
	1072737,1,
	1072738,1,
	1072739,1,
	1072740,1,
	1072741,1,
	1102476,1,
	1102477,1,
	1102478,1,
	1102479,1,
	1102480,1,
	1132169,1,
	1132170,1,
	1132171,1,
	1132173,1,
	1132172,1
);
let boxId = 2435715;//箱子ID


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