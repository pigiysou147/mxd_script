/**
* 蜡笔系统 CC 835456564 
**/

//所需材料
let needItems = Array(
	Array(4034848,15)
);

//可以使用的装备列表
let equips = Array(
1182285,
1182158
);

//潜能列表
var potList = Array(
    Array(60001, "总伤害:+12%", 1),
    Array(40055, "暴击率:+12%", 1),
	Array(40056, "暴击伤害：+8%", 1),
    Array(40292, "无视怪物40%的防御率", 1),
    Array(42051, "攻击力：+12%", 1),
    Array(40052, "魔法攻击：+12%", 1),
    Array(40603, "攻击BOSS时伤害：+40%", 1)
	);
		
let number = 1;//第几条潜能 1-6
		
let selStr = "自选潜能\r\n";
selStr += "说明：请将需要使用随机潜能的装备放到第一格,并且从第一条潜能开始使用\r\n所需材料:";
for(let i = 0;i<needItems.length;i++){
	selStr += "#v"+needItems[i][0]+"# x "+needItems[i][1] +","
}
selStr += "\r\n可以使用的装备如下\r\n"
for(var i=0;i<equips.length;i++){
	selStr +="#v"+equips[i]+"#,";
}
//获取第一格装备
let toDrop = player.getInventorySlot(1, 1);
//判断第一格装备是否存在
if(toDrop == null){
	npc.say(selStr+"\r\n#r您的第一格没有装备，无法使用");
}else{
	//判断装备是否是可用装备
	let toDropID = toDrop.getDataId();
	var PD = 0;
	for (var i = 0; i < equips.length; i++) {
		if (toDropID == equips[i]) {
			PD++;
			break;
		}
	}
	if (PD == 0) {
		npc.say(selStr+"\r\n#r您的装备无法使用该功能");
	}else{
	//检测材料
		PD = 0; //判断材料是否足够
		for(let j = 0; j < needItems.length;j++){
			if(!player.hasItem(needItems[j][0],needItems[j][1])){
				PD++;
			}
		}
		if(PD == 0){
			selStr = "\r\n您的第一格装备为:#v"+toDrop.getDataId()+"#,是否为它使用一键潜能？"
			let YN = npc.askYesNo(selStr);
			if(YN == 1){
				let selected = npc.askMenu("#L1#第1条潜能#l\r\n#L2#第2条潜能#l\r\n#L3#第3条潜能#l\r\n#L4#第4条潜能#l\r\n#L5#第5条潜能#l\r\n#L6#第6条潜能#l\r\n");
				
				selStr = "选择为#v"+toDrop.getDataId()+"#的第#r"+selected+"#k条潜能所附加的属性:\r\n";
				for(let i=0;i<potList.length;i++){
					selStr += "#r\r\n#L"+i+"#"+potList[i][1]+"#l "
				}
				let selectedPot = npc.askMenu(selStr);
				
				selStr = "你将为#v"+toDrop.getDataId()+"#的第#r"+selected+"#k条潜能附加属性:#r"+potList[selectedPot][1];
				selStr += "\r\n#b此操作将消耗您:\r\n";
				for(let i = 0;i<needItems.length;i++){
					selStr += "#v"+needItems[i][0]+"# x "+needItems[i][1] +","
				}
							
				YN = npc.askYesNo(selStr);
				
				if(YN == 1){
					for(let j = 0; j < needItems.length;j++){
						player.loseItem(needItems[j][0], needItems[j][1]);
					}
					
					toDrop.setGrade(20)
					if(selected<4){
						toDrop.setOption(selected, potList[selectedPot][0], false);
					}else{
						toDrop.setOption(selected-3, potList[selectedPot][0], true);
					}
					player.updateItem(1, toDrop);
					
					npc.say("附加成功");
				}
				
				
			}
		}else{
			npc.say("材料不足，无法使用");
		}
	}
}