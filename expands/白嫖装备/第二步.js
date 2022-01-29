//所需材料
let needItems = Array(
	Array(4310060,55)
);

//可以使用的装备列表
let equips = Array(
	1003976,
	1102623,
	1082556,
	1072870,
	1113073,
	1132244,
	1032221,
	1122265,
	1012478,
	1022277,
	1162025,
	1152170,
);

//潜能列表
let postion = new Array(
	//每个数组放6个潜能ID 依次是1-6条潜能
	Array(60074,60074,60074,60074,60074,60074),
	Array(60076,60076,60076,60076,60076,60076),
	Array(60078,60078,60078,60078,60078,60078),
	Array(60071,60071,60071,60071,60071,60071)
)
//潜能列表中文名
let postionName = new Array(
	//这里写对应介绍
	"力量属性+6%，力量属性+6%，力量属性+6%，力量属性+6%，力量属性+6%，力量属性+6%",
	"敏捷属性+6%，敏捷属性+6%，敏捷属性+6%，敏捷属性+6%，敏捷属性+6%，敏捷属性+6%",
	"智力属性+6%，智力属性+6%，智力属性+6%，智力属性+6%，智力属性+6%，智力属性+6%",
	"运气属性+6%，运气属性+6%，运气属性+6%，运气属性+6%，运气属性+6%，运气属性+6%"
)

let selStr = "";
selStr += "#e#r\t\t\t 白嫖装备潜能系统\r\n#n";
selStr += "#b系统说明：请将需要使用潜能的 #v1003976##v1052669##v1082556##v1072870##v1113074##v1132245##v1122266##v1032222##v1012478##v1022277##v1162025##v1152170##v1122150##v1113282#放到装备栏第1格，只要提供充足的材料，我将为您的装备注入6条潜能！\r\n#b所需材料：#k";

for(let i = 0;i<needItems.length;i++){
	selStr += "#v"+needItems[i][0]+"# x "+needItems[i][1] +"   "	
}



//获取第一格装备
let toDrop = player.getInventorySlot(1, 1);
//判断第一格装备是否存在
if(toDrop == null){
	npc.say(selStr+"\r\n#r检测到您的装备栏第一格没有装备，无法使用，请确认！",9010061);
}else if(toDrop.getGrade() != 20){
	npc.say("需要开启潜能后才能使用，请先完成第一步")
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
		let ss = "\r\n可以使用的装备如下\r\n"
		for(var i=0;i<equips.length;i++){
			ss +="#v"+equips[i]+"#,";
		}
		npc.say(selStr+"\r\n#r您的装备无法使用该功能",9010061);
	}else{
	//检测材料
		PD = 0; //判断材料是否足够
		for(let j = 0; j < needItems.length;j++){
			if(!player.hasItem(needItems[j][0],needItems[j][1])){
				PD++;
			}
		}
		if(PD == 0){
			
				
			selStr = "请选择将为#v"+toDrop.getDataId()+"#的潜能\r\n";
			for(let i=0;i<postionName.length;i++){
				selStr += "#r\r\n#L"+i+"#"+postionName[i]+"#l "
			}
			var sel = npc.askMenu(selStr);
			
			selStr = "你将为#v"+toDrop.getDataId()+"#附加\r\n"+postionName[sel];
			selStr += "\r\n#b此操作将消耗您:\r\n";
			for(let i = 0;i<needItems.length;i++){
				selStr += "#v"+needItems[i][0]+"# x "+needItems[i][1] +","
			}
						
			YN = npc.askYesNo(selStr);
			
			if(YN == 1){
				PD = 0; //判断材料是否足够
				for(let j = 0; j < needItems.length;j++){
					if(!player.hasItem(needItems[j][0],needItems[j][1])){
						PD++;
					}
				}
				if(PD != 0){
					npc.say("材料不足")
				}else{
					for(let j = 0; j < needItems.length;j++){
						player.loseItem(needItems[j][0], needItems[j][1]);
					}
					
					toDrop.setOption(1, postion[sel][0], false);
					toDrop.setOption(2, postion[sel][1], false);
					toDrop.setOption(3, postion[sel][2], false);
					toDrop.setOption(1, postion[sel][3], true);
					toDrop.setOption(2, postion[sel][4], true);
					toDrop.setOption(3, postion[sel][5], true);
					
					player.updateItem(1, toDrop);
					
					npc.say("附加成功");
				}
			}
			
			
		}else{
			npc.say(selStr+"\r\n\r\n#r#e检测到您背包材料不足，无法使用，请确认！");
		}
	}
}