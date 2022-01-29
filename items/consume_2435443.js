/**
* 箱子选择道具 CC 835456564 
**/

//送的物品
let items = Array( 
2613066,
2613067,
2612078,
2612079,
2616214,
2616215,
2615049,
2615050,
2048823,
2048824
	);
	
	let boxId = 2435443;//箱子ID
	
	
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