var ItemList = Array(
	1213022,
	1262051,
	1232122,
	1302355,
	1212129,
	1522152,
	1402268,
	1412189,
	1422197,
	1452266,
	1462252,
	1552130,
	1362149,
	1492245,
	1482232,
	1532157,
	1472275,
	1312213,
	1582044,
	1252106,
	1432227,
	1542128,
	1222122,
	1332289,
	1372237,
	1572010,
	1103190,
	1242139,
	1242141,
	1592022,
	1272040,
	1322264,
	1442285,
	1382274,
	1282040
);

var str="#r#e\t\t\t#v3700533#创世强化中心#v3700533#\r\n";
str += "#fs12#我是远征讨伐队总指挥官白帝，如果你收集到了#z4036457##v4036457#我可以帮你利用它强化这个世界上最强的系列装备。#b\r\n";
str += "#L1##r#v1572010#强化创世武器#k#l ";
str += "#L2##r#v1032316#强化创世首饰#k#l \r\n";
str += "#L3##r#s80002633# 学习创世技能#k#l";
str += "#L4##r#v1592022#创世系列归一 #k#l \r\n";

let selection =npc.askMenu(str);

if(selection == 1) {
	player.runScript("cswq");

}else if(selection==2){
	player.runScript("csss");

}else if(selection==3){
	var item =player.getInventorySlot(-1,-11);
	if(item==null){
		npc.say("请穿武器");
	}else{
		var flag=0;
		for(var i=0;i<ItemList.length;i++){
			if(item.getDataId()==ItemList[i]){
				flag=1;
			}
		}
		if(flag==0){
			npc.say("你身上没穿戴创世武器，不可以学习创世技能");
		}else{
			
		var txt="#r#e\t\t\t#s80002632#创世技能#s80002633#\r\n";
			txt += "我是远征讨伐队总指挥官白帝，如果你收集到了#z4036457##v4036457#X5 你可以解放创世武器的剑灵，学习强大的技能。#b\r\n";
			txt += "#L80002633##r学习#s80002633#破坏之黑暗剑灵#k#l\r\n";
			txt += "#L80002632##r学习#s80002632#光明之创造剑灵#k#l";
			let skill=npc.askMenu(txt);
			if(player.getPQLog("创世技能"+skill)>0){
				player.setSkillLevel(skill,1,1,false);
				npc.say("学习成功");
			}else{
				if(player.hasItem(4036457,5)){
					player.loseItem(4036457,5);
					player.addPQLog("创世技能"+skill,1,999);
					player.setSkillLevel(skill,1,1,false);
					npc.say("学习成功");
				}else{
					npc.say("你需要5个#v4036457#");
				}
			}
			
			
		}
	}

}else if(selection==4){
	var str = "#r#e\t\t\t#v1262051#创世归一#v1262051#\r\n";
	str+="伟大的勇士. 感谢您为冒险世界做出的巨大贡献.如果您携带了击倒黑暗之神的创世系列装备.\r\n";
	str+="请允许我帮您净化归一.让黑暗气息从装备上消失.不再困扰您.请您准备好其他精灵的珍贵物品.\r\n";
	str+="以此净化这个世界上最强大的装备.我愿以我全部力量为您绽放光芒!\r\n";
	str += "#L1##r#v1562010#创世武器归一#k#l ";
	str += "#L2##r#v1182285#创世首饰归一#k#l \r\n";
	

	let sel =npc.askMenu(str);
	if(sel==1){
		
		player.runScript("创世合成");
	}else{
		player.runScript("创世首饰合成");
	}
}

