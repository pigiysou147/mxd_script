
// //这里面放可以使用得装备代码
// var equips = [1102623,1082556,1072870,1113073,1132244,1122265,1012478,1022277,1152170];
let equips = [
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
];
var itemId = 4310060; //所需材料ID
var itemNum = 45; //所需材料数量

var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n亲爱的#r#h ##k您好!这里是一键SS潜能店(只有白嫖装备可以用):\r\n";
selStr += "#L0#使用"+itemNum+"个#v"+itemId+"#将第一格装备潜能变为SS#l\r\n"
var selected = npc.askMenu(selStr);

//获取第一格装备
let toDrop = player.getInventorySlot(1, 1);
//判断第一格装备是否存在
if(toDrop == null){
	npc.say(selStr+"\r\n#r您的第一格没有装备，无法使用",9010061);
}else{
	
	var toDropDataId = toDrop.getDataId();
	if(equips.indexOf(toDropDataId) == -1){
		npc.say("不是白嫖装备不可用")
	}else{
		if(selected == 0){
			if(player.hasItem(itemId,itemNum)){
				player.loseItem(itemId,itemNum);
				toDrop.setGrade(20)
				player.updateItem(1, toDrop);
				
				npc.say("潜能成功！可以进行第二步了！");
		
			}else{
				npc.say("材料不足")
			}
		}
	}
}