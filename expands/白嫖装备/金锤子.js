
//这里面放可以使用得装备代码
var equips = [1003976,1102623,1082556,1072870,1132244,1032221,1122265,1012478,1022277];

var itemId = 4310060; //所需材料ID
var itemNum = 60; //所需材料数量

var maxNum = 2;//最多额外使用几次

var str = "增加强化次数\r\n"
str += "\r\n#d请将您想要强化的装备放到第一格\r\n";


var toDrop = player.getInventorySlot(1, 1);
if(toDrop == null){
	npc.say(str+"\r\n第一格没有装备");
}else if(equips.indexOf(toDrop.getDataId()) == -1){
	npc.say("不是白嫖装备不可用")
}else{
	str += "是否为#v"+toDrop.getDataId()+"#增加强化次数？"
	var YN = npc.askYesNo(str);
	if(YN == 1){
		
			
		if(player.hasItem(itemId,itemNum)){
			
			
			let num = toDrop.getIUC();
				
			if((maxNum-num) > 0){
				player.loseItem(itemId,itemNum);
				//成功
				toDrop.setRUC(toDrop.getRUC()+1);
				toDrop.setIUC(toDrop.getIUC()+1);
				player.updateItem(1, toDrop);
				npc.say("成功！");
			}else{
				npc.say("该装备无法再提升了")
			}
	
		}else{
			npc.say("材料不足")
		}
	}
}