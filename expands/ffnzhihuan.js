

var weaponList = Array(
	1214016,
	1482168,
	1232117,
	1472269,
	1212124,
	1302275,
	1462247,
	1382269,
	1552063,
	1403036,//法弗纳拳炮
	1212063,
	1532098,
	1302347,
	1522094,
	1252100,
	1372177,
	1332225,
	1422192,
	1432167,
	1412184,
	1272015,
	1342082,
	1542063,
	1372232,
	1332283,
	1422140,
	1492239,
	1582016,
	1412135,
	1252015,
	1213039,
	1213016,
	1213040,
	1482225,
	1462193,
	1242127,
	1222117,
	1232057,
	1402196,
	1342107,
	1242060,
	1262043,
	1532152,
	1312153,
	1442280,
	1452205,
	1312207,
	1242061,
	1362090,
	1322203,
	1582033,
	1522147,
	1542120,
	1262016,
	1362144,
	1282015,
	1552122,
	1432222,
	1472214,
	1322259,
	1442223,
	1382208,
	1452261,
	1402263,
	1492179,
	1222058,
	1042257,
	1042255,
	1042258,
	1042254,
	1042256,
	1062168,
	1062167,
	1062169,
	1062165,
	1062166,
	1003799,
	1003801,
	1003798,
	1003797,
	1003800
);




var txt="如果你有不想要的FFN武器，你可以来我这里换一个自选箱子。\r\n";
txt+="#r把你不想要的FFN武器放在装备栏第一个格子，就可以给你回收换一个自选箱子哦";
npc.sayNext(txt);
var item =player.getInventorySlot(1,1);
if(item==null){
	npc.say("请把武器放在第一个格子里面");
}else{
	var flag=0;
	
	for(var i=0;i<weaponList.length;i++){
		if(weaponList[i]==item.getDataId()){
			flag=1;
		}
	}
	if(flag==1){
		let sel = npc.askYesNo("确定要使用#v"+item.getDataId()+"#来兑换FFN箱子吗？" );
		if(sel==1){
			if(player.canGainItem(2434007,1)){
				player.loseInvSlot(1,1);
				player.gainItem(2434007,1);
				npc.say("兑换成功");
			}else{
				npc.say("请清理包裹~");
			}
			
		}
	}else{
		npc.say("该物品不符合兑换资格。");
	}
}






